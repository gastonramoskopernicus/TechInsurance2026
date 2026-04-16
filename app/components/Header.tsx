import Link from "next/link";

export default function Header() {
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
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold tracking-tight">
            TECH<span className="text-primary font-medium">INSURANCE</span>
          </Link>
        </div>

        {/* Main Navigation (Desktop) */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contacto"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Solicitar demo
          </Link>
        </div>
      </div>
    </header>
  );
}
