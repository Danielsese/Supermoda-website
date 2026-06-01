"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo, EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-card-border pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Footprint Column */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="relative w-36 h-12 overflow-hidden rounded bg-white p-0.5">
            <Image
              src="/logo.jpg"
              alt="Supermoda Online Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-sans text-sm text-fg/60 leading-relaxed">
            La plataforma líder de venta por catálogo virtual. Empodérate y cumple tus metas financieras desde la comodidad de tu hogar.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-card-border hover:border-cobalt-500 hover:text-cobalt-500 text-fg/70 active:scale-95 transition-all cursor-pointer"
              aria-label="Instagram Page"
            >
              <InstagramLogo className="w-5 h-5" weight="bold" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-card-border hover:border-cobalt-500 hover:text-cobalt-500 text-fg/70 active:scale-95 transition-all cursor-pointer"
              aria-label="Facebook Page"
            >
              <FacebookLogo className="w-5 h-5" weight="bold" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-card-border hover:border-cobalt-500 hover:text-cobalt-500 text-fg/70 active:scale-95 transition-all cursor-pointer"
              aria-label="WhatsApp Channel"
            >
              <WhatsappLogo className="w-5 h-5" weight="bold" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-fg/40">
            Navegación
          </h3>
          <ul className="flex flex-col gap-3 font-sans text-sm font-semibold text-fg/75">
            <li>
              <a href="#catalogos" className="hover:text-cobalt-500 transition-colors">
                Catálogos Virtuales
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-cobalt-500 transition-colors">
                Cómo Funciona
              </a>
            </li>
            <li>
              <a href="#calculadora" className="hover:text-cobalt-500 transition-colors">
                Calculadora de Ganancias
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-cobalt-500 transition-colors">
                Testimonios
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-fg/40">
            Líneas de Venta
          </h3>
          <ul className="flex flex-col gap-3 font-sans text-sm font-semibold text-fg/75">
            <li>
              <span className="cursor-default hover:text-cobalt-500 transition-colors">
                Ropa Femenina & Masculina
              </span>
            </li>
            <li>
              <span className="cursor-default hover:text-cobalt-500 transition-colors">
                Calzado Familiar
              </span>
            </li>
            <li>
              <span className="cursor-default hover:text-cobalt-500 transition-colors">
                Lencería Premium
              </span>
            </li>
            <li>
              <span className="cursor-default hover:text-cobalt-500 transition-colors">
                Belleza & Cuidado Personal
              </span>
            </li>
            <li>
              <span className="cursor-default hover:text-cobalt-500 transition-colors">
                Hogar & Vacaciones
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-fg/40">
            Atención Directa
          </h3>
          <ul className="flex flex-col gap-4 font-sans text-sm font-semibold text-fg/75">
            <li className="flex items-start gap-3">
              <EnvelopeSimple className="w-5 h-5 text-cobalt-500 shrink-0 mt-0.5" weight="bold" />
              <div>
                <p className="text-xs text-fg/40 font-medium font-sans">Escríbenos</p>
                <a href="mailto:ventas@supermodaonline.com" className="hover:text-cobalt-500 transition-colors">
                  ventas@supermodaonline.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <WhatsappLogo className="w-5 h-5 text-cobalt-500 shrink-0 mt-0.5" weight="bold" />
              <div>
                <p className="text-xs text-fg/40 font-medium font-sans">Escríbenos por WhatsApp</p>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cobalt-500 transition-colors"
                >
                  +57 300 000 0000
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cobalt-500 shrink-0 mt-0.5" weight="bold" />
              <div>
                <p className="text-xs text-fg/40 font-medium font-sans">Ubicación</p>
                <span className="cursor-default hover:text-cobalt-500 transition-colors">
                  Bogotá, Colombia
                </span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-fg/40 font-medium text-center sm:text-left">
          &copy; {new Date().getFullYear()} Supermoda Online. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 font-sans text-xs text-fg/40 font-medium">
          <Link href="#" className="hover:text-cobalt-500 transition-colors">
            Términos y Condiciones
          </Link>
          <Link href="#" className="hover:text-cobalt-500 transition-colors">
            Políticas de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
