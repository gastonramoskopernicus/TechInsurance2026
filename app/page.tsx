import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center border-b border-border/50 bg-[#020202] overflow-hidden px-4 py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12">
            <Image 
              src="/hero-cube.png" 
              alt="Tech Insurance Core Architecture" 
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              priority
            />
          </div>
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Deje de depender <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                de su core para innovar.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Tech Insurance permite lanzar productos, integrar canales y escalar su negocio sin rediseñar sus sistemas existentes.
            </p>
            <p className="text-md text-zinc-500 font-medium max-w-2xl mx-auto pt-2">
              Mientras el core mantiene la operación, Tech Insurance acelera la innovación.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="h-12 md:h-14 px-8 md:px-10 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Solicitar demo
              </button>
              <button className="h-12 md:h-14 px-8 md:px-10 rounded-md border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors w-full sm:w-auto">
                Explorar plataforma
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problema del mercado */}
      <section id="problema" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block text-center">El Desafío</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">El problema no es tecnológico.<br/>Es estructural.</h2>
          <div className="p-8 rounded-lg border border-border/50 bg-background/50 max-w-2xl mx-auto">
            <p className="text-foreground text-lg text-center leading-relaxed font-medium mb-6">
              Los sistemas core fueron diseñados para operar, no para innovar.
            </p>
            <p className="text-muted-foreground text-center mb-4">Cada cambio implica:</p>
            <ul className="flex flex-col items-center text-muted-foreground space-y-2 mb-6">
              <li>• Tiempos largos</li>
              <li>• Alto costo</li>
              <li>• Dependencia de IT</li>
              <li>• Riesgo operativo</li>
            </ul>
            <p className="text-foreground text-center font-semibold text-lg">
              Esto limita la capacidad real de competir.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Solución (Tech Insurance) */}
      <section id="solucion" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Nuestra Solución</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Tech Insurance desacopla la innovación del core.</h2>
          <div className="max-w-2xl mx-auto mb-8">
             <p className="text-muted-foreground text-lg mb-6 text-center">
               Permite:
             </p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-muted-foreground">
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Lanzar productos en días</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Integrar partners sin fricción</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Testear modelos sin riesgo</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Escalar sin reescribir sistemas</li>
             </ul>
          </div>
        </div>
      </section>

      {/* 4. Capacidades */}
      <section id="capacidades" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Core Capabilities</span>
          <h2 className="text-3xl font-bold mb-12 text-foreground">Acelere productos, canales y experiencias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg bg-background border border-border/50 p-8 text-left h-full">
              <h3 className="text-xl font-bold text-foreground mb-3">Diseño Modular</h3>
              <p className="text-muted-foreground">Configure coberturas, reglas y precios de forma dinámica para crear nuevos productos en días.</p>
            </div>
            <div className="rounded-lg bg-background border border-border/50 p-8 text-left h-full">
              <h3 className="text-xl font-bold text-foreground mb-3">Distribución Omnicanal</h3>
              <p className="text-muted-foreground">APIs preparadas para integrar su oferta instantáneamente en ecosistemas e-commerce y fintech.</p>
            </div>
            <div className="rounded-lg bg-background border border-border/50 p-8 text-left h-full">
              <h3 className="text-xl font-bold text-foreground mb-3">Orquestación Continua</h3>
              <p className="text-muted-foreground">Automatización y escalabilidad del ciclo de vida, desde la cotización hasta el reclamo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Studio */}
      <section id="product-studio" className="py-24 border-b border-border/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-background to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Innovation Hub</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Product Studio: Autonomía Comercial</h2>
          <div className="max-w-3xl mx-auto border border-indigo-500/20 rounded-xl p-8 bg-black/40 backdrop-blur-sm">
            <p className="text-zinc-300 text-lg leading-relaxed">
              Otorgue el poder a sus equipos de negocio estratégico. Nuestro entorno de configuración No-Code permite conceptualizar, tarificar y validar seguros en el mercado a una velocidad sin precedentes, eliminando la dependencia crítica de IT.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Arquitectura */}
      <section id="arquitectura" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Infraestructura Constante</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Arquitectura API-First y Cloud-Native</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Diseñada para escalar de manera predecible. Microservicios altamente disponibles, arquitectura event-driven y resiliencia corporativa que se integra naturalmente con ecosistemas guidewire, plataformas legacy y servicios web externos.
          </p>
        </div>
      </section>

      {/* 7. Casos de uso */}
      <section id="casos-de-uso" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Adopción Flexible</span>
          <h2 className="text-3xl font-bold mb-12 text-foreground">Impulsando Modelos de Negocio Modernos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-lg bg-muted flex flex-col items-start p-8 text-left border border-border/30 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-2">Bancaseguros & Fintech</h3>
              <p className="text-muted-foreground">Seguros integrados sutilmente en flujos transaccionales y de crédito. Experiencias embebidas que monetizan de forma transparente.</p>
            </div>
            <div className="rounded-lg bg-muted flex flex-col items-start p-8 text-left border border-border/30 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-2">Retail & Sponsors Masivos</h3>
              <p className="text-muted-foreground">Comercialización hiper-segmentada y garantías extendidas integradas en el pipeline y punto de venta online (B2B2C).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Impacto en negocio */}
      <section id="impacto" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase mb-2 block">ROI</span>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Resultados Claros y Medibles</h2>
          <div className="max-w-2xl mx-auto rounded-lg border border-border/50 bg-muted/20 p-8">
            <ul className="space-y-4 text-muted-foreground text-lg text-left">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Reducción drástica del time-to-market</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Aumento de ingresos por nuevos canales</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Menor dependencia tecnológica</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Mayor capacidad de innovación</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <section id="cta" className="py-32 border-b border-border/50 relative overflow-hidden bg-primary/5 text-center">
        <div className="container mx-auto px-4 z-10 relative max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Libere el potencial de su negocio</h2>
          <p className="text-xl text-muted-foreground">Escale canales, optimice operaciones y evite migraciones de core traumáticas. Agende una reunión para evaluar nuestra plataforma en su ecosistema.</p>
          <button className="mt-4 h-14 px-10 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Agendar Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
