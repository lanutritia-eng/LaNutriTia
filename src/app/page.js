"use client";

import Image from "next/image";
import { BRAND } from "@/lib/config";
import { Calendar, CheckCircle2, ClipboardList, MessageCircle, Sparkles, Stethoscope } from "lucide-react";
import Reveal from "@/components/Reveal";

const navItems = [
  ["Inicio", "#inicio"],
  ["Método", "#metodo"],
  ["Servicios", "#servicios"],
  ["Planes", "#planes"],
  ["Recursos", "#recursos"],
  ["Agenda", "#agenda"],
];

const badges = ["+2,000 pacientes", "4.9/5 reseñas", "3 años de servicio", "Atención inclusiva"];
const forYou = [
  "Te cuesta seguir dietas porque te dan hambre.",
  "Quieres bajar grasa sin dejar de comer rico.",
  "Vives con ansiedad, antojos o atracones.",
  "Tienes SOP, resistencia a la insulina o cambios hormonales.",
  "Quieres estructura sin que te regañen.",
  "Buscas un plan realista, no perfecto.",
];

const faqs = [
  ["¿Cómo es la primera consulta?", "Hacemos evaluación completa, objetivos claros y te llevas una ruta personalizada que sí puedes sostener."],
  ["¿Solo atiendes pérdida de grasa?", "No. También salud hormonal, hábitos, ansiedad con la comida, recomposición corporal y acompañamiento inclusivo."],
  ["¿Puedo iniciar online?", "Sí, puedes iniciar con consulta online desde cualquier lugar."],
  ["¿Atiendes presencial?", "Sí, también hay consulta presencial con agenda en Setmore."],
];

function Header() {
  return (
    <header className="sticky top-3 z-50">
      <div className="container">
        <div className="rounded-full border border-cafe/25 bg-nacar/90 backdrop-blur px-4 py-3 shadow-card flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cacao text-nacar grid place-items-center font-bold">
              <Image src="/logo.svg" alt="La Nutri Tía" fill className="object-contain p-1" onError={(e)=>{e.currentTarget.style.display='none';}} />
              <span>NT</span>
            </div>
            <span className="font-semibold text-tinta">La Nutri Tía</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-cafe">
            {navItems.map(([label, href]) => <a key={href} href={href} className="hover:text-cacao">{label}</a>)}
          </nav>
          <a href={BRAND.setmore} className="btn btn-primary">Agendar</a>
        </div>
      </div>
    </header>
  );
}

