import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-fuchsia-900/20 bg-[#020104] pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="w-12 h-12 relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <Image src="/TechInsurance.svg" alt="Tech Insurance Logo" fill className="object-contain" />
              </div>
            </Link>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Tech Insurance</h3>
            <p className="text-sm text-zinc-500 font-light mb-6">
              La plataforma enterprise definitiva para acelerar y transformar el mercado asegurador con tecnología de punta evitando dependencias rígidas de los cores legacy.
            </p>
            <div className="text-xs text-zinc-600 space-y-1 mb-8">
              <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
              <p>Tech Insurance es una marca registrada de Kopernicus Tech.</p>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

          {/* Nav: Plataforma */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wider uppercase">Plataforma</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li><Link href="/" className="hover:text-fuchsia-400 transition-colors">Home</Link></li>
              <li><Link href="/plataforma" className="hover:text-fuchsia-400 transition-colors">Plataforma Core</Link></li>
              <li><Link href="/product-studio" className="hover:text-fuchsia-400 transition-colors">Product Studio</Link></li>
              <li><Link href="/arquitectura" className="hover:text-fuchsia-400 transition-colors">Arquitectura</Link></li>
            </ul>
          </div>

          {/* Nav: Soluciones */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wider uppercase">Soluciones</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li><Link href="/soluciones" className="hover:text-fuchsia-400 transition-colors">Catálogo de Soluciones</Link></li>
              <li><Link href="/casos-de-uso" className="hover:text-fuchsia-400 transition-colors">Casos de Uso</Link></li>
              <li><Link href="/ecosistema" className="hover:text-fuchsia-400 transition-colors">Ecosistema</Link></li>
            </ul>
          </div>

          {/* Nav: Compañía */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-semibold mb-6 text-white text-sm tracking-wider uppercase">Compañía</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li><Link href="/recursos" className="hover:text-fuchsia-400 transition-colors">Recursos & Insights</Link></li>
              <li><Link href="/empresa" className="hover:text-fuchsia-400 transition-colors">Empresa</Link></li>
              <li><Link href="/contacto" className="hover:text-fuchsia-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600 font-light hidden md:block">
            Elevando el estándar del ecosistema asegurador latinoamericano.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500 font-light">
            <Link href="/legal/politica-de-privacidad" className="hover:text-fuchsia-400 transition-colors">Política de Privacidad</Link>
            <Link href="/legal/terminos-y-condiciones" className="hover:text-fuchsia-400 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
