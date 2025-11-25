"use client";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BRAND } from "@/lib/config";
import { Check, ChefHat, HeartPulse, Apple, PlayCircle, Instagram, Youtube, Mail, Phone, Calendar, Salad, MessagesSquare, ShieldCheck, Flame, Syringe, MessageCircle } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

function Section({ id, eyebrow, title, subtitle, children }){
  return (
    <section id={id} className="container py-16 md:py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mb-10 text-center">
        {eyebrow && (
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-brand" />
            <p className="text-brand uppercase tracking-widest text-xs font-semibold">{eyebrow}</p>
            <span className="h-1 w-8 rounded-full bg-brand" />
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink">{title}</h2>
        {subtitle && <p className="mt-4 text-[hsl(var(--muted))] max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

function Feature({ Icon, title, desc }){
  return (
    <div className="card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-soft"><Icon className="h-6 w-6 text-brand" /></div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">{desc}</p>
      </CardContent>
    </div>
  )
}

function Tier({ name, price, tag, features, cta, highlighted }){
  return (
    <div className={`card relative ${highlighted ? "border-brand shadow-lg" : ""}`}>
      {tag && (<span className="badge bg-brand text-white absolute -top-3 left-1/2 -translate-x-1/2">{tag}</span>)}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <p className="text-slate-500">Acceso por mes</p>
        <div className="mt-4">
          <span className="text-4xl font-extrabold tracking-tight">${price}</span>
          <span className="text-slate-500"> MXN</span>
        </div>
      </CardHeader>
      <CardContent>
        {features && (
          <ul className="space-y-3">
            {features.map((f, i)=> (<li key={i} className="flex items-start gap-3 text-sm"><Check className="h-5 w-5 text-brand shrink-0" />{f}</li>))}
          </ul>
        )}
        {cta && (
          <Button className="w-full mt-6" asChild>
            <a href={cta.href}>{cta.label}</a>
          </Button>
        )}
      </CardContent>
    </div>
  )
}

function Stat({ value, label }){
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{value}</div>
      <div className="text-slate-500 mt-2">{label}</div>
    </div>
  )
}

export default function Page(){
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
        <div className="container h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/logo.svg" alt="La Nutri Tía" className="h-7 w-auto" />
            <span className="sr-only">La Nutri Tía</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-brand">Servicios</a>
            <a href="#planes" className="hover:text-brand">Planes</a>
            <a href="#social" className="hover:text-brand">Instagram / TikTok</a>
            <a href="#agenda" className="hover:text-brand">Agenda</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden md:inline-flex" asChild href="#agenda">
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />Agenda</span>
            </Button>
            <Button asChild href={BRAND.setmore}>
              <span>Agendar</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "hsl(var(--surface))" }} />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "hsl(var(--brand-2))" }} />
        <div className="container py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border px-3 py-1 text-xs text-brand">
              <ShieldCheck className="h-4 w-4" /> Nutrición holística y sin culpas
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              {BRAND.hero.headline}
            </h1>
            <p className="mt-4 text-lg text-[hsl(var(--muted))] max-w-xl">
              Soy Marco, tu Nutri Tía. Te acompaño con planes sencillos, recetas deliciosas y hábitos reales para resultados sostenibles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild href={BRAND.hero.cta.href}><span>{BRAND.hero.cta.label}</span></Button>
              <Button variant="outline" asChild href="#social"><span className="flex items-center"><PlayCircle className="h-4 w-4 mr-2" />Ver mis contenidos</span></Button>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_,i)=> (<div key={i} className="h-10 w-10 rounded-full ring-2 ring-white bg-[hsl(var(--surface))]" />))}
              </div>
              <p className="text-sm text-[hsl(var(--muted))]">+2,000 pacientes acompañados | 4.9/5 satisfacción</p>
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar py-2">
              {(BRAND.hero.images || []).slice(0,5).map((src, i)=>(
                <img key={i} src={src} alt="" className="h-44 w-72 object-cover rounded-2xl snap-start shrink-0" />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-white shadow-2xl p-4 border">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[hsl(var(--surface))] via-[hsl(30,40%,92%)] to-[hsl(24,35%,90%)] grid place-items-center text-ink">
                <div className="text-center px-6">
                  <p className="text-sm uppercase tracking-widest">La Nutri Tía</p>
                  <h3 className="text-2xl font-bold mt-1">Menos regaños, más resultados</h3>
                  <p className="text-sm text-[hsl(var(--muted))] mt-2">Plan de 5 tiempos, esferas por color, recetas de la milpa y acompañamiento realista.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 card">
              <CardContent className="p-4 flex items-center gap-3">
                <Flame className="h-5 w-5 text-brand" />
                <div>
                  <p className="text-sm font-semibold leading-tight">Baja grasa corporal</p>
                  <p className="text-xs text-[hsl(var(--muted))] -mt-0.5">sin perder músculo</p>
                </div>
              </CardContent>
            </div>
            <div className="absolute -top-6 -right-6 card">
              <CardContent className="p-4 flex items-center gap-3">
                <HeartPulse className="h-5 w-5 text-brand" />
                <div>
                  <p className="text-sm font-semibold leading-tight">Enfoque clínico</p>
                  <p className="text-xs text-[hsl(var(--muted))] -mt-0.5">IMC, TMB, grasa visceral</p>
                </div>
              </CardContent>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust + Stats */}
      <Section id="confianza" eyebrow="Confianza" title="Resultados que hablan" subtitle="Metodología clara, hábitos sostenibles y cero culpas.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat value="2k+" label="Pacientes" />
          <Stat value="3" label="Años de servicio" />
          <Stat value="4.9/5" label="Satisfacción" />
          <Stat value=">15kg" label="Promedio perdido en 6m" />
        </div>
      </Section>

      {/* Servicios */}
      <Section id="servicios" eyebrow="Servicios" title="¿Qué hacemos juntos?" subtitle="Planes personalizados, enfoque holístico y acompañamiento real.">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature Icon={Apple} title="Plan personalizado (5 tiempos)" desc="Dieta adaptada a tu objetivo (hiperproteica, keto, antiinflamatoria, milpa) con esferas por color y equivalentes SMAE." />
          <Feature Icon={ChefHat} title="Recetarios mensuales" desc="Ideas rápidas, económicas y sabrosas. Versiones para diabetes, PCOS, gluten free y más." />
          <Feature Icon={HeartPulse} title="Acompañamiento" desc="Mensajes semanales, ajustes según progreso y educación alimentaria sin juicios." />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Feature Icon={Salad} title="Hábitos y mindfulness" desc="Herramientas para binge eating, antojos y relación sana con la comida." />
          <Feature Icon={MessagesSquare} title="Comunidad" desc="Acceso a la comunidad La Nutri Tía con retos, lives y soporte grupal." />
          <Feature Icon={Syringe} title="Pacientes trans y clínicos" desc="Experto en nutrición para terapia hormonal y metas estéticas seguras." />
        </div>
      </Section>

      <div className="container py-12">
        <section className="bg-soft py-10 px-6 md:px-10 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-ink">Acompañamiento realista</h2>
              <p className="text-slate-600 mt-2">Menos regaños, más resultados. Plan de cinco tiempos, esferas por color y recetas de la milpa.</p>
              <div className="mt-5">
                <Button asChild><a href={BRAND.setmore}>Agendar ahora</a></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(BRAND.hero.images || []).slice(0,4).map((src,i)=>(
                <img key={i} src={src} alt="" className="rounded-2xl object-cover h-40 w-full" />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Planes */}
      <Section id="planes" eyebrow="Planes" title="Consultas y membresías">
        <div className="card mb-8">
          <CardHeader><CardTitle>Consultas individuales</CardTitle></CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-ink">Consulta Online</h3>
                <p className="text-sm text-slate-600 mt-1">Videollamada • 50–60 min</p>
                <ul className="text-sm mt-4 space-y-2 text-ink">
                  <li>• Evaluación y objetivos</li>
                  <li>• Menú personalizado</li>
                  <li>• Guías rápidas y recetas</li>
                </ul>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold">$550</span>
                  <span className="text-slate-500">MXN</span>
                </div>
                <div className="mt-5">
                  <Button asChild className="w-full"><a href={BRAND.setmore}>Agendar</a></Button>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-ink">Consulta Presencial</h3>
                <p className="text-sm text-slate-600 mt-1">CDMX • 50–60 min</p>
                <ul className="text-sm mt-4 space-y-2 text-ink">
                  <li>• Evaluación y objetivos</li>
                  <li>• Menú personalizado</li>
                  <li>• Guías rápidas y recetas</li>
                </ul>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold">$650</span>
                  <span className="text-slate-500">MXN</span>
                </div>
                <div className="mt-5">
                  <Button asChild className="w-full"><a href={BRAND.setmore}>Agendar</a></Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch mt-6">
          {BRAND.plans.memberships.map((m, idx)=> (
  <div key={m.name} className={`rounded-2xl border p-6 shadow-sm bg-white ${idx===1 ? 'ring-2 ring-brand' : ''}`}>
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold">{m.name}</h3>
      {typeof m.price !== 'undefined' && (
        <div className="text-right">
          <span className="text-3xl font-extrabold tracking-tight">${m.price}</span>
          <span className="text-slate-500"> MXN</span>
        </div>
      )}
    </div>
        {m.features && (
          <ul className="space-y-3 mt-4">
            {m.features.map((f, i)=> (
          <li key={i} className="flex items-start text-sm text-ink">• {f}</li>
        ))}
      </ul>
    )}
    <div className="mt-6">
      <Button className="w-full" asChild>
        <a href={m.ctaHref || BRAND.setmore}>Unirme</a>
      </Button>
    </div>
  </div>
))}
        </div>
      </Section>

      {/* Social (Instagram / TikTok) */}
      <Section id="social" eyebrow="Redes" title="Sígueme en Instagram y TikTok" subtitle="Contenido diario, recetas y tips sin culpas.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card">
            <CardHeader><CardTitle className="flex items-center gap-2"><Instagram className="h-5 w-5 text-brand" /> Instagram</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Perfil: <a className="text-brand underline" href={BRAND.instagram} target="_blank" rel="noreferrer">@lanutritia</a></p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {BRAND.instagramEmbeds.length === 0 && (
                  <div className="text-sm text-slate-600 col-span-2">
                    Para mostrar posts aquí, agrega URLs de publicaciones en <code>src/lib/config.js</code> → <code>instagramEmbeds</code>.
                  </div>
                )}
                {BRAND.instagramEmbeds.map((url, i)=> (
                  <blockquote key={i} className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14" style={{ background:'#FFF', border:0, borderRadius:12, boxShadow:'0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'100%' }}></blockquote>
                ))}
              </div>
              <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
            </CardContent>
          </div>

          <div className="card">
            <CardHeader><CardTitle className="flex items-center gap-2"><MessageCircle className="h-5 w-5 text-brand" /> TikTok</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Perfil: <a className="text-brand underline" href={BRAND.tiktok} target="_blank" rel="noreferrer">@lanutriitia</a></p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {BRAND.tiktokEmbeds.length === 0 && (
                  <div className="text-sm text-slate-600 col-span-2">
                    Para embeber videos, pega URLs en <code>src/lib/config.js</code> → <code>tiktokEmbeds</code>. (TikTok solo permite embed de videos individuales.)
                  </div>
                )}
                {BRAND.tiktokEmbeds.map((url, i)=> (
                  <blockquote key={i} className="tiktok-embed" cite={url} data-video-id="" style={{ maxWidth:'605px', minWidth:'325px' }}>
                    <section><a target="_blank" href={url}>Ver en TikTok</a></section>
                  </blockquote>
                ))}
              </div>
              <Script async src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
            </CardContent>
          </div>
        </div>
      </Section>

      {/* Agenda */}
      <Section id="agenda" eyebrow="Agenda" title="Reserva tu consulta" subtitle="Elige entre consulta online o presencial.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-brand" /> Agenda en Setmore</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Reserva directa: <a className="text-brand underline" href={BRAND.setmore} target="_blank" rel="noreferrer">{BRAND.setmore}</a></p>
              <div id="setmore-widget" className="mt-4">
                <a href={BRAND.setmore} target="_blank" rel="noreferrer" className="btn btn-outline">Abrir agenda</a>
              </div>
              {/* Nota: Si quieres el botón/widget oficial, Setmore provee un script que puedes pegar aquí. */}
            </CardContent>
          </div>

          <div className="card">
            <CardHeader><CardTitle>Contacto rápido</CardTitle></CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e)=> e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" required />
                  <Input type="email" placeholder="Email" required />
                </div>
                <Input placeholder="WhatsApp (opcional)" />
                <Textarea placeholder="¿Cuál es tu objetivo? (bajar grasa, recomposición, PCOS, etc.)" rows={5} />
                <Button type="submit" className="w-full">Enviar</Button>
                <p className="text-xs text-slate-600">O escríbenos directo a <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
              </form>
            </CardContent>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      {/* Artículos / Noticias */}
<Section id="blog" eyebrow="Novedades" title="Artículos y noticias" subtitle="Lo último que estoy publicando">
  <div className="grid md:grid-cols-3 gap-6">
    {BRAND.posts && BRAND.posts.length > 0 ? BRAND.posts.map((p, i)=>(
      <div key={i} className="rounded-2xl border p-6 shadow-sm bg-white">
        <h4 className="text-lg font-semibold">{p.title}</h4>
        <p className="text-xs text-slate-500 mt-1">{p.date}</p>
        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2 my-3">
            {p.tags.map((t, k)=>(<span key={k} className="px-2 py-1 text-xs bg-slate-100 rounded-full">{t}</span>))}
          </div>
        ): null}
        <div className="mt-4">
          <Button asChild className="w-full"><a href={p.url} target="_blank" rel="noreferrer">Leer</a></Button>
        </div>
      </div>
    )) : (
      <p className="text-slate-600">Pronto habrá publicaciones.</p>
    )}
  </div>
