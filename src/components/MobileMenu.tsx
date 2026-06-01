"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/catalogos", label: "Catálogos Virtuales" },
  { href: "/medidas", label: "Tablas de Medidas" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        className="press inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-muted"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <nav
        aria-label="Navegación móvil"
        className={`fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-card shadow-2xl transition-transform duration-300 [transition-timing-function:var(--ease-out-expo)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="font-display text-lg font-semibold text-primary-strong">
            Supermoda
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="press inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 px-4 py-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-border p-6">
          <a
            href="https://wa.me/573187120049"
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Hacer Pedido</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
