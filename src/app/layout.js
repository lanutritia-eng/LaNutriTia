import "./globals.css";
export const metadata = {
  title: "La Nutri Tía | Nutrición holística sin culpas",
  description: "Planes personalizados, recetarios y acompañamiento real para transformar tu salud y relación con la comida.",
  metadataBase: new URL("https://lanutritia.com"),
  alternates: {
    canonical: "https://lanutritia.com",
  },
  openGraph: {
    title: "La Nutri Tía",
    description: "Come rico, baja de peso y transforma tu relación con la comida.",
    url: "https://lanutritia.com",
    siteName: "La Nutri Tía",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Nutri Tía",
    description: "Nutrición holística y sin culpas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
