// POST /api/contact
// Accepts { name, contact, message }
// If SENDGRID_API_KEY is set, send an email to CONTACT_EMAIL. Otherwise, log.

import sendgrid from '@sendgrid/mail';

const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'you@example.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@lemon-lime.app';

if (SENDGRID_KEY) {
  sendgrid.setApiKey(SENDGRID_KEY);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, contact, message } = req.body || {};

  if (!name || !contact || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const text = `New Lemon Lime contact:
Name: ${name}
Contact: ${contact}
Message:
${message}
`;

  try {
    if (SENDGRID_KEY) {
      await sendgrid.send({
        to: CONTACT_EMAIL,
        from: FROM_EMAIL,
        subject: `New Lemon Lime message from ${name}`,
        text,
      });
      return res.status(200).json({ ok: true, sent: true });
    } else {
      // fallback: log to Vercel server logs and return ok
      console.log('Contact form (no SENDGRID):', { name, contact, message });
      return res.status(200).json({ ok: true, sent: false });
    }
  } catch (err) {
    console.error('Contact send error:', err);
    return res.status(500).json({ error: 'send_failed' });
  }
}
