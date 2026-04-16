import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center border-b border-border/50 bg-[#020202] overflow-hidden px-4 py-24 sm:py-32">
        {/* Ambient Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
          {/* Tech Cube Object */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12 ">
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
              Acelere su lado comercial. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Potencie el Core.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Plataforma modular que empodera al sector asegurador y financiero. Acelere la evolución de su negocio obteniendo resultados tangibles rápidamente y con bajo impacto tecnológico.
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
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">El dilema del Core Tradicional</h2>
          <p className="text-muted-foreground whitespace-pre-wrap text-lg">
            Los sistemas legacy operan como cuellos de botella. Lanzar nuevos productos o integrar canales digitales toma meses, consume enormes presupuestos de IT y paraliza la tracción comercial frente a un mercado que exige inmediatez.
          </p>
        </div>
      </section>

      {/* 3. Solución */}
      <section id="solucion" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Desacople la innovación del core</h2>
          <p className="text-muted-foreground text-lg">
            Tech Insurance actúa como un acelerador comercial middleware. Nos conectamos a sus sistemas existentes para exponer sus capacidades. Lance productos innovadores y capture nuevos segmentos de clientes sin la fricción de intervenir el código de su sistema central.
          </p>
        </div>
      </section>

      {/* 4. Capacidades */}
      <section id="capacidades" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Acelere productos, canales y experiencias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-auto md:h-48 rounded-lg bg-background border border-border/50 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Diseño Modular</h3>
              <p className="text-sm text-muted-foreground">Configure coberturas, reglas y precios de forma dinámica para crear nuevos productos en días.</p>
            </div>
            <div className="h-auto md:h-48 rounded-lg bg-background border border-border/50 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Distribución Omnicanal</h3>
              <p className="text-sm text-muted-foreground">APIs preparadas para integrar su oferta instantáneamente en ecosistemas e-commerce y fintech.</p>
            </div>
            <div className="h-auto md:h-48 rounded-lg bg-background border border-border/50 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Orquestación Continua</h3>
              <p className="text-sm text-muted-foreground">Automatización y escalabilidad del ciclo de vida, desde la cotización hasta el reclamo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Studio */}
      <section id="product-studio" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Product Studio: Autonomía Comercial</h2>
          <p className="text-muted-foreground text-lg">
            Otorgue el poder a sus equipos de negocio estratégico. Nuestro entorno de configuración No-Code permite conceptualizar, tarificar y validar seguros en el mercado a una velocidad sin precedentes, eliminando la dependencia crítica de IT.
          </p>
        </div>
      </section>

      {/* 6. Arquitectura */}
      <section id="arquitectura" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Arquitectura API-First y Cloud-Native</h2>
          <p className="text-muted-foreground text-lg">
            Diseñada para escalar de manera predecible. Microservicios altamente disponibles, arquitectura event-driven y resiliencia corporativa que se integra naturalmente con ecosistemas guidewire, plataformas legacy y servicios web externos.
          </p>
        </div>
      </section>

      {/* 7. Casos de uso */}
      <section id="casos-de-uso" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Impulsando Modelos de Negocio Modernos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="h-auto md:h-32 rounded-lg bg-muted flex flex-col items-center justify-center p-6">
              <h3 className="text-lg font-semibold text-foreground">Bancaseguros & Fintech</h3>
              <p className="text-sm text-muted-foreground mt-1">Seguros integrados sutilmente en flujos transaccionales y créditos.</p>
            </div>
            <div className="h-auto md:h-32 rounded-lg bg-muted flex flex-col items-center justify-center p-6">
              <h3 className="text-lg font-semibold text-foreground">Retail & Sponsors Masivos</h3>
              <p className="text-sm text-muted-foreground mt-1">Comercialización hiper-segmentada y garantías extendidas en punto de venta online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Impacto en negocio */}
      <section id="impacto" className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Resultados Claros y Medibles</h2>
          <p className="text-muted-foreground text-lg">
            Reduzca drásticamente el Time-To-Market comercial, minimice el riesgo tecnológico de la migración de sistemas y construya una unidad de negocio capaz de procesar miles de integraciones de pólizas con alta rentabilidad (ROI).
          </p>
        </div>
      </section>

      {/* 9. CTA final */}
      <section id="cta" className="py-32 border-b border-border/50 relative overflow-hidden bg-primary/5 text-center">
        <div className="container mx-auto px-4 z-10 relative max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Libere el potencial de su negocio</h2>
          <p className="text-xl text-muted-foreground">Escale canales, optimice operaciones y evite migraciones de core traumáticas. Agende una reunión para evaluar nuestra plataforma en su ecosistema.</p>
          <button className="mt-4 h-14 px-10 rounded-md bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg">
            Agendar Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
