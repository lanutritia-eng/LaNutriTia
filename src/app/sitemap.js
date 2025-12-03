export default function sitemap() {
  const base = "https://lanutritia.com";
  return ["/", "/#reseñas", "/#servicios", "/#planes", "/#agenda", "/#faq", "/#contacto"].map((path) => ({
    url: `${base}${path.replace("/#", "/")}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}
