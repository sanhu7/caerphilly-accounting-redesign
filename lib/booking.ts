import { listUpcomingMeetings } from "@/lib/zoom";

export const TZ = "Europe/London";
export const SLOT_MINUTES = 30;
export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 17;
export const MIN_NOTICE_MS = 2 * 60 * 60 * 1000;
export const MAX_DAYS_AHEAD = 30;

function tzOffsetMs(utcMs: number): number {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ, hourCycle: "h23",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }).formatToParts(new Date(utcMs)).map((x) => [x.type, x.value])
  );
  const asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
  return asUtc - Math.floor(utcMs / 1000) * 1000;
}

/** Convert a London wall-clock time to a UTC timestamp. */
export function londonToUtc(date: string, hh: number, mm: number): number {
  const [y, m, d] = date.split("-").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  let t = guess - tzOffsetMs(guess);
  t = guess - tzOffsetMs(t);
  return t;
}

export function isValidDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

function isWeekday(date: string): boolean {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay();
  return day >= 1 && day <= 5;
}

export function allTimes(): string[] {
  const out: string[] = [];
  for (let m = OPEN_HOUR * 60; m + SLOT_MINUTES <= CLOSE_HOUR * 60; m += SLOT_MINUTES) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return out;
}

/** Returns the times on `date` that are still free. */
export async function freeSlots(date: string): Promise<string[]> {
  if (!isValidDate(date) || !isWeekday(date)) return [];
  const now = Date.now();
  if (londonToUtc(date, 0, 0) > now + MAX_DAYS_AHEAD * 86_400_000) return [];

  const busy = (await listUpcomingMeetings()).map((m) => {
    const s = Date.parse(m.start_time);
    return [s, s + m.duration * 60_000] as const;
  });

  return allTimes().filter((t) => {
    const [hh, mm] = t.split(":").map(Number);
    const start = londonToUtc(date, hh, mm);
    const end = start + SLOT_MINUTES * 60_000;
    if (start < now + MIN_NOTICE_MS) return false;
    return !busy.some(([bs, be]) => start < be && end > bs);
  });
}
