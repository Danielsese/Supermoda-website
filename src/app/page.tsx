import {
  ArrowRight,
  BookOpen,
  Ruler,
  ShieldCheck,
  DollarSign,
  Truck,
  ShoppingBag,
  Heart,
  MessageCircle,
  Mail,
  Sparkles,
  Quote,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const brands = [
    { name: "Provocame", logo: "https://supermodaonline.com/wp-content/uploads/2026/05/prov.png" },
    { name: "Yanbal", logo: "https://supermodaonline.com/wp-content/uploads/2026/05/ym.png" },
    { name: "Ryocco", logo: "https://supermodaonline.com/wp-content/uploads/2026/05/ry.png" },
    { name: "Unusual", logo: "https://supermodaonline.com/wp-content/uploads/2026/05/un.png" },
    { name: "Bartolomeo", logo: "https://supermodaonline.com/wp-content/uploads/2026/04/bartolomeo.png" },
    { name: "St. Even", logo: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even_.png" },
    { name: "Ebba", logo: "https://supermodaonline.com/wp-content/uploads/2026/04/ebba.png" },
    { name: "T&T", logo: "https://supermodaonline.com/wp-content/uploads/2026/04/TT.png" },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Ganancia hasta el 30%",
      body: "Obtén comisiones que van del 20% al 30% sobre el precio de venta en todos los catálogos.",
    },
    {
      icon: ShieldCheck,
      title: "Marcas reconocidas",
      body: "Vende marcas líderes y de alta confianza como Yanbal, St. Even, Ryocco y Unusual.",
    },
    {
      icon: ShoppingBag,
      title: "Pedido mínimo flexible",
      body: "Inicia tu despacho de contado con un pedido mínimo de tan solo 4 referencias del catálogo.",
    },
    {
      icon: Truck,
      title: "Envíos a nivel nacional",
      body: "Despachamos tus pedidos directamente desde nuestras oficinas en Cali hasta tu hogar.",
    },
  ];

  const testimonials = [
    "https://supermodaonline.com/wp-content/uploads/2025/01/Blury-Testimonial-Instagram-Post-300x214.png",
    "https://supermodaonline.com/wp-content/uploads/2025/01/4-300x214.png",
    "https://supermodaonline.com/wp-content/uploads/2025/01/2-300x214.png",
    "https://supermodaonline.com/wp-content/uploads/2025/01/5-300x214.png",
  ];

  return (
    <div className="flex flex-col gap-28 pb-4">
      {/* Hero */}
      <section className="relative flex min-h-[82vh] w-full items-center overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80"
          alt="Mujer elegante de compras con bolsas de moda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 py-24 text-on-ink sm:px-6 lg:px-8">
          <span className="reveal reveal-1 mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Emprende sin salir de casa
          </span>

          <h1 className="reveal reveal-2 font-display max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Emprende y cumple
            <br />
            tus sueños <span className="text-secondary">hoy</span>
          </h1>

          <p className="reveal reveal-3 mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Vende por catálogo ropa femenina, masculina, infantil, calzado,
            belleza y salud. Gana dinero extra de hasta el{" "}
            <strong className="font-bold text-white">30% sobre todo lo que vendas</strong>.
          </p>

          <div className="reveal reveal-4 mt-11 flex flex-wrap gap-4">
            <a
              href="/catalogos"
              className="press inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-on-primary shadow-xl shadow-primary/30 hover:bg-primary-strong"
            >
              <BookOpen className="h-5 w-5" />
              <span>Ver catálogos virtuales</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/medidas"
              className="press inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20"
            >
              <Ruler className="h-5 w-5" />
              <span>Tablas de medidas</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits — editorial, not a 4-up icon-card grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              El modelo Supermoda
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Las herramientas para construir tu propio negocio
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/65">
              Te damos un portafolio de marcas reconocidas y el respaldo
              logístico para que vender por catálogo sea simple, rentable y
              desde casa.
            </p>
            <a
              href="/catalogos"
              className="press mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background hover:bg-foreground/90"
            >
              <BookOpen className="h-4 w-4" />
              <span>Empezar ahora</span>
            </a>
          </div>

          <ul className="divide-y divide-border">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className="group flex items-start gap-6 py-7 first:pt-0"
              >
                <span className="font-display mt-0.5 w-10 shrink-0 text-2xl font-semibold text-primary/35 transition-colors duration-300 group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2.5">
                    <b.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {b.title}
                    </h3>
                  </div>
                  <p className="max-w-xl leading-relaxed text-foreground/65">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video of the week */}
      <section className="border-y border-border bg-muted/40 py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="flex-1">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Novedades de la semana
              </p>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Descubre el catálogo de la semana
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/65">
                Mira nuestro video semanal con los productos en tendencia,
                nuevos lanzamientos en moda, accesorios y consejos de belleza
                pensados para impulsar tus ventas.
              </p>
              <a
                href="/catalogos"
                className="press mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-strong"
              >
                <BookOpen className="h-4 w-4" />
                <span>Explorar catálogos</span>
              </a>
            </div>

            <div className="flex w-full flex-1 justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-[2rem] border border-border bg-ink p-2 shadow-2xl shadow-primary/10">
                <video
                  className="h-full w-full rounded-[1.5rem] object-cover"
                  preload="metadata"
                  controls
                  playsInline
                >
                  <source
                    src="https://supermodaonline.com/wp-content/uploads/2025/01/getmyfb.com_1738079409589.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand wall */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Catálogos &amp; marcas líderes
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Tus clientes aman comprar estas marcas prestigiosas, nacionales e
            internacionales.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center gap-4 bg-card p-8 transition-colors duration-300 hover:bg-muted/60"
            >
              <div className="relative h-24 w-24">
                <Image
                  src={brand.logo}
                  alt={`Marca ${brand.name}`}
                  fill
                  sizes="96px"
                  className="object-contain opacity-90 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/80">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/catalogos"
            className="press inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 text-sm font-bold text-primary hover:bg-primary hover:text-on-primary"
          >
            <span>Explorar todos los catálogos virtuales</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-primary/10 bg-primary/5 py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                <Quote className="h-4 w-4 fill-primary" />
                Opiniones reales
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Historias de quienes ya emprenden
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((src, index) => (
              <div
                key={index}
                className="lift relative aspect-[300/214] overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl"
              >
                <Image
                  src={src}
                  alt={`Testimonio de cliente ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="nosotros"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 text-center sm:px-6 lg:px-8"
      >
        <span className="mb-6 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
          <Heart className="h-6 w-6 fill-primary" />
        </span>
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Sobre nosotros
        </h2>
        <p className="mt-7 text-lg leading-relaxed text-foreground/70">
          Iniciamos operaciones en <strong className="font-bold text-primary">2010</strong> con
          el objetivo de llevar moda y estilo de la mejor calidad directamente a
          los hogares, brindando además una oportunidad de negocio independiente
          a miles de personas emprendedoras en Colombia. Hoy somos un
          distribuidor multimarca líder, consolidado desde nuestra sede en Cali,
          despachando progreso a todo el país.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-12 text-center text-on-ink shadow-2xl shadow-primary/10 md:p-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-ink/0 to-ink" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              ¿Lista para comenzar a ganar?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              Contáctanos hoy por WhatsApp. Nuestro equipo en Cali te guía paso
              a paso para realizar tus pedidos virtuales.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/573187120049"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Escríbenos por WhatsApp</span>
              </a>
              <a
                href="mailto:ventas@supermodaonline.com"
                className="press inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
                <span>Enviar un correo</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
