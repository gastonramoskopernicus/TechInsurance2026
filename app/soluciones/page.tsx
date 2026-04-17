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
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-12 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed">
              Descubra por qué Tech Insurance es el catalizador comercial definitivo para Aseguradoras, Corredores, y cualquier Retail o Ecosistema Financiero preparándose para la próxima era B2X. Usted aporta la visión; nosotros la estructura modular.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Soluciones) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'aseguradoras', label: 'Aseguradoras' },
            { id: 'brokers', label: 'Brokers / PAS' },
            { id: 'bancos', label: 'Bancos / Fintech' },
            { id: 'partners', label: 'Partners' },
            { id: 'embedded', label: 'Embedded Insurance' },
            { id: 'canales', label: 'Canales Digitales' },
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
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Evolucione sin cambiar piezas en vuelo. Mantenga su Mainframe legacy a salvo mientras lanza productos disruptivos con nuestra capa intermedia visual.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Modernización sin reemplazo</h4>
                 <p className="text-sm font-light text-zinc-500">Urbanizamos su AS400; consuma y emita APIs al mundo en minutos.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Lanzamiento fulminante</h4>
                 <p className="text-sm font-light text-zinc-500">Tenga su producto diseñado y tarifado hoy, y generando primas mañana.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors md:col-span-2">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Expansión Multi-Canal Nativa</h4>
                 <p className="text-sm font-light text-zinc-500">Distribuya el mismo producto master a 10 corredores B2B a través de 10 endpoints separados al instante.</p>
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
                 <h4 className="text-xl font-bold text-white mb-2">Multicotización</h4>
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
                Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Brokers / PAS</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Convierta a su red de Productores en una red autónoma, capaz de cruzar data comercial y generar carteras autogestionadas altamente rentables.</p>
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
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">El Bancaseguros del futuro. Inyecte líneas de seguro automatizadas vinculadas al saldo deudor de sus tarjetas financieras bajo modelos transparentes.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors md:col-span-2">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Cross-Selling Bancario y Embebido</h4>
                 <p className="text-sm font-light text-zinc-500">Unifique la venta de Seguros de Vida o Desempleo atado 1:1 a la originación de un Préstamo Personal en sus Apps Fintech nativas, sin redirigir al usuario.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <h4 className="text-lg font-bold text-white mb-2 text-fuchsia-100">✔ Aumento de ARPU</h4>
                 <p className="text-sm font-light text-zinc-500">Nuevas líneas de comisiones por fee pasivo.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <h4 className="text-lg font-bold text-white mb-2 text-fuchsia-100">✔ Integración Silenciosa</h4>
                 <p className="text-sm font-light text-zinc-500">APIs invisibles atadas a la UI de su Wallet.</p>
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
                 <h4 className="text-xl font-bold text-white mb-2">Ecosistemas B2B2C Abiertos</h4>
                 <p className="text-sm font-light text-zinc-500">Un concesionario vende el auto, Tech Insurance valida la placa, emite al cliente final y reparte comisiones automáticamente.</p>
               </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Alianzas y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Partners</span>
              </h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">Active esquemas de afinidad y *Sponsorship* comercial integrando sus productos a la base cautiva de afiliados y clientes B2B de terceros formales.</p>
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
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-8">El futuro del riesgo es invisible. Venda garantías de rotura de pantalla justo en la canasta de compras del Retailer de forma automática.</p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">E-Commerce Seamless</h4>
                 <p className="text-sm font-light text-zinc-500">El seguro se añade como un ítem más al carrito (SKU), procesado junto a la compra física.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-800 transition-colors">
                 <div className="text-fuchsia-600 mb-4 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                 <h4 className="text-xl font-bold text-white mb-2">Oferta Estrictamente Contextual</h4>
                 <p className="text-sm font-light text-zinc-500">Se evalúa la intención de compra y el producto (Ej: Pasaje aéreo) para dictaminar viabilidad instantánea.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CANALES DIGITALES */}
      <section id="canales" className="py-32 px-4 bg-[#0d040e] border-b border-fuchsia-900/40 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-row-reverse lg:flex-row">
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 order-2 lg:order-1 relative z-10">
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-[2rem] hover:bg-[#16141a] hover:-translate-y-2 hover:border-fuchsia-800 transition-all shadow-[0_10px_30px_rgba(217,70,239,0.02)]">
                 <div className="text-zinc-600 mb-6 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg></div>
                 <h4 className="text-lg font-bold text-white mb-2">Venta Directa D2C</h4>
                 <p className="text-sm font-light text-zinc-500">Embudos y landing pages online altísimamente conversivos de cara a consumidor.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-[2rem] hover:bg-[#16141a] hover:-translate-y-2 hover:border-fuchsia-800 transition-all shadow-[0_10px_30px_rgba(217,70,239,0.02)]">
                 <div className="text-zinc-600 mb-6 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                 <h4 className="text-lg font-bold text-white mb-2">Onboarding Seamless</h4>
                 <p className="text-sm font-light text-zinc-500">Recolección de firmas, KYC y carga de imágenes fluidas para una suscripción en el acto.</p>
               </div>
               <div className="group p-8 border border-white/5 bg-[#1b081e]/30 rounded-[2rem] hover:bg-[#16141a] hover:-translate-y-2 hover:border-fuchsia-800 transition-all shadow-[0_10px_30px_rgba(217,70,239,0.02)]">
                 <div className="text-zinc-600 mb-6 group-hover:text-fuchsia-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                 <h4 className="text-lg font-bold text-white mb-2">Autogestión App</h4>
                 <p className="text-sm font-light text-zinc-500">Póliza, endosos y descargas de certificados controlados por el usuario, vaciando el embudo telefónico.</p>
               </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="w-20 h-20 rounded-3xl bg-fuchsia-900/20 border border-fuchsia-800 flex items-center justify-center text-fuchsia-400 mb-8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Canales Digitales <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">CX</span>
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-8">Lleve la experiencia de Seguros al estándar de Uber o Netflix. Digitalice todo punto de contacto físico entre su asegurado y sus backoffices operativos.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
