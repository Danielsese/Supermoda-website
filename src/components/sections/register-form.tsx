"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { CheckCircle, Warning, SpinnerGap } from "@phosphor-icons/react";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    experience: "no",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error al procesar el registro.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Ocurrió un error inesperado. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="registro" className="py-24 bg-bg border-t border-card-border transition-colors duration-300 relative">
      <div className="max-w-[700px] mx-auto px-6">
        
        {/* Form Container Card */}
        <div className="bg-card-bg border border-card-border p-8 md:p-12 rounded-3xl shadow-xl shadow-fg/5 transition-colors duration-300">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              /* Success Messaging */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-8 flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
                  <CheckCircle weight="fill" className="w-10 h-10 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-fg font-normal mb-2">
                    ¡Registro Recibido con Éxito!
                  </h3>
                  <p className="font-sans text-sm text-fg/60 leading-relaxed max-w-[45ch] mx-auto">
                    Excelente decisión, **{formData.name}**. Un asesor de nuestro equipo de soporte se pondrá en contacto contigo en las próximas 24 horas a través de WhatsApp para habilitar tu catálogo.
                  </p>
                </div>
                <Button variant="secondary" size="md" onClick={() => setStatus("idle")}>
                  Volver a Empezar
                </Button>
              </motion.div>
            ) : (
              /* Core Input Form */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-8"
              >
                {/* Form Headers */}
                <div className="text-center">
                  <h2 className="font-serif text-3xl sm:text-4xl text-fg font-normal tracking-tight mb-3">
                    Únete como Distribuidora
                  </h2>
                  <p className="font-sans text-sm text-fg/60 max-w-[45ch] mx-auto leading-relaxed">
                    Completa tus datos y comienza a generar ingresos de inmediato recomendando catálogos interactivos.
                  </p>
                </div>

                {/* Main Form Elements */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Row: Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-wider text-fg/50">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Ana María Restrepo"
                      className="w-full bg-bg border border-card-border focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 rounded-xl px-4 py-3 font-sans text-sm outline-none text-fg transition-colors placeholder:text-fg/30"
                    />
                  </div>

                  {/* Row: Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-fg/50">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ana.restrepo@example.com"
                      className="w-full bg-bg border border-card-border focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 rounded-xl px-4 py-3 font-sans text-sm outline-none text-fg transition-colors placeholder:text-fg/30"
                    />
                  </div>

                  {/* Row: WhatsApp / Mobile Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="whatsapp" className="font-sans text-xs font-bold uppercase tracking-wider text-fg/50">
                      Número de WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ej. 300 123 4567"
                      className="w-full bg-bg border border-card-border focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 rounded-xl px-4 py-3 font-sans text-sm outline-none text-fg transition-colors placeholder:text-fg/30"
                    />
                  </div>

                  {/* Row: City */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="city" className="font-sans text-xs font-bold uppercase tracking-wider text-fg/50">
                      Ciudad o Municipio
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Ej. Medellín, Antioquia"
                      className="w-full bg-bg border border-card-border focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 rounded-xl px-4 py-3 font-sans text-sm outline-none text-fg transition-colors placeholder:text-fg/30"
                    />
                  </div>

                  {/* Row: Sales Experience */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="experience" className="font-sans text-xs font-bold uppercase tracking-wider text-fg/50">
                      ¿Tienes experiencia en ventas por catálogo?
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-bg border border-card-border focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 rounded-xl px-4 py-3 font-sans text-sm outline-none text-fg transition-colors"
                    >
                      <option value="no">No, soy principiante</option>
                      <option value="yes">Sí, vendo o he vendido por catálogo</option>
                      <option value="other">Vendo otros productos de forma independiente</option>
                    </select>
                  </div>

                  {/* Error block if applicable */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-start gap-3 text-rose-600 dark:text-rose-500 font-sans text-sm">
                      <Warning weight="bold" className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full justify-center"
                  >
                    {status === "loading" ? (
                      <>
                        <SpinnerGap weight="bold" className="w-5 h-5 animate-spin" />
                        Registrando datos...
                      </>
                    ) : (
                      "Iniciar Mi Registro Gratis"
                    )}
                  </Button>

                </form>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
