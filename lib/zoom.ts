// Zoom Server-to-Server OAuth client. Server only: never import from client components.

type Token = { value: string; expiresAt: number };
let cached: Token | null = null;

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable ${name}`);
  return v;
}

async function getToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.value;
  const basic = Buffer.from(
    `${env("ZOOM_CLIENT_ID")}:${env("ZOOM_CLIENT_SECRET")}`
  ).toString("base64");
  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(
      env("ZOOM_ACCOUNT_ID")
    )}`,
    { method: "POST", headers: { Authorization: `Basic ${basic}` }, cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Zoom auth failed (${res.status})`);
  const data = await res.json();
  cached = { value: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return cached.value;
}

async function zoom<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await getToken();
  const res = await fetch(`https://api.zoom.us/v2${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Zoom API ${path} failed (${res.status})`);
  return (await res.json()) as T;
}

export type ZoomMeeting = { start_time: string; duration: number };

export async function listUpcomingMeetings(): Promise<ZoomMeeting[]> {
  const host = env("ZOOM_HOST_EMAIL");
  const data = await zoom<{ meetings?: ZoomMeeting[] }>(
    `/users/${encodeURIComponent(host)}/meetings?type=upcoming&page_size=300`
  );
  return data.meetings ?? [];
}

export async function createMeeting(opts: {
  topic: string;
  agenda: string;
  localStart: string; // yyyy-MM-ddTHH:mm:ss in Europe/London
  duration: number;
  inviteeEmail: string;
}): Promise<{ join_url: string; id: number }> {
  const host = env("ZOOM_HOST_EMAIL");
  return zoom(`/users/${encodeURIComponent(host)}/meetings`, {
    method: "POST",
    body: JSON.stringify({
      topic: opts.topic,
      type: 2,
      start_time: opts.localStart,
      timezone: "Europe/London",
      duration: opts.duration,
      agenda: opts.agenda,
      settings: {
        waiting_room: true,
        meeting_invitees: [{ email: opts.inviteeEmail }],
      },
    }),
  });
}
