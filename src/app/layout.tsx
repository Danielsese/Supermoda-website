import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Supermoda Online | Catálogos Virtuales & Emprendimiento de Moda",
  description:
    "Cumple tus sueños vendiendo por catálogo ropa femenina, masculina, calzado y belleza. Gana hasta el 30% de comisiones trabajando desde casa con Supermoda Online.",
  keywords: [
    "supermoda online",
    "ventas por catalogo",
    "ropa femenina",
    "calzado colombia",
    "catalogos virtuales",
    "emprender",
    "ganar dinero extra",
    "belleza y salud",
  ],
  authors: [{ name: "Supermoda Online" }],
  openGraph: {
    title: "Supermoda Online | Emprende Vendiendo por Catálogo",
    description:
      "Gana dinero extra hasta el 30% vendiendo ropa, calzado y belleza por catálogo virtual sin salir de casa.",
    url: "https://supermodaonline.com",
    siteName: "Supermoda Online",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg select-none">
        {children}
      </body>
    </html>
  );
}
