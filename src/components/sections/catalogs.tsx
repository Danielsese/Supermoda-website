"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react";

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
      category: "Moda Femenina",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/CATALOGO-RYOCCO-C-4.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/ry.png",
    },
    {
      brand: "GIANNI GARETTI",
      name: "Gianni Garetti - Campaña 4",
      category: "Calzado & Accesorios",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-DMN-GMM-WOM-C-4.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/Gianni-garetti.png",
    },
    {
      brand: "ST.EVEN",
      name: "St. Even VPC 2026",
      category: "Lencería",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-VPC-2026-1.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even_.png",
    },
    {
      brand: "T&T",
      name: "T&T Fuerza Femenina",
      category: "Ropa Femenina",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/FUERZA-FEMENINA-TT-2.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/TT.png",
    },
    {
      brand: "ST.EVEN ELEMENTAL",
      name: "St. Even Elemental 2026",
      category: "Básicos",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/CATALOGO-ELEMENTAL-2026.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/st.even-2.png",
    },
    {
      brand: "EBBA",
      name: "Ebba - Verano Vibrante 2026",
      category: "Playa & Resort",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/VERANO-VIBRANTE-2026-EBBA.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/ebba.png",
    },
    {
      brand: "BATA",
      name: "Bata Madres Adultos - C2",
      category: "Calzado",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/BATA-MADRES-ADULTOS_C-2.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/04/bata-adulto.png",
    },
    {
      brand: "PROVÓCAME",
      name: "Catálogo Provócame - C5",
      category: "Lencería Sensual",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/PROVOCAME-C-5.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/prov.png",
    },
    {
      brand: "YANBAL",
      name: "Yanbal - Campaña 5",
      category: "Cosmética",
      pdfUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/YANBAL-C-5.pdf",
      imageUrl: "https://supermodaonline.com/wp-content/uploads/2026/05/ym.png",
    },
  ];

  return (
    <section id="descargas" className="py-32 lg:py-40 bg-card-bg transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-6">
            Descargas
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-8">
            Catálogos Virtuales
          </h2>
          <p className="font-sans text-base text-fg/50 leading-relaxed max-w-[50ch]">
            Explora y descarga de forma gratuita los catálogos oficiales para compartirlos con tus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {catalogs.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-8 border border-card-border p-8 flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={`${item.brand} Logo`}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  unoptimized
                />
              </div>

              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-fg/30 block mb-3">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl font-normal text-fg mb-2">
                {item.brand}
              </h3>
              <p className="font-sans text-sm text-fg/50 mb-8">
                {item.name}
              </p>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full font-sans font-medium text-sm rounded-full py-4 border border-card-border hover:border-accent-600 hover:text-accent-600 transition-all cursor-pointer"
              >
                <DownloadSimple className="w-4 h-4" />
                Descargar PDF
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
