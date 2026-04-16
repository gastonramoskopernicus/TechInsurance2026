import os
import re

def main():
    print("Rediseñando estructura de Cards de Capacidades...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # The pattern exactly matches the `<section id="capacidades"> ... </section>` block
        old_section_pattern = re.compile(r'\{\/\* 4\. Capacidades \*\/}(.*?)\{\/\* 5\. Product Studio \*\/}', re.DOTALL)
        
        new_section = '''{/* 4. Capacidades */}
      <section id="capacidades" className="py-32 bg-[#020202] border-b border-border/50 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-24">
            <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Acelere productos, canales y experiencias</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            
            {/* Card 1: Diseño Modular */}
            <div className="group relative rounded-2xl bg-zinc-900 border border-white/5 p-10 hover:border-white/10 hover:bg-zinc-800/80 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-8 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-20 h-20 text-fuchsia-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Diseño Modular</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Configure coberturas, reglas y precios de forma dinámica para crear nuevos productos en días.
              </p>
            </div>

            {/* Card 2: Distribución Omnicanal */}
            <div className="group relative rounded-2xl bg-[#150d1a] border border-fuchsia-500/10 p-10 hover:border-fuchsia-500/30 hover:bg-[#1a1020] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full shadow-[0_0_40px_rgba(217,70,239,0.03)] hover:shadow-[0_0_40px_rgba(217,70,239,0.08)]">
              <div className="mb-8 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-20 h-20 text-fuchsia-500"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v7"></path><path d="M12 15v7"></path><path d="M22 12h-7"></path><path d="M9 12H2"></path><path d="m19.07 4.93-4.95 4.95"></path><path d="M9.88 14.12 4.93 19.07"></path><path d="m4.93 4.93 4.95 4.95"></path><path d="m19.07 19.07-4.95-4.95"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Distribución Omnicanal</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                APIs preparadas para integrar su oferta instantáneamente en ecosistemas e-commerce y fintech.
              </p>
            </div>

            {/* Card 3: Orquestación Continua */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-10 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-8 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-20 h-20 text-fuchsia-500"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Orquestación Continua</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Automatización y escalabilidad del ciclo de vida, desde la cotización hasta el reclamo.
              </p>
            </div>

          </div>
        </div>
      </section>\n\n      '''
        
        content = re.sub(old_section_pattern, new_section + '{/* 5. Product Studio */}', content)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Cards de Core Capabilities de la Home rediseñadas satisfactoriamente al layout tipo SaaS Premium.")

if __name__ == '__main__':
    main()
