import Image from "next/image";

export default function RecursosPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Recursos */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.10] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-24 h-24 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Recursos para entender <br className="hidden md:block"/> la <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">evolución del seguro</span>
          </h1>
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed">
              Tech Insurance no es solo una plataforma. También es una visión profunda sobre cómo transformar definitivamente la comercialización, el diseño arquitectónico y la operatividad de los seguros a nivel global.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Recursos) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'destacados', label: 'Destacados' },
            { id: 'whitepapers', label: 'Whitepapers' },
            { id: 'videos', label: 'Videos' },
            { id: 'articulos', label: 'Artículos' },
            { id: 'brochures', label: 'Brochures' },
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

      {/* DESTACADOS */}
      <section id="destacados" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Destacado</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">Selección editorial del material más influyente emitido por nuestros equipos y partners tecnológicos.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <a href="#" className="group relative p-12 bg-[#1b081e] border border-fuchsia-500/30 rounded-[2.5rem] hover:bg-[#200e23] hover:border-fuchsia-500/70 transition-all shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-end">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-fuchsia-600/20 transition-all" />
               <div className="absolute top-10 right-10 text-fuchsia-500/20 group-hover:text-fuchsia-500/40 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-32 h-32"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="8" x2="16" y1="16" y2="16"/><line x1="8" x2="10" y1="8" y2="8"/></svg>
               </div>
               <div className="relative z-10 w-full md:w-3/4">
                 <span className="inline-block px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 font-bold text-xs uppercase tracking-widest rounded-full border border-fuchsia-500/30 mb-6">Whitepaper Premium</span>
                 <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">La Urbanización del Core Asegurador</h3>
                 <p className="text-zinc-400 font-light text-lg mb-8 leading-relaxed">Descubra en 40 páginas cómo proteger su AS400 mientras compite frente a insurtechs de nueva generación.</p>
                 <span className="text-fuchsia-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">Descargar PDF <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg></span>
               </div>
            </a>
            
            <a href="#" className="group relative p-12 bg-[#0a050b] border border-white/10 rounded-[2.5rem] hover:bg-[#16141a] hover:border-white/30 transition-all shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-end">
               <div className="absolute top-10 right-10 text-zinc-600/20 group-hover:text-fuchsia-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-32 h-32"><polygon points="5 3 19 12 5 21 5 3"/><path d="M19 12h-9"/></svg>
               </div>
               <div className="relative z-10 w-full md:w-3/4">
                 <span className="inline-block px-3 py-1 bg-white/5 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 mb-6 group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-300 transition-colors">Video</span>
                 <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Demostración Comercial (Product Studio)</h3>
                 <p className="text-zinc-500 font-light text-lg mb-8 leading-relaxed">Vea en tiempo real cómo nuestros ingenieros estructuran un seguro embebido de bicicletas en menos de 15 minutos.</p>
                 <span className="text-fuchsia-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">Ver en HD <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>
               </div>
            </a>
          </div>
        </div>
      </section>

      {/* WHITEPAPERS */}
      <section id="whitepapers" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Librería Técnica y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Whitepapers</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light max-w-2xl">Profundice en los cimientos del desacople arquitectónico y la orquestación comercial.</p>
             </div>
             <div className="text-fuchsia-600/30 hidden lg:block"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Aceleración Comercial API-First', desc: 'Análisis de mercado sobre cómo los bancos están devorando el pipeline asegurador utilizando protocolos abiertos.', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>' },
              { title: 'Embedded Insurance', desc: 'Casos de uso matemáticos sobre conversión B2B2C integrando seguros dentro de la caja de compra final.', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="12" r="2"/><line x1="14" y1="16" x2="16" y2="16"/>' },
              { title: 'Mitos y Verdades del No-Code', desc: 'Un paper escrito en colaboración con el líder global actuarial detallando la solidez matemática detrás del Product Studio.', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><polyline points="10 9 9 9 8 9"/>' }
            ].map((item, idx) => (
              <a href="#" key={idx} className="group p-8 border border-white/5 bg-[#0f0e11] rounded-3xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                 <div className="mb-8 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 leading-snug">{item.title}</h4>
                 <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors leading-relaxed mb-6">{item.desc}</p>
                 <div className="mt-auto border-t border-white/5 pt-6 flex justify-between items-center text-sm font-bold text-fuchsia-500/70 group-hover:text-fuchsia-400">
                    Descargar Doc (PDF) <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Tech Insurance</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Videos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Contenidos</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">Sección de videos y contenidos relacionados con Tech Insurance definiendo la pauta global insurtech en los últimos foros de mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {[
              { id: '37LdiHUi6A8', title: 'Visión Estratégica: Ecosistemas Aseguradores Abiertos', desc: 'Análisis profundo sobre el impacto del desacople y el futuro del core corporativo integrando agentes externos.'},
              { id: '5rF4i2rLTGk', title: 'Product Studio en Práctica', desc: 'Taller de integración. Demostración práctica de cómo generar rentabilidad en banca-seguros apalancando módulos agnósticos.'}
            ].map((item, idx) => (
              <div key={idx} className="group flex flex-col bg-[#0f0e11] rounded-[2rem] hover:bg-[#16141a] border border-white/5 hover:border-fuchsia-900/50 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                 <div className="w-full aspect-video relative bg-black border-b border-white/5">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                 </div>
                 <div className="p-8 flex flex-col justify-center flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-fuchsia-100">{item.title}</h4>
                    <p className="text-zinc-500 font-light text-sm mb-6 leading-relaxed flex-1">{item.desc}</p>
                    <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer" className="text-fuchsia-600/80 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-fuchsia-400 w-fit">
                       Visualizar en Youtube <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                 </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
             <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-fuchsia-800 text-fuchsia-400 font-bold rounded-xl hover:bg-fuchsia-900/30 transition-all duration-300">
                Suscribirse al canal Oficial
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
             </a>
          </div>
        </div>
      </section>

      {/* ARTÍCULOS */}
      <section id="articulos" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Artículos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Publicaciones</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light max-w-2xl">Mantenetimiento evolutivo: manténgase al día con las corrientes mundiales del universo startup y finanzas.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Innovación', title: '¿Por qué la Urbanización tecnológica le está ganando la guerra a la migración total?', date: 'Marzo 2026' },
              { tag: 'Embedded', title: 'Retail + Seguros: Cómo Walmart, MercadoLibre y Amazon devoraron la subscripción de pólizas base.', date: 'Febrero 2026' },
              { tag: 'Opinión', title: 'Hacia modelos estocásticos parametrizados sin necesidad de intervención manual (A.I + Actuarios)', date: 'Enero 2026' }
            ].map((item, idx) => (
              <a href="#" key={idx} className="group p-8 border border-white/5 bg-[#0a050b] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col shadow-lg">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-500 bg-fuchsia-900/20 px-3 py-1 rounded-full">{item.tag}</span>
                    <span className="text-xs font-medium text-zinc-600">{item.date}</span>
                 </div>
                 <h4 className="text-lg font-bold text-white mb-6 leading-relaxed group-hover:text-fuchsia-100">{item.title}</h4>
                 <div className="mt-auto pt-4 flex items-center text-sm font-bold text-zinc-500 group-hover:text-fuchsia-400 transition-colors">
                    Leer Nota <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-2"><polyline points="9 18 15 12 9 6"/></svg>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURES INSTITUCIONALES */}
      <section id="brochures" className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/40 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-fuchsia-500 mx-auto mb-6 w-fit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Folletos <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Corporativos</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-16">
            Lleve nuestro modelo de negocio directo a su próxima junta de directorio (Board). Los resúmenes ejecutivos que el Level-C necesita.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#" className="group relative p-8 md:p-10 bg-[#1b081e] border border-fuchsia-900/40 rounded-[2rem] hover:bg-[#200e23] hover:border-fuchsia-500/70 transition-all shadow-[0_10px_30px_rgba(217,70,239,0.05)] overflow-hidden w-full sm:w-[400px] text-left">
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-fuchsia-500/20" />
               <h4 className="text-2xl font-bold text-white mb-2">Brochure Institucional Tech Insurance</h4>
               <p className="text-zinc-400 font-light text-sm mb-8">El Pitch Deck general detallando plataforma, ecosistema y retorno de inversión B2B.</p>
               <span className="inline-block px-6 py-3 bg-fuchsia-600/20 text-fuchsia-300 font-bold text-sm tracking-wide rounded-xl border border-fuchsia-500/30 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-transparent transition-all shadow-lg">Descargar Brochure</span>
            </a>
            
            <a href="#" className="group relative p-8 md:p-10 bg-[#1b081e] border border-fuchsia-900/40 rounded-[2rem] hover:bg-[#200e23] hover:border-fuchsia-500/70 transition-all shadow-[0_10px_30px_rgba(217,70,239,0.05)] overflow-hidden w-full sm:w-[400px] text-left">
               <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-fuchsia-500/20" />
               <h4 className="text-2xl font-bold text-white mb-2">Brochure Functional / Comercial</h4>
               <p className="text-zinc-400 font-light text-sm mb-8">Un mapeo estricto del Product Studio y las APIs de las capas operativas.</p>
               <span className="inline-block px-6 py-3 bg-fuchsia-600/20 text-fuchsia-300 font-bold text-sm tracking-wide rounded-xl border border-fuchsia-500/30 group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-transparent transition-all shadow-lg">Descargar Detalles</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
