"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  Apple,
  Calendar,
  Check,
  ChefHat,
  Flame,
  HeartPulse,
  Info,
  Mail,
  MessageCircle,
  MessagesSquare,
  Phone,
  PlayCircle,
  Salad,
  ShieldCheck,
  Sparkles,
  Star,
  Syringe,
  Target,
  ThumbsUp,
  Wand2,
} from "lucide-react";
import { BRAND } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const SetmoreEmbed = dynamic(() => import("@/components/SetmoreEmbed"), {
  ssr: false,
  loading: () => <div className="placeholder-skeleton h-[320px] w-full" />,
});

const sections = [
  { id: "reset-2026", label: "RESET 2026" },
  { id: "hero", label: "Inicio" },
  { id: "reseñas", label: "Reseñas" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "servicios", label: "Servicios" },
  { id: "planes", label: "Planes" },
  { id: "agenda", label: "Agenda" },
  { id: "contacto", label: "Contacto" },
];

function trackEvent(name, payload = {}) {
  if (typeof window === "undefined") return;
  window?.gtag?.("event", name, payload);
  window?.plausible?.(name, { props: payload });
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function ResetBanner({ onCTA }) {
  const bullets = [
    "Consulta personalizada (online o presencial)",
    "Menú 5 tiempos con esferas por color y equivalentes SMAE",
    "Recetario fácil, económico y rico",
    "Checklist imprimible de hábitos 2026",
    "Broadcast privado de WhatsApp por 30 días",
  ];

  return (
    <section
      id="reset-2026"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff8ec] via-[#f3ebd2] to-[#e7f3e7] border-b border-[#e1d6b8]"
    >
      <div className="absolute inset-x-0 top-0 h-9 bg-[#d7882f] text-white text-center text-[11px] md:text-xs tracking-[0.18em] font-semibold uppercase flex items-center justify-center shadow-sm">
        PROMO ESPECIAL DE INICIO DE AÑO · CUPOS LIMITADOS
      </div>
      <div className="absolute -left-32 top-10 h-48 w-48 bg-[#f2c27b]/40 blur-3xl rounded-full" />
      <div className="absolute -right-24 bottom-10 h-56 w-56 bg-[#a3c78f]/30 blur-3xl rounded-full" />
      <div className="container pt-16 md:pt-20 pb-12 md:pb-16 min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center w-full">
          <div className="order-2 lg:order-1 space-y-6 text-ink">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1 text-xs text-brand shadow-sm">
              <Sparkles className="h-4 w-4" /> Año nuevo, energía amable
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[var(--font-heading)]">
                RESET 2026 – Empieza el año sin regaños
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted))] max-w-2xl">
                Consulta 1:1 + plan de alimentación 30 días + recetario “Enero sin castigos” + checklist de hábitos + acompañamiento
                1 mes por WhatsApp.
              </p>
            </div>
            <ul className="space-y-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                  <Check className="h-5 w-5 text-brand mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[hsl(var(--muted))] font-semibold">
              Nutrición holística, inclusiva y sin culpas para cuerpos reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                className="w-full sm:w-auto text-base"
                onClick={() => onCTA("Agendar RESET 2026")}
              >
                <a href={BRAND.hero.cta.href}>Agendar consulta</a>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="w-full sm:w-auto text-base"
                onClick={() => trackEvent("cta_whatsapp", { place: "reset-2026" })}
              >
                <a href={BRAND.whatsapp} className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" /> Escríbeme por WhatsApp
                </a>
              </Button>
            </div>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted))]">
              +2,000 pacientes acompañados · Nutrición sin regaños
            </p>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -right-3 -top-6 rounded-2xl bg-brand text-white px-4 py-3 shadow-2xl text-center w-[170px] rotate-2">
              <div className="text-3xl font-black leading-none">649 MXN</div>
              <div className="text-xs uppercase tracking-[0.16em] mt-1 opacity-90">precio individual</div>
            </div>
            <div className="rounded-3xl bg-white/85 border border-[#d6cbb0] shadow-xl p-5 md:p-7 space-y-4">
              <figure className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#d6cbb0] shadow-inner bg-gradient-to-br from-[#f4e9d2] via-[#efd9ae] to-[#d6e7c3]">
                <Image
                  src="/reset-2026-placeholder.png"
                  alt="Formato en SVG para colocar la foto del servicio RESET 2026"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="inline-flex flex-col items-center gap-2 rounded-xl bg-white/85 px-4 py-3 text-sm text-ink shadow-sm">
                    <span className="text-xs font-semibold tracking-wide text-brand">Espacio para foto de La NutriTía o del servicio</span>
                    <span className="text-[11px] text-[hsl(var(--muted))]">Reemplaza “reset-2026-placeholder.svg” (o súbelo como PNG) en la carpeta public.</span>
                  </div>
                </div>
                <figcaption className="sr-only">
                  Reemplaza el archivo public/reset-2026-placeholder.svg con tu foto o servicio; si prefieres PNG, usa el mismo nombre.
                </figcaption>
              </figure>
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#f4e9d2] via-[#efd9ae] to-[#d6e7c3] border border-[#d6cbb0] flex items-center justify-center text-center text-sm md:text-base text-[hsl(var(--muted))] font-semibold">
                Espacio para foto de La NutriTía o del servicio
              </div>
              <div className="text-center space-y-1">
                <p className="text-base font-semibold text-ink">Paquete DÚO: 2 personas por 1,099 MXN</p>
                <p className="text-xs text-[hsl(var(--muted))]">Válido pagando antes del 31 de diciembre</p>
              </div>
              <div className="rounded-2xl bg-soft border border-dashed border-[#d6cbb0] p-3 text-center text-sm text-ink">
                <p className="font-semibold">Agenda hoy y asegura tu lugar</p>
                <p className="text-[hsl(var(--muted))] text-xs mt-1">Promo ideal para arrancar 2026 con acompañamiento cercano.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPrimary({ onCTA }) {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1 text-xs text-brand">
          <ShieldCheck className="h-4 w-4" /> Nutrición holística y sin culpas
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" id="contenido">
            {BRAND.hero.headline}
          </h1>
          <p className="text-lg text-[hsl(var(--muted))] max-w-2xl">{BRAND.hero.subtitle}</p>
        </div>
        <ul className="space-y-3">
          {BRAND.hero.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink">
              <Check className="h-5 w-5 text-brand mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Button asChild onClick={() => onCTA("Agendar hero")}> <a href={BRAND.hero.cta.href}>{BRAND.hero.cta.label}</a> </Button>
          <Button variant="secondary" asChild onClick={() => trackEvent("cta_whatsapp", { place: "hero" })}>
            <a href={BRAND.whatsapp} className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </Button>
          <Button variant="ghost" asChild onClick={() => trackEvent("cta_scroll", { target: "servicios" })}>
            <a href="#servicios" className="flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Ver cómo trabajo</a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[hsl(var(--muted))]">
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand" /> 4.9 ⭐️ reseñas verificadas</div>
          <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-brand" /> +2,000 pacientes acompañados</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Inclusivo con pacientes trans</div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-10 -right-10 h-32 w-32 bg-[#c9c2a2]/60 blur-3xl rounded-full" />
        <div className="relative rounded-3xl bg-white shadow-2xl border p-6 space-y-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#f4e9d2] via-[#c9c2a2] to-[#8f8c60] p-6 text-ink">
            <p className="text-sm uppercase tracking-widest">Sobre mí</p>
            <h3 className="text-2xl font-bold mt-1">Marco · La Nutri Tía</h3>
            <p className="text-sm text-[hsl(var(--muted))] mt-2">
              Nutriólogo clínico, divulgador y acompañante respetuoso. Trabajo con pacientes trans, salud hormonal, pérdida de grasa y bienestar sin dietas punitivas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Resultados sostenibles con métricas claras", "Recetas accesibles y de la milpa", "Ajustes semanales", "Educación sin culpas"].map((item) => (
              <div key={item} className="rounded-2xl border p-3 flex items-start gap-3 text-sm text-ink">
                <Sparkles className="h-4 w-4 text-brand mt-0.5" /> {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-[hsl(var(--muted))]">
            <a
              href={BRAND.whatsapp}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#f4e9d2] text-ink"
              onClick={() => trackEvent("cta_whatsapp", { place: "hero-card" })}
            >
              <MessagesSquare className="h-4 w-4" /> Enviarme mensaje
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border text-ink"
            >
              <Mail className="h-4 w-4" /> Escríbeme por correo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroAlternate({ onCTA }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-[#1f140f] to-[#f4e9d2] text-white">
      <div className="grid lg:grid-cols-2">
        <div className="p-10 lg:p-14 bg-[#1f140f] text-surface">
          <p className="text-brand uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Método sin culpas
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight font-[var(--font-heading)]">Come rico. Sana. Disfruta.</h1>
          <p className="mt-4 text-lg text-[#f5eddc] max-w-xl">
            Planes clínicos con recetas ricas, menús anti-culpa y acompañamiento cercano. Ideal para pérdida de grasa, salud hormonal y pacientes trans.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild onClick={() => onCTA("Agendar hero alterno")}> <a href={BRAND.hero.cta.href}>Agendar ahora</a> </Button>
            <Button variant="ghost" asChild onClick={() => trackEvent("cta_scroll", { target: "reseñas" })}>
              <a href="#reseñas" className="flex items-center gap-2"><PlayCircle className="h-4 w-4" /> Ver reseñas</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-[#f5eddc]">
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-[#facc15]" /> 4.9 ⭐️</div>
            <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4" /> +2,000 pacientes</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Inclusivo</div>
          </div>
        </div>
        <div className="p-10 lg:p-14 bg-[#f4e9d2] text-ink relative">
          <div className="absolute right-8 top-8 text-6xl text-[#c6b78f] font-[var(--font-heading)]">Nourish</div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/80"><Wand2 className="h-6 w-6 text-brand" /></div>
              <div>
                <p className="font-semibold">Serif + ilustración lineal</p>
                <p className="text-sm text-[hsl(var(--muted))]">Estilo editorial, cálido y profesional.</p>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-4 grid sm:grid-cols-2 gap-3">
              {["Pacientes trans", "PCOS/tiroides", "Pérdida de grasa", "Recomp/hipertrofia"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-brand" /> {tag}</div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed p-4 bg-white/60">
              <p className="text-sm font-semibold">Agenda sin fricción</p>
              <p className="text-sm text-[hsl(var(--muted))]">Calendario en vivo con Setmore y recordatorios automáticos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reviews({ onCTA }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [loaded]);

  const fallbackCards = [
    { name: "Mariana", text: "Llevo 3 meses y ya bajé 6kg sin sentir culpa. Las recetas están buenísimas." },
    { name: "Luis", text: "Ajusta el menú cada semana y me explica todo. Se siente acompañamiento real." },
    { name: "Fer", text: "Por fin alguien que entiende a pacientes trans y mi terapia hormonal." },
  ];

  return (
    <section id="reseñas" className="container py-16 md:py-20">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-brand uppercase tracking-[0.3em] text-xs">Reseñas</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink">Lo que dicen mis pacientes</h2>
          <p className="text-[hsl(var(--muted))] mt-2">Opiniones verificadas en Setmore.</p>
        </div>
        <Button asChild onClick={() => onCTA("Agendar reseñas")}>
          <a href={BRAND.setmore}>Agendar ahora</a>
        </Button>
      </div>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
        <div className="card h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2"><Star className="h-5 w-5 text-brand" /> Reseñas en vivo</CardTitle>
          </CardHeader>
          <CardContent>
            {!failed ? (
              <div className="rounded-2xl border bg-white shadow-sm overflow-hidden h-[520px]">
                <iframe
                  title="Reseñas de Setmore"
                  src={BRAND.setmoreReviews}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={() => setLoaded(true)}
                  onError={() => setFailed(true)}
                />
              </div>
            ) : (
              <div className="grid gap-3">
                {fallbackCards.map((card) => (
                  <div key={card.name} className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-ink">“{card.text}”</p>
                    <p className="mt-1 text-xs text-[hsl(var(--muted))]">{card.name}</p>
                  </div>
                ))}
                <a className="text-sm text-brand underline" href={BRAND.setmoreReviews} target="_blank" rel="noreferrer">
                  Ver reseñas en Setmore
                </a>
              </div>
            )}
          </CardContent>
        </div>

        <div className="card bg-soft border-none h-full">
          <CardHeader>
            <CardTitle className="text-lg">¿Por qué funciona?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            {["Seguimiento semanal para evitar estancarte", "Planes realistas con ingredientes de la milpa", "Educación sin culpas y microhábitos", "Herramientas para ansiedad y atracones"].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-brand mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full" onClick={() => onCTA("Agendar reseñas panel")}> <a href={BRAND.setmore}>Agenda una cita</a> </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </section>
  );
}

function Comparison({ onCTA }) {
  const tiers = useMemo(() => BRAND.plans.memberships, []);
  return (
    <section id="planes" className="container py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="text-brand uppercase tracking-[0.3em] text-xs">Consultas y membresías</p>
        <h2 className="text-3xl md:text-5xl font-bold text-ink">Elige tu nivel de acompañamiento</h2>
        <p className="text-[hsl(var(--muted))] mt-3">Todos los planes llevan al flujo correcto (Patreon o Setmore).</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-[hsl(var(--muted))]">
              <th className="py-3"></th>
              {tiers.map((tier) => (
                <th key={tier.name} className="py-3 px-4 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${tier.name === "Pro" ? "bg-brand text-white" : "bg-white border"}`}>
                    {tier.name === "Pro" && <Badge className="bg-white/20 text-white">Recomendada</Badge>}
                    <span className="font-semibold">{tier.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e6dcc3]">
            <tr>
              <td className="py-4 font-semibold">Precio mensual</td>
              {tiers.map((tier) => (
                <td key={tier.name} className="py-4 px-4 text-center text-lg font-bold">${tier.price} MXN</td>
              ))}
            </tr>
            {tiers[0]?.features.map((_, idx) => (
              <tr key={idx}>
                <td className="py-3 text-[hsl(var(--muted))]">Beneficio {idx + 1}</td>
                {tiers.map((tier) => (
                  <td key={tier.name} className="py-3 px-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand" />
                      <span>{tier.features[idx]}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td>
              {tiers.map((tier) => (
                <td key={tier.name} className="py-4 px-4 text-center">
                  <Button
                    variant={tier.name === "Pro" ? "primary" : "secondary"}
                    className="w-full"
                    asChild
                    onClick={() => onCTA(`Unirme ${tier.name}`, { target: tier.type })}
                  >
                    <a href={tier.ctaHref || BRAND.setmore}>Unirme</a>
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HowItWorks({ onCTA }) {
  const steps = [
    { title: "Agenda", desc: "Reserva en Setmore y comparte tu meta principal.", icon: Calendar },
    { title: "Diagnóstico", desc: "Evaluamos hábitos, labs y preferencias para diseñar tu plan.", icon: HeartPulse },
    { title: "Acompañamiento", desc: "Revisiones semanales y ajustes sin culpas.", icon: Flame },
  ];
  return (
    <section id="como-funciona" className="container py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="text-brand uppercase tracking-[0.3em] text-xs">Cómo funciona</p>
        <h2 className="text-3xl md:text-5xl font-bold text-ink">Tu camino en 3 pasos</h2>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9c2a2] to-transparent" />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="card relative">
              <CardHeader className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#f4e9d2]"><step.icon className="h-6 w-6 text-brand" /></div>
                <CardTitle className="text-xl">{idx + 1}. {step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[hsl(var(--muted))]">{step.desc}</CardContent>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Button onClick={() => onCTA("Agendar como funciona")}>Agendar ahora</Button>
      </div>
    </section>
  );
}

function ForWhom() {
  const chips = [
    { label: "Pérdida de grasa", href: "#servicios" },
    { label: "Recomposición", href: "#servicios" },
    { label: "Salud hormonal", href: "#servicios" },
    { label: "Pacientes trans", href: "#servicios" },
    { label: "PCOS/tiroides", href: "#servicios" },
    { label: "Ayuno/antinflamatoria", href: "#servicios" },
  ];
  return (
    <section id="para-quien" className="container py-16 md:py-20">
      <div className="card bg-soft">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl">¿Para quién es?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className="px-4 py-2 rounded-full border bg-white text-sm hover:border-brand"
              >
                {chip.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild><a href={BRAND.hero.cta.href}>Agendar</a></Button>
            <Button variant="secondary" asChild><a href="#servicios">Ver servicios</a></Button>
          </div>
        </CardContent>
      </div>
    </section>
  );
}

function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Guía gratis: café sin culpa");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(e.currentTarget);
    const honeypot = form.get("hp");
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, topic, honeypot }),
    });
    if (!res.ok) {
      setStatus("error");
      setError("No se pudo guardar. Intenta más tarde.");
      return;
    }
    setStatus("success");
    trackEvent("lead_magnet_submitted", { topic });
  }

  return (
    <section className="container py-16 md:py-20">
      <div className="card bg-gradient-to-r from-[#f4e9d2] to-[#e6dcc3]">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">Guías gratuitas</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid md:grid-cols-[1.5fr_1fr] gap-4 items-center" onSubmit={submit}>
            <div className="space-y-3">
              <p className="text-[hsl(var(--muted))]">Descarga la guía de café sin culpa, plato ideal, ayuno consciente o cuidados para pacientes trans y VIH.</p>
              <input type="text" name="hp" className="hidden" tabIndex="-1" autoComplete="off" />
              <Input
                type="email"
                required
                placeholder="Tu correo"
                value={email}
                aria-label="Correo"
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                className="input"
                value={topic}
                aria-label="Tema"
                onChange={(e) => setTopic(e.target.value)}
              >
                <option>Guía gratis: café sin culpa</option>
                <option>Guía gratis: plato ideal</option>
                <option>Guía gratis: ayuno consciente</option>
                <option>Guía gratis: paciente trans</option>
                <option>Guía gratis: paciente VIH</option>
              </select>
              {error && <p className="text-sm text-red-600">{error}</p>}
              {status === "success" && <p className="text-sm text-green-700">¡Listo! Revisa tu correo.</p>}
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" fullWidth disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "Recibir guía"}
              </Button>
              <p className="text-xs text-[hsl(var(--muted))]">Te enviaré el PDF y tips semanales. Sin spam.</p>
            </div>
          </form>
        </CardContent>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Completa los campos obligatorios");
      return;
    }
    setError("");
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, honeypot: form.hp }),
    });
    if (!res.ok) {
      setStatus("error");
      setError("No se pudo enviar. Intenta más tarde.");
      return;
    }
    setStatus("success");
    trackEvent("form_contact_submitted");
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="contacto" className="container py-16 md:py-20">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="card">
          <CardHeader>
            <CardTitle>Hablemos</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={submit}>
              <input type="text" name="hp" className="hidden" tabIndex="-1" autoComplete="off" onChange={(e) => update("hp", e.target.value)} />
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Nombre" required value={form.name} onChange={(e) => update("name", e.target.value)} aria-label="Nombre" />
                <Input type="email" placeholder="Email" required value={form.email} onChange={(e) => update("email", e.target.value)} aria-label="Correo" />
              </div>
              <Input placeholder="WhatsApp (opcional)" value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-label="WhatsApp" />
              <Textarea
                placeholder="¿Cuál es tu objetivo? (bajar grasa, recomposición, PCOS, etc.)"
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                aria-label="Mensaje"
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              {status === "success" && <p className="text-sm text-green-700">¡Mensaje enviado! Te respondo en menos de 24h.</p>}
              <Button type="submit" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "Enviar"}
              </Button>
              <p className="text-xs text-slate-600">O escríbeme directo a <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
            </form>
          </CardContent>
        </div>
        <div className="space-y-6">
          <div className="card">
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-semibold leading-tight">Correo</p>
                <a href={`mailto:${BRAND.email}`} className="text-sm text-brand underline">{BRAND.email}</a>
              </div>
            </CardContent>
          </div>
          <div className="card">
            <CardContent className="p-6 flex items-center gap-4">
              <Phone className="h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-semibold leading-tight">WhatsApp</p>
                <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-brand underline">{BRAND.whatsapp}</a>
              </div>
            </CardContent>
          </div>
          <div className="card">
            <CardContent className="p-6 flex items-center gap-4">
              <Calendar className="h-5 w-5 text-brand" />
              <div>
                <p className="text-sm font-semibold leading-tight">Horarios</p>
                <p className="text-sm text-slate-600">Lun–Vie 9:00–18:00 (CDMX). Sáb 10:00–14:00.</p>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
      <div className="card border-[#c9c2a2] bg-[#f4e9d2] mt-6">
        <CardContent className="p-6 text-sm text-ink flex items-start gap-2">
          <Info className="h-4 w-4 mt-0.5" />
          <div>
            <p className="font-semibold">Aviso importante</p>
            <p className="text-[hsl(var(--muted))] mt-1">La información proporcionada no sustituye la valoración médica. Si presentas una condición clínica específica, consulta a tu médico tratante.</p>
          </div>
        </CardContent>
      </div>
    </section>
  );
}

export default function Page() {
  const activeSection = useActiveSection(sections.map((s) => s.id));
  const useAltHero = BRAND.featureFlags?.altHero;
  const [depths, setDepths] = useState([]);

  function handleCTA(label, extra = {}) {
    trackEvent("cta_agendar", { label, ...extra });
  }

  useEffect(() => {
    const checkpoints = [25, 50, 75, 90];
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrollTop / docHeight) * 100);
      checkpoints.forEach((p) => {
        if (percent >= p && !depths.includes(p)) {
          setDepths((prev) => [...prev, p]);
          trackEvent("scroll_depth", { percent: p });
        }
      });
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [depths]);

  const services = [
    { Icon: Apple, title: "Plan personalizado", desc: "5 tiempos con equivalentes SMAE y esferas por color." },
    { Icon: ChefHat, title: "Recetarios mensuales", desc: "Ideas rápidas, económicas y sabrosas para tu estilo de vida." },
    { Icon: HeartPulse, title: "Acompañamiento", desc: "Mensajes semanales y ajustes según tu progreso." },
    { Icon: Salad, title: "Hábitos y mindfulness", desc: "Herramientas para ansiedad, atracones y relación sana con la comida." },
    { Icon: Syringe, title: "Pacientes trans y clínicos", desc: "Experto en terapia hormonal y metas estéticas seguras." },
    { Icon: Target, title: "Resultados medibles", desc: "Seguimiento de glucosa, lípidos, grasa visceral y masa muscular." },
  ];

  const stats = [
    { value: "2k+", label: "Pacientes" },
    { value: "4.9/5", label: "Satisfacción" },
    { value: "3", label: "Años de servicio" },
    { value: ">15kg", label: "Promedio perdido en 6m" },
  ];

  const heroImages = (BRAND.heroImages?.length ? BRAND.heroImages : ["/hero/1.png", "/hero/2.png", "/hero/3.png", "/hero/4.png"]).slice(0, 4);

  return (
    <div className="min-h-screen" data-active={activeSection}>
      <Script id="schema-localbusiness" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BRAND.name,
          url: "https://lanutritia.com",
          telephone: BRAND.whatsapp,
          sameAs: [BRAND.instagram, BRAND.setmore],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: 2000 },
          address: { "@type": "PostalAddress", addressCountry: "MX" },
        })}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "¿Incluye esferas y equivalentes?", acceptedAnswer: { "@type": "Answer", text: "Sí, usamos 5 tiempos, equivalentes SMAE y esferas por color." } },
            { "@type": "Question", name: "¿Trabajas con pacientes trans?", acceptedAnswer: { "@type": "Answer", text: "Sí, con enfoque integral y seguro." } },
          ],
        })}
      </Script>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/70 border-b">
        <div className="container h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/logo.png" alt="La Nutri Tía" className="h-10 w-10 rounded-full border object-cover" />
            <span className="sr-only">La Nutri Tía</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-2 rounded-full transition-colors ${activeSection === section.id ? "bg-[#f4e9d2] text-brand" : "hover:text-brand"}`}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="hidden md:inline-flex" asChild href={BRAND.hero.cta.href} onClick={() => handleCTA("Agendar header secundario")}>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />Agenda</span>
            </Button>
            <Button asChild href={BRAND.hero.cta.href} onClick={() => handleCTA("Agendar header primario")}>
              <span>Agendar</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <ResetBanner onCTA={handleCTA} />

        <section id="hero" className="relative overflow-hidden">
          <div className="absolute -top-20 -right-24 bg-[#c9c2a2]/50 h-64 w-64 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-24 bg-[#8f8c60]/30 h-64 w-64 rounded-full blur-3xl" />
          <div className="container py-16 md:py-24">
            {useAltHero ? <HeroAlternate onCTA={handleCTA} /> : <HeroPrimary onCTA={handleCTA} />}
          </div>
        </section>

        <section className="container pb-12">
          <div className="rounded-3xl border bg-white/80 shadow-sm p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {heroImages.map((src, idx) => (
                <div key={idx} className="rounded-2xl border bg-white overflow-hidden shadow-sm">
                  <img src={src} alt={`Galería hero ${idx + 1}`} className="w-full h-full object-cover aspect-square" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews onCTA={handleCTA} />

        <section className="container py-12">
          <div className="rounded-3xl bg-soft p-6 md:p-8 grid md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{stat.value}</div>
                <div className="text-[hsl(var(--muted))]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <HowItWorks onCTA={handleCTA} />

        <section id="servicios" className="container py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="text-brand uppercase tracking-[0.3em] text-xs">Servicios</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">¿Qué hacemos juntos?</h2>
            <p className="text-[hsl(var(--muted))] mt-3">Planes personalizados, enfoque holístico y acompañamiento real.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#f4e9d2]"><service.Icon className="h-6 w-6 text-brand" /></div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-12">
          <div className="bg-soft py-10 px-6 md:px-10 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-ink">Acompañamiento realista</h2>
                <p className="text-slate-600">Sin dietas extremas ni regaños: te llevo paso a paso con menús claros, recetas fáciles y un seguimiento que se ajusta a tu ritmo.</p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-ink">
                  {["Menú de 5 tiempos con equivalentes", "Opciones económicas y de la milpa", "Material descargable y guías rápidas", "Mensajes y ajustes semanales"].map((item) => (
                    <div key={item} className="rounded-2xl border bg-white p-4 flex items-start gap-3">
                      <Check className="h-4 w-4 text-brand mt-0.5" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-sm text-[hsl(var(--muted))]">Ideal para pérdida de grasa, recomposición, salud hormonal y pacientes trans.</div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-brand">Convéncete en 3 pasos</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink">
                    <li className="flex items-start gap-3"><Flame className="h-4 w-4 text-brand mt-0.5" /> Revisión de hábitos, tiempos y métricas clave.</li>
                    <li className="flex items-start gap-3"><HeartPulse className="h-4 w-4 text-brand mt-0.5" /> Plan inicial con objetivos medibles a 4 semanas.</li>
                    <li className="flex items-start gap-3"><MessagesSquare className="h-4 w-4 text-brand mt-0.5" /> Ajustes semanales y material práctico.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild onClick={() => handleCTA("Agendar acompañamiento")}><a href={BRAND.setmore}>Agenda tu primera consulta</a></Button>
                  <Button variant="secondary" asChild href={BRAND.whatsapp} onClick={() => trackEvent("cta_whatsapp", { place: "acompanamiento" })}>
                    <span className="flex items-center"><Phone className="h-4 w-4 mr-2" />Resolver dudas</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Comparison onCTA={handleCTA} />

        <ForWhom />

        <LeadMagnet />

        <section id="agenda" className="container py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="card">
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-brand" /> Agenda en Setmore</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">Reserva directa: <a className="text-brand underline" href={BRAND.setmore} target="_blank" rel="noreferrer">{BRAND.setmore}</a></p>
                <SetmoreEmbed href={BRAND.setmore} />
                <p className="text-xs text-[hsl(var(--muted))]">El iframe se carga en lazy-load para evitar CLS.</p>
              </CardContent>
            </div>

            <div className="card">
              <CardHeader><CardTitle>Contacto rápido</CardTitle></CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Nombre" required aria-label="Nombre" />
                    <Input type="email" placeholder="Email" required aria-label="Correo" />
                  </div>
                  <Input placeholder="WhatsApp (opcional)" aria-label="WhatsApp" />
                  <Textarea placeholder="¿Cuál es tu objetivo?" rows={5} aria-label="Objetivo" />
                  <Button type="submit" className="w-full" onClick={() => handleCTA("Enviar contacto agenda")}>Enviar</Button>
                  <p className="text-xs text-slate-600">O escríbenos directo a <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
                </form>
              </CardContent>
            </div>
          </div>
        </section>

        <section id="faq" className="container py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="text-brand uppercase tracking-[0.3em] text-xs">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">FAQ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { q: "¿Incluye esferas y equivalentes?", a: "Sí: usamos 5 tiempos, equivalentes SMAE y esferas por color." },
              { q: "¿Puedo elegir keto/antiinflamatoria/milpa?", a: "Ajusto el plan según tu objetivo, presupuesto y preferencias." },
              { q: "¿Trabajas con pacientes trans?", a: "Sí, con enfoque integral y seguridad en terapia hormonal." },
              { q: "¿Cómo pago?", a: "Puedes pagar al reservar por Setmore o vía Patreon en membresías." },
            ].map((f) => (
              <div key={f.q} className="card">
                <CardHeader><CardTitle className="text-base">{f.q}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">{f.a}</CardContent>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="border-t bg-white">
        <div className="container py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-2">
              <img src="/logo.png" alt="La Nutri Tía" className="h-10 w-10 rounded-full border object-cover" />
              <span className="sr-only">La Nutri Tía</span>
            </a>
            <p className="mt-3 text-sm text-slate-600 max-w-md">Nutrición holística, sin culpas y con resultados reales. Planes personalizados, recetarios y una comunidad que te acompaña.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Enlaces</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#agenda">Agenda</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#">Aviso de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-6 text-xs text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} La Nutri Tía. Todos los derechos reservados.</p>
            <div className="flex items-center gap-3">
              <a href={BRAND.instagram} className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 inset-x-0 px-4 md:hidden">
        <div className="rounded-2xl shadow-lg bg-white border flex items-center gap-3 p-3">
          <Button fullWidth onClick={() => handleCTA("Agendar bottom bar")} asChild>
            <a href={BRAND.hero.cta.href} className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Agendar</a>
          </Button>
          <Button variant="secondary" fullWidth asChild onClick={() => trackEvent("cta_whatsapp", { place: "bottom-bar" })}>
            <a href={BRAND.whatsapp} className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </Button>
        </div>
      </div>

      <a className="whatsapp-fab" href={BRAND.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" onClick={() => trackEvent("cta_whatsapp", { place: "fab" })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.68.15-.2.29-.78.97-.95 1.17-.17.19-.35.22-.65.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.19.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.52.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.43.25-.71.25-1.33.18-1.43-.07-.1-.26-.17-.56-.32zM13.96 28c-2.39 0-4.76-.64-6.83-1.86L2 28l1.91-5.06C2.64 20.8 2 18.44 2 16.04 2 8.84 7.84 3 15.03 3c3.55 0 6.88 1.38 9.39 3.9 2.52 2.52 3.9 5.86 3.9 9.41C28.32 23.5 21.94 28 13.96 28zm0-22.5C8.49 5.5 4 10 4 15.96c0 2.35.76 4.52 2.05 6.28l-1.19 3.16 3.27-1.14c1.7 1.12 3.73 1.72 5.83 1.72 6.05 0 11-4.41 11-9.85 0-2.63-1.03-5.1-2.9-6.96-1.86-1.86-4.33-2.88-6.96-2.88z"/></svg>
      </a>
    </div>
  );
}
