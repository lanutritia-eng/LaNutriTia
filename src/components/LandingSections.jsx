import { CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3 max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold tracking-[0.16em] uppercase text-cyan-600">{eyebrow}</p> : null}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle ? <p className="text-slate-600 text-base md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

export function Hero({ brand, platformConfig }) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-teal-800" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#7c3aed,_transparent_35%)]" />
      <div className="container relative py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center" id="contenido">
        <div className="space-y-7 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-300" /> {brand.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">Atención médica online, cercana y accesible para todos</h1>
          <p className="text-lg text-blue-100 max-w-xl">Consulta con profesionales de salud desde donde estés. Nutrición, psicología, psiquiatría, fisioterapia, odontología y dermatología en una sola plataforma.</p>
          <div className="flex flex-wrap gap-3">
            <a href={brand.links.schedule} className="rounded-xl bg-emerald-300 text-blue-950 px-6 py-3 font-semibold hover:bg-emerald-200 transition">Agendar consulta</a>
            <a href={brand.links.plans} className="rounded-xl bg-white/10 border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition">Ver planes</a>
          </div>
        </div>

        <div className="bg-white/95 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/40">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.12em]">Modelo de plataforma</p>
          <h3 className="text-2xl font-bold mt-2">Infraestructura clínica escalable</h3>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>✔ Split de ingresos configurable: {platformConfig.revenueSplit.platformPercent}% plataforma / {platformConfig.revenueSplit.professionalPercent}% profesional.</p>
            <p>✔ Integración activa con {platformConfig.scheduleProvider} y lista para calendarios externos.</p>
            <p>✔ Arquitectura enfocada en experiencia segura, fluida y confiable para pacientes y profesionales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Specialties({ specialties }) {
  return specialties.map((item) => {
    const Icon = item.icon;
    return (
      <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
        <div className="h-11 w-11 rounded-xl bg-cyan-100 text-cyan-700 grid place-items-center"><Icon className="h-5 w-5" /></div>
        <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
        <p className="text-slate-600 mt-2">{item.description}</p>
        <a href={item.cta} className="inline-flex items-center gap-1 text-blue-700 font-semibold mt-4">Agendar <ChevronRight className="h-4 w-4" /></a>
      </article>
    );
  });
}

export function MetricCards({ metrics }) {
  return metrics.map((metric) => (
    <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-1" />
      <p className="font-medium text-slate-700">{metric}</p>
    </div>
  ));
}
