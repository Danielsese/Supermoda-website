"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

export function CalculatorSection() {
  const [sales, setSales] = useState(1500000);
  const minSales = 300000;
  const maxSales = 6000000;
  const step = 100000;

  const commission = Math.round(sales * 0.3);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-32 lg:py-40 bg-card-bg transition-colors duration-300">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-6">
          Calculadora de Ingresos
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-8">
          Proyecta tus Ganancias
        </h2>
        <p className="font-sans text-base text-fg/50 leading-relaxed mb-20 max-w-[50ch]">
          Simula tus ingresos mensuales. Aumenta tus ventas recomendando más catálogos a tu círculo cercano.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full bg-bg border border-card-border p-10 md:p-16 rounded-[2rem] flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/40">
                Ventas Mensuales
              </span>
              <span className="font-serif text-4xl font-normal text-fg">
                {formatCurrency(sales)}
              </span>
            </div>
            
            <input
              type="range"
              min={minSales}
              max={maxSales}
              step={step}
              value={sales}
              onChange={(e) => setSales(Number(e.target.value))}
              className="w-full h-1 bg-card-border appearance-none cursor-pointer accent-accent-600"
              aria-label="Slider para estimar ventas mensuales"
            />
          </div>

          <div className="h-px w-full bg-card-border" />

          <div className="flex flex-col items-center gap-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Tu Ganancia Neta (30%)
            </span>
            <motion.span
              key={commission}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="font-serif text-6xl font-normal text-fg"
            >
              {formatCurrency(commission)}
            </motion.span>
            
            <Button variant="primary" size="lg" href="#registro" className="mt-8">
              Quiero ganar esto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