export default function Page() {
  const heroImages = BRAND?.hero?.images?.length ? BRAND.hero.images : BRAND.heroImages || [];

  return (
    <main className="bg-nacar text-tinta pb-24 md:pb-0" id="inicio">
      <Header />

      <section className="container pt-10 md:pt-16 pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02]">Menos regaños, más resultados.</h1>
            <p className="mt-5 text-lg text-cafe max-w-xl">Planes de nutrición realistas, ricos y sostenibles para bajar grasa, cuidar tu salud hormonal y volver a disfrutar la comida sin culpa.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={BRAND.setmore}>Agendar consulta</a>
              <a className="btn btn-secondary" href="#planes">Ver membresías</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((item) => <span key={item} className="badge bg-cafe/10 text-cacao">{item}</span>)}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {heroImages.length ? heroImages.slice(0, 4).map((src, i) => (
                <div key={src} className={`relative rounded-3xl overflow-hidden border border-cafe/15 ${i % 2 ? "h-52" : "h-64"}`}>
                  <Image src={src} alt="Nutrición realista" fill className="object-cover" loading="lazy" />
                </div>
              )) : [1,2,3,4].map((i)=><div key={i} className={`rounded-3xl ${i%2?"h-52":"h-64"} bg-gradient-to-br from-naranja/40 via-nacar to-hoja/20`} />)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Esto es para ti si...</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forYou.map((item) => <div key={item} className="card p-5 bg-white/60"><CheckCircle2 className="text-naranja mb-3" />{item}</div>)}
        </div>
      </section>

      <section id="metodo" className="py-16 bg-cacao text-nacar">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold">Tu camino en 3 pasos</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[ [Calendar,"Agenda"], [Stethoscope,"Diagnóstico"], [ClipboardList,"Plan + seguimiento"]].map(([Icon,title])=> (
              <div key={title} className="rounded-3xl bg-hoja/35 border border-salvia/30 p-6"><Icon className="text-salvia mb-3" /><h3 className="text-xl font-semibold">{title}</h3></div>
            ))}
          </div>
          <a className="btn btn-primary mt-8" href={BRAND.setmore}>Quiero empezar mi proceso</a>
        </div>
      </section>

      <section id="servicios" className="container py-16">
        <h2 className="text-3xl font-bold mb-6">Consultas</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {BRAND.plans.singles.map((plan) => (
            <article key={plan.name} className="card p-6 bg-white/70">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-cacao mt-2">${plan.price} MXN</p>
              <ul className="mt-4 space-y-2 text-cafe">
                {["Evaluación", "Objetivo claro", "Plan personalizado", "Guías prácticas", "Seguimiento inicial"].map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <a className="btn btn-primary mt-6" href={BRAND.setmore}>Agendar</a>
            </article>
          ))}
        </div>
      </section>

      <section id="planes" className="container py-16">
        <h2 className="text-3xl font-bold mb-6">Membresías</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {BRAND.plans.memberships.map((plan) => (
            <article key={plan.name} className={`card p-6 ${plan.name === "Pro" ? "border-naranja" : ""}`}>
              {plan.name === "Pro" && <span className="badge bg-naranja text-white mb-3">Más recomendada</span>}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-extrabold mt-2">${plan.name === "VIP" ? 799 : plan.price}</p>
              <p className="text-cafe mt-2">{plan.name === "Básica" ? "Para empezar sin complicarte." : plan.name === "Pro" ? "Para avanzar con consulta y ajustes." : "Para transformación con seguimiento cercano."}</p>
              <a className="btn btn-primary mt-6" href={plan.name === "VIP" ? BRAND.setmore : "https://patreon.com/LaNutriTia"}>{plan.name === "VIP" ? "Agendar VIP" : "Unirme en Patreon"}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-cacao text-nacar" id="acompanamiento">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold">Acompañamiento realista</h2>
            <p className="mt-3 text-nacar/85">Nutrición holística con estructura, empatía y recetas de la milpa para que avances sin culpa.</p>
            <div className="mt-5 flex flex-wrap gap-2">{["Menús claros", "Recetas fáciles", "Ajustes semanales", "Cero culpa"].map((c)=> <span key={c} className="badge bg-salvia/25 text-nacar">{c}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-3"><a className="btn btn-primary" href={BRAND.setmore}>Agenda tu primera consulta</a><a className="btn btn-secondary" href={BRAND.whatsapp}>Resolver dudas</a></div>
          </div>
          <div className="grid grid-cols-2 gap-3">{[1,2,3,4].map((i)=><div key={i} className={`rounded-3xl ${i%2?"h-40":"h-52"} bg-gradient-to-br from-salvia/30 via-naranja/20 to-nacar/20`} />)}</div>
        </div>
      </section>

      <section id="recursos" className="container py-16">
        <h2 className="text-3xl font-bold">Aprende a comer mejor conmigo</h2>
        <p className="text-cafe mt-2">Contenido práctico, recetas, verdades incómodas y nutrición sin culpa.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-7">
          {BRAND.instagramEmbeds.map((url) => (
            <article key={url} className="card p-3 bg-white/70">
              <iframe title="Instagram Reel" src={`${url}embed`} className="w-full h-[420px] rounded-2xl" loading="lazy" />
              <a href={BRAND.instagram} className="btn btn-secondary w-full mt-3">Ver más en Instagram</a>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="container py-16">
        <h2 className="text-3xl font-bold">Lee antes de hacer otra dieta</h2>
        <p className="text-cafe mt-2">Guías, artículos y recursos para tomar mejores decisiones con tu cuerpo.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          {BRAND.posts.map((post) => (
            <article key={post.title} className="card p-5 bg-white/70">
              <span className="badge bg-hoja/10 text-hoja">{post.tags?.[0] || "recurso"}</span>
              <h3 className="font-bold text-lg mt-3">{post.title}</h3>
              <p className="text-cafe text-sm mt-2">{post.description || `Publicado: ${post.date}`}</p>
              <a href={post.url} className="btn btn-secondary mt-5">Leer en Patreon</a>
            </article>
          ))}
        </div>
      </section>

      <section id="agenda" className="container py-16">
        <div className="rounded-3xl bg-cacao text-nacar p-8 md:p-12">
          <h2 className="text-4xl font-bold">Tu plan empieza con una cita</h2>
          <p className="mt-3 text-nacar/85">Agenda online o presencial y recibe una ruta clara para comer mejor sin vivir a dieta.</p>
          <div className="mt-6 flex flex-wrap gap-3"><a className="btn btn-primary" href={BRAND.setmore}>Agendar en Setmore</a><a className="btn btn-secondary" href={BRAND.whatsapp}><MessageCircle className="h-4 w-4" />Resolver dudas por WhatsApp</a></div>
        </div>
      </section>

      <section className="container py-8" id="faq">
        <h2 className="text-3xl font-bold mb-5">Preguntas frecuentes</h2>
        <div className="space-y-3">{faqs.map(([q,a]) => <details key={q} className="card p-5 bg-white/70"><summary className="font-semibold cursor-pointer">{q}</summary><p className="mt-3 text-cafe">{a}</p></details>)}</div>
      </section>

      <div className="md:hidden fixed left-0 right-0 bottom-0 z-50 p-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-nacar/95 border border-cafe/20 p-2 shadow-card">
            <a href={BRAND.setmore} className="btn btn-primary w-full">Agendar</a>
            <a href={BRAND.whatsapp} className="btn btn-secondary w-full">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  );
}
