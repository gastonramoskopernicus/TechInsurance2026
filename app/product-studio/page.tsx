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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-fuchsia-500">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Studio</span>
          </h1>
          <p className="text-2xl text-fuchsia-400 font-light mb-8">El corazón de la innovación aseguradora.</p>

          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl text-left max-w-4xl mx-auto">
            <p className="text-white text-xl font-bold leading-relaxed mb-6">
              Product Studio es el corazón de Tech Insurance y su principal diferencial frente a soluciones del mercado.
            </p>
            <p className="text-fuchsia-100/80 text-lg font-light leading-relaxed mb-8">
              A diferencia de los productos tradicionales —mayormente estáticos, poco reutilizables y con baja integración—, Product Studio permite la <span className="text-white font-medium">reutilización de lógica, integración extendida y el modelado dinámico</span> de negocios.
            </p>
            <div className="p-6 border border-white/10 bg-zinc-900/50 rounded-xl inline-flex shadow-inner w-full">
               <p className="text-zinc-300 font-medium text-lg leading-relaxed text-center w-full">
                  Fomentamos la autonomía comercial para perfiles no técnicos.<br/>
                  <span className="text-fuchsia-400 font-bold">Sin depender de tiempos de desarrollo ni cuellos de botella de IT.</span>
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
              { step: '01', title: 'Producto', desc: 'Definición del alcance, coberturas, beneficios y exclusiones.', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
              { step: '02', title: 'Reglas', desc: 'Validación, políticas de suscripción, scoring y lógica de negocio.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>' },
              { step: '03', title: 'Variables', desc: 'Incorporación de variables internas, externas y servicios externos.', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
              { step: '04', title: 'Pricing', desc: 'Definición y armado del precio del producto.', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9"/><path d="M12 12l4.24 4.24"/>' },
              { step: '05', title: 'Publicación', desc: 'Disponibilidad en APIs, landings o experiencias de usuario.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#1b081e] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col relative h-full">
                 <div className="absolute -top-3 -right-3 text-7xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors pointer-events-none">{item.step}</div>
                 <div className="mb-6 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h4>
                 <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 relative z-10 leading-relaxed flex-1">{item.desc}</p>
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
              { icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>', title: 'Modelado Modular', desc: 'Cree plantillas y master-products desacoplados donde coberturas base funcionan como legos totalmente independientes.' },
              { icon: '<path d="M21 2v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/>', title: 'Reutilización Funcional', desc: 'Transfiera y herede lógicas preexistentes para lanzar nuevas iteraciones iterativas con mínima intervención humana.' },
              { icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>', title: 'Productos Compuestos', desc: 'Empaquete capas múltiples (Ej: Vida + Riesgos Especiales) en una experiencia de subscripción unificada.' },
              { icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>', title: 'Variables Dinámicas', desc: 'Parametrice condiciones extremas, micro-tarifas y descuentos in-surance basándose en metadatos al vuelo.' },
              { icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>', title: 'Integración Extendida', desc: 'Inyecte telemetría externa (sensores IoT, geolocalización) al motor actuarial para coberturas paramétricas.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border border-white/5 bg-[#0f0e11] rounded-3xl hover:bg-[#200e23] hover:border-fuchsia-800/40 transition-all duration-300">
                 <div className="mb-6 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4">
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M12 2L2 22l10-4 10 4L12 2z" strokeLinejoin="round"/></svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-white">Ahora</h4>
               </div>
               <ul className="space-y-8 flex-1 relative z-10">
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Configuración puramente visual e intuitiva mediante lógicas ya pre-validadas por el sistema.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Empoderamiento directo: Equipos Comerciales, Pricing y Actuariales asumen total autonomía para innovar.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Días o semanas para lograr un GTM (Go-to-Market) de alto impacto y volumen en multicanal.</p></li>
               </ul>
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
              { title: 'Velocidad', desc: 'Nunca una solución fue tan rápida para desplegar nuevos productos.', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
              { title: 'Libertad Creativa', desc: 'Una herramienta que permite crear, testear y monitorear el desarrollo de productos sin necesidad de conocimiento técnico.', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>' },
              { title: 'Autonomía del Área', desc: 'Departamentos comerciales liberados del cuello de botella y la dependencia del área de IT.', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><path d="M23 11l-6 6-4-4"/>' },
              { title: 'Escalabilidad Multicanal', desc: 'Desde landings, APIs y experiencias ya definidas, permitiendo escalar productos en múltiples canales.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
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
