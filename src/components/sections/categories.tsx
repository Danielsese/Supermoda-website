"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Categories() {
  const categories = [
    {
      title: "Moda & Lencería Femenina",
      description: "Diseños que inspiran seguridad y elegancia.",
      image: "/hero-fashion.png",
      span: "lg:col-span-8",
      height: "h-[400px] lg:h-[500px]",
    },
    {
      title: "Calzado Familiar",
      description: "Confort y estilo para cada paso.",
      image: "/shoes-category.png",
      span: "lg:col-span-4",
      height: "h-[400px] lg:h-[500px]",
    },
    {
      title: "Belleza & Salud",
      description: "Cuidado orgánico y cosmética natural.",
      image: "/beauty-category.png",
      span: "lg:col-span-4",
      height: "h-[400px] lg:h-[500px]",
    },
    {
      title: "Hogar & Vacaciones",
      description: "Detalles premium para espacios cálidos.",
      image: "/home-category.png",
      span: "lg:col-span-8",
      height: "h-[400px] lg:h-[500px]",
    },
  ];

  return (
    <section id="lineas" className="py-32 lg:py-40 bg-bg transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-6">
            Colecciones
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-8">
            Nuestras Líneas
          </h2>
          <p className="font-sans text-base text-fg/50 leading-relaxed max-w-[50ch]">
            Explora las categorías de alta demanda. Cada mes lanzamos colecciones frescas adaptadas al mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className={`${cat.span} ${cat.height} group relative rounded-[2rem] overflow-hidden bg-neutral-100 flex flex-col items-center justify-center p-12 cursor-pointer border border-card-border`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-white mb-4">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-white/80 max-w-[30ch] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
