import Image from "next/image";
import Link from "next/link";

export default function ProductStudioPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Product Studio */}
      <section id="que-es" className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden scroll-mt-32">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-32 h-32 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <Image src="/TechInsurance.svg" alt="Product Studio Logo Component" fill className="object-contain" priority />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Studio</span>
          </h1>
          <p className="text-2xl text-fuchsia-400 font-light mb-8">El corazón de la innovación aseguradora.</p>

          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed mb-8">
              Otorgue el poder a sus equipos estratégicos. Nuestro entorno de configuración visual le permite abstraer los productos de seguros del código duro, independizando la ambición comercial de las restricciones técnicas de IT.
            </p>
            <div className="p-6 border border-white/10 bg-zinc-900/50 rounded-xl inline-flex shadow-inner">
               <p className="text-zinc-300 text-center font-medium text-lg leading-relaxed">
                  Los productos dejan de ser código.<br/>
                  <span className="text-white font-bold">Pasan a ser parametrizaciones dinámicas.</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de PS) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'que-es', label: 'Qué es' },
            { id: 'como-funciona', label: 'Cómo funciona' },
            { id: 'capacidades', label: 'Capacidades' },
            { id: 'modelo', label: 'Modelo' },
            { id: 'ejemplo', label: 'Ejemplo Práctico' },
            { id: 'impacto', label: 'Impacto (ROI)' },
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

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Flujo Dinámico en <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">5 Pasos</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">Mapeo del ciclo de vida end-to-end, puramente guiado por parámetros comerciales.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Definición de coberturas', desc: 'Ensamblado de beneficios y exclusiones', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
              { step: '02', title: 'Configuración de reglas', desc: 'Validación, suscripción y scoring', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>' },
              { step: '03', title: 'Parametrización', desc: 'Asignación de pricing y deducibles', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
              { step: '04', title: 'Versionado', desc: 'Control de cambios sin apagar pólizas', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9"/><path d="M12 12l4.24 4.24"/>' },
              { step: '05', title: 'Publicación', desc: 'Distribución API instantánea unificada', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#1b081e] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col relative h-full">
                 <div className="absolute -top-3 -right-3 text-7xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors pointer-events-none">{item.step}</div>
                 <div className="mb-6 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h4>
                 <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 relative z-10 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACIDADES CLAVE */}
      <section id="capacidades" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Capacidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Core</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light">Armamento completo para el diseño de seguros modernos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Modelado Modular', desc: 'Cree plantillas y master-products desacoplados donde coberturas base funcionan como legos totalmente independientes.' },
              { title: 'Reutilización Funcional', desc: 'Transfiera y herede lógicas preexistentes para lanzar nuevas iteraciones iterativas con mínima intervención humana.' },
              { title: 'Productos Compuestos', desc: 'Empaquete capas múltiples (Ej: Vida + Riesgos Especiales) en una experiencia de subscripción y cobeneficio B2C unificada.' },
              { title: 'Variables Dinámicas', desc: 'Parametrice condiciones extremas, micro-tarifas y descuentos in-surance basándose en metadatos y perfilado al vuelo.' },
              { title: 'Integración Extendida', desc: 'Inyecte telemetría externa (vuelos cancelados, sensores IoT, geolocalización) al motor actuarial para coberturas invisibles paramétricas.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border border-white/5 bg-[#0f0e11] rounded-3xl hover:bg-[#200e23] hover:border-fuchsia-800/40 transition-all duration-300">
                 <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                   <span className="w-3 h-3 rounded-full bg-fuchsia-500 group-hover:animate-pulse"></span>
                   {item.title}
                 </h4>
                 <p className="text-zinc-500 text-lg font-light leading-relaxed group-hover:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO DE CONSTRUCCIÓN (ANTES / AHORA) */}
      <section id="modelo" className="py-32 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Cambio Absoluto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Paradigma</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* ANTES */}
            <div className="p-10 lg:p-14 border border-white/5 bg-[#0a0505] rounded-[2rem] flex flex-col opacity-80 backdrop-grayscale">
               <div className="flex items-center gap-4 mb-10 text-zinc-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-zinc-500">Antes</h4>
               </div>
               <ul className="space-y-8 flex-1">
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Desarrollo manual en código por equipos de ingeniería (Hardcode técnico).</p></li>
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Ciclos de certificación (QA) y deployments dependientes del Core eternos.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Meses, o a veces trimestres completos para posicionar un producto MVP en calle.</p></li>
               </ul>
            </div>
            
            {/* AHORA */}
            <div className="p-10 lg:p-14 border border-fuchsia-500/40 bg-[#1b081e] rounded-[2rem] shadow-[0_0_60px_rgba(217,70,239,0.08)] flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[60px] pointer-events-none" />
               <div className="flex items-center gap-4 mb-10 text-fuchsia-400 relative z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><polyline points="20 6 9 17 4 12"/></svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-white">Ahora (Tech Insurance)</h4>
               </div>
               <ul className="space-y-8 flex-1 relative z-10">
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Configuración puramente visual e intuitiva mediante lógicas ya pre-validadas por el sistema.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Empoderamiento directo: Equipos Comerciales, Pricing y Actuariales asumen total autonomía para innovar.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-white font-bold leading-relaxed bg-[#0f0e11] hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 px-4 py-2 rounded-xl text-lg block border border-fuchsia-900/30">Lanzamientos al unísono: Días o semanas para lograr Go-to-Market de altísimo impacto y volumen.</p></li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EJEMPLO CONCRETO (DIAGRAMA FLOW) */}
      <section id="ejemplo" className="py-32 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Caso Práctico: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Seguro Embebido E-Commerce</span>
          </h2>
          <div className="p-12 lg:p-16 border border-white/5 bg-[#08040a] rounded-[2.5rem] relative shadow-2xl">
            <p className="text-center text-zinc-400 font-light text-xl mb-20 max-w-2xl mx-auto">
              Visualice la fluidez de ensamblaje. Product Studio orquesta la creación técnica integral de una garantía extendida activada durante el checkout final.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 relative">
               {/* Línea conectora trasera (solo desktop) */}
               <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-zinc-800 via-fuchsia-900/50 to-fuchsia-500/50 -translate-y-1/2 z-0" />
               
               <div className="relative z-10 flex flex-col items-center flex-1">
                 <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 mb-6 shadow-xl shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                 </div>
                 <div className="text-center px-4">
                   <p className="text-white font-bold text-lg mb-2">Equipo de Negocio</p>
                   <p className="text-zinc-500 text-sm leading-relaxed">Selecciona Cobertura Robo. Aplica Tasa Dinámica del 5% del valor consumido.</p>
                 </div>
               </div>

               <div className="text-zinc-700 hidden lg:block relative z-10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
               
               <div className="relative z-10 flex flex-col items-center flex-1">
                 <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] bg-[#1b081e] border-2 border-fuchsia-800 flex items-center justify-center text-fuchsia-500 mb-6 shadow-[0_0_40px_rgba(217,70,239,0.3)] shrink-0 animate-breath">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                 </div>
                 <div className="text-center px-4">
                   <p className="text-fuchsia-300 font-bold text-xl mb-2">Product Studio</p>
                   <p className="text-zinc-400 text-sm leading-relaxed">Valida configuración actuarial, genera tarifas y expone el recurso en 1 click como Endpoint.</p>
                 </div>
               </div>

               <div className="text-fuchsia-900 hidden lg:block relative z-10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
               
               <div className="relative z-10 flex flex-col items-center flex-1">
                 <div className="w-24 h-24 rounded-3xl bg-zinc-100 border border-white flex items-center justify-center text-black mb-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                 </div>
                 <div className="text-center px-4">
                   <p className="text-white font-bold text-lg mb-2">Checkout E-Commerce</p>
                   <p className="text-zinc-500 text-sm leading-relaxed">Consume la nueva API instantáneamente. La garantía se embebe sin despliegues técnicos.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO EN NEGOCIO */}
      <section id="impacto" className="py-32 px-4 bg-[#050106] border-b border-fuchsia-900/30 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Estratégico</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Velocidad GTM', desc: 'Semanas frente a múltiples trimestres de proyectos IT.', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
              { title: 'Libertad Creativa', desc: 'Abstracción de códigos habilitando pruebas A/B a volumen masivo.', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>' },
              { title: 'Autonomía de Área', desc: 'Departamentos comerciales liberados del cuello de botella dev.', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><path d="M23 11l-6 6-4-4"/>' },
              { title: 'Escalabilidad Multicanal', desc: 'Productos desplegados que exponen API endpoints instantáneamente.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-[#200523] border border-fuchsia-800/40 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(217,70,239,0.08)] hover:bg-[#310c36] hover:border-fuchsia-500/80 hover:-translate-y-2 transition-all duration-300">
                 <div className="mx-auto mb-6 text-fuchsia-400 w-fit p-4 rounded-full bg-fuchsia-950/40 border border-fuchsia-900/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                 <p className="text-fuchsia-200/70 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
