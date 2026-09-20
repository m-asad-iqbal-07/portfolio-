import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  honeypot?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Please enter a name, email, and message." }, { status: 400 });
  }

  const { name, email, projectType, budget, message, honeypot } = body;
  if (
    typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
    (projectType !== undefined && typeof projectType !== "string") ||
    (budget !== undefined && typeof budget !== "string") ||
    (honeypot !== undefined && typeof honeypot !== "string") ||
    name.length > 120 || email.length > 254 || message.length > 5000 ||
    (projectType?.length ?? 0) > 120 || (budget?.length ?? 0) > 80
  ) {
    return NextResponse.json({ ok: false, error: "Please check the contact details and try again." }, { status: 400 });
  }

  // Honeypot tripped → silently accept so bots don't learn anything.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set; email cannot be sent.");
    return NextResponse.json(
      { ok: false, error: `The form is unavailable right now. Please email me at ${siteConfig.email}.` },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [siteConfig.email],
      replyTo: email.trim(),
      subject: `New inquiry: ${projectType ?? "General"} — ${name.trim()}`,
      text: [
        `From: ${name} <${email}>`,
        `Project: ${projectType ?? "—"}`,
        `Budget: ${budget ?? "—"}`,
        "",
        message,
      ].join("\n"),
    });
    if (sendError) throw sendError;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { ok: false, error: `Could not send your message. Please email me at ${siteConfig.email}.` },
      { status: 502 },
    );
  }
}

