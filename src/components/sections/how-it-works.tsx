"use client";

import { motion } from "motion/react";
import { Sparkle, ShieldCheck, DeviceMobile, UsersThree } from "@phosphor-icons/react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Sparkle className="w-6 h-6 text-accent-600" weight="regular" />,
      title: "30% Comisión",
      description: "Ganas el 30% neto sobre todo lo que vendas. Sin metas obligatorias ni mínimos mensuales.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent-600" weight="regular" />,
      title: "Cero Riesgo",
      description: "No compras inventario. Te damos los catálogos virtuales gratis; tú solo muestras y vendes.",
    },
    {
      icon: <DeviceMobile className="w-6 h-6 text-accent-600" weight="regular" />,
      title: "Catálogos Interactivos",
      description: "Lleva tu negocio en el celular. Tus clientes exploran el PDF y te envían pedidos por WhatsApp.",
    },
    {
      icon: <UsersThree className="w-6 h-6 text-accent-600" weight="regular" />,
      title: "Comunidad",
      description: "Soporte personalizado en WhatsApp para resolver dudas y optimizar tus ventas siempre.",
    },
  ];

  return (
    <section id="como-funciona" className="py-32 lg:py-40 bg-bg transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-6">
            Modelo de Negocio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-fg font-normal tracking-tight leading-none mb-8">
            Emprende con Confianza
          </h2>
          <p className="font-sans text-base text-fg/50 leading-relaxed max-w-[50ch]">
            Diseñamos un modelo simple y rentable para que crezcas a tu ritmo, sin asumir riesgos económicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-8">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl font-normal text-fg mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-fg/50 leading-relaxed max-w-[30ch]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
