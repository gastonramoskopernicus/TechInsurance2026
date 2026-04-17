import Image from "next/image";

export default function ArquitecturaPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Arquitectura */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-28 h-28 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
          </div>

          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Flexibilidad y Robustez</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Arquitectura diseñada para <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">evolucionar sin fricción</span>
          </h1>
          
          <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl mt-8">
            <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed mb-6">
              Tech Insurance desacopla la innovación de su core legacy. Nuestra promesa no es técnica, es de negocio: asegurar una integración orgánica y una escalabilidad infinita que nunca comprometa sus niveles de servicio operativos.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de Arquitectura) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'vision', label: 'Visión' },
            { id: 'principios', label: 'Principios' },
            { id: 'capas', label: 'Capas' },
            { id: 'integracion', label: 'Integración' },
            { id: 'escalabilidad', label: 'Escalabilidad' },
            { id: 'seguridad', label: 'Seguridad' },
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

      {/* VISIÓN */}
      <section id="vision" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Nuestra Visión: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">API-First Modular</span>
          </h2>
          <div className="max-w-4xl mx-auto p-12 bg-[#0f0e11] border border-white/5 rounded-3xl relative overflow-hidden shadow-2xl hover:border-fuchsia-900/50 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[80px]" />
            <p className="text-zinc-400 text-xl font-light leading-relaxed relative z-10">
              Usted no necesita reescribir su sistema central para competir hoy. Creemos firmemente en el <strong>enfoque modular y de abstracción operativa</strong>; rodeamos sus capacidades actuales con capas de exposición modernas, transformando un ecosistema rígido en un entorno abierto, seguro y preparado para el futuro.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section id="principios" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Principios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Diseño</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">Reglas fundamentales que garantizan un sistema robusto, rápido y perpetuo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'API-First Nivel 3', desc: 'Toda funcionalidad interna nace diseñada para ser consumida e invocada libremente por sistemas terceros con estricta seguridad perimetral.', icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>' },
              { title: 'Desacople Lógico', desc: 'El front-end, el back-end comercial y el motor actuarial se ignoran técnica y físicamente, lo que evita roturas en cadena durante las actualizaciones.', icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>' },
              { title: 'Modularidad Absoluta', desc: 'No le obligamos a instalar cajas negras enteras. Cada micro-producto (pagos, pricing, pólizas) es un lego conectable a demanda de su volumen.', icon: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>' },
              { title: 'Escalabilidad Elástica', desc: 'Cloud-native de cuna. Nodos que se auto-reproducen absorbiendo picos estacionales extremos sin requerir costoso aprovisionamiento IT.', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
              { title: 'Integración Abierta', desc: 'Comportamiento de hub. Enlazamos con ecosistemas CRM modernos y canales de chat sin pesados desarrollos middlewares on-premise.', icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' }
            ].map((item, idx) => (
              <div key={idx} className={`group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col ${idx === 4 ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
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

      {/* CAPAS DE ARQUITECTURA */}
      <section id="capas" className="py-24 px-4 bg-[#0d040e] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Pila Tecnológica por <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Capas</span>
          </h2>
          
          <div className="flex flex-col gap-6 relative">
            {/* Base Connector */}
            <div className="absolute left-16 top-10 bottom-10 w-1 bg-gradient-to-b from-transparent via-fuchsia-800/30 to-fuchsia-500/50 hidden md:block" />
            
            {/* Capa 1 */}
            <div className="group p-8 md:p-10 border border-white/5 bg-[#1a1a24]/40 backdrop-blur-md rounded-3xl hover:border-fuchsia-500/20 hover:bg-[#1f1a29]/60 transition-all relative z-10">
               <span className="text-fuchsia-400 text-xs uppercase tracking-widest font-bold mb-2 block">Capa Cero · Frontend</span>
               <h3 className="text-2xl font-bold text-white mb-3">Canales y Experiencia B2X</h3>
               <p className="text-zinc-400 font-light leading-relaxed">
                 Las aplicaciones móviles, los portales transaccionales de agentes y los portales corporativos de bancos interactúan sin conocer nuestra existencia interna; solo consumen experiencias de usuario blindadas e inmediatas mediante tokens simples.
               </p>
            </div>

            {/* Capa 2 (Tech Insurance) */}
            <div className="group p-10 md:p-12 border border-fuchsia-500/40 bg-[#250b28] rounded-[2.5rem] hover:border-fuchsia-400/60 shadow-[0_0_50px_rgba(217,70,239,0.05)] transition-all relative z-10 md:-ml-6 md:-mr-6">
               <span className="text-fuchsia-300 text-xs uppercase tracking-widest font-bold mb-2 block animate-pulse">Capa Central · Tech Insurance Platform</span>
               <h3 className="text-3xl font-extrabold text-white mb-4">La Capa Intermedia Inteligente</h3>
               <p className="text-fuchsia-100/80 font-light text-lg leading-relaxed mb-6">
                 Este es el escudo protector y comercial (Motor Actuarial, Reglas, Product Studio, Billing, Eventos). Recibe las sobrecargas, define las métricas de negocio, cobra y dictamina riesgo bajo su propia matriz, desacoplando cualquier castigo al sistema central.
               </p>
            </div>

            {/* Capa 3 */}
            <div className="group p-8 md:p-10 border border-white/5 bg-black/50 backdrop-blur-md rounded-3xl hover:border-zinc-800/80 transition-all relative z-10 opacity-70">
               <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2 block">Capa Profunda · Legacy</span>
               <h3 className="text-xl font-bold text-zinc-300 mb-3">El Core Transaccional Resguardado</h3>
               <p className="text-zinc-500 font-light leading-relaxed">
                 El AS400 o ERP central original permanece 100% puro y seguro, abocado estrictamente al mantenimiento general, pólizas estáticas a largo plazo y contabilidad, sin intervenirse con cada lanzamiento comercial efímero y exigente.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRACION */}
      <section id="integracion" className="py-24 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Matriz de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Integración</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'APIs Estándar', desc: 'Arquitectura REST/GraphQL blindando comunicación inmediata.', icon: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/>' },
              { title: 'Conectores Asíncronos', desc: 'Colas Rabbit/Kafka que garantizan que el core local nunca se ahogue con picos.', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>' },
              { title: 'Event Gateway', desc: 'Disparamos y captamos eventos cruzados para pólizas dinámicas.', icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
              { title: 'Webhooks Web', desc: 'Suscripciones HTTP que notifican a los ecosistemas sin hacer polling ineficiente.', icon: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#0f0e11] border border-fuchsia-900/30 rounded-3xl shadow-[0_10px_30px_rgba(217,70,239,0.03)] hover:bg-[#16141a] hover:border-fuchsia-500/40 hover:-translate-y-1 transition-all duration-300 relative text-center flex flex-col items-center">
                 <div className="mb-4 text-fuchsia-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                 <p className="text-zinc-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALABILIDAD */}
      <section id="escalabilidad" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Poder de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Escalabilidad</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 border border-white/5 bg-[#0f0e11] rounded-[2rem] hover:border-fuchsia-800 transition-colors">
              <div className="text-fuchsia-500 mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
              <h3 className="text-2xl font-bold text-white mb-4">Crecimiento sin Fricción</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Multiplicar por mil sus ventas no ralentizará sus cuotas; nuestra micro-arquitectura auto-abastece rendimiento de procesamiento.</p>
            </div>
            <div className="p-10 border border-white/5 bg-[#0f0e11] rounded-[2rem] hover:border-fuchsia-800 transition-colors">
              <div className="text-fuchsia-500 mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h3 className="text-2xl font-bold text-white mb-4">Despliegue a Nuevos Canales</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Ya no es necesario programar apps para cada broker, integre su endpoint en ecosistemas bancarios, retail o marketplaces el mismo día.</p>
            </div>
            <div className="p-10 border border-white/5 bg-[#0f0e11] rounded-[2rem] hover:border-fuchsia-800 transition-colors">
              <div className="text-fuchsia-500 mb-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
              <h3 className="text-2xl font-bold text-white mb-4">Inventiva de Nuevos Productos</h3>
              <p className="text-zinc-400 font-light leading-relaxed">No importa que su core no sepa qué es un "microseguro de mascotas"; la plataforma lo orquesta y le traduce los datos al legacy para cobro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURIDAD */}
      <section id="seguridad" className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/40 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-3 block">Estándar Financiero</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Seguridad y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Compliance Nativo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="flex gap-6 items-start text-left p-8 bg-[#0f0e11] border border-white/5 rounded-3xl hover:border-fuchsia-800 transition-colors">
               <div className="text-fuchsia-600 shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-2">Control de Accesos (RBAC)</h4>
                 <p className="text-zinc-500 font-light">Autenticaciones multifactor y permisos híper-granulados por área y responsabilidades comerciales, restringiendo qué campos toca cada analista.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start text-left p-8 bg-[#0f0e11] border border-white/5 rounded-3xl hover:border-fuchsia-800 transition-colors">
               <div className="text-fuchsia-600 shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-2">Auditoría Inviolable</h4>
                 <p className="text-zinc-500 font-light">Un log cronológico criptográfico de cada parametrización configurada. Sepa cuándo y quién varió una regla de siniestro y deshaga los cambios inmediatamente.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start text-left p-8 bg-[#0f0e11] border border-white/5 rounded-3xl hover:border-fuchsia-800 transition-colors">
               <div className="text-fuchsia-600 shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg></div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-2">Trazabilidad Total de Logs</h4>
                 <p className="text-zinc-500 font-light">Todas las peticiones asíncronas se monitorizan vía observabilidad en tiempo real identificando demoras o rebotes hacia el core tradicional.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start text-left p-8 bg-[#0f0e11] border border-white/5 rounded-3xl hover:border-fuchsia-800 transition-colors">
               <div className="text-fuchsia-600 shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-2">Gestión de Ambientes</h4>
                 <p className="text-zinc-500 font-light">Aísla los flujos de testeo (Sandboxes lógicos) que los partners exploran y los compila transparentemente en Producción una vez visados.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
