// POST /api/subscribe → adds a subscriber to MailerLite, tags them with the page they signed up from,
// and assigns them to the "Vesserath Readers" group. A MailerLite automation watches that group join
// and sends the welcome email with the PDF link.
//
// Required Netlify env vars:
//   MAILERLITE_API_KEY     — long-lived token from MailerLite → Integrations → Developer API
//   MAILERLITE_GROUP_ID    — numeric ID of the "Vesserath Readers" group

import type { Context } from "@netlify/functions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribeBody = {
  email?: unknown;
  source?: unknown;
};

function badRequest(message: string): Response {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status: 400,
    headers: { "content-type": "application/json" },
  });
}

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json", allow: "POST" },
    });
  }

  let payload: SubscribeBody;
  try {
    payload = (await req.json()) as SubscribeBody;
  } catch {
    return badRequest("Invalid JSON body");
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return badRequest("Please enter a valid email address.");
  }

  const source = typeof payload.source === "string" ? payload.source.slice(0, 64) : "unknown";

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  if (!apiKey || !groupId) {
    console.error("MailerLite env vars are not set");
    return new Response(
      JSON.stringify({ ok: false, error: "Subscription is temporarily unavailable." }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }

  const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      fields: { source },
      groups: [groupId],
    }),
  });

  if (!mlRes.ok) {
    const detail = await mlRes.text();
    console.error("MailerLite API error", mlRes.status, detail);
    return new Response(
      JSON.stringify({ ok: false, error: "We couldn't add you just now. Please try again." }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

export const config = { path: "/api/subscribe" };
