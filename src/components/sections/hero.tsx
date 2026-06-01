"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // ease-out-expo
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-bg transition-colors duration-300">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt-500/5 blur-3xl pointer-events-none dark:bg-cobalt-500/10" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center z-10">
        
        {/* Left Copy Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt-500/5 border border-cobalt-500/10 text-cobalt-500 text-xs font-bold tracking-wide uppercase font-sans mb-6 dark:bg-cobalt-500/10 dark:border-cobalt-500/20"
          >
            <Sparkle weight="fill" className="w-3.5 h-3.5" />
            Emprende sin Límites
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-fg font-normal mb-6 max-w-[12ch] sm:max-w-[10ch]"
          >
            Cumple tus sueños desde <span className="italic font-light text-cobalt-500">casa</span>
          </motion.h1>

          {/* Subtext (under 20 words, strictly) */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-fg/60 leading-relaxed mb-8 max-w-[32ch]"
          >
            Vende moda, calzado y belleza por catálogo virtual y gana hasta el 30% sin inversión inicial.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              href="#registro"
              showArrow
            >
              Registrarme Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#catalogos"
            >
              Ver Catálogos
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Asset Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-5 relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-card-border shadow-xl shadow-fg/5"
        >
          <Image
            src="/hero-fashion.png"
            alt="Supermoda Emprendedora"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          
          {/* Accent Card Overlaid (Tactile Detail) */}
          <div className="absolute bottom-6 left-6 right-6 p-5 bg-card-bg/80 backdrop-blur-md border border-card-border rounded-xl flex items-center justify-between">
            <div>
              <p className="font-sans text-xs text-fg/40 font-bold uppercase tracking-wider mb-1">
                Comisión Directa
              </p>
              <p className="font-serif text-2xl text-fg font-semibold">
                Hasta un 30% Neto
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-500">
              <Sparkle weight="bold" className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
