import { NextResponse } from "next/server";
import { BRAND } from "@/lib/config";

async function sendEmail(subject, html) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY missing; skipping real send");
    return { ok: false, reason: "missing-key" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `La Nutri Tía <${BRAND.email}>`,
      to: [BRAND.email],
      subject,
      html,
    }),
  });

  const data = await response.json();
  return { ok: response.ok, data };
}

export async function POST(req) {
  const { name, email, phone, message, honeypot } = await req.json();
  if (honeypot) return NextResponse.json({ ok: false }, { status: 400 });

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: "Faltan campos obligatorios" }, { status: 400 });
  }

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>WhatsApp:</strong> ${phone || "N/A"}</p>
    <p><strong>Mensaje:</strong><br/>${message}</p>
  `;

  const sent = await sendEmail("Nuevo contacto - La Nutri Tía", html);

  if (!sent.ok) {
    return NextResponse.json({ ok: false, message: "No se pudo enviar ahora. Intenta más tarde." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
