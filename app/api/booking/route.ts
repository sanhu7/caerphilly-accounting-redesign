import { NextResponse } from "next/server";
import { freeSlots, SLOT_MINUTES } from "@/lib/booking";
import { createMeeting } from "@/lib/zoom";

export async function POST(request: Request) {
  let body: { date?: string; time?: string; name?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const date = body.date ?? "";
  const time = body.time ?? "";
  const name = (body.name ?? "").trim().slice(0, 100);
  const email = (body.email ?? "").trim().slice(0, 200);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a name and a valid email." }, { status: 400 });
  }
  try {
    // Re-check at booking time so two people cannot take the same slot.
    if (!(await freeSlots(date)).includes(time)) {
      return NextResponse.json(
        { error: "Sorry, that time was just taken. Please pick another." },
        { status: 409 }
      );
    }
    const meeting = await createMeeting({
      topic: `Caerphilly Accounting call with ${name}`,
      agenda: `Booked via website. Contact: ${name} <${email}>`,
      localStart: `${date}T${time}:00`,
      duration: SLOT_MINUTES,
      inviteeEmail: email,
    });
    return NextResponse.json({ joinUrl: meeting.join_url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Booking failed. Please call us instead." }, { status: 502 });
  }
}
