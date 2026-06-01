"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { CurrencyDollar, Sparkle, TrendUp } from "@phosphor-icons/react";

export function CalculatorSection() {
  const [sales, setSales] = useState(1500000); // Default $1,500,000 COP
  const minSales = 300000;
  const maxSales = 6000000;
  const step = 100000;

  const commission = Math.round(sales * 0.3);

  // Format numbers to Colombian Pesos / general currency style
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-24 bg-bg border-t border-card-border transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explainer */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-bold uppercase tracking-wider mb-6 dark:text-gold-500">
              <TrendUp weight="bold" className="w-4 h-4" />
              Calcula tus Ingresos
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-6">
              ¿Cuánto quieres ganar?
            </h2>
            
            <p className="font-sans text-base text-fg/60 leading-relaxed mb-6 max-w-[45ch]">
              Utiliza nuestra calculadora interactiva para simular tus ingresos mensuales. Aumenta tus ventas recomendando más catálogos a tus amigas, vecinas y redes sociales.
            </p>

            <ul className="flex flex-col gap-3 font-sans text-sm font-semibold text-fg/75 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Sin tope máximo de ganancia
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Cobro directo a tus clientes
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Descuento inmediato del 30%
              </li>
            </ul>
          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card-bg border border-card-border p-8 md:p-12 rounded-3xl shadow-xl shadow-fg/5 flex flex-col gap-8 transition-colors duration-300"
            >
              {/* Sales Slider Input */}
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-sm font-bold uppercase tracking-wider text-fg/40">
                    Ventas Mensuales Estimadas
                  </span>
                  <span className="font-serif text-3xl font-semibold text-fg">
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
                  className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-cobalt-500 transition-colors focus:outline-none"
                  aria-label="Slider para estimar ventas mensuales"
                />
                
                <div className="flex justify-between font-sans text-xs font-bold text-fg/30 uppercase tracking-wider">
                  <span>Min {formatCurrency(minSales)}</span>
                  <span>Max {formatCurrency(maxSales)}</span>
                </div>
              </div>

              {/* Equals Divider line */}
              <div className="h-px bg-card-border" />

              {/* Commission Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                
                {/* Result Block */}
                <div className="p-6 rounded-2xl bg-cobalt-500/5 border border-cobalt-500/10 dark:bg-cobalt-500/10 dark:border-cobalt-500/20">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-cobalt-500 block mb-1">
                    Tu Ganancia Neta (30%)
                  </span>
                  <motion.span
                    key={commission}
                    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl font-bold text-fg block"
                  >
                    {formatCurrency(commission)}
                  </motion.span>
                </div>

                {/* Direct CTA */}
                <div className="flex flex-col gap-3">
                  <p className="font-sans text-xs text-fg/40 leading-relaxed font-medium">
                    ¡Empieza a ganar este valor recomendando catálogos desde hoy mismo!
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    href="#registro"
                    className="w-full text-center"
                    showArrow
                  >
                    Quiero Ganar Esto
                  </Button>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
