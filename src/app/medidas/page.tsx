"use client";

import { useState } from "react";
import { Search, Ruler, MessageCircle, ZoomIn, Info, X } from "lucide-react";
import Image from "next/image";

export default function Medidas() {
  const charts = [
    {
      name: "St. Even",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/steven.jpg",
      category: "Lencería & Pijamas",
      description: "Tabla de tallas oficial de St. Even para ropa interior, pijamas y prendas de control.",
    },
    {
      name: "T&T Jeans",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/tyt.jpg",
      category: "Jeans & Moda Femenina",
      description: "Guía de medidas oficial para jeans, pantalones y blusas de la marca T&T.",
    },
    {
      name: "Punto Aparte",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/punto-aparte.jpg",
      category: "Moda Femenina",
      description: "Tabla de tallas de Punto Aparte para blusas, vestidos y conjuntos.",
    },
    {
      name: "Minka",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/minka.jpg",
      category: "Moda Femenina",
      description: "Guía de medidas oficial de Minka para blusas y vestidos.",
    },
    {
      name: "Dominio",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/dominio.jpg",
      category: "Moda Masculina",
      description: "Medidas oficiales de camisas, camisetas y pantalones para caballeros de marca Dominio.",
    },
    {
      name: "WOM",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/wom.jpg",
      category: "Calzado & Accesorios",
      description: "Guía de tallas y equivalencias para calzado de marca WOM.",
    },
    {
      name: "D'Luna",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/dluna.jpg",
      category: "Calzado Femenino",
      description: "Tabla de equivalencia en centímetros de calzado para dama D'Luna.",
    },
    {
      name: "Blue Navigation",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/blu.jpg",
      category: "Moda Casual",
      description: "Guía de medidas oficial de Blue Navigation.",
    },
    {
      name: "Atelier",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/atelier.jpg",
      category: "Moda Femenina",
      description: "Guía de tallas de Atelier para prendas de vestir y vestidos de fiesta.",
    },
    {
      name: "Bata",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/bata.jpg",
      category: "Calzado Familiar",
      description: "Tabla de equivalencias y medidas oficiales en centímetros para calzado Bata.",
    },
    {
      name: "Unusual",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/unusual.jpg",
      category: "Moda Juvenil",
      description: "Guía oficial de Unusual para vestidos, tops y chaquetas juveniles.",
    },
    {
      name: "Bartolomeo",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/bartolomeo-talla.jpg",
      category: "Moda Masculina",
      description: "Tabla de tallas de Bartolomeo para camisas y bermudas de caballero.",
    },
    {
      name: "Ryocco",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/RYOCCO.jpg",
      category: "Moda Deportiva & Casual",
      description: "Tabla de medidas y tallaje deportivo y casual para la marca Ryocco.",
    },
    {
      name: "Ebba",
      image: "https://supermodaonline.com/wp-content/uploads/2024/01/EBBA.jpg",
      category: "Moda Femenina",
      description: "Guía de tallas oficial de Ebba para calzado y vestidos.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChart, setSelectedChart] = useState<typeof charts[0] | null>(null);

  const filteredCharts = charts.filter((chart) =>
    chart.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chart.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

      {/* Header Info */}
      <div className="max-w-3xl mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-5">
          <Ruler className="h-3.5 w-3.5 text-primary" /> Asegura tu talla ideal
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Tablas de medidas oficiales
        </h1>
        <p className="text-lg text-foreground/65 leading-relaxed">
          Evita devoluciones y asegura tu talla perfecta. Cada marca tiene sus propias especificaciones de tallaje provistas por el fabricante. Busca tu marca abajo para revisar su tabla de medidas.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mb-14 relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-foreground/45">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Buscar tabla de medidas por marca..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-full text-base shadow-sm transition-[box-shadow,border-color] duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          aria-label="Buscar tabla de medidas"
        />
      </div>

      {/* Grid of Sizing Tables */}
      {filteredCharts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharts.map((chart) => (
            <div
              key={chart.name}
              className="lift flex flex-col justify-between overflow-hidden bg-card border border-border rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
            >
              {/* Image Frame */}
              <button
                type="button"
                aria-label={`Ampliar tabla de medidas de ${chart.name}`}
                className="relative aspect-[3/4] w-full overflow-hidden bg-muted/20 cursor-zoom-in group text-left"
                onClick={() => setSelectedChart(chart)}
              >
                <Image
                  src={chart.image}
                  alt={`Tabla de medidas ${chart.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[600ms] [transition-timing-function:var(--ease-out-quart)] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15">
                  <div className="rounded-full bg-card/95 p-3 shadow-lg opacity-0 scale-90 transition-all duration-300 [transition-timing-function:var(--ease-out-quart)] group-hover:opacity-100 group-hover:scale-100">
                    <ZoomIn className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </button>

              {/* Content metadata */}
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                  {chart.category}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mt-1.5 mb-2">
                  {chart.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  {chart.description}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedChart(chart)}
                    className="press flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-bold text-on-primary shadow-sm shadow-primary/20 hover:bg-primary-strong"
                  >
                    <ZoomIn className="h-4 w-4" />
                    <span>Ampliar tabla</span>
                  </button>
                  <a
                    href={chart.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-muted hover:border-foreground/20"
                  >
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border/80">
          <p className="text-lg text-foreground/50 font-medium">
            No encontramos guías de medidas para esa marca.
          </p>
        </div>
      )}

      {/* Lightbox / Modal Viewer */}
      {selectedChart && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Tabla de medidas de ${selectedChart.name}`}
          onClick={() => setSelectedChart(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/75 backdrop-blur-sm animate-[reveal-up_0.25s_var(--ease-out-expo)]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card rounded-[1.75rem] overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
          >

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="font-display text-2xl font-bold">{selectedChart.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mt-0.5">{selectedChart.category}</p>
              </div>
              <button
                onClick={() => setSelectedChart(null)}
                aria-label="Cerrar"
                className="press rounded-full w-10 h-10 flex items-center justify-center bg-muted text-foreground hover:bg-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 overflow-y-auto p-4 bg-muted/40 flex items-center justify-center min-h-[400px]">
              <div className="relative w-full aspect-[3/4] max-h-[60vh]">
                <Image
                  src={selectedChart.image}
                  alt={`Tabla de medidas ${selectedChart.name} ampliada`}
                  fill
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-2.5 items-start text-xs text-foreground/60 leading-relaxed max-w-sm">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>¿Dudas con la talla? Recuerda que puedes enviarnos tus medidas (busto, cintura, cadera) por WhatsApp y te ayudamos a elegir.</span>
              </div>
              <a
                href={`https://wa.me/573187120049?text=Hola,%20tengo%20una%20duda%20sobre%20la%20tabla%20de%20medidas%20de%20la%20marca%20${encodeURIComponent(selectedChart.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
