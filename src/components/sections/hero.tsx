"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-32 overflow-hidden bg-bg">
      <div className="max-w-[1000px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
              Venta por catálogo premium
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] tracking-tight text-fg font-normal mb-10 max-w-[14ch]"
          >
            Emprende desde <span className="italic text-neutral-400">casa</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-fg/50 leading-relaxed mb-16 max-w-[42ch]"
          >
            Vende moda, calzado y belleza por catálogo virtual. Inicia tu propio negocio sin inversión inicial y alcanza tus metas financieras.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
            <Button variant="primary" size="lg" href="#registro">
              Registrarme ahora
            </Button>
            <Button variant="ghost" size="lg" href="#catalogos">
              Explorar catálogos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
