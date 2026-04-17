import Image from "next/image";

export default function EcosistemaPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Ecosistema */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.14] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-28 h-28 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="5" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="19" r="3"/><path d="M18 5L12 12"/><path d="M6 5L12 12"/><path d="M12 12L12 19"/>
            </svg>
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Abstracción Conectiva</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Ecosistema diseñado para <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">integrarse sin límites</span>
          </h1>
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed">
              Tech Insurance nace como un ecosistema vivo. Se conecta armónicamente con cores tradicionales, sistemas externos de terceros y soluciones especializadas propias para orquestar un modelo transaccional verdaderamente abierto.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Ecosistema) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'vision', label: 'Visión' },
            { id: 'integraciones', label: 'Integraciones' },
            { id: 'core', label: 'Core Systems' },
            { id: 'partners', label: 'Partners' },
            { id: 'kopernicus', label: 'Soluciones Kopernicus' },
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

      {/* VISION */}
      <section id="vision" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Plataforma 100% <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Abierta</span>
          </h2>
          <div className="max-w-4xl mx-auto p-12 lg:p-16 bg-[#0f0e11] border border-white/5 rounded-[2rem] shadow-2xl hover:border-fuchsia-900/50 transition-colors">
            <div className="text-fuchsia-500 mb-8 mx-auto w-fit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></svg></div>
            <h3 className="text-2xl font-bold text-white mb-6">No reemplaza sistemas, los eleva al siguiente nivel.</h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              La integración es la fundación tecnológica base de Tech Insurance. En lugar de actuar como un silo más, funciona como un Hub inteligente capaz de unificar todos los dominios dispersos de una empresa. Es la capa maestra de desacople y comunicación entre la innovación perimetral y el Legacy profundo.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRACIONES EXTERNAS */}
      <section id="integraciones" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Integraciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Valor</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">Tuberías ya pavimentadas que inyectan funcionalidades críticas a su negocio asegurador inmediatamente.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {[
              { title: 'Pasarelas de Pago', desc: 'Stripe, Mercadopago o procesadores bancarios enlazados al vuelo para cobranzas multi-divisa y recurrentes automáticas.', icon: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>' },
              { title: 'CRM Omnicanal', desc: 'Sincronice Salesforce, Hubspot o D365 para que eventos paramétricos viajen y levanten tickets en la bandeja de su equipo de ventas.', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
              { title: 'ERP Contable', desc: 'Oracle, SAP. Los comprobantes por emisión y siniestro cruzan en tiempo real, garantizando la integridad fiscal corporativa.', icon: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
              { title: 'Plataformas Digitales', desc: 'Conectividad a portales web institucionales, e-commerce ajenos y apps móviles B2C a través de gateways seguros.', icon: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>' },
              { title: 'Servicios y agentes', desc: 'Tech Insurance trabaja con tecnologías en tiempo real para brindar soluciones innovadoras.', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' }
            ].map((item, idx) => (
              <div key={idx} className={`group p-8 border border-white/5 bg-[#0f0e11] rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col ${idx === 4 ? 'lg:col-start-2' : ''}`}>
                 <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                 <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SYSTEMS */}
      <section id="core" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="p-10 border border-fuchsia-900/30 bg-[#160517]/50 rounded-[2rem] relative shadow-2xl overflow-hidden min-h-[350px] flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)] pointer-events-none" />
               <div className="flex gap-4 items-center">
                 {/* Visual Simple */}
                 <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-700 text-zinc-400 shadow-xl font-bold flex flex-col items-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 mb-2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M3 15h6"/><path d="M3 18h6"/></svg>
                   CORE LEGACY
                 </div>
                 <div className="flex flex-col text-fuchsia-500 animate-pulse">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg>
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 transform rotate-180"><polyline points="9 18 15 12 9 6"/></svg>
                 </div>
                 <div className="p-4 bg-fuchsia-950 border border-fuchsia-500 text-white rounded-xl shadow-[0_0_30px_rgba(217,70,239,0.3)] font-bold flex flex-col items-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 mb-2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                   TECH INSURANCE
                 </div>
               </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Urbanizando <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">los sistemas core</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">
                Incluso las plataformas troncales más herméticas y obsoletas son asimiladas. Tech Insurance no interfiere con los cálculos financieros profundos; simplemente los recubre, transformando cualquier respuesta legacy estática en un hub transaccional en tiempo real, urbanizándolos sin riesgo de reemplazo crudo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Partners</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-16">
            Construimos puentes estandarizados hacia la distribución global masiva.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-10 bg-[#0f0e11] border border-white/5 rounded-[2rem] hover:bg-[#16141a] transition-all flex flex-col sm:flex-row gap-6 items-center text-left">
              <div className="text-zinc-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="10" cy="10" r="7"/><line x1="15" y1="15" x2="21" y2="21"/></svg></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Redes de Distribución Multi-Actor</h4>
                <p className="text-zinc-500 font-light text-sm">Empoderando Agencias Comerciales y Hubs Multicotizadores B2B2C bajo esquemas integrados.</p>
              </div>
            </div>
            <div className="p-10 bg-[#0f0e11] border border-white/5 rounded-[2rem] hover:bg-[#16141a] transition-all flex flex-col sm:flex-row gap-6 items-center text-left">
              <div className="text-zinc-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect width="8" height="8" x="2" y="2" rx="2" ry="2"/><rect width="8" height="8" x="14" y="2" rx="2" ry="2"/><rect width="8" height="8" x="8" y="14" rx="2" ry="2"/></svg></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Proveedores Tecnológicos de Nicho</h4>
                <p className="text-zinc-500 font-light text-sm">Plataformas RPA, sistemas de automatización OCR e I.A. integrados de manera holística.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES KOPERNICUS (NODO CLAVE) */}
      <section id="kopernicus" className="py-32 px-4 bg-[#0d040e] border-b border-fuchsia-900/50 scroll-mt-32 relative overflow-hidden">
        {/* Subtle X background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] font-black text-[300px] md:text-[600px] leading-none pointer-events-none z-0 tracking-tighter mix-blend-screen">X</div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <Image src="/kopernicus-logo.png" alt="Kopernicus Logo" width={200} height={36} className="object-contain mb-10 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Aceleradores <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Kopernicus</span>
            </h2>
            <p className="text-xl text-fuchsia-200/50 font-light max-w-3xl mx-auto">Potencia de ignición nativa con nuestras herramientas insignia del mercado Insurtech.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 lg:p-14 bg-[#1b081e]/80 backdrop-blur border border-fuchsia-800/40 rounded-[2.5rem] hover:bg-[#210924] hover:border-fuchsia-500/60 transition-all shadow-[0_0_50px_rgba(217,70,239,0.05)] hover:shadow-[0_0_60px_rgba(217,70,239,0.15)] flex flex-col">
               <h3 className="text-3xl lg:text-4xl font-black text-white tracking-widest mb-2 border-b border-white/10 pb-6 uppercase">Inspe<span className="text-fuchsia-500 text-[1.2em] -ml-[1px] inline-block transform translate-y-[2px]">X</span>iona</h3>
               <div className="flex flex-col gap-4 mb-8 font-light text-lg mt-4 leading-relaxed text-fuchsia-100/70">
                 <p>InspeXiona es una plataforma de inspecciones previas y de siniestros diseñada para la industria aseguradora. A través de una aplicación mobile (Android e iOS), permite ejecutar flujos guiados tipo wizard para la captura de información, imágenes y validaciones en tiempo real.</p>
                 <p>La solución convierte al dispositivo en los ojos de la compañía, permitiendo que clientes, intermediarios o inspectores puedan relevar información de manera estructurada, confiable y alineada a los procesos de negocio.</p>
               </div>
               <ul className="space-y-4 text-base text-zinc-300 font-medium mt-auto pt-6 border-t border-fuchsia-900/30">
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 text-xl font-bold mt-1 leading-none">✓</span> Transforma cualquier dispositivo en un punto de inspección inteligente.</li>
               </ul>
            </div>
            
            <div className="p-10 lg:p-14 bg-[#1b081e]/80 backdrop-blur border border-fuchsia-800/40 rounded-[2.5rem] hover:bg-[#210924] hover:border-fuchsia-500/60 transition-all shadow-[0_0_50px_rgba(217,70,239,0.05)] hover:shadow-[0_0_60px_rgba(217,70,239,0.15)] flex flex-col">
               <h3 className="text-3xl lg:text-4xl font-black text-white tracking-widest mb-2 border-b border-white/10 pb-6 uppercase"><span className="text-fuchsia-500 text-[1.2em] -mr-[1px] inline-block transform translate-y-[2px]">X</span>plorer</h3>
               <div className="flex flex-col gap-4 mb-8 font-light text-lg mt-4 leading-relaxed text-fuchsia-100/70">
                 <p>Xplorer es una solución orientada a agentes comerciales, productores e intermediarios de seguros, que permite gestionar la operación diaria y potenciar el relacionamiento con los clientes.</p>
                 <p>La herramienta centraliza la información comercial, facilita la gestión de oportunidades, el seguimiento de clientes y la administración de la cartera, permitiendo maximizar la performance comercial y mejorar la experiencia en cada interacción.</p>
               </div>
               <ul className="space-y-4 text-base text-zinc-300 font-medium mt-auto pt-6 border-t border-fuchsia-900/30">
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 text-xl font-bold mt-1 leading-none">✓</span> Potencia la gestión comercial con foco en productividad y relación con el cliente.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
