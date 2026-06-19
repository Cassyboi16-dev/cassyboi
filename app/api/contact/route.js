import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

// 1. Check environments once on server startup instead of on every click
const requiredEnvVars = [
  "GMAIL_CLIENT_ID",
  "GMAIL_CLIENT_SECRET",
  "GMAIL_REDIRECT_URI",
  "GMAIL_REFRESH_TOKEN",
  "GMAIL_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
if (missingEnvVars.length > 0) {
  console.warn(`[Warning] Missing Gmail environment variables: ${missingEnvVars.join(", ")}`);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function encodeBase64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_");
}

function encodeHeader(value) {
  return `=?UTF-8?B?${Buffer.from(value).toString("base64")}?=`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;"); // Fixed bug
}

function createEmailHtml({ name, email, message }) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px;background-color:#f8f3e8;color:#1c1917;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:28px;background-color:#ffffff;border:1px solid #e7e5e4;border-radius:12px;">
      <p style="margin:0 0 6px;color:#047857;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">New portfolio message</p>
      <h1 style="margin:0 0 24px;color:#451a03;font-size:28px;line-height:1.25;">Someone reached out from your contact page.</h1>

      <p style="margin:0 0 6px;color:#047857;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Name</p>
      <p style="margin:0 0 20px;color:#292524;font-size:16px;line-height:1.6;">${escapeHtml(name)}</p>

      <p style="margin:0 0 6px;color:#047857;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Email</p>
      <p style="margin:0 0 20px;color:#292524;font-size:16px;line-height:1.6;">${escapeHtml(email)}</p>

      <p style="margin:0 0 6px;color:#047857;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Message</p>
      <p style="margin:0 0 20px;color:#292524;font-size:16px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  </body>
</html>`;
}

function createRawEmail({ from, to, replyTo, subject, html }) {
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
  ];

  return encodeBase64Url(`${headers.join("\r\n")}\r\n\r\n${html}`);
}

export async function POST(request) {
  // 2. Safe JSON parsing fallback
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ error: "Invalid request format." }, { status: 400 });
  }

  const { name = "", email = "", message = "" } = body;
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: "Please fill out every field." }, { status: 400 });
  }

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // 3. Fail fast if environment configurations are missing
  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  try {
    // 4. Initialize credentials securely
    const auth = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      process.env.GMAIL_REDIRECT_URI
    );
    auth.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

    const gmail = google.gmail({ version: "v1", auth });

    const html = createEmailHtml({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    const raw = createRawEmail({
      from: process.env.GMAIL_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: trimmedEmail,
      subject: `Portfolio message from ${trimmedName}`,
      html,
    });

    const { data } = await gmail?.users?.messages?.send({
      userId: "me",
      requestBody: { raw },
    });

    return NextResponse.json({ id: data?.id });
  } catch (error) {
    console.error("Gmail send failed:", error?.message);
    if (error?.errors) {
      console.error("API errors:", JSON.stringify(error?.errors, null, 2));
    }
    console.error("Full error:", error);
    return NextResponse.json(
      { error: "Gmail could not send your message right now." },
      { status: 502 }
    );
  }
}