</Section>
<Section id="faq" eyebrow="Preguntas" title="Preguntas frecuentes">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            {q: "¿La dieta incluye equivalentes SMAE y esferas?", a: "Sí: usamos 5 tiempos, equivalentes SMAE y esferas por color (rojo-proteínas, verde-libres/vegetales, amarillo-frutas/cereales, azul-grasas)."},
            {q: "¿Puedo cambiar entre keto/antiinflamatoria/milpa?", a: "Claro. Ajustamos según tu objetivo, presupuesto y preferencias."},
            {q: "¿Trabajas con pacientes trans?", a: "Sí, con enfoque de salud integral y seguridad en terapia hormonal."},
            {q: "¿Qué incluye la consulta online?", a: "Evaluación, objetivos, plan personalizado, materiales y seguimiento por mensajes."},
            {q: "¿Cómo pago?", a: "Puedes pagar al reservar por Setmore o por transferencia/efectivo en consulta presencial."},
            {q: "¿Puedo cancelar o reprogramar?", a: "Sí, con 24h de anticipación para evitar penalización."},
          ].map((f, i)=> (
            <div key={i} className="card">
              <CardHeader><CardTitle className="text-base">{f.q}</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">{f.a}</CardContent>
            </div>
          ))}
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" eyebrow="Contacto" title="Hablemos" subtitle="Cuéntame tu objetivo y te respondo en menos de 24h hábiles.">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card">
            <CardHeader><CardTitle>Escríbeme</CardTitle></CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e)=> e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" required />
                  <Input type="email" placeholder="Email" required />
                </div>
                <Input placeholder="WhatsApp (opcional)" />
                <Textarea placeholder="¿Cuál es tu objetivo? (bajar grasa, recomposición, PCOS, etc.)" rows={5} />
                <Button type="submit" className="w-full">Enviar</Button>
                <p className="text-xs text-slate-600">O escríbenos directo a <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a></p>
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
        <div className="card border-brand/20 bg-soft mt-6">
          <CardContent className="p-6 text-sm text-ink">
            <p className="font-semibold">Aviso importante</p>
            <p className="text-[hsl(var(--muted))] mt-1">La información proporcionada no sustituye la valoración médica. Si presentas una condición clínica específica, consulta a tu médico tratante.</p>
          </CardContent>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-2">
              <img src="/logo.svg" alt="La Nutri Tía" className="h-7 w-auto" />
              <span className="sr-only">La Nutri Tía</span>
            </a>
            <p className="mt-3 text-sm text-slate-600 max-w-md">Nutrición holística, sin culpas y con resultados reales. Planes personalizados, recetarios y una comunidad que te acompaña.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Enlaces</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#social">Instagram / TikTok</a></li>
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
              <a href={BRAND.tiktok} className="hover:underline">TikTok</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a className="whatsapp-fab" href={BRAND.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="currentColor"><path d="M19.11 17.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.68.15-.2.29-.78.97-.95 1.17-.17.19-.35.22-.65.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.19.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.52.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.43.25-.71.25-1.33.18-1.43-.07-.1-.26-.17-.56-.32zM13.96 28c-2.39 0-4.76-.64-6.83-1.86L2 28l1.91-5.06C2.64 20.8 2 18.44 2 16.04 2 8.84 7.84 3 15.03 3c3.55 0 6.88 1.38 9.39 3.9 2.52 2.52 3.9 5.86 3.9 9.41C28.32 23.5 21.94 28 13.96 28zm0-22.5C8.49 5.5 4 10 4 15.96c0 2.35.76 4.52 2.05 6.28l-1.19 3.16 3.27-1.14c1.7 1.12 3.73 1.72 5.83 1.72 6.05 0 11-4.41 11-9.85 0-2.63-1.03-5.1-2.9-6.96-1.86-1.86-4.33-2.88-6.96-2.88z"/></svg>
      </a>
    </div>
  );
}
