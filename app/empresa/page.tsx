import Image from "next/image";

export default function EmpresaPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Kopernicus */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.14] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-28 h-28 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><polygon points="12 2 2 22 22 22 12 2"/><path d="M12 22V10"/><path d="M8 15h8"/></svg>
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">El Holding Detrás de la Plataforma</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Experiencia real en <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">transformación aseguradora</span>
          </h1>
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed">
              Kopernicus combina genio estratégico, vanguardia tecnológica y rigor operativo para transformar el negocio del seguro y la banca transaccional en toda la región. Nosotros inventamos Tech Insurance.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Empresa) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'somos', label: 'Quiénes somos' },
            { id: 'valor', label: 'Propuesta de Valor' },
            { id: 'core', label: 'Experiencia en Core' },
            { id: 'presencia', label: 'Presencia' },
            { id: 'modelo', label: 'Modelo de Trabajo' },
            { id: 'equipo', label: 'Equipo' },
            { id: 'contacto', label: 'Contacto' },
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

      {/* QUIENES SOMOS */}
      <section id="somos" className="py-32 px-4 bg-[#050106] border-b border-fuchsia-900/30 scroll-mt-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[500px] leading-none pointer-events-none z-0">K</div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Consultora Especializada en <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Seguros y Servicios Financieros</span>
          </h2>
          <div className="max-w-4xl mx-auto p-12 bg-[#1b081e]/80 border border-fuchsia-800/40 backdrop-blur rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-fuchsia-300">No solo diseñamos soluciones. Las llevamos a producción.</h3>
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-6">
              A diferencia de las agencias de marketing o las fábricas de software puras, en Kopernicus nacimos integrando a actuarios, ingenieros nativos de la nube y expertos en suscripción bajo un mismo techo. 
            </p>
            <p className="text-zinc-300 text-lg font-bold">
              Despliegue Estratégico + Re-ingeniería Tecnológica + Madurez Operativa.
            </p>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section id="valor" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nuestra Propuesta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Valor</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">ADN corporativo fusionado con agilidad pura de startup.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {[
              { title: 'Convertimos visión en resultados', icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
              { title: 'Dominamos sectores complejos', icon: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/>' },
              { title: 'Potenciamos lo existente', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>' },
              { title: 'Velocidad y calidad radical', icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
              { title: 'Involucramiento en la ejecución', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' }
            ].map((item, idx) => (
              <div key={idx} className={`group p-10 border border-fuchsia-900/40 bg-[#0f0e11] rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-500/70 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center ${idx === 4 ? 'lg:col-span-2' : ''}`}>
                 <div className="mb-6 text-fuchsia-600 group-hover:text-fuchsia-400 transition-colors duration-300 w-16 h-16 p-3 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA EN CORE (SECCIÓN CLAVE) */}
      <section id="core" className="py-32 px-4 bg-[#0d040e] border-b border-fuchsia-900/40 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
               <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-3 block">Garantía Sistémica</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                 Experiencia Masiva en <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Core Systems</span>
               </h2>
               <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">
                 No actuamos desde afuera. Kopernicus participa en todo el ciclo de vida del Core Legacy de manera end-to-end: orquestamos la evaluación, la selección, la implementación silenciosa y su subsecuente evolución integrando negocios con tecnología dura.
               </p>
               
               <div className="space-y-6 mt-10">
                 <div className="flex gap-4 items-start">
                    <div className="p-2 bg-fuchsia-600/20 text-fuchsia-500 rounded-lg shrink-0 mt-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <p className="text-zinc-200 text-lg">Reestructuración corporativa de <strong className="text-white">Programas de Transformación Fallidos</strong> (Rescue Missions).</p>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-2 bg-fuchsia-600/20 text-fuchsia-500 rounded-lg shrink-0 mt-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <p className="text-zinc-200 text-lg">Metodología clínica para <strong className="text-white">Salidas Progresivas a Producción</strong> minimizando cualquier daño colateral o inactividad.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                    <div className="p-2 bg-fuchsia-600/20 text-fuchsia-500 rounded-lg shrink-0 mt-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <p className="text-zinc-200 text-lg">Diseño de arquitecturas middleware para <strong className="text-white">Integración Inmediata con Ecosistemas</strong> API-First modernos.</p>
                 </div>
               </div>
            </div>
            
            <div className="md:col-span-5 relative flex justify-center items-center h-full min-h-[400px]">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.15),transparent)] pointer-events-none rounded-full blur-[50px]" />
               <div className="relative z-10 w-64 h-64 border-4 border-fuchsia-800/50 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
                 <div className="w-48 h-48 border border-fuchsia-500/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                   <div className="w-32 h-32 bg-[#1b081e] border-2 border-fuchsia-500 rounded-full shadow-[0_0_50px_rgba(217,70,239,0.4)] flex items-center justify-center">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-fuchsia-400 rotate-90"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M3 15h6"/><path d="M3 18h6"/></svg>
                   </div>
                 </div>
               </div>
               <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                 <span className="bg-black/80 px-4 py-2 text-white font-black tracking-widest border border-fuchsia-500/50 rounded-lg shadow-2xl">CORE EXPERTISE</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCIA (MAPA ABSTRACTO) */}
      <section id="presencia" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Presencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Global</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-16">
            Despliegue de operaciones e ingeniería de software sin fronteras: Desde el sur del mundo hacia Latinoamérica entera y Europa Central.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { hub: 'Chile', continent: 'LATAM', active: true },
              { hub: 'Argentina', continent: 'LATAM', active: true },
              { hub: 'Panamá', continent: 'LATAM', active: true },
              { hub: 'España', continent: 'EUROPA', active: true }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-white/5 bg-[#0a050b] rounded-3xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all flex flex-col items-center">
                <div className="w-12 h-12 bg-[#1b081e] border border-fuchsia-900/30 rounded-full flex flex-col items-center justify-center text-fuchsia-500 mb-6 drop-shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">{item.hub}</h4>
                <p className="text-xs font-bold text-zinc-600 tracking-widest">{item.continent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO DE TRABAJO */}
      <section id="modelo" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#1b081e]/30 border border-fuchsia-900/30 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden backdrop-blur">
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px]" />
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
               <div className="lg:col-span-5 text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Modelo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Trabajo Agile</span>
                  </h2>
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    Construimos software bajo un framework de <strong className="text-white">Flexibilidad y Especialización Radical</strong>. Organizamos el ingenio mediante enfoques ultra eficientes rompiendo la burocracia de las corporaciones tradicionales.
                  </p>
               </div>
               <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0f0e11] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                    <span className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                    <h4 className="text-lg font-bold text-white">Squads Autónomos</h4>
                  </div>
                  <div className="bg-[#0f0e11] border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                    <span className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                    <h4 className="text-lg font-bold text-white">Comunidades de Práctica</h4>
                  </div>
                  <div className="bg-[#0f0e11] border border-white/5 p-6 rounded-2xl flex items-center gap-4 sm:col-span-2">
                    <span className="text-fuchsia-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
                    <h4 className="text-lg font-bold text-white">Equipos Multidisciplinarios IT+Negocio</h4>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/30 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mentes <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Ejecutoras</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-16">
            Un management board compuesto por expertos reales sin títulos adornados. Maestría comprobada en Core, Actuarial y Desarrollo Cloud.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
             <div className="bg-[#0f0e11] border border-white/5 p-10 rounded-3xl w-full md:w-1/3 hover:border-fuchsia-500/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-[#1b081e] rounded-full border border-fuchsia-800 text-fuchsia-500 flex items-center justify-center mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-2">Arquitectura Core</h4>
                <p className="text-zinc-500 font-light text-sm">Más de 20 años comandando rescates y migraciones AS400 e implementaciones críticas on-premise.</p>
             </div>
             <div className="bg-[#0f0e11] border border-white/5 p-10 rounded-3xl w-full md:w-1/3 hover:border-fuchsia-500/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-[#1b081e] rounded-full border border-fuchsia-800 text-fuchsia-500 flex items-center justify-center mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-2">Visionarios Product Studio</h4>
                <p className="text-zinc-500 font-light text-sm">Directores actuariales y gerentes de producto redefiniendo el motor de pricing y el desacople perimetral.</p>
             </div>
             <div className="bg-[#0f0e11] border border-white/5 p-10 rounded-3xl w-full md:w-1/3 hover:border-fuchsia-500/50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-[#1b081e] rounded-full border border-fuchsia-800 text-fuchsia-500 flex items-center justify-center mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
                <h4 className="text-xl font-bold text-white mb-2">Ingeniería Cloud</h4>
                <p className="text-zinc-500 font-light text-sm">Gurús del despliegue serverless operando bases relacionales multi-regionales de altísima concurrencia y seguridad.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CONTACTO / CTA FINAL */}
      <section id="contacto" className="py-32 px-4 bg-[#0d040e] border-b border-fuchsia-900/70 scroll-mt-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-900/20 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            ¿Listo para orquestar la <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">transformación total?</span>
          </h2>
          <p className="text-xl text-fuchsia-100/70 font-light mx-auto mb-12">
            Hablemos hoy con un arquitecto comercial. Le demostraremos la flexibilidad absoluta de Tech Insurance mapeada a su propio Core.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="#" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-fuchsia-600 text-white font-bold rounded-2xl hover:bg-fuchsia-500 transition-all shadow-[0_0_40px_rgba(217,70,239,0.4)] hover:shadow-[0_0_60px_rgba(217,70,239,0.6)] text-lg">
                Agendar Demostración Técnica <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>
             </a>
             <a href="#" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-fuchsia-800 text-fuchsia-400 font-bold rounded-2xl hover:bg-fuchsia-900/30 transition-all text-lg">
                Contactar a un Especialista
             </a>
          </div>
        </div>
      </section>

    </div>
  );
}
