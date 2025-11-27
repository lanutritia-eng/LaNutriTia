import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });
const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", weight: ["600", "700", "800"] });
export const metadata = {
  title: "La Nutri Tía | Nutrición holística sin culpas",
  description: "Tu nutrición, sin regaños. Agenda hoy y da el primer paso.",
  openGraph: {
    title: "La Nutri Tía",
    description: "Come rico, baja de peso y transforma tu relación con la comida.",
    url: "https://example.com",
    siteName: "La Nutri Tía",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
