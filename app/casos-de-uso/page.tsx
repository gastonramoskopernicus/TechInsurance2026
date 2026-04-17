import Image from "next/image";

export default function CasosDeUsoPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104] min-h-screen">
      {/* 1. HERO - Minimalista */}
      <section className="relative pt-32 pb-20 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-20 h-20 mx-auto mb-8 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Uso</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Logre de manera inmediata y con una velocidad nunca vista nuevas soluciones, nuevos productos y nuevas oportunidades de negocio, con todo el potencial que la arquitectura y la funcionalidad de Tech Insurance puede lograr.
          </p>
        </div>
      </section>

      {/* MATRIX DE CASOS DE USO */}
      <section className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: 'Lanzamiento de productos',
                desc: 'Modele, testee, desarrolle y lance productos de forma ágil y controlada.',
                icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
              },
              {
                title: 'Embedded Insurance',
                desc: 'Obtenga una plataforma que permite embeber seguros en cualquier experiencia digital.',
                icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
              },
              {
                title: 'Nuevos canales digitales',
                desc: 'La herramienta permite desarrollar diferentes tipos de conexiones y funcionalidades para abrir nuevos canales de distribución.',
                icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
              },
              {
                title: 'Modelo B2B',
                desc: 'Modelo orientado a productores, corredores, PAS y brokers, facilitando la comercialización tradicional de seguros.',
                icon: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
              },
              {
                title: 'Modelo B2B2C',
                desc: 'Permite brindar a intermediarios y socios herramientas para que desarrollen la venta de seguros con terceros.',
                icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>'
              },
              {
                title: 'Testeo de modelos',
                desc: 'La herramienta permite testear modelos de suscripción y pricing de forma controlada.',
                icon: '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><circle cx="12" cy="16" r="1.5"/>'
              },
              {
                title: 'Modelo B2C',
                desc: 'Permite desarrollar productos simples, de bajo primaje, sin necesidad de asesoramiento, para su comercialización directa.',
                icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 md:p-10 border border-white/5 bg-[#0f0e11] rounded-3xl hover:bg-[#16141a] hover:border-fuchsia-800 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(217,70,239,0.08)] flex flex-col h-full">
                 <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-4 group-hover:text-fuchsia-100 transition-colors">{item.title}</h4>
                 <p className="text-sm font-light text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO PRÁCTICO */}
      <section id="caso-practico" className="py-32 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">

          {/* CASO 0: BANCA REGIONAL (NUEVO) */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Desarrollo canal banca</span>
            </h2>
            <p className="text-center text-zinc-400 font-light text-xl mb-16 max-w-2xl mx-auto">
              Unificación y orquestación de productos aseguradores en múltiples países
            </p>
            <div className="p-12 lg:p-16 border border-white/5 bg-[#08040a] rounded-[2.5rem] relative shadow-2xl">
              <p className="text-center text-zinc-400 font-light text-lg mb-20 max-w-4xl mx-auto">
                Un banco regional incorporó Tech Insurance para modelar productos de cobertura como combinado familiar, hogar y vida. Dada la complejidad de operar en distintos países, donde las aseguradoras pueden variar según la regulación local, se requería una herramienta intermedia que permitiera desarrollar y gestionar productos de forma independiente de la compañía aseguradora en cada mercado.
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 relative">
                 {/* Línea conectora trasera (solo desktop) */}
                 <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-zinc-800 via-fuchsia-900/50 to-fuchsia-500/50 -translate-y-1/2 z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14 overflow-visible">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
                        <circle cx="21" cy="3" r="5" fill="#18181b" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M19.5 2C19.5 0.5 22.5 0.5 22.5 2C22.5 3 21 3.5 21 4.5" />
                        <circle cx="21" cy="6" r="0.8" fill="currentColor" stroke="none" />
                      </svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Compañía aseguradora variable según país</p>
                   </div>
                 </div>

                 <div className="text-zinc-700 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] bg-[#1b081e] border-2 border-fuchsia-800 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(217,70,239,0.3)] shrink-0 animate-breath relative">
                      <Image src="/TechInsurance.svg" alt="Tech Insurance Isotipo" width={56} height={56} className="object-contain" />
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-fuchsia-300 font-bold text-xl mb-3">Tech Insurance</p>
                     <p className="text-zinc-400 text-sm leading-relaxed">Tech Insurance actúa como hub intermedio, desacoplando el producto de la aseguradora.</p>
                   </div>
                 </div>

                 <div className="text-fuchsia-900 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14">
                        <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2.5 9h19M2.5 15h19"/>
                      </svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Distribución del producto</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">Distribución en múltiples países, adaptándose a cada contexto local.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* CASO 1: GARANTÍA EXTENDIDA */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Seguro de garantía extendida</span>
            </h2>
            <p className="text-center text-zinc-400 font-light text-xl mb-16 max-w-2xl mx-auto">
              Creación, configuración y despliegue de un producto completo en minutos
            </p>
            <div className="p-12 lg:p-16 border border-white/5 bg-[#08040a] rounded-[2.5rem] relative shadow-2xl">
              <p className="text-center text-zinc-400 font-light text-lg mb-20 max-w-3xl mx-auto">
                Tech Insurance permite orquestar de forma integral la creación de un seguro de garantía extendida, incluyendo su configuración técnica, lógica comercial, cotización, pago y emisión de póliza, todo dentro de un flujo continuo.
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 relative">
                 {/* Línea conectora trasera (solo desktop) */}
                 <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-zinc-800 via-fuchsia-900/50 to-fuchsia-500/50 -translate-y-1/2 z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Equipo de negocio</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">Define el producto, las coberturas, arma el pricing y establece el comportamiento del producto.</p>
                   </div>
                 </div>

                 <div className="text-zinc-700 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] bg-[#1b081e] border-2 border-fuchsia-800 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(217,70,239,0.3)] shrink-0 animate-breath relative">
                      <Image src="/TechInsurance.svg" alt="Tech Insurance Isotipo" width={56} height={56} className="object-contain" />
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-fuchsia-300 font-bold text-xl mb-3">Product Studio</p>
                     <p className="text-zinc-400 text-sm leading-relaxed">La configuración se realiza a través de simples pasos, permitiendo crear el producto en minutos sin necesidad de desarrollo técnico.</p>
                   </div>
                 </div>

                 <div className="text-fuchsia-900 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Publicación</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">Se define el diseño, la experiencia o el layout del producto para ser embebido o utilizado en distintos canales.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* CASO 2: B2B2C */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Canal B2B2C</span>
            </h2>
            <p className="text-center text-zinc-400 font-light text-xl mb-16 max-w-2xl mx-auto">
              Articulación entre aseguradora, partner y cliente final
            </p>
            <div className="p-12 lg:p-16 border border-white/5 bg-[#08040a] rounded-[2.5rem] relative shadow-2xl">
              <p className="text-center text-zinc-400 font-light text-lg mb-20 max-w-3xl mx-auto">
                Una compañía aseguradora utiliza Tech Insurance para desarrollar y estructurar productos que luego son distribuidos a través de una red de partners, quienes los comercializan directamente al cliente final dentro de sus propias experiencias.
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 relative">
                 <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-zinc-800 via-fuchsia-900/50 to-fuchsia-500/50 -translate-y-1/2 z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] bg-[#1b081e] border-2 border-fuchsia-800 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(217,70,239,0.3)] shrink-0 animate-breath relative text-fuchsia-500">
                      <Image src="/TechInsurance.svg" alt="Tech Insurance Isotipo" width={56} height={56} className="object-contain" />
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Tech Insurance</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">La aseguradora utiliza Tech Insurance para desarrollar productos, definir coberturas, pricing, comisiones y modelar la experiencia completa end-to-end.</p>
                   </div>
                 </div>

                 <div className="text-zinc-700 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14">
                        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                      </svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-fuchsia-300 font-bold text-xl mb-3">Partners</p>
                     <p className="text-zinc-400 text-sm leading-relaxed">La solución es provista a terceros que embeben o comercializan los productos. Estos pueden acceder a funcionalidades acotadas y realizar ajustes de UX/UI según su canal.</p>
                   </div>
                 </div>

                 <div className="text-fuchsia-900 hidden lg:block relative z-10 -mt-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-start">
                   <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-fuchsia-500 mb-8 shadow-xl shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 lg:w-14 lg:h-14">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                   </div>
                   <div className="text-center px-2 flex-1 flex flex-col justify-start w-full">
                     <p className="text-white font-bold text-xl mb-3">Cliente final</p>
                     <p className="text-zinc-500 text-sm leading-relaxed">El cliente accede al producto dentro de la experiencia del partner, donde se realiza la venta de forma directa.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
