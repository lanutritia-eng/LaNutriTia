import { NextResponse } from "next/server";
import { BRAND } from "@/lib/config";

async function sendLead(email, topic) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY missing; skipping lead send");
    return { ok: false, reason: "missing-key" };
  }

  const html = `
    <h2>Nuevo lead magnet</h2>
    <p>Email: ${email}</p>
    <p>Tema: ${topic}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `La Nutri Tía <${BRAND.email}>`,
      to: [BRAND.email],
      subject: `Lead magnet - ${topic}`,
      html,
    }),
  });

  return { ok: response.ok };
}

export async function POST(req) {
  const { email, topic, honeypot } = await req.json();
  if (honeypot) return NextResponse.json({ ok: false }, { status: 400 });

  if (!email || !topic) {
    return NextResponse.json({ ok: false, message: "Faltan datos" }, { status: 400 });
  }

  const sent = await sendLead(email, topic);
  if (!sent.ok) {
    return NextResponse.json({ ok: false, message: "No se pudo guardar ahora" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
