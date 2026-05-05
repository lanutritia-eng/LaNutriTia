import { CheckCircle2 } from "lucide-react";
import { BRAND, plans, platformConfig, specialties, trustMetrics } from "@/lib/landingData";
import { Hero, MetricCards, SectionTitle, Specialties } from "@/components/LandingSections";

const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Hero brand={BRAND} platformConfig={platformConfig} />

      <section className="container py-16" id="confianza"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"><MetricCards metrics={trustMetrics} /></div></section>

      <section className="container py-16" id="especialidades">
        <SectionTitle eyebrow="Especialidades" title="Atención integral en un solo lugar" subtitle="Selecciona tu especialidad y agenda con profesionales verificados en minutos." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"><Specialties specialties={specialties} /></div>
      </section>

      <section className="container py-16" id="planes">
        <SectionTitle eyebrow="Planes" title="Suscripciones flexibles en MXN" subtitle="Precios editables y modelo de consultas mensuales de 2 a 8 sesiones." />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-black mt-3 text-blue-900">{mxn.format(plan.priceMXN)}</p><p className="text-sm text-slate-500">{plan.consultations} consultas al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">{plan.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />{benefit}</li>)}</ul>
              <a href="#agenda" className="mt-6 inline-block w-full text-center rounded-xl bg-blue-900 text-white py-3 font-semibold hover:bg-blue-800">Contratar plan</a>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-16" id="como-funciona"><SectionTitle eyebrow="Cómo funciona" title="Empieza en 4 pasos" /><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">{["Elige tu especialidad", "Selecciona un profesional", "Agenda tu consulta", "Recibe atención y seguimiento online"].map((step, i) => <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-cyan-700 font-bold">0{i + 1}</p><p className="font-semibold mt-2">{step}</p></div>)}</div></section>

      <section className="container py-16" id="guias"><SectionTitle eyebrow="Guía de uso" title="Flujo para pacientes y profesionales" /><div className="grid lg:grid-cols-2 gap-6 mt-8"><div className="rounded-2xl bg-white border border-slate-200 p-6"><h3 className="text-xl font-bold">Para pacientes</h3><ul className="mt-4 space-y-2 text-slate-600">{["Crear cuenta", "Elegir plan o consulta individual", "Agendar cita", "Asistir a consulta online", "Dar seguimiento"].map((item) => <li key={item}>• {item}</li>)}</ul></div><div className="rounded-2xl bg-white border border-slate-200 p-6"><h3 className="text-xl font-bold">Para profesionales</h3><ul className="mt-4 space-y-2 text-slate-600">{["Crear perfil", "Configurar horarios", "Conectar calendario", "Recibir pacientes", "Gestionar ingresos"].map((item) => <li key={item}>• {item}</li>)}</ul></div></div></section>

      <section className="container py-16" id="profesionales"><div className="rounded-3xl bg-gradient-to-r from-cyan-100 via-white to-violet-100 p-8 md:p-12 border border-cyan-200"><h2 className="text-3xl font-bold">Únete como profesional de salud</h2><p className="text-slate-700 mt-3 max-w-3xl">Forma parte de una plataforma diseñada para ayudarte a recibir pacientes, organizar tu agenda y ofrecer consultas online de forma profesional.</p><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mt-6 text-sm font-medium text-slate-700">{["Mayor visibilidad", "Agenda digital", "Pagos organizados", "Panel de pacientes", "Integración futura con Setmore Calendar"].map((item) => <span key={item} className="rounded-xl bg-white px-3 py-2 border border-slate-200">{item}</span>)}</div></div></section>

      <section className="container py-16" id="mision"><SectionTitle eyebrow="Nuestra misión" title={BRAND.mission} /></section>
      <section className="container pb-8"><div className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-600">Placeholder logo: <code>{BRAND.links.logo}</code> · Placeholder imagenes: reemplaza archivos en <code>/public/hero/</code> según marca final.</div></section>
      <section id="agenda" className="container py-16"><div className="rounded-3xl bg-blue-950 text-white p-8 md:p-12 text-center"><h2 className="text-3xl md:text-4xl font-black">Tu salud puede empezar hoy</h2><p className="text-blue-100 mt-3">Agenda tu primera consulta o conoce los planes mensuales de HealthPass.</p><div className="flex flex-wrap justify-center gap-3 mt-6"><a href="#especialidades" className="rounded-xl bg-emerald-300 text-blue-950 px-6 py-3 font-semibold">Agendar mi primera consulta</a><a href="#planes" className="rounded-xl border border-white/40 px-6 py-3 font-semibold">Ver planes de suscripción</a></div></div></section>
    </main>
  );
}
