"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DownloadSimple, ArrowDown } from "@phosphor-icons/react";

interface CatalogItem {
  brand: string;
  name: string;
  category: string;
  pdfUrl: string;
  imageUrl: string;
}

export function Catalogs() {
  const catalogs: CatalogItem[] = [
    {
      brand: "RYOCCO",
      name: "Catálogo Ryocco - Campaña 4",
      category: "Moda Femenina & Tendencias",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/CATALOGO-RYOCCO-C-4.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/ry.png",
    },
    {
      brand: "GIANNI GARETTI",
      name: "Gianni Garetti - Campaña 4",
      category: "Moda, Calzado & Accesorios",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-DMN-GMM-WOM-C-4.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/Gianni-garetti.png",
    },
    {
      brand: "ST.EVEN",
      name: "St. Even VPC 2026",
      category: "Lencería & Ropa de Baño",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-VPC-2026-1.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even_.png",
    },
    {
      brand: "T&T",
      name: "T&T Fuerza Femenina",
      category: "Moda & Ropa Femenina",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/FUERZA-FEMENINA-TT-2.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/TT.png",
    },
    {
      brand: "ST.EVEN ELEMENTAL",
      name: "St. Even Elemental 2026",
      category: "Básicos & Ropa Confortable",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-ELEMENTAL-2026.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even-2.png",
    },
    {
      brand: "EBBA",
      name: "Ebba - Verano Vibrante 2026",
      category: "Colección Playa & Resort",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/VERANO-VIBRANTE-2026-EBBA.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/ebba.png",
    },
    {
      brand: "BATA",
      name: "Bata Madres Adultos - Campaña 2",
      category: "Calzado Familiar de Alta Calidad",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/BATA-MADRES-ADULTOS_C-2.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/bata-adulto.png",
    },
    {
      brand: "PROVÓCAME",
      name: "Catálogo Provócame - Campaña 5",
      category: "Lencería Sensual Premium",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/PROVOCAME-C-5.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/prov.png",
    },
    {
      brand: "YANBAL",
      name: "Yanbal - Campaña 5",
      category: "Cosmética & Cuidado Personal",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/YANBAL-C-5.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/ym.png",
    },
  ];

  return (
    <section id="descargas" className="py-32 lg:py-36 bg-card-bg border-t border-card-border transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20 text-left">
          <div className="text-cobalt-500 font-sans text-xs font-bold uppercase tracking-wider mb-3">
            Catálogos Interactivos
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-4">
            Catálogos Virtuales Listos para Descarga
          </h2>
          <p className="font-sans text-base text-fg/60 leading-relaxed max-w-[50ch]">
            Explora y descarga de forma gratuita los catálogos oficiales de nuestras marcas aliadas para empezar a enviarlos a tus clientes de inmediato.
          </p>
        </div>

        {/* 3-Column Luxury Grid for Catalogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {catalogs.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg border border-card-border hover:border-cobalt-500/30 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[460px] relative group"
            >
              {/* Cover Brand Logo Frame */}
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-white p-6 border border-card-border flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={`${item.brand} Logo`}
                  fill
                  className="object-contain p-6 group-hover:scale-102 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  unoptimized // Keep original PNG aspect and files
                />
              </div>

              {/* Details and Actions */}
              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-cobalt-500 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-fg leading-tight">
                    {item.brand}
                  </h3>
                  <p className="font-sans text-xs text-fg/40 font-semibold mt-1">
                    {item.name}
                  </p>
                </div>

                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full font-sans font-semibold text-sm rounded-full py-3 bg-cobalt-500 hover:bg-cobalt-600 active:scale-97 text-white transition-all cursor-pointer shadow-sm shadow-cobalt-500/10"
                >
                  <DownloadSimple weight="bold" className="w-4 h-4" />
                  Descargar Catálogo PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
