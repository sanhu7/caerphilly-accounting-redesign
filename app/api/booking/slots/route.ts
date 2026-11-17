import { NextResponse } from "next/server";
import { freeSlots } from "@/lib/booking";

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  try {
    return NextResponse.json({ slots: await freeSlots(date) });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not load availability." }, { status: 502 });
  }
}
