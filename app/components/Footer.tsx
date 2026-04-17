import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-fuchsia-900/20 bg-[#020104] pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="w-12 h-12 relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <Image src="/TechInsurance.svg" alt="Tech Insurance Logo" fill className="object-contain" />
              </div>
            </Link>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Tech Insurance</h3>
            <p className="text-sm text-zinc-500 font-light mb-6">
              La plataforma enterprise definitiva para acelerar y transformar el mercado asegurador con tecnología de punta evitando dependencias rígidas de los cores legacy.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all">
                {/* X Icon Minimalist */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all">
                {/* LinkedIn Icon Minimalist */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

          {/* Nav: Plataforma & Soluciones */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase"><Link href="/plataforma" className="hover:text-fuchsia-400 transition-colors">Plataforma</Link></h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light mb-8">
              <li><Link href="/plataforma#que-es" className="hover:text-fuchsia-400 transition-colors">Qué es Tech Insurance</Link></li>
              <li><Link href="/plataforma#capacidades" className="hover:text-fuchsia-400 transition-colors">Capacidades</Link></li>
              <li><Link href="/plataforma#modulos" className="hover:text-fuchsia-400 transition-colors">Módulos</Link></li>
              <li><Link href="/plataforma#arquitectura" className="hover:text-fuchsia-400 transition-colors">Arquitectura</Link></li>
            </ul>

            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase"><Link href="/soluciones" className="hover:text-fuchsia-400 transition-colors">Soluciones</Link></h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light">
              <li><Link href="/soluciones#aseguradoras" className="hover:text-fuchsia-400 transition-colors">Aseguradoras</Link></li>
              <li><Link href="/soluciones#brokers" className="hover:text-fuchsia-400 transition-colors">Brokers / PAS</Link></li>
              <li><Link href="/soluciones#bancos" className="hover:text-fuchsia-400 transition-colors">Bancos / Fintech</Link></li>
              <li><Link href="/soluciones#partners" className="hover:text-fuchsia-400 transition-colors">Partners</Link></li>
              <li><Link href="/soluciones#embedded" className="hover:text-fuchsia-400 transition-colors">Embedded Insurance</Link></li>
              <li><Link href="/soluciones#canales" className="hover:text-fuchsia-400 transition-colors">Canales Digitales</Link></li>
            </ul>
          </div>

          {/* Nav: Product Studio */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase"><Link href="/product-studio" className="hover:text-fuchsia-400 transition-colors">Product Studio</Link></h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light">
              <li><Link href="/product-studio#que-es" className="hover:text-fuchsia-400 transition-colors">Qué es</Link></li>
              <li><Link href="/product-studio#como-funciona" className="hover:text-fuchsia-400 transition-colors">Cómo funciona</Link></li>
              <li><Link href="/product-studio#capacidades" className="hover:text-fuchsia-400 transition-colors">Capacidades</Link></li>
              <li><Link href="/product-studio#modelo" className="hover:text-fuchsia-400 transition-colors">Modelo de construcción</Link></li>
              <li><Link href="/product-studio#ejemplo" className="hover:text-fuchsia-400 transition-colors">Ejemplo</Link></li>
              <li><Link href="/product-studio#impacto" className="hover:text-fuchsia-400 transition-colors">Impacto</Link></li>
            </ul>
          </div>

          {/* Nav: Arquitectura */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase"><Link href="/arquitectura" className="hover:text-fuchsia-400 transition-colors">Arquitectura</Link></h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light">
              <li><Link href="/arquitectura#vision" className="hover:text-fuchsia-400 transition-colors">Visión</Link></li>
              <li><Link href="/arquitectura#principios" className="hover:text-fuchsia-400 transition-colors">Principios</Link></li>
              <li><Link href="/arquitectura#capas" className="hover:text-fuchsia-400 transition-colors">Capas</Link></li>
              <li><Link href="/arquitectura#integracion" className="hover:text-fuchsia-400 transition-colors">Integración</Link></li>
              <li><Link href="/arquitectura#escalabilidad" className="hover:text-fuchsia-400 transition-colors">Escalabilidad</Link></li>
              <li><Link href="/arquitectura#seguridad" className="hover:text-fuchsia-400 transition-colors">Seguridad</Link></li>
            </ul>
          </div>

          {/* Nav: Quick Links & Entidades */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase">Explorar</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light mb-8">
              <li><Link href="/" className="hover:text-fuchsia-400 transition-colors">Home</Link></li>
              <li><Link href="/casos-de-uso" className="hover:text-fuchsia-400 transition-colors">Casos de Uso</Link></li>
              <li><Link href="/ecosistema" className="hover:text-fuchsia-400 transition-colors">Ecosistema</Link></li>
              <li><Link href="/recursos" className="hover:text-fuchsia-400 transition-colors">Recursos</Link></li>
              <li><Link href="/empresa" className="hover:text-fuchsia-400 transition-colors">Empresa</Link></li>
              <li><Link href="/contacto" className="hover:text-fuchsia-400 transition-colors">Contacto</Link></li>
            </ul>

            <h4 className="font-semibold mb-5 text-white text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light">
              <li><Link href="/legal/politica-de-privacidad" className="hover:text-fuchsia-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/legal/terminos-y-condiciones" className="hover:text-fuchsia-400 transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Footer Bottom Line */}
        <div className="py-6 border-t border-white/5 flex flex-col items-center justify-center text-center gap-2 text-xs text-zinc-600 font-light">
          <p>&copy; {new Date().getFullYear()} Tech Insurance. Todos los derechos reservados.</p>
          <p>Tech Insurance es una marca registrada de Kopernicus Tech.</p>
        </div>
      </div>
    </footer>
  );
}
