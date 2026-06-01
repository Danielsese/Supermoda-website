"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Detect current theme class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const navLinks = [
    { name: "Catálogos", href: "#catalogos" },
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Calculadora", href: "#calculadora" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-bg/85 backdrop-blur-md border-b border-card-border shadow-sm shadow-fg/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="#" className="flex items-center gap-3 active:scale-97 transition-transform duration-200">
            <div className="relative w-36 h-12 md:w-44 md:h-14 overflow-hidden rounded-md bg-white p-1">
              <Image
                src="/logo.jpg"
                alt="Supermoda Online Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-fg/80 hover:text-cobalt-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Theme Switch, CTA, Mobile Toggle) */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-card-bg hover:bg-card-border/30 border border-card-border text-fg active:scale-95 transition-all duration-150 cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gold-500" weight="bold" />
              ) : (
                <Moon className="w-5 h-5 text-cobalt-500" weight="bold" />
              )}
            </button>

            <Button
              variant="primary"
              size="sm"
              href="#registro"
              className="hidden sm:inline-flex"
            >
              Empezar Hoy
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-fg hover:text-cobalt-500 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <List className="w-6 h-6" weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-full bg-bg border-l border-card-border p-6 shadow-2xl flex flex-col justify-between md:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="relative w-28 h-9 overflow-hidden rounded bg-white p-0.5">
                    <Image
                      src="/logo.jpg"
                      alt="Supermoda Online Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-fg hover:text-cobalt-500 active:scale-95 transition-all cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" weight="bold" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-base font-semibold text-fg/80 hover:text-cobalt-500 transition-colors py-1.5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <Button
                  variant="primary"
                  size="md"
                  href="#registro"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  Empezar Hoy
                </Button>
                <p className="text-center font-sans text-xs text-fg/40 font-medium">
                  Supermoda Online &copy; {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
