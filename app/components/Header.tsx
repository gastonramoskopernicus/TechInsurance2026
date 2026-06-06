"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  interface NavItem {
    label: string;
    href?: string;
    isDropdown?: boolean;
    items?: { label: string; href: string }[];
  }

  const navItems: NavItem[] = [
    { label: "Plataforma", href: "/plataforma" },
    {
      label: "Soluciones",
      isDropdown: true,
      items: [
        { label: "Product Studio", href: "/product-studio" },
        { label: "InspeXiona", href: "/inspexiona" },
        { label: "EEP", href: "/eep" },
      ]
    },
    { label: "Arquitectura", href: "/arquitectura" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Ecosistema", href: "/ecosistema" },
    { label: "Empresa", href: "/empresa" },
    { label: "Demo", href: "/demo" },
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
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <button 
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 ease-in-out transform origin-center hover:scale-[1.05] tracking-wide inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.15)] cursor-pointer"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180 text-fuchsia-400' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isSolutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 z-50">
                      <div className="rounded-xl bg-[#0a050b]/95 border border-fuchsia-500/20 shadow-[0_10px_40px_rgba(217,70,239,0.15)] backdrop-blur-md p-2 space-y-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsSolutionsOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-fuchsia-500/10 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 ease-in-out transform origin-center hover:scale-[1.05] tracking-wide inline-block px-3 py-1.5 rounded-lg hover:bg-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.15)]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center space-x-4">
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
        <div className="xl:hidden bg-[#0d040e]/95 backdrop-blur-lg border-t border-fuchsia-900/30 absolute w-full shadow-2xl z-50">
          <nav className="flex flex-col space-y-2 px-6 py-8 text-lg font-medium max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="border-b border-white/5 py-1">
                    <button 
                      onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                      className="w-full text-left text-zinc-300 hover:text-fuchsia-500 flex items-center justify-between py-3 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileSolutionsOpen && (
                      <div className="pl-4 pb-3 pt-1 space-y-3">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-zinc-400 hover:text-fuchsia-400 block py-1.5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-fuchsia-500 block py-3 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-6 flex flex-col gap-4 sm:hidden">
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-fuchsia-600 text-white py-3 px-4 rounded-xl text-center shadow-lg font-bold">Solicitar demo</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
