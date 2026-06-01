"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const testimonials: Testimonial[] = [
    {
      quote: "Gracias a los catálogos virtuales de Supermoda logré pagar la carrera de mi hija vendiendo en mis tiempos libres.",
      author: "Elena Restrepo",
      role: "Distribuidora Independiente",
      location: "Medellín, Colombia",
    },
    {
      quote: "La comisión del 30% es real. Empecé sin un solo peso de inversión y hoy tengo mi propia red de clientes fieles.",
      author: "Camila Ortiz",
      role: "Emprendedora Líder",
      location: "Bogotá, Colombia",
    },
    {
      quote: "Los catálogos son hermosos, a mis clientes les encanta la calidad del calzado y la facilidad de pedir por WhatsApp.",
      author: "Martha Lucía Gómez",
      role: "Distribuidora Mayorista",
      location: "Cali, Colombia",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonios" className="py-24 bg-card-bg border-t border-card-border transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Quotes Icon */}
        <div className="w-16 h-16 rounded-full bg-cobalt-500/5 dark:bg-cobalt-500/10 border border-cobalt-500/10 flex items-center justify-center text-cobalt-500 mb-10">
          <Quotes weight="fill" className="w-8 h-8" />
        </div>

        {/* Carousel Content Frame */}
        <div className="min-h-[160px] md:min-h-[140px] flex items-center justify-center w-full mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-fg font-normal italic max-w-[28ch] mx-auto">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Attribution Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-1 mb-8"
          >
            <cite className="font-sans text-base font-bold text-fg not-italic">
              {current.author}
            </cite>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-fg/40">
              {current.role} &middot; {current.location}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-card-border hover:border-cobalt-500 hover:text-cobalt-500 text-fg/70 active:scale-90 transition-all cursor-pointer"
            aria-label="Testimonio anterior"
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-6 bg-cobalt-500" : "w-1.5 bg-card-border hover:bg-fg/20"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-card-border hover:border-cobalt-500 hover:text-cobalt-500 text-fg/70 active:scale-90 transition-all cursor-pointer"
            aria-label="Siguiente testimonio"
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>
        </div>

      </div>
    </section>
  );
}
