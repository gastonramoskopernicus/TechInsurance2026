"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Plataforma", href: "/plataforma" },
    { label: "Product Studio", href: "/product-studio" },
    { label: "Arquitectura", href: "/arquitectura" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Ecosistema", href: "/ecosistema" },
    { label: "Recursos", href: "/recursos" },
    { label: "Empresa", href: "/empresa" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 relative z-10 flex">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight px-2 py-1.5 -ml-2 rounded-xl hover:bg-fuchsia-500/10 hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] transition-all duration-300 group">
            <img src="/logo.svg" alt="Tech Insurance Logo" className="h-8 w-auto drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-fuchsia-50 transition-colors">TECH<span className="text-fuchsia-400 font-medium">INSURANCE</span></span>
          </Link>
        </div>

        {/* Main Navigation (Desktop) */}
        <nav className="hidden xl:flex flex-1 items-center justify-center space-x-1 sm:space-x-2 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 ease-in-out transform origin-center hover:scale-[1.05] tracking-wide inline-block px-3 py-1.5 rounded-lg hover:bg-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.15)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/demo"
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/contacto"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Solicitar demo
          </Link>
          
          <button
            className="xl:hidden ml-2 text-zinc-300 p-2 hover:text-fuchsia-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#0d040e]/95 backdrop-blur-lg border-t border-fuchsia-900/30 absolute w-full shadow-2xl">
          <nav className="flex flex-col space-y-2 px-6 py-8 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-fuchsia-500 block py-3 border-b border-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-4 sm:hidden">
              <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 py-2">Demo</Link>
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-fuchsia-600 text-white py-3 px-4 rounded-xl text-center shadow-lg font-bold">Solicitar demo</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
