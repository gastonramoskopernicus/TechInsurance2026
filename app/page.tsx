import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center border-b border-border/50 bg-[#020202] overflow-hidden px-4 py-24 sm:py-32">
        {/* Deep Space Atmosphere Base */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        
        {/* Subtle CSS Starfield Parallax Layers */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px), radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.6) 1px, transparent 1px), radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.9) 1px, transparent 1px), radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.5) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.7) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.8) 1px, transparent 1px), radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.6) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        {/* Cinematic Nebula Layer (Mix Blend) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Nebula Layer" fill className="object-cover object-bottom animate-cosmic-drift" priority quality={100} />
        </div>
        
        {/* Abstract Vignette Mask */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020104]/10 via-[#020104]/50 to-[#020104] pointer-events-none" />

        {/* Foco Visual detrás del logo (Halo de luz dinámico) */}
        <div className="absolute top-[30%] sm:top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none z-0 animate-breath" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
          <div className="relative flex justify-center items-center w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] mb-6 z-20">
            <div className="animate-breath w-full h-full drop-shadow-[0_0_25px_rgba(217,70,239,0.2)]">
              <Image 
                src="/logo.svg" 
                alt="Tech Insurance Official Geometric Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Deje de depender <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">
                de su core para innovar.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Tech Insurance permite lanzar productos, integrar canales y escalar su negocio sin rediseñar sus sistemas existentes.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center w-full max-w-md mx-auto relative z-20">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-2">Powered by</span>
            <div className="flex items-center justify-center relative w-56 h-12 sm:w-72 sm:h-14 opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-default">
               <Image src="/kopernicus-logo.png" alt="Kopernicus Tech" fill className="object-contain brightness-0 invert" sizes="(max-width: 768px) 250px, 350px" priority />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Problema del mercado */}
      <section id="problema" className="py-32 bg-[#020104] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-fuchsia-600 font-semibold tracking-widest text-xs uppercase mb-3 block">El Desafío</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
              El problema no es tecnológico.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Es estructural.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              Los sistemas core fueron diseñados para operar, no para innovar. Cada intento de forzar nuevas lógicas sobre ellos desencadena los mismos bloqueos:
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-10 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-6 relative z-10 text-fuchsia-600 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Tiempos largos</h4>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-lg leading-relaxed font-light relative z-10 transition-colors">
                Ciclos de meses solo para parametrizaciones básicas y tests en ecosistemas rígidos.
              </p>
            </div>
            
            <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-10 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-6 relative z-10 text-fuchsia-600 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Alto costo</h4>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-lg leading-relaxed font-light relative z-10 transition-colors">
                Proyectos interminables, dependencias hipervinculadas y horas de consultoría legacy.
              </p>
            </div>

            <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-10 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-6 relative z-10 text-fuchsia-600 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Dependencia de IT</h4>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-lg leading-relaxed font-light relative z-10 transition-colors">
                Pérdida absoluta de agilidad, donde los equipos comerciales no tienen autonomía de lanzamiento.
              </p>
            </div>

            <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-10 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              <div className="mb-6 relative z-10 text-fuchsia-600 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Riesgo operativo</h4>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-lg leading-relaxed font-light relative z-10 transition-colors">
                Intervenir la fuente es crítico. Limita exponencialmente la capacidad real de competir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solución (Tech Insurance) */}
      <section id="solucion" className="py-32 border-b border-white/5 relative overflow-hidden bg-[#0d040e]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Nuestra Solución</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tech Insurance desacopla <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">la innovación.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Lanzar productos <br/> en días</h4>
             </div>
             
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Testear modelos <br/> sin riesgo</h4>
             </div>
             
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Integrar partners <br/> sin fricción</h4>
             </div>
             
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Escalar sin <br/> reescribir sistemas</h4>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Capacidades */}
      <section id="capacidades" className="py-32 bg-[#020104] border-b border-white/5 relative">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left,rgba(217,70,239,0.03),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Acelere productos, canales y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">experiencias</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Card 1: Magenta Oscuro */}
            <div className="group relative rounded-2xl bg-[#311030] border border-fuchsia-800/20 p-12 hover:border-fuchsia-600/40 hover:bg-[#3d143c] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full shadow-lg shadow-fuchsia-900/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mb-10 relative z-10 text-fuchsia-300 group-hover:text-fuchsia-200 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Diseño Modular</h3>
              <p className="text-fuchsia-100/70 text-lg leading-relaxed font-light relative z-10">
                Configure coberturas, reglas y precios de forma dinámica para crear nuevos productos en días.
              </p>
            </div>

            {/* Card 2: Magenta Degradé */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-[#3b0b3d] to-[#120516] border border-fuchsia-900/30 p-12 hover:border-fuchsia-500/40 hover:from-[#490d4c] hover:to-[#1a081c] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full shadow-[0_0_40px_rgba(217,70,239,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]">
              <div className="mb-10 relative z-10 text-fuchsia-400 group-hover:text-fuchsia-300 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-24"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v7"></path><path d="M12 15v7"></path><path d="M22 12h-7"></path><path d="M9 12H2"></path><path d="m19.07 4.93-4.95 4.95"></path><path d="M9.88 14.12 4.93 19.07"></path><path d="m4.93 4.93 4.95 4.95"></path><path d="m19.07 19.07-4.95-4.95"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Distribución Omnicanal</h3>
              <p className="text-fuchsia-100/60 text-lg leading-relaxed font-light relative z-10">
                APIs preparadas para integrar su oferta instantáneamente en ecosistemas e-commerce y fintech.
              </p>
            </div>

            {/* Card 3: Magenta Oscuro */}
            <div className="group relative rounded-2xl bg-[#311030] border border-fuchsia-800/20 p-12 hover:border-fuchsia-600/40 hover:bg-[#3d143c] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full shadow-lg shadow-fuchsia-900/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mb-10 relative z-10 text-fuchsia-300 group-hover:text-fuchsia-200 group-hover:scale-110 transition-transform duration-500">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-24 h-24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Orquestación Continua</h3>
              <p className="text-fuchsia-100/70 text-lg leading-relaxed font-light relative z-10 transition-colors">
                Automatización y escalabilidad del ciclo de vida, desde la cotización hasta el reclamo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Product Studio */}
      <section id="product-studio" className="py-32 border-b border-border/50 relative overflow-hidden bg-[#0d040e]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl relative z-10">
          
          <div className="relative w-32 h-32 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            <Image src="/TechInsurance.svg" alt="Tech Insurance Emblem" fill className="object-contain" priority />
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-3 block">Innovation Hub</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Product Studio: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Autonomía Comercial</span></h2>
          <div className="max-w-4xl mx-auto border border-fuchsia-500/10 rounded-2xl p-10 lg:p-14 bg-black/50 backdrop-blur-md hover:border-fuchsia-500/20 transition-colors">
            <p className="text-zinc-300 text-xl font-light leading-relaxed">
              Otorgue el poder a sus equipos de negocio estratégico. Nuestro entorno de configuración No-Code permite conceptualizar, tarificar y validar seguros en el mercado a una velocidad sin precedentes, eliminando la dependencia crítica de IT.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Arquitectura */}
      <section id="arquitectura" className="py-24 bg-[#0f0e11] border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <span className="text-fuchsia-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Infraestructura Constante</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Arquitectura API-First y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Cloud-Native</span></h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Diseñada para escalar de manera predecible. Microservicios altamente disponibles, arquitectura event-driven y resiliencia corporativa que se integra naturalmente con ecosistemas guidewire, plataformas legacy y servicios web externos.
          </p>
        </div>
      </section>

      {/* 7. Casos de uso */}
      <section id="casos-de-uso" className="py-24 border-b border-white/5 bg-[#020104]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <span className="text-fuchsia-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Adopción Flexible</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Impulsando Modelos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Negocio Modernos</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group rounded-2xl bg-[#0f0e11] flex flex-col items-start p-10 text-left border border-white/5 hover:border-fuchsia-900/50 hover:bg-[#1a081c] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Bancaseguros & Fintech</h3>
              <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">Seguros integrados sutilmente en flujos transaccionales y de crédito. Experiencias embebidas que monetizan de forma transparente.</p>
            </div>
            <div className="group rounded-2xl bg-[#0f0e11] flex flex-col items-start p-10 text-left border border-white/5 hover:border-fuchsia-900/50 hover:bg-[#1a081c] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Retail & Sponsors Masivos</h3>
              <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">Comercialización hiper-segmentada y garantías extendidas integradas en el pipeline y punto de venta online (B2B2C).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Impacto en negocio (ROI) */}
      <section id="impacto" className="py-32 bg-[#050106] border-b border-white/5 relative">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-7xl relative z-10">
          <div className="mb-20">
            <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Rendimiento Operativo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Resultados Claros y Medibles <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">(ROI)</span></h2>
          </div>
          
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-8 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 16"/><line x1="16" y1="12" x2="16.01" y2="12"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Reducción del <br/>time-to-market</h4>
             </div>
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-8 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Aumento de ingresos <br/>por canales</h4>
             </div>
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-8 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Menor dependencia <br/>tecnológica</h4>
             </div>
             <div className="group relative rounded-2xl bg-[#0f0e11] border border-fuchsia-950 p-8 hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                <div className="mb-6 relative z-10 text-zinc-500 group-hover:text-fuchsia-500 group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">Mayor capacidad <br/>de innovación</h4>
             </div>
          </div>
        </div>
      </section>

      {/* 8.5 Empresas Adopters (Marquee B2B Premium) */}
      <section className="py-24 border-b border-fuchsia-900/30 bg-[#040105] overflow-hidden relative">
        <style>{`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="container mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Empresas que ya utilizan <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Tech Insurance</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Una plataforma pensada para compañías, partners y ecosistemas que necesitan escalar con velocidad y flexibilidad extrema.
          </p>
        </div>

        <div className="relative w-full overflow-hidden group py-10">
          {/* Edge Masking para que el slider se difumine en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-[#040105] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-[#040105] to-transparent z-20 pointer-events-none" />
          
          <div className="animate-infinite-scroll flex items-center">
            {/* Loop continuo de logos reales */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
                 {[
                   { file: "assurant-logo.webp", filterClass: "grayscale brightness-0 invert" },
                   { file: "hdi-seguros.png", filterClass: "grayscale brightness-[1.3] contrast-125" },
                   { file: "Seguros_SURA_Logo.svg.png", filterClass: "grayscale brightness-0 invert" },
                   { file: "vida-security-logo.avif", filterClass: "grayscale brightness-[1.2]" },
                   { file: "Motorola_new_logo.svg", filterClass: "grayscale brightness-0 invert" },
                   { file: "Volkswagen-Logo-PNG-High-Quality-Image.png", filterClass: "grayscale brightness-[1.5] contrast-150" },
                   { file: "Logo_Banco_Galicia.svg.png", filterClass: "grayscale brightness-[1.4] contrast-125 mix-blend-screen" },
                   { file: "safer-logo.png", filterClass: "grayscale brightness-[1.3] contrast-125" }
                 ].map((logo, i) => (
                   <div key={i} className={`flex-shrink-0 flex items-center justify-center p-2 h-16 w-32 md:h-20 md:w-40 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${logo.filterClass}`}>
                      <img src={`/empresas/${logo.file}`} alt={logo.file.split('.')[0]} className="w-full h-full object-contain" />
                   </div>
                 ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <section id="cta" className="py-32 relative overflow-hidden bg-fuchsia-950/10 text-center border-t border-fuchsia-900/20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(217,70,239,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 z-10 relative max-w-3xl space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">Libere el potencial <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">de su negocio</span></h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">Escale canales, optimice operaciones y evite migraciones de core traumáticas. Agende una reunión para evaluar nuestra plataforma en su ecosistema.</p>
          <button className="h-14 px-10 rounded-xl bg-fuchsia-600 text-white font-bold text-lg hover:bg-fuchsia-500 transition-colors shadow-[0_0_30px_rgba(192,38,211,0.3)] hover:shadow-[0_0_40px_rgba(192,38,211,0.5)]">
            Agendar Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
