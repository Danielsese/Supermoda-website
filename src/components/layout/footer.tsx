"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsappLogo, EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-bg pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24">
          <div className="flex flex-col gap-8 md:col-span-1 items-center md:items-start text-center md:text-left">
            <div className="relative w-40 h-14 overflow-hidden">
              <Image src="/logo.jpg" alt="Supermoda Logo" fill className="object-contain" />
            </div>
            <p className="font-sans text-sm text-fg/50 leading-relaxed max-w-[300px]">
              La plataforma líder de venta por catálogo virtual. Cumple tus metas financieras desde la comodidad de tu hogar.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="p-3 text-fg/40 hover:text-fg transition-colors">
                <InstagramLogo className="w-5 h-5" weight="regular" />
              </a>
              <a href="#" className="p-3 text-fg/40 hover:text-fg transition-colors">
                <FacebookLogo className="w-5 h-5" weight="regular" />
              </a>
              <a href="#" className="p-3 text-fg/40 hover:text-fg transition-colors">
                <WhatsappLogo className="w-5 h-5" weight="regular" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/30">Navegación</h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-fg/70">
              <li><a href="#descargas" className="hover:text-accent-600 transition-colors">Catálogos Virtuales</a></li>
              <li><a href="#como-funciona" className="hover:text-accent-600 transition-colors">Cómo Funciona</a></li>
              <li><a href="#calculadora" className="hover:text-accent-600 transition-colors">Calculadora</a></li>
              <li><a href="#testimonios" className="hover:text-accent-600 transition-colors">Testimonios</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/30">Líneas</h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-fg/70">
              <li><span className="cursor-default hover:text-accent-600 transition-colors">Ropa & Calzado</span></li>
              <li><span className="cursor-default hover:text-accent-600 transition-colors">Lencería</span></li>
              <li><span className="cursor-default hover:text-accent-600 transition-colors">Belleza & Cuidado</span></li>
              <li><span className="cursor-default hover:text-accent-600 transition-colors">Hogar</span></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/30">Contacto</h3>
            <ul className="flex flex-col gap-5 font-sans text-sm text-fg/70 items-center md:items-start">
              <li className="flex items-center gap-3">
                <EnvelopeSimple className="w-4 h-4 text-fg/40" />
                <a href="mailto:ventas@supermoda.com" className="hover:text-accent-600 transition-colors">ventas@supermoda.com</a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsappLogo className="w-4 h-4 text-fg/40" />
                <a href="https://wa.me/573000000000" className="hover:text-accent-600 transition-colors">+57 300 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-fg/40" />
                <span className="cursor-default hover:text-accent-600 transition-colors">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-fg/40">
            &copy; {new Date().getFullYear()} Supermoda. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 font-sans text-xs text-fg/40">
            <Link href="#" className="hover:text-fg transition-colors">Términos</Link>
            <Link href="#" className="hover:text-fg transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
