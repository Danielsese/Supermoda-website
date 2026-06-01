"use client";

import { motion } from "motion/react";
import { Sparkle, ShieldCheck, DeviceMobile, UsersThree, ArrowRight } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-card-bg border-t border-card-border transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-4">
            Emprende con Confianza
          </h2>
          <p className="font-sans text-base text-fg/60 leading-relaxed max-w-[50ch]">
            Diseñamos un modelo de negocio simple y altamente rentable para que puedas crecer a tu propio ritmo sin asumir riesgos económicos.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Cell 1: High Contrast Saturated Commission Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-cobalt-500 rounded-2xl p-8 flex flex-col justify-between h-[320px] shadow-lg shadow-cobalt-500/10 text-white relative overflow-hidden"
          >
            {/* Background Light Pattern */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Sparkle weight="bold" className="w-6 h-6 text-gold-100" />
            </div>

            <div>
              <h3 className="font-serif text-5xl font-semibold mb-2">30%</h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-white/50 mb-1">
                Comisión Fija
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed max-w-[20ch]">
                Ganas el 30% neto sobre todo lo que vendas. Sin metas obligatorias ni mínimos mensuales.
              </p>
            </div>
          </motion.div>

          {/* Cell 2: Zero Investment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 bg-bg border border-card-border rounded-2xl p-8 flex flex-col justify-between h-[320px] transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cobalt-500/5 dark:bg-cobalt-500/10 flex items-center justify-center border border-cobalt-500/10">
              <ShieldCheck weight="bold" className="w-6 h-6 text-cobalt-500" />
            </div>

            <div>
              <h3 className="font-serif text-3xl text-fg font-normal mb-3">
                Inversión Cero. Riesgo Cero.
              </h3>
              <p className="font-sans text-sm text-fg/60 leading-relaxed max-w-[55ch] mb-4">
                No tienes que comprar inventario por adelantado ni pagar suscripciones de ingreso. Nosotros te proporcionamos los catálogos virtuales de forma gratuita; tú solo te encargas de mostrar y vender.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-xs font-bold text-fg/40 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Sin Costos Ocultos
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-fg/40 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Registros Inmediatos
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cell 3: Catalog Digital Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 bg-bg border border-card-border rounded-2xl p-8 flex flex-col justify-between h-[320px] transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cobalt-500/5 dark:bg-cobalt-500/10 flex items-center justify-center border border-cobalt-500/10">
              <DeviceMobile weight="bold" className="w-6 h-6 text-cobalt-500" />
            </div>

            <div>
              <h3 className="font-serif text-3xl text-fg font-normal mb-3">
                Catálogos Virtuales e Interactivos
              </h3>
              <p className="font-sans text-sm text-fg/60 leading-relaxed max-w-[55ch]">
                Lleva tu negocio contigo a donde vayas. Distribuye los catálogos en formato digital (PDF o enlace interactivo) a través de WhatsApp o redes sociales. Tus clientes exploran y te envían sus pedidos con un solo clic.
              </p>
            </div>
          </motion.div>

          {/* Cell 4: Community Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-bg border border-card-border rounded-2xl p-8 flex flex-col justify-between h-[320px] transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cobalt-500/5 dark:bg-cobalt-500/10 flex items-center justify-center border border-cobalt-500/10">
              <UsersThree weight="bold" className="w-6 h-6 text-cobalt-500" />
            </div>

            <div>
              <h3 className="font-serif text-3xl text-fg font-normal mb-2">Comunidad</h3>
              <p className="font-sans text-sm text-fg/60 leading-relaxed max-w-[25ch] mb-4">
                Recibes soporte personalizado en nuestro canal de WhatsApp para resolver dudas y optimizar tus ventas.
              </p>
              <a
                href="#registro"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-cobalt-500 hover:text-cobalt-600 transition-colors uppercase tracking-wider group"
              >
                Únete Ya <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
