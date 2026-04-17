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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Aplicaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Estratégicas</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Ejecución inmediata. Transforme cualquier intención comercial, desde canales de bancos locales hasta alianzas globales de retail, en un producto de mercado.
          </p>
        </div>
      </section>

      {/* MATRIX DE CASOS DE USO */}
      <section className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: 'Lanzamiento de Productos',
                desc: 'Lance nuevas coberturas en cuestión de días, anulando la dependencia burocrática del core IT.',
                icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
              },
              {
                title: 'Embedded Insurance',
                desc: 'Incruste garantías dinámicas silenciosamente en el punto de venta digital de sus socios e-commerce.',
                icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
              },
              {
                title: 'Nuevos Canales Digitales',
                desc: 'Abra redes de distribución globales (Fintechs, Hubs, Plataformas) desplegando APIs públicas al instante.',
                icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
              },
              {
                title: 'Modelo B2B / B2B2C',
                desc: 'Empodere a sus corredores y agencias comerciales con oficinas transaccionales propias en marca blanca.',
                icon: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
              },
              {
                title: 'Testeo de Modelos',
                desc: 'Despliegue un segmento A/B experimental en calle sin contaminar bases o lógicas del AS400.',
                icon: '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><circle cx="12" cy="16" r="1.5"/>'
              },
              {
                title: 'Experiencias 100% Cloud',
                desc: 'Transforme interacciones burocráticas pesadas en cotizaciones y firmas electrónicas móviles inmediatas.',
                icon: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'
              },
              {
                title: 'Replicación Molecular',
                desc: 'Clone pólizas exitosas y altere exclusivamente sus variables tácticas (Pricing) con 2 clicks.',
                icon: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>'
              },
              {
                title: 'Operación Híbrida',
                desc: 'Cierre la venta instantánea en la app front-end y sincronice la cobranza maestra de manera diferida al ERP.',
                icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
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

    </div>
  );
}
