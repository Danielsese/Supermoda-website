import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supermoda Online | Venta por Catálogo Colombia",
  description:
    "Emprende y gana hasta el 30% vendiendo por catálogo Ropa, Calzado, Hogar, Belleza y Lencería. Ubicados en Cali, Colombia.",
};

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/catalogos", label: "Catálogos Virtuales" },
  { href: "/medidas", label: "Tablas de Medidas" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${hanken.variable} ${bricolage.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a
              href="/"
              aria-label="Supermoda Online, inicio"
              className="relative flex h-12 w-40 items-center overflow-hidden"
            >
              <Image
                src="https://supermodaonline.com/wp-content/uploads/2017/02/cropped-LOGO-SMOL-2.jpg"
                alt="Supermoda Online"
                fill
                priority
                className="object-contain object-left"
                sizes="160px"
              />
            </a>

            <nav className="hidden items-center gap-9 text-sm font-semibold tracking-tight lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-foreground/80 transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/573187120049"
                target="_blank"
                rel="noopener noreferrer"
                className="press hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Hacer Pedido</span>
              </a>
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-24 border-t border-border bg-muted/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="flex flex-col gap-4">
                <div className="relative mb-1 h-10 w-36 overflow-hidden">
                  <Image
                    src="https://supermodaonline.com/wp-content/uploads/2017/02/cropped-LOGO-SMOL-2.jpg"
                    alt="Supermoda Online"
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
                  Emprende y cumple tus sueños con Catálogos Supermoda Online.
                  Genera ganancias de hasta el 30% vendiendo moda, calzado,
                  belleza y hogar sin salir de casa.
                </p>
                <div className="mt-2 flex gap-3">
                  <a
                    href="https://www.facebook.com/SuperModaOnline"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground/50">
                  Enlaces Rápidos
                </h4>
                <ul className="space-y-3 text-sm font-medium text-foreground/75">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground/50">
                  Contacto
                </h4>
                <ul className="space-y-4 text-sm text-foreground/75">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <span>
                      Cra 62A # 7-48 Of. 201
                      <br />
                      Cali, Colombia
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <span>602 401 3221</span>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                    <div className="flex flex-col gap-0.5">
                      <a
                        href="https://wa.me/573187120049"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-emerald-700"
                      >
                        318 712 0049
                      </a>
                      <a
                        href="https://wa.me/573165269267"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-emerald-700"
                      >
                        316 526 9267
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <a
                      href="mailto:ventas@supermodaonline.com"
                      className="transition-colors hover:text-primary"
                    >
                      ventas@supermodaonline.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground/50">
                  Horarios de Atención
                </h4>
                <ul className="space-y-4 text-sm text-foreground/75">
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        Lunes a Viernes
                      </p>
                      <p className="mt-0.5 text-xs text-foreground/55">
                        9:00 AM a 6:00 PM
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Sábados</p>
                      <p className="mt-0.5 text-xs text-foreground/55">
                        9:00 AM a 1:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 border-t border-border pt-8 text-center text-xs text-foreground/45">
              © {new Date().getFullYear()} Supermoda Online. Todos los derechos
              reservados. Cali, Colombia.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
