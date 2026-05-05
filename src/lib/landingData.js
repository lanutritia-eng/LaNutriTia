import {
  Activity,
  Brain,
  Dumbbell,
  Leaf,
  Smile,
  Stethoscope,
} from "lucide-react";

export const BRAND = {
  name: "HealthPass",
  tagline: "Salud digital para todo México",
  mission:
    "Hacer que la atención médica de calidad sea accesible para todos, sin importar dónde se encuentren. Creemos en un mundo donde la distancia no sea una barrera para recibir el cuidado que mereces.",
  links: {
    schedule: "#agenda",
    plans: "#planes",
    professionals: "#profesionales",
    logo: "/logo.svg",
  },
};

export const trustMetrics = [
  "+5,000 pacientes atendidos",
  "Consultas online seguras",
  "Profesionales verificados",
  "Planes flexibles en MXN",
];

export const specialties = [
  {
    name: "Nutrición",
    description: "Mejora hábitos, alimentación y bienestar metabólico con acompañamiento experto.",
    icon: Leaf,
    cta: "#agenda",
  },
  {
    name: "Psicología",
    description: "Atención emocional y herramientas prácticas para tu salud mental diaria.",
    icon: Brain,
    cta: "#agenda",
  },
  {
    name: "Psiquiatría",
    description: "Evaluación clínica especializada y seguimiento para tratamientos integrales.",
    icon: Stethoscope,
    cta: "#agenda",
  },
  {
    name: "Fisioterapia",
    description: "Recupera movilidad, reduce dolor y fortalece tu cuerpo con planes personalizados.",
    icon: Dumbbell,
    cta: "#agenda",
  },
  {
    name: "Dentista",
    description: "Salud bucal preventiva y tratamientos odontológicos con orientación confiable.",
    icon: Smile,
    cta: "#agenda",
  },
  {
    name: "Dermatología",
    description: "Cuida tu piel con diagnóstico profesional y recomendaciones especializadas.",
    icon: Activity,
    cta: "#agenda",
  },
];

export const plans = [
  {
    name: "Plan Básico",
    consultations: 2,
    priceMXN: 899,
    benefits: ["2 consultas al mes", "Recordatorios automáticos", "Soporte por chat"],
  },
  {
    name: "Plan Plus",
    consultations: 4,
    priceMXN: 1699,
    benefits: ["4 consultas al mes", "Prioridad al agendar", "Resumen de seguimiento"],
  },
  {
    name: "Plan Integral",
    consultations: 6,
    priceMXN: 2399,
    benefits: ["6 consultas al mes", "Acompañamiento multidisciplinario", "Historial clínico centralizado"],
  },
  {
    name: "Plan Premium",
    consultations: 8,
    priceMXN: 2999,
    benefits: ["8 consultas al mes", "Atención preferente", "Panel de progreso avanzado"],
  },
];

export const platformConfig = {
  scheduleProvider: "Setmore Calendar",
  futureIntegrations: ["Google Calendar", "Microsoft Outlook"],
  revenueSplit: {
    platformPercent: 25,
    professionalPercent: 75,
  },
};
