import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(payload: ContactPayload) {
  const name = asCleanString(payload.name);
  const email = asCleanString(payload.email);
  const company = asCleanString(payload.company);
  const message = asCleanString(payload.message);

  if (!name || name.length < 2 || name.length > 120) {
    return { error: "Please provide a valid name.", name, email, company, message };
  }

  if (!EMAIL_REGEX.test(email) || email.length > 200) {
    return { error: "Please provide a valid email address.", name, email, company, message };
  }

  if (company.length > 160) {
    return { error: "Company name is too long.", name, email, company, message };
  }

  if (!message || message.length < 10 || message.length > 4000) {
    return { error: "Message must be between 10 and 4000 characters.", name, email, company, message };
  }

  return { error: "", name, email, company, message };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (asCleanString(payload.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const validated = validate(payload);
  if (validated.error) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error: "Email service is not configured. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to env."
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const safeName = escapeHtml(validated.name);
    const safeEmail = escapeHtml(validated.email);
    const safeCompany = escapeHtml(validated.company || "N/A");
    const safeMessage = escapeHtml(validated.message).replace(/\n/g, "<br/>");

    const emailResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: validated.email,
      subject: `Portfolio Contact: ${validated.name}`,
      text: [
        `Name: ${validated.name}`,
        `Email: ${validated.email}`,
        `Company: ${validated.company || "N/A"}`,
        "",
        "Message:",
        validated.message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;">
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    });

    if (emailResult.error) {
      return NextResponse.json({ error: "Email provider returned an error." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
