import { SITE_URL } from "../lib/site";

/* HTML emails for the contact form. Email clients ignore <style> and modern
   CSS, so layout is tables + inline styles, light theme only. Colours are the
   design-system hex values (globals.css) because CSS variables don't work in
   email. Every visitor-supplied value goes through esc(). */

type Inquiry = { name: string; email: string; phone: string; company: string; message: string };

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const FONT = "Helvetica,Arial,sans-serif";
const P = "margin:0 0 16px;color:#3c3752;";

/* Layout matches the original Vrattiks auto-reply: solid purple header with
   the wordmark, a light purple rule under it, white card, small footer. */
function layout(preheader: string, body: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f3fe;">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3fe;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #ddd7f1;border-radius:12px;overflow:hidden;font-family:${FONT};color:#16161d;">
<tr><td style="background:#6942f1;padding:24px 32px;">
<img src="${SITE_URL}/brand/vrattiks-logo-white.png" alt="Vrattiks" width="118" height="36" style="display:block;width:118px;height:36px;border:0;font-size:20px;font-weight:bold;color:#ffffff;">
</td></tr>
<tr><td style="height:4px;background:#b79af3;font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.7;">${body}</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid #ddd7f1;font-size:12px;color:#766e93;">
Built by <a href="${SITE_URL}" style="color:#766e93;text-decoration:none;">Vrattiks</a>
</td></tr>
</table></td></tr></table></body></html>`;
}

const label = (text: string) =>
  `<p style="margin:24px 0 10px;font-size:12px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#766e93;">${text}</p>`;

const quote = (text: string) =>
  `<div style="background:#f5f3fe;border-left:3px solid #6942f1;border-radius:4px;padding:14px 18px;margin-bottom:24px;white-space:pre-wrap;color:#16161d;">${esc(text)}</div>`;

const row = (label: string, value: string) =>
  `<tr><td style="padding:8px 0;width:110px;color:#766e93;font-size:13px;vertical-align:top;">${label}</td><td style="padding:8px 0;font-size:15px;">${value}</td></tr>`;

/* To the Vrattiks inbox. */
export function ownerEmail(v: Inquiry) {
  const subject = `New website inquiry from ${v.name}${v.company ? ` (${v.company})` : ""}`;
  const text = [`Name: ${v.name}`, `Email: ${v.email}`, `Phone: ${v.phone}`, `Company: ${v.company || "Not provided"}`, "", v.message].join("\n");
  const html = layout(
    `${esc(v.name)} sent an inquiry from the website.`,
    `<h1 style="margin:0 0 4px;font-size:22px;">New website inquiry</h1>
<p style="margin:0 0 24px;color:#766e93;">Reply to this email to answer ${esc(v.name)} directly.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ddd7f1;border-bottom:1px solid #ddd7f1;margin-bottom:24px;">
${row("Name", esc(v.name))}
${row("Email", `<a href="mailto:${esc(v.email)}" style="color:#6942f1;">${esc(v.email)}</a>`)}
${row("Phone", `<a href="tel:${esc(v.phone.replace(/[^\d+]/g, ""))}" style="color:#6942f1;">${esc(v.phone)}</a>`)}
${row("Company", v.company ? esc(v.company) : `<span style="color:#766e93;">Not provided</span>`)}
</table>
${label("Message")}
${quote(v.message)}`,
  );
  return { subject, text, html };
}

/* Auto-reply to the visitor. */
export function confirmationEmail(v: Inquiry) {
  const first = v.name.split(/\s+/)[0];
  const subject = "Thank you for reaching out to Vrattiks";
  const text = [
    `Hi ${first},`,
    "",
    "Thanks for getting in touch. We have your message and someone from our team will get back to you soon.",
    "",
    "If you think of anything else, just reply to this email.",
    "",
    "What you sent us:",
    v.message,
    "",
    "The Vrattiks team",
  ].join("\n");
  const html = layout(
    "We have your message and will get back to you soon.",
    `<h1 style="margin:0 0 20px;font-size:22px;">Thank you for reaching out</h1>
<p style="${P}">Hi ${esc(first)},</p>
<p style="${P}">Thanks for getting in touch. We have your message and someone from our team will get back to you soon.</p>
<p style="${P}">If you think of anything else, just reply to this email.</p>
${label("What you sent us")}
${quote(v.message)}
<p style="margin:0;color:#3c3752;">The Vrattiks team</p>`,
  );
  return { subject, text, html };
}
