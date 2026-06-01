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
      quote: "Gracias a los catálogos virtuales logré pagar la universidad vendiendo en mis tiempos libres.",
      author: "Elena Restrepo",
      role: "Distribuidora Independiente",
      location: "Medellín, Colombia",
    },
    {
      quote: "La comisión del 30% es real. Empecé sin inversión y hoy tengo mi propia red de clientes fieles.",
      author: "Camila Ortiz",
      role: "Emprendedora Líder",
      location: "Bogotá, Colombia",
    },
    {
      quote: "A mis clientes les encanta la calidad del calzado y la facilidad de pedir directamente por WhatsApp.",
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
    <section id="testimonios" className="py-32 lg:py-40 bg-bg transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <div className="mb-12">
          <Quotes className="w-10 h-10 text-accent-300 mx-auto" weight="fill" />
        </div>

        <div className="min-h-[220px] md:min-h-[180px] flex items-center justify-center w-full mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mx-auto"
            >
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-fg font-normal italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2 mb-12"
          >
            <cite className="font-sans text-lg font-normal text-fg not-italic">
              {current.author}
            </cite>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/40">
              {current.role} &middot; {current.location}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-8">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full border border-card-border hover:border-accent-600 hover:text-accent-600 text-fg/60 transition-colors cursor-pointer"
            aria-label="Testimonio anterior"
          >
            <CaretLeft className="w-5 h-5" weight="regular" />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === index ? "w-8 bg-accent-600" : "w-2 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-4 rounded-full border border-card-border hover:border-accent-600 hover:text-accent-600 text-fg/60 transition-colors cursor-pointer"
            aria-label="Siguiente testimonio"
          >
            <CaretRight className="w-5 h-5" weight="regular" />
          </button>
        </div>

      </div>
    </section>
  );
}
