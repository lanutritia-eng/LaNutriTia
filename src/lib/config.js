export const BRAND = {
  name: "La Nutri Tía",
  email: "lanutritia@gmail.com",
  instagram: "https://instagram.com/lanutritia",
  whatsapp: "https://wa.me/525570483984",
  setmore: "https://marcogalindo.setmore.com/",
  setmoreReviews: "https://marcogalindo.setmore.com/reviews",
  patreon: {
    profile: "https://patreon.com/LaNutriTia",
    tiers: {
      basica: "https://patreon.com/LaNutriTia",
      pro: "https://patreon.com/LaNutriTia",
      vip: "https://www.patreon.com/join/lanutritia/checkout?tierId=ZZZZZ",
    },
  },
  colors: {
    primary: "#7a4df3",
  },
  hero: {
    headline: "Acompañamiento personalizado que sí cabe en tu vida",
    subtitle:
      "Planes realistas, recetas ricas y seguimiento cercano para que bajes grasa, cuides tu salud hormonal y disfrutes comer sin culpa.",
    bullets: [
      "Planes hechos a medida con esferas por color",
      "Seguimiento semanal con ajustes claros",
      "Recetas económicas, de la milpa y sin culpas",
    ],
    cta: { label: "Agendar ahora", href: "https://marcogalindo.setmore.com/" },
  },
  heroImages: ["/hero/1.svg", "/hero/2.svg", "/hero/3.svg", "/hero/4.svg"],
  featureFlags: {
    altHero: false,
  },
  plans: {
    singles: [
      { name: "Consulta Online", price: 550, desc: "Videollamada 50-60 min + plan personalizado" },
      { name: "Consulta Presencial", price: 650, desc: "Consulta en clínica 50-60 min + plan personalizado" },
    ],
    memberships: [
      {
        name: "Básica",
        price: 299,
        features: ["Dieta mensual sin consulta", "Recetario económico del mes", "Acceso a comunidad"],
        ctaHref: "https://patreon.com/LaNutriTia",
        type: "patreon",
      },
      {
        name: "Pro",
        price: 499,
        features: ["Todo en Básica", "1 consulta online al mes", "Ajustes quincenales", "Prioridad en mensajes"],
        ctaHref: "https://patreon.com/LaNutriTia",
        type: "patreon",
      },
      {
        name: "VIP",
        price: 799,
        features: ["Todo en Pro", "2 consultas online al mes", "Plan de entrenamiento", "Revisión semanal"],
        ctaHref: "https://marcogalindo.setmore.com/",
        type: "setmore",
      },
    ],
  },
  instagramEmbeds: ["https://www.instagram.com/p/DQsrp-BDE8f/"],
  instagramFeedIframeSrc: "",
  posts: [
    {
      title: "Ayuno: lo bueno y lo malo",
      date: "2025-11-25",
      url: "https://www.patreon.com/posts/ayuno-lo-bueno-y-142436828",
      tags: ["ayuno", "educación"],
    },
    {
      title: "Cómo construir tu plato ideal (fácil)",
      date: "2025-11-22",
      url: "https://www.patreon.com/posts/como-construir-138143987",
      tags: ["guías", "milpa"],
    },
    {
      title: "Proteína: el macronutriente que más te ayuda",
      date: "2025-11-18",
      url: "https://www.patreon.com/posts/la-proteina-el-y-136889386",
      tags: ["proteína", "recomp"],
    },
    { title: "Pronto: Artículo #4", date: "—", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
    { title: "Pronto: Artículo #5", date: "—", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
    { title: "Pronto: Artículo #6", date: "—", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
  ],
};
