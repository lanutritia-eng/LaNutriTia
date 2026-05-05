import "./globals.css";

export const metadata = {
  title: "HealthPass | Plataforma de salud digital en México",
  description:
    "Consulta con profesionales de salud online: nutrición, psicología, psiquiatría, fisioterapia, odontología y dermatología.",
  metadataBase: new URL("https://healthpass.mx"),
  alternates: { canonical: "https://healthpass.mx" },
  openGraph: {
    title: "HealthPass",
    description: "Atención médica online, cercana y accesible para todos.",
    url: "https://healthpass.mx",
    siteName: "HealthPass",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthPass",
    description: "Plataforma de salud digital para México.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
