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
  heroImages: ["/hero/1.png", "/hero/2.png", "/hero/3.png", "/hero/4.png"],
  hero: {
    ...{
      headline: "Menos regaños, más resultados.",
      subtitle: "Planes de nutrición realistas, ricos y sostenibles para bajar grasa, cuidar tu salud hormonal y volver a disfrutar la comida sin culpa.",
      cta: { label: "Agendar consulta", href: "https://marcogalindo.setmore.com/" },
    },
    images: ["/hero/1.png", "/hero/2.png", "/hero/3.png", "/hero/4.png"],
  },
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
  instagramEmbeds: [
    "https://www.instagram.com/p/DQsrp-BDE8f/",
    "https://www.instagram.com/p/DQaqDghDO1_/",
    "https://www.instagram.com/p/DPVGGGWDJJX/",
  ],
  instagramFeedIframeSrc: "",
  posts: [
    {
      title: "Ayuno: lo bueno y lo malo",
      date: "2025",
      url: "https://www.patreon.com/posts/ayuno-lo-bueno-y-142436828",
      tags: ["ayuno", "educación"],
    },
    {
      title: "Cómo construir tu plato ideal",
      date: "2025",
      url: "https://www.patreon.com/posts/como-construir-138143987",
      tags: ["guía", "hábitos"],
    },
    {
      title: "La proteína: el macronutriente que más te ayuda",
      date: "2025",
      url: "https://www.patreon.com/posts/la-proteina-el-y-136889386",
      tags: ["proteína", "recomposición"],
    },
    { title: "Próximamente: guía de compras inteligentes", date: "Pronto", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
    { title: "Próximamente: snacks sin culpa", date: "Pronto", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
    { title: "Próximamente: cómo organizar tus comidas", date: "Pronto", url: "https://patreon.com/LaNutriTia", tags: ["pronto"] },
  ],
};
