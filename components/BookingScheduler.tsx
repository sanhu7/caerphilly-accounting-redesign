"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c79529]";

function nextWeekdays(count: number): string[] {
  const out: string[] = [];
  const d = new Date();
  while (out.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      out.push(
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
      );
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

function label(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short",
  });
}

export default function BookingScheduler() {
  const days = useMemo(() => nextWeekdays(10), []);
  const [date, setDate] = useState(days[0]);
  const [slots, setSlots] = useState<string[] | null>(null);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");
  const [busy, setBusy] = useState(false);
  const [joinUrl, setJoinUrl] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/booking/slots?date=${date}`)
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        if (d.error) setError(d.error);
        setSlots(d.slots ?? []);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Could not load availability.");
          setSlots([]);
        }
      });
    return () => { cancelled = true; };
  }, [date]);

  function pickDate(d: string) {
    setDate(d);
    setSlots(null);
    setTime("");
    setError("");
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, time, name: f.get("name"), email: f.get("email") }),
      });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error);
      setJoinUrl(d.joinUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Booking failed.");
    } finally {
      setBusy(false);
    }
  }

  if (joinUrl) {
    return (
      <div role="status" className="mt-3 rounded-2xl border border-gray-300 bg-white p-6">
        <p className="font-semibold text-[var(--ink)]">
          Booked: {label(date)} at {time} (UK time)
        </p>
        <p className="mt-2 text-sm text-gray-600">A Zoom invite is on its way to your email.</p>
        <a href={joinUrl} target="_blank" rel="noopener noreferrer"
          className={`mt-4 inline-block text-[#188795] underline underline-offset-4 ${focus}`}>
          Zoom link<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-2xl border border-gray-300 bg-white p-6">
      <p className="text-sm text-gray-600">30 minute Zoom call. Times shown in UK time.</p>

      <div role="group" aria-label="Choose a day" className="mt-4 flex flex-wrap gap-2">
        {days.map((d) => (
          <button key={d} type="button" aria-pressed={d === date} onClick={() => pickDate(d)}
            className={`rounded border px-3 py-2 text-sm ${focus} ${
              d === date ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-gray-300 text-[var(--ink)]"
            }`}>
            {label(d)}
          </button>
        ))}
      </div>

      <div role="group" aria-label="Choose a time" className="mt-4 flex flex-wrap gap-2">
        {slots === null && <p className="text-sm text-gray-600">Loading times...</p>}
        {slots?.length === 0 && !error && (
          <p className="text-sm text-gray-600">No times left on this day. Try another.</p>
        )}
        {slots?.map((t) => (
          <button key={t} type="button" aria-pressed={t === time} onClick={() => setTime(t)}
            className={`rounded border px-3 py-2 text-sm ${focus} ${
              t === time ? "border-[#188795] bg-[var(--accent-soft)] font-semibold text-[var(--ink)]" : "border-gray-300 text-[var(--ink)]"
            }`}>
            {t}
          </button>
        ))}
      </div>

      {time && (
        <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="book-name" className="block font-semibold text-[var(--ink)]">Name</label>
            <input id="book-name" name="name" required autoComplete="name"
              className={`mt-2 w-full rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] ${focus}`} />
          </div>
          <div>
            <label htmlFor="book-email" className="block font-semibold text-[var(--ink)]">Email</label>
            <input id="book-email" name="email" type="email" required autoComplete="email"
              className={`mt-2 w-full rounded-xl border border-gray-300 bg-[var(--paper)] px-4 py-3 text-[var(--ink)] ${focus}`} />
          </div>
          <button type="submit" disabled={busy}
            className={`rounded bg-[var(--ink)] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white disabled:opacity-60 sm:col-span-2 sm:justify-self-start ${focus}`}>
            {busy ? "Booking..." : `Book ${label(date)} at ${time}`}
          </button>
        </form>
      )}

      <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>
    </div>
  );
}
