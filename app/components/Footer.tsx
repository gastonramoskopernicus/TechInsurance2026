import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-4">
              TECH<span className="text-primary font-medium">INSURANCE</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              La plataforma enterprise definitiva para acelerar y transformar el mercado asegurador con tecnología de punta.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#arquitectura" className="hover:text-primary transition-colors">Arquitectura</Link></li>
              <li><Link href="#capacidades" className="hover:text-primary transition-colors">Capacidades Core</Link></li>
              <li><Link href="#product-studio" className="hover:text-primary transition-colors">Product Studio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Soluciones</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#casos-de-uso" className="hover:text-primary transition-colors">Casos de Uso</Link></li>
              <li><Link href="#impacto" className="hover:text-primary transition-colors">Impacto en Negocio</Link></li>
              <li><Link href="#ecosistema" className="hover:text-primary transition-colors">Ecosistema</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Compañía</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#empresa" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#recursos" className="hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tech Insurance. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#privacidad" className="hover:text-foreground transition-colors">Privacidad</Link>
            <Link href="#terminos" className="hover:text-foreground transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
