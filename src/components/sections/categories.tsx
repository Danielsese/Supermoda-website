"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react";

export function Categories() {
  const categories = [
    {
      title: "Moda & Lencería Femenina",
      description: "Diseños que inspiran seguridad y elegancia para el día a día.",
      image: "/hero-fashion.png",
      span: "lg:col-span-8",
      height: "h-[350px] lg:h-[420px]",
      overlay: "from-black/70 via-black/40 to-transparent",
      textLight: true,
    },
    {
      title: "Calzado Familiar",
      description: "Confort y estilo de vanguardia para dar cada paso con firmeza.",
      image: "/shoes-category.png",
      span: "lg:col-span-4",
      height: "h-[350px] lg:h-[420px]",
      overlay: "from-bg/95 via-bg/40 to-transparent dark:from-bg/95 dark:via-bg/40",
      textLight: false,
    },
    {
      title: "Belleza & Salud",
      description: "Cuidado orgánico y cosmética que realzan tu bienestar natural.",
      image: "/beauty-category.png",
      span: "lg:col-span-4",
      height: "h-[350px] lg:h-[420px]",
      overlay: "from-bg/95 via-bg/40 to-transparent dark:from-bg/95 dark:via-bg/40",
      textLight: false,
    },
    {
      title: "Hogar & Vacaciones",
      description: "Detalles artesanales y textiles premium para crear espacios cálidos.",
      image: "/home-category.png",
      span: "lg:col-span-8",
      height: "h-[350px] lg:h-[420px]",
      overlay: "from-black/70 via-black/40 to-transparent",
      textLight: true,
    },
  ];

  return (
    <section id="catalogos" className="py-24 bg-bg border-t border-card-border transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-4">
              Nuestras Líneas de Catálogo
            </h2>
            <p className="font-sans text-base text-fg/60 leading-relaxed max-w-[45ch]">
              Explora las categorías de alta demanda que podrás comercializar. Cada mes lanzamos colecciones frescas adaptadas al mercado.
            </p>
          </div>
          <div className="flex items-center gap-2 text-cobalt-500 font-sans text-sm font-bold uppercase tracking-wider cursor-default">
            Explora Abajo <ArrowDown weight="bold" className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`${cat.span} ${cat.height} group relative rounded-2xl overflow-hidden border border-card-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-8 md:p-10 cursor-pointer`}
            >
              {/* Image Frame */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Contrast Scrim / Tint */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.overlay} transition-opacity duration-300`}
              />

              {/* Text Information Container */}
              <div className="relative z-10">
                <h3
                  className={`font-serif text-2xl md:text-3xl font-semibold mb-2 ${
                    cat.textLight ? "text-white" : "text-fg"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`font-sans text-sm max-w-[35ch] leading-relaxed transition-all duration-300 ${
                    cat.textLight ? "text-white/70" : "text-fg/60"
                  }`}
                >
                  {cat.description}
                </p>
              </div>

              {/* Interactive border outline highlight */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cobalt-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
