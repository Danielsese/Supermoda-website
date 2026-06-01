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
    <section id="registro" className="py-32 lg:py-40 bg-card-bg transition-colors duration-300">
      <div className="max-w-[700px] mx-auto px-6">
        
        <div className="bg-bg border border-card-border p-12 md:p-16 rounded-[2rem]">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center flex flex-col items-center gap-8"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" weight="regular" />
                </div>
                <div>
                  <h3 className="font-serif text-4xl text-fg font-normal mb-4">
                    Registro Exitoso
                  </h3>
                  <p className="font-sans text-base text-fg/60 leading-relaxed max-w-[40ch] mx-auto">
                    Excelente decisión, {formData.name}. Un asesor se pondrá en contacto contigo en breve vía WhatsApp.
                  </p>
                </div>
                <Button variant="ghost" size="md" onClick={() => setStatus("idle")} className="mt-4">
                  Volver a Empezar
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-12"
              >
                <div className="text-center">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 mb-6 block">
                    Únete Hoy
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl text-fg font-normal tracking-tight mb-4">
                    Comienza a Vender
                  </h2>
                  <p className="font-sans text-base text-fg/50 max-w-[45ch] mx-auto leading-relaxed">
                    Completa tus datos y obtén tus catálogos virtuales al instante.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-fg/50">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ana Restrepo"
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-600 px-0 py-3 font-sans text-base outline-none text-fg transition-colors placeholder:text-fg/20"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-fg/50">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ana@ejemplo.com"
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-600 px-0 py-3 font-sans text-base outline-none text-fg transition-colors placeholder:text-fg/20"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="whatsapp" className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-fg/50">
                      Número de WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="300 123 4567"
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-600 px-0 py-3 font-sans text-base outline-none text-fg transition-colors placeholder:text-fg/20"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="city" className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-fg/50">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Medellín"
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-600 px-0 py-3 font-sans text-base outline-none text-fg transition-colors placeholder:text-fg/20"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="experience" className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-fg/50">
                      Experiencia en Ventas
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-card-border focus:border-accent-600 px-0 py-3 font-sans text-base outline-none text-fg transition-colors appearance-none"
                    >
                      <option value="no">Sin experiencia</option>
                      <option value="yes">Con experiencia en catálogo</option>
                      <option value="other">Independiente en otros rubros</option>
                    </select>
                  </div>

                  {status === "error" && (
                    <div className="p-5 rounded-2xl bg-rose-50 flex items-center gap-4 text-rose-600 font-sans text-sm">
                      <Warning className="w-5 h-5 shrink-0" weight="regular" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-6"
                  >
                    {status === "loading" ? (
                      <>
                        <SpinnerGap className="w-5 h-5 animate-spin" weight="regular" />
                        Procesando...
                      </>
                    ) : (
                      "Enviar Registro"
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
