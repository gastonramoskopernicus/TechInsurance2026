import Image from "next/image";

export default function PlataformaPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Qué es Tech Insurance */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
            Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Tech Insurance</span>
          </h1>
          <div className="max-w-5xl space-y-8">
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              Tech Insurance es una plataforma de innovación aseguradora diseñada para desacoplar la evolución del negocio de las limitaciones del core.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Respaldada por más de 20 años de experiencia de Kopernicus en el mercado, nuestra solución nace para resolver el común denominador operativo de las aseguradoras: soluciones rígidas, nula capacidad para escalar, bajísima velocidad de adaptación y la extrema dificultad para responder a nuevos perfiles, ecosistemas y canales de venta. Los sistemas core heredados simplemente no fueron pensados para la velocidad comercial transaccional que el ecosistema abierto exige hoy.
            </p>
            <p className="text-fuchsia-300 text-xl leading-relaxed font-medium">
               El concepto estratégico no es reemplazar el core actual, sino urbanizarlo para acompañar la evolución natural del negocio con extrema velocidad, flexibilidad modular y bajo impacto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
               {/* Card 1 */}
               <div className="group p-8 rounded-2xl border border-fuchsia-900/30 bg-[#0f0e11] hover:bg-[#16141a] hover:border-fuchsia-500/40 hover:shadow-[0_10px_40px_rgba(217,70,239,0.05)] transition-all text-left">
                 <div className="text-fuchsia-600 group-hover:text-fuchsia-400 mb-6 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
                 <h4 className="text-white font-bold text-lg mb-3 leading-snug">No reemplaza el core,<br/>lo potencia</h4>
                 <p className="text-zinc-500 group-hover:text-zinc-400 text-sm font-light leading-relaxed transition-colors">Despliega de manera inmediata herramientas de front-end e integraciones que el sistema legacy tardaría años o millones en desarrollar.</p>
               </div>
               
               {/* Card 2 */}
               <div className="group p-8 rounded-2xl border border-fuchsia-900/30 bg-[#0f0e11] hover:bg-[#16141a] hover:border-fuchsia-500/40 hover:shadow-[0_10px_40px_rgba(217,70,239,0.05)] transition-all text-left">
                 <div className="text-fuchsia-600 group-hover:text-fuchsia-400 mb-6 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
                 <h4 className="text-white font-bold text-lg mb-3 leading-snug">Extiende la vida<br/>del core legacy</h4>
                 <p className="text-zinc-500 group-hover:text-zinc-400 text-sm font-light leading-relaxed transition-colors">Tech Insurance extiende la vida útil del core de seguros mientras se incorporan nuevas capacidades digitales sin necesidad de reescritura.</p>
               </div>

               {/* Card 3 */}
               <div className="group p-8 rounded-2xl border border-fuchsia-900/30 bg-[#0f0e11] hover:bg-[#16141a] hover:border-fuchsia-500/40 hover:shadow-[0_10px_40px_rgba(217,70,239,0.05)] transition-all text-left">
                 <div className="text-fuchsia-600 group-hover:text-fuchsia-400 mb-6 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                 <h4 className="text-white font-bold text-lg mb-3 leading-snug">Valor comercial,<br/>menor riesgo operativo</h4>
                 <p className="text-zinc-500 group-hover:text-zinc-400 text-sm font-light leading-relaxed transition-colors">La transformación se concentra en generar nuevas utilidades de negocio al instante, evitando los riesgos técnicos del cambio.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'capacidades', label: 'Capacidades', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            { id: 'product-studio', label: 'Product Studio', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg> },
            { id: 'modulos', label: 'Módulos', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg> },
            { id: 'arquitectura', label: 'Arquitectura', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg> },
            { id: 'orquestacion', label: 'Orquestación', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { id: 'api-developer', label: 'API Platform', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
            { id: 'seguridad', label: 'Seguridad', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg> },
            { id: 'licenciamiento', label: 'Licenciamiento', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> },
          ].map((item) => (
            <a 
              key={item.id} 
              href={item.id === 'product-studio' ? '/product-studio' : `#${item.id}`} 
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] text-zinc-400 font-medium hover:text-white hover:bg-white/5 focus:bg-white/10 active:bg-white/10 transition-all"
            >
              <span className="text-zinc-500 group-hover:text-fuchsia-400 transition-colors">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* 2. CONCEPTO CLAVE - URBANIZACIÓN */}
      <section className="py-24 px-4 border-b border-white/5 bg-[#050106] pt-28 -mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-tight">
            El Concepto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Urbanización</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Texto Original */}
            <div className="p-10 rounded-2xl bg-[#0f0e11] border border-fuchsia-950 shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[80px]" />
              <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Urbanizar no es reemplazar.</h3>
              <p className="text-zinc-400 text-lg mb-8 relative z-10 font-light">
                Es rodear el core con capas inteligentes que:
              </p>
              <div className="grid grid-cols-1 gap-4 mb-10 relative z-10">
                 <div className="flex gap-4 items-center p-4 bg-black/40 rounded-xl border border-white/5">
                   <div className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                   <p className="text-zinc-300">Absorben el cambio constante del mercado</p>
                 </div>
                 <div className="flex gap-4 items-center p-4 bg-black/40 rounded-xl border border-white/5">
                   <div className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                   <p className="text-zinc-300">Reducen drásticamente el riesgo</p>
                 </div>
                 <div className="flex gap-4 items-center p-4 bg-black/40 rounded-xl border border-white/5">
                   <div className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                   <p className="text-zinc-300">Aceleran el entorno de negocio</p>
                 </div>
              </div>
              <p className="text-fuchsia-200 font-medium text-lg relative z-10 mt-auto">Este enfoque estratégico evita los proyectos de transformación largos, riesgosos y costosos.</p>
            </div>

            {/* Imagen Conceptual */}
            <div className="relative w-full min-h-[400px] h-full rounded-2xl overflow-hidden border border-fuchsia-900/20 shadow-[0_0_50px_rgba(217,70,239,0.05)] bg-[#0f0e11] group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#200e23]/60 via-transparent to-transparent z-10 mix-blend-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
               <Image src="/tech-urbanization-core.png" alt="Concepto de Evolución del Core Tecnológico" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPACIDADES */}
      <section id="capacidades" className="py-24 px-4 border-b border-white/5 bg-[#020104] pt-32 -mt-16 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">El Motor Comercial</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white tracking-tight">
            Capacidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Centrales</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             <div className="group relative rounded-2xl bg-[#130a16] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col overflow-hidden h-full">
                <div className="mb-6 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6z"/><path d="M12 2v20"/><path d="M12 11.2l-8-4.6"/><path d="M12 11.2l8-4.6"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-3">Modelado de productos</h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 font-light leading-relaxed transition-colors">Modelos sin dependencia de IT. Lógica abstraída al usuario de negocio.</p>
             </div>
             
             <div className="group relative rounded-2xl bg-[#130a16] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col overflow-hidden h-full">
                <div className="mb-6 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><circle cx="12" cy="12" r="3"/><path d="M12 2v7"/><path d="M12 15v7"/><path d="M22 12h-7"/><path d="M9 12H2"/><path d="m19.07 4.93-4.95 4.95"/><path d="M9.88 14.12 4.93 19.07"/><path d="m4.93 4.93 4.95 4.95"/><path d="m19.07 19.07-4.95-4.95"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-3">Configuración dinámica</h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 font-light leading-relaxed transition-colors">Reglas y condiciones hiper-customizables inyectadas on-the-fly.</p>
             </div>

             <div className="group relative rounded-2xl bg-[#130a16] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col overflow-hidden h-full">
                <div className="mb-6 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><circle cx="12" cy="12" r="9"/><path d="M12 3v9"/><path d="M12 12l4.24 4.24"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-3">Versionado continuo</h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 font-light leading-relaxed transition-colors">Evolución ininterrumpida sin impacto operativo sobre las pólizas activas.</p>
             </div>

             <div className="group relative rounded-2xl bg-[#130a16] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col overflow-hidden h-full">
                <div className="mb-6 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                <h4 className="text-xl font-bold text-white mb-3">Integración fluida</h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 font-light leading-relaxed transition-colors">Orquestación con múltiples canales B2B, B2B2C nativa desde día uno.</p>
             </div>
             
             <div className="group relative rounded-2xl bg-[#130a16] border border-fuchsia-900/30 p-8 hover:border-fuchsia-500/40 hover:bg-[#200e23] transition-all duration-500 flex flex-col overflow-hidden h-full lg:col-span-2">
                <div className="mb-6 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-3">Conectividad unificada</h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 font-light leading-relaxed transition-colors max-w-2xl">Creación de alianzas seguras con partners y terceros asegurando transaccionalidad sin riesgo y compartición de comisiones.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT STUDIO (TEASER VINCULADO) */}
      <section id="product-studio" className="py-24 border-b border-border/50 relative overflow-hidden bg-[#0d040e] scroll-mt-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.06),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
          
          <div className="relative w-24 h-24 mx-auto mb-8 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <Image src="/TechInsurance.svg" alt="Product Studio Logo Component" fill className="object-contain" priority />
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-3 block">El Corazón de la Innovación</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Product Studio: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Autonomía Comercial</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            Otorgue el poder de configuración absoluta a sus áreas de negocio. Nuestro motor No-Code permite conceptualizar, tarificar y disparar seguros sin depender del roadmap tecnológico.
          </p>
          
          <a href="/product-studio" className="inline-flex h-14 items-center justify-center rounded-xl bg-fuchsia-600 px-8 text-base font-bold text-white shadow-[0_0_30px_rgba(192,38,211,0.3)] hover:shadow-[0_0_40px_rgba(192,38,211,0.5)] hover:bg-fuchsia-500 transition-all gap-3 group">
             Explorar Product Studio
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* 5. MÓDULOS DE NEGOCIO (ORGANIZADO POR CAPAS - LAYERS) */}
      <section id="modulos" className="py-32 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-900/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-fuchsia-600 font-semibold tracking-widest text-xs uppercase mb-3 block">La Suite</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Módulos <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Core</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
              Tech Insurance está compuesto por bloques funcionales independientes que rodean su sistema legacy.
              Un diseño urbanizado, clasificado por capas lógicas de maduración de negocio.
            </p>
          </div>
          
          <div className="space-y-32">
          
            {/* LAYER 1: Product & Core Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">01</span> Product & Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                
                {/* Product Studio - DESTACADO SPAN-2 */}
                <div className="group p-8 border border-fuchsia-800/40 bg-[#1b081e] rounded-2xl hover:bg-[#250b28] hover:border-fuchsia-500/60 shadow-[0_0_40px_rgba(217,70,239,0.05)] hover:shadow-[0_0_50px_rgba(217,70,239,0.15)] transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-2">
                   <div className="mb-6 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-3">Product Studio (Núcleo)</h4>
                   <p className="text-fuchsia-100/70 font-light group-hover:text-fuchsia-100/90 transition-colors text-lg leading-relaxed">Los equipos comerciales crean, modelan y versionan productos de seguros con un rápido despliegue, sin requerir intermediación de perfiles técnicos ni necesidad de escribir código.</p>
                </div>
                
                {/* Otros Módulos Layer 1 */}
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6z"/><path d="M12 2v20"/><path d="M12 11.2l-8-4.6"/><path d="M12 11.2l8-4.6"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Coberturas</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite administrar coberturas entre productos, configurar prestaciones, agruparlas y reutilizarlas de forma eficiente.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Pricing Engine</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Cuenta con un potente motor de cálculo basado en variables internas y externas, con posibilidad de integración mediante APIs.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Motor de Reglas de Negocio</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Sususcripción, scoring y lógicas de validación sin dependencia técnica.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Ciclo de Vida</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Automatización de endosos, renovaciones y cancelaciones orquestadas.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Dashboard & KPIs</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">La plataforma cuenta con indicadores y KPIs que permiten monitorear el estado de los productos, su performance y evolución.</p>
                </div>
              </div>
            </div>

            {/* LAYER 2: Commercial Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">02</span> Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Canales</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite administrar la red comercial bajo un modelo omnicanal, incluyendo la gestión de comisiones y beneficios para agentes, brokers y referidos.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Campañas</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite administrar productos con vigencia temporal, asociados a iniciativas específicas o configurados mediante criterios parametrizables.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Embedded Insurance</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Tech Insurance fue concebido como una solución embebida, diseñada para integrarse de forma simple en experiencias digitales de terceros.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M12 8v4l3 3"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Customer Journey</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite monitorear y trazar la interacción del cliente con la plataforma para identificar oportunidades de mejora y optimizar la experiencia.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Portales B2B / B2B2C / B2C</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">La plataforma está preparada para operar en diferentes esquemas comerciales, ya sea a través de intermediarios o con foco directo en el cliente final.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">E-commerce de Seguros</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite construir marketplaces de seguros, tanto para productos simples como complejos, dentro de un mismo entorno.</p>
                </div>
              </div>
            </div>

            {/* LAYER 3: Experience Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">03</span> Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Onboarding Digital</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">La plataforma ha sido diseñada para permitir una interacción 100% digital con el cliente desde el inicio.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Autogestión</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Permite a los clientes gestionar sus pólizas, incluyendo denuncias de siniestros, bajas y otras operaciones clave.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Notificaciones</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Tech Insurance cuenta con múltiples modalidades de contacto con el cliente, incluyendo email, SMS y landings interactivas.</p>
                </div>
              </div>
            </div>

            {/* LAYER 4: Integration Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">04</span> Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                 <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Catálogo de Servicios</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Tech Insurance cuenta con más de 300 servicios listos para integrar la solución con cores de seguros y otras plataformas.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Conectores</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Interfaces estándar ya implementadas con los principales cores de seguros y pasarelas de pago.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Orquestador</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Servicios de la capa activa donde se validan y ejecutan múltiples funcionalidades del sistema.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Webhooks</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Arquitectura orientada a eventos para latencia cero.</p>
                </div>
              </div>
            </div>

            {/* LAYER 5: Data & Intelligence */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">05</span> Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Intelligence</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Motor de Datos</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Tech Insurance posee una estructura de datos relacional potente que permite aplicar Data Mining, análisis de datos y Business Intelligence.</p>
                 </div>
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Motor de Decisiones / IA</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Incorpora capacidades de inteligencia artificial para análisis predictivo, mejora de productos y soporte a la toma de decisiones.</p>
                 </div>
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Dashboard & KPIs</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">La solución cuenta con indicadores de gestión que permiten monitorear productos y campañas comerciales.</p>
                 </div>
              </div>
            </div>

            {/* LAYER 6 & 7: Governance and Payments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center">
                    <span className="text-zinc-600 mr-4 font-light text-xl">06</span> GRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Gestión de Usuarios</p></div>
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Roles y Permisos Granulares</p></div>
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Auditoría y Trazabilidad Compliance</p></div>
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center">
                    <span className="text-zinc-600 mr-4 font-light text-xl">07</span> Payments <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 border border-white/5 bg-[#130a16] border-fuchsia-900/20 rounded-xl h-full flex flex-col justify-center">
                       <h4 className="text-lg font-bold text-white mb-2">Gestión de Primas</h4>
                       <p className="text-sm text-zinc-500 font-light">Permite administrar cuotas, pagos y realizar conciliación de cobranzas, entre otras funcionalidades.</p>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#130a16] border-fuchsia-900/20 rounded-xl h-full flex flex-col justify-center">
                       <h4 className="text-lg font-bold text-white mb-2">Pasarelas Digitales</h4>
                       <p className="text-sm text-zinc-500 font-light">Stripe, Mercadopago, Bambú, Wallets digitales y Open Banking integrations.</p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
{/* 6. ARQUITECTURA */}
      <section id="arquitectura" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-fuchsia-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Fundación Técnica</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
            Arquitectura <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Desacoplada</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-16">
            Infraestructura API-first, cien por ciento orientada a la integración profunda y escalabilidad sin fricción.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group p-8 border border-white/5 rounded-2xl bg-[#0f0e11] hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-300">
               <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-400 transition-colors duration-300 flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
               <p className="text-xl font-bold text-white mb-3">Convivir</p>
               <p className="text-zinc-500 font-light group-hover:text-zinc-400">con cualquier core legacy on-premise de forma transparente.</p>
            </div>
            <div className="group p-8 border border-white/5 rounded-2xl bg-[#0f0e11] hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-300">
               <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-400 transition-colors duration-300 flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
               <p className="text-xl font-bold text-white mb-3">Integrarse</p>
               <p className="text-zinc-500 font-light group-hover:text-zinc-400">con ecosistemas y arquitecturas de microservicios contemporáneos.</p>
            </div>
            <div className="group p-8 border border-white/5 rounded-2xl bg-[#0f0e11] hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-300">
               <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-400 transition-colors duration-300 flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
               <p className="text-xl font-bold text-white mb-3">Escalar</p>
               <p className="text-zinc-500 font-light group-hover:text-zinc-400">sin ningún tipo de fricción de hardware mediante alta disponibilidad.</p>
            </div>
            <div className="group p-8 border border-white/5 rounded-2xl bg-[#0f0e11] hover:border-fuchsia-800 hover:bg-[#16141a] transition-all duration-300">
               <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-400 transition-colors duration-300 flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
               <p className="text-xl font-bold text-white mb-3">Adaptarse</p>
               <p className="text-zinc-500 font-light group-hover:text-zinc-400">ágilmente a cualquier entorno y normativa IT corporativa exigente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUES RESTANTES CON JERARQUÍA UNIFICADA EN GRID */}
      <section className="py-24 px-4 bg-[#020104] border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Orquestación */}
            <div id="orquestacion" className="group p-12 border border-white/5 rounded-3xl bg-[#0f0e11] hover:bg-[#130a16] hover:border-fuchsia-900/40 transition-all duration-500 scroll-mt-32 flex flex-col justify-center">
              <div className="mb-8 text-zinc-600 group-hover:text-fuchsia-500 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Orquestación <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Comercial</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed group-hover:text-zinc-400 transition-colors">Automatice y controle la gestión de ciclos de vida completos. Desde la cotización y campañas hasta flujos externos con partners y ecosistemas, usando reglas claras sin intervención manual continua.</p>
            </div>
            
            {/* API Developer */}
            <div id="api-developer" className="group p-12 border border-white/5 rounded-3xl bg-[#0f0e11] hover:bg-[#130a16] hover:border-fuchsia-900/40 transition-all duration-500 scroll-mt-32 flex flex-col justify-center">
              <div className="mb-8 text-zinc-600 group-hover:text-fuchsia-500 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                API & Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Platform</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed group-hover:text-zinc-400 transition-colors">Portal corporativo unificado de catálogos y servicios. Asegure una escalabilidad inmediata para equipos internos o desarrolladores terceros con sandboxes pre-configurados agilizando el flujo B2B.</p>
            </div>
            
            {/* Seguridad */}
            <div id="seguridad" className="group p-12 border border-white/5 rounded-3xl bg-[#0f0e11] hover:bg-[#130a16] hover:border-fuchsia-900/40 transition-all duration-500 scroll-mt-32 flex flex-col justify-center">
              <div className="mb-8 text-zinc-600 group-hover:text-fuchsia-500 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg></div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Seguridad & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Compliance</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed group-hover:text-zinc-400 transition-colors">Cumplimiento nativo para arquitecturas financieras. Con ambientes auditables nativamente, gobierno de accesos estricto y trazabilidad criptográfica sobre cada configuración expuesta de sus pólizas.</p>
            </div>
            
            {/* Licenciamiento */}
            <div id="licenciamiento" className="group p-12 border border-white/5 rounded-3xl bg-[#0f0e11] hover:bg-[#130a16] hover:border-fuchsia-900/40 transition-all duration-500 scroll-mt-32 flex flex-col justify-center">
              <div className="mb-8 text-zinc-600 group-hover:text-fuchsia-500 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Modelos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Licenciamiento</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed group-hover:text-zinc-400 transition-colors">Ofrecemos infraestructura SaaS multi-tenant o despliegues dedicados Enterprise, brindando a las compañías libertad de acompañamiento evolutivo y absoluta seguridad de propiedad intelectual sobre su capa core operativa.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
