import Image from "next/image";

export default function SolucionesPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Soluciones */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.12] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-28 h-28 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Flexibilidad y Velocidad</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Soluciones diseñadas para <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">escalar su negocio</span>
          </h1>
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed mb-6">
              Las compañías o las aseguradoras aportan la visión y la necesidad del producto. Nosotros la estructura, la innovación y la velocidad.
            </p>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Tech Insurance ha sido desarrollado como una solución innovadora, alineada a las necesidades de las compañías y a los desafíos que presentan los core con limitaciones. Las compañías necesitan crear nuevos productos y adaptarse cada vez más al mercado, y Tech Insurance provee esa capacidad.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Soluciones) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'aseguradoras', label: 'Aseguradoras' },
            { id: 'brokers', label: 'Productores / Corredores (PAS)' },
            { id: 'bancos', label: 'Bancos / Fintech' },
            { id: 'partners', label: 'Partners' },
            { id: 'embedded', label: 'Embedded Insurance' },
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm text-zinc-400 font-medium hover:text-white hover:bg-white/5 focus:bg-white/10 active:bg-white/10 transition-all font-semibold"
            >
              <span className="whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* ASEGURADORAS */}
      <section id="aseguradoras" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32 relative">
        <div className="absolute right-0 top-0 w-[40%]? h-full bg-fuchsia-900/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="2" width="18" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Aseguradoras</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Tech Insurance brinda a las aseguradoras una herramienta para potenciar su canal comercial, mejorar productos existentes, crear nuevos productos y desarrollar nuevos canales de distribución.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Modernización sin reemplazo</h4>
                 <p className="text-sm font-light text-zinc-500">Sin impactar en el core, ofrecemos funcionalidad 100% orientada a usuarios internos no técnicos de las compañías.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Lanzamientos rápidos</h4>
                 <p className="text-sm font-light text-zinc-500">La solución permite a las compañías desarrollar y lanzar productos con una velocidad alineada a las necesidades del negocio.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors md:col-span-2">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Expansión Multi-Canal Nativa</h4>
                 <p className="text-sm font-light text-zinc-500">Permite a una compañía ofrecer los mismos productos en diferentes canales con experiencias adaptadas, o bien crear productos específicos por canal, habilitando múltiples combinaciones comerciales.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BROKERS PAS */}
      <section id="brokers" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-row-reverse lg:flex-row">
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-2xl hover:bg-[#1b081e]/80 hover:border-fuchsia-800 transition-colors">
                 <div className="text-zinc-500 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Portales Transaccionales</h4>
                 <p className="text-sm font-light text-zinc-500">Oficinas virtuales unificadas de cobro y emisión instantánea.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-2xl hover:bg-[#1b081e]/80 hover:border-fuchsia-800 transition-colors">
                 <div className="text-zinc-500 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Cotizadores</h4>
                 <p className="text-sm font-light text-zinc-500">Agregadores paramétricos para cotizar entre múltiples ramas comerciales.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-2xl hover:bg-[#1b081e]/80 hover:border-fuchsia-800 transition-colors md:col-span-2">
                 <div className="text-zinc-500 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">CRM y Gestión Comercial 360</h4>
                 <p className="text-sm font-light text-zinc-500">Control de red, cálculo de comisiones multi-nivel y asignación de carteras cruzadas eficientemente.</p>
               </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Productores / Corredores (PAS)</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Los canales comerciales acceden a los cotizadores de nuevos productos de manera simple. Estas capacidades pueden ser embebidas dentro de los sistemas de los PAS, corredores o productores, así como también en los sistemas de gestión de las compañías.</p>
            </div>

          </div>
        </div>
      </section>

      {/* BANCOS Y FINTECH */}
      <section id="bancos" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Bancos / <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Fintechs</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">La solución permite unificar la venta y ofrecer servicios de seguros a los clientes, ya sea a través de la figura de un intermediario o agente institorio, o bien mediante un broker de seguros.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Integración</h4>
                 <p className="text-sm font-light text-zinc-500">Tech Insurance cuenta con experiencia en integración con bancos regionales, habiendo cumplido con certificaciones, restricciones y requerimientos de seguridad informática propios de este tipo de instituciones.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-row-reverse lg:flex-row">
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-zinc-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Onboarding B2B y Distribución</h4>
                 <p className="text-sm font-light text-zinc-500">Genere instancias de negocio donde terceros se dan de alta y acceden a su catálogo como revendedores en segundos.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-zinc-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M10 17.5h4"/><path d="M17.5 10v4"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Ecosistemas abiertos</h4>
                 <p className="text-sm font-light text-zinc-500">Proveemos una solución que permite desarrollar y operar negocios en la industria aseguradora, articulando a los distintos jugadores del ecosistema.</p>
               </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Alianzas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Partners</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-6">Tech Insurance es también utilizado por terceros que buscan articular la relación entre aseguradoras y canales comerciales, permitiendo integrar compañías de seguros con actores como agentes institorios u otros distribuidores.</p>
              <p className="text-zinc-500 font-light text-xl leading-relaxed mb-8">Tech Insurance es una herramienta utilizada también por actores ajenos a la industria aseguradora que requieren integrar procesos de seguros dentro de sus negocios.</p>
            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED INSURANCE */}
      <section id="embedded" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Embedded <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Insurance</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Tech Insurance está diseñado para permitir embeber productos y soluciones de seguros de forma simple, gestionando de punta a punta todo el proceso dentro de experiencias de terceros.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Plantillas estándar</h4>
                 <p className="text-sm font-light text-zinc-500">Utilizan configuraciones predefinidas del inventario de Tech Insurance para acelerar la implementación.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Plantillas customizadas</h4>
                 <p className="text-sm font-light text-zinc-500">Permiten adaptar la experiencia mediante CSS o desarrollos específicos según la necesidad del negocio.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
