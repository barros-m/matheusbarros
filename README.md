# Matheus Barros Portfolio

Clean, modern portfolio site built with Next.js + Tailwind CSS, including an API route to send contact-form emails.

## Stack

- Next.js (App Router + TypeScript)
- Tailwind CSS
- Resend (email API)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Configure env vars in `.env` (or create `.env.local`):

```bash
RESEND_API_KEY="re_your_key"
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
CONTACT_TO_EMAIL="your-email@example.com"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

3. Run development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Contact API

- Endpoint: `POST /api/contact`
- Payload:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "company": "Company (optional)",
  "message": "Message text",
  "website": ""
}
```

`website` is a hidden honeypot field for spam protection.
