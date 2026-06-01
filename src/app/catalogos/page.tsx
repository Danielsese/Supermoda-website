"use client";

import { useState } from "react";
import { Download, ExternalLink, MessageCircle, Search, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Catalogos() {
  const catalogs = [
    {
      name: "Provocame",
      campaign: "Campaña 5",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/05/PROVOCAME-C-5.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/05/prov.png",
      category: "Lencería & Ropa Interior",
    },
    {
      name: "Yanbal",
      campaign: "Campaña 5",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/05/YANBAL-C-5.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/05/ym.png",
      category: "Belleza, Cuidado & Joyería",
    },
    {
      name: "Ryocco",
      campaign: "Campaña 4",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/05/CATALOGO-RYOCCO-C-4.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/05/ry.png",
      category: "Moda Casual & Deporte",
    },
    {
      name: "Unusual",
      campaign: "Campaña 3",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/05/UNUSUAL-C-3.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/05/un.png",
      category: "Moda Femenina Juvenil",
    },
    {
      name: "Bartolomeo",
      campaign: "Campaña 3",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/BARTOLOMEO-C-3.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/bartolomeo.png",
      category: "Moda Masculina",
    },
    {
      name: "St. Even Vestidos de Baño",
      campaign: "Pijamas y Baño",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/ST-EVEN-BANO-PIJAMAS.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even-pijamas.png",
      category: "Lencería & Baño",
    },
    {
      name: "Bata Adultos",
      campaign: "Campaña 2",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/BATA-MADRES-ADULTOS_C-2.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/bata-adulto.png",
      category: "Calzado Adulto",
    },
    {
      name: "Bata Kids",
      campaign: "Campaña 2",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/BATA-MADRES-KIDS_C-2.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/bata-kids.png",
      category: "Calzado Infantil",
    },
    {
      name: "Ebba",
      campaign: "Verano Vibrante 2026",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/VERANO-VIBRANTE-2026-EBBA.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/ebba.png",
      category: "Moda & Accesorios",
    },
    {
      name: "Gianni Garetti",
      campaign: "Campaña 4",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-DMN-GMM-WOM-C-4.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/Gianni-garetti.png",
      category: "Calzado & Accesorios",
    },
    {
      name: "St. Even",
      campaign: "Colección 2026-1",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-VPC-2026-1.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even_.png",
      category: "Ropa Interior Femenina",
    },
    {
      name: "St. Even Elemental",
      campaign: "Colección 2026",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-ELEMENTAL-2026.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even-2.png",
      category: "Básicos & Ropa Deportiva",
    },
    {
      name: "T&T",
      campaign: "Fuerza Femenina",
      pdf: "https://supermodaonline.com/wp-content/uploads/2026/04/FUERZA-FEMENINA-TT-2.pdf",
      image: "https://supermodaonline.com/wp-content/uploads/2026/04/TT.png",
      category: "Moda Femenina & Jeans",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCatalogs = catalogs.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

      {/* Header Info */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-5">
          <Sparkles className="h-3.5 w-3.5 fill-primary" /> Descargas de campaña
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Nuestros catálogos virtuales
        </h1>
        <p className="text-lg text-foreground/65 leading-relaxed">
          Consulta, descarga y comparte nuestros catálogos digitales. Descubre las últimas colecciones en moda, lencería, calzado y belleza de prestigiosas marcas nacionales.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mb-14 relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-foreground/45">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Buscar catálogo por marca o categoría..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-full text-base shadow-sm transition-[box-shadow,border-color] duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          aria-label="Buscar catálogo"
        />
      </div>

      {/* Grid List */}
      {filteredCatalogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCatalogs.map((catalog) => (
            <div
              key={catalog.name}
              className="lift group flex flex-col justify-between overflow-hidden bg-card border border-border rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-muted/30">
                <Image
                  src={catalog.image}
                  alt={`Portada del catálogo ${catalog.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[600ms] [transition-timing-function:var(--ease-out-quart)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                    {catalog.category}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mt-1.5 mb-1">
                    {catalog.name}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/45 mb-6">
                    {catalog.campaign}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={catalog.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary py-3 text-sm font-bold text-on-primary shadow-sm shadow-primary/20 hover:bg-primary-strong"
                  >
                    <Download className="h-4 w-4" />
                    <span>Descargar PDF</span>
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={catalog.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background py-2.5 text-xs font-semibold text-foreground/80 hover:bg-muted hover:border-foreground/20"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Ver online</span>
                    </a>
                    <a
                      href={`https://wa.me/573187120049?text=Hola,%20me%20interesa%20hacer%20un%20pedido%20de%20catálogo%20de%20la%20marca%20${encodeURIComponent(catalog.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Pedir</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border/80">
          <p className="text-lg text-foreground/50 font-medium">
            No encontramos catálogos para tu búsqueda. Intenta con otros términos.
          </p>
        </div>
      )}

      {/* Quick Terms & Resell Model Banner */}
      <div className="mt-20 p-8 md:p-12 bg-ink text-on-ink rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/10">
        <div className="max-w-2xl text-left">
          <h3 className="font-display text-2xl font-bold mb-3">¿Eres cliente de Cali o a nivel nacional?</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Descarga y revisa los catálogos en PDF directamente desde tu celular. Para pedidos o información sobre los fletes por catálogo, envíanos la lista de referencias por WhatsApp. El pedido mínimo es de solo 4 referencias.
          </p>
        </div>
        <a
          href="https://wa.me/573187120049"
          target="_blank"
          rel="noopener noreferrer"
          className="press shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Consultar fletes</span>
        </a>
      </div>

    </div>
  );
}
