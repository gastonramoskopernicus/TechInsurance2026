export default function PlataformaPage() {
  return (
    <div className="flex flex-col w-full relative">
      {/* 1. HERO - Qué es Tech Insurance */}
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#020202] px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Qué es Tech Insurance
          </h1>
          <div className="max-w-3xl space-y-4">
            <p className="text-xl text-primary font-medium">
              Tech Insurance es una plataforma de innovación aseguradora diseñada para desacoplar la evolución del negocio de las limitaciones del core.
            </p>
            <p className="text-lg text-zinc-300">
              <span className="font-bold text-white">No reemplaza el core. Lo potencia.</span>
            </p>
            <p className="text-muted-foreground text-lg">
              Mientras el core mantiene la operación, Tech Insurance permite construir, lanzar y escalar nuevas capacidades comerciales sin fricción.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAV PREMIUM */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl hide-scrollbar">
          {[
            { id: 'capacidades', label: 'Capacidades', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            { id: 'modulos', label: 'Módulos', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg> },
            { id: 'arquitectura', label: 'Arquitectura', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg> },
            { id: 'product-studio', label: 'Product Studio', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg> },
            { id: 'orquestacion', label: 'Orquestación', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { id: 'api-developer', label: 'API Platform', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
            { id: 'seguridad', label: 'Seguridad', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg> },
            { id: 'licenciamiento', label: 'Licenciamiento', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> },
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] text-zinc-400 font-medium hover:text-white hover:bg-white/5 focus:bg-white/10 active:bg-white/10 transition-all"
            >
              <span className="text-zinc-500 group-hover:text-fuchsia-500 transition-colors">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* 2. CONCEPTO CLAVE - URBANIZACIÓN */}
      <section className="py-20 px-4 border-b border-border/50 bg-background pt-28 -mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">El Concepto de Urbanización</h2>
          <div className="p-8 rounded-xl bg-muted/40 border border-border/50">
            <h3 className="text-xl font-bold mb-4 text-white">Urbanizar no es reemplazar.</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Es rodear el core con capas inteligentes que:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-muted-foreground">
               <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Absorben el cambio constante del mercado</li>
               <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Reducen drásticamente el riesgo</li>
               <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Aceleran el entorno de negocio</li>
            </ul>
            <p className="text-foreground font-semibold">Este enfoque estratégico evita los proyectos de transformación largos, riesgosos y costosos.</p>
          </div>
        </div>
      </section>

      {/* 4. MÓDULOS DE NEGOCIO */}
      <section id="modulos" className="py-24 px-4 bg-[#050505] border-b border-border/50 pt-32 -mt-16 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">La Suite</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Módulos Core</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Tech Insurance está compuesto por módulos que trabajan de forma integrada. Cada módulo responde estrictamente a una necesidad de negocio, no a una carga técnica.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Product Studio', desc: 'Diseño y modelado' },
              { title: 'Commercial Engine', desc: 'Lógica comercial' },
              { title: 'Data & Rules Engine', desc: 'Decisiones y reglas' },
              { title: 'Partner Integration', desc: 'Integración con terceros' },
              { title: 'Campaign Manager', desc: 'Gestión comercial ágil' },
              { title: 'API Gateway', desc: 'Exposición y control de API' },
              { title: 'Embedded Layer', desc: 'Distribución en canales' },
            ].map((m) => (
              <div key={m.title} className="p-6 border-l-2 border-primary bg-background rounded-r-lg hover:bg-muted/30 transition-colors">
                 <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                 <p className="text-zinc-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPACIDADES & 6. PRODUCT STUDIO */}
      <section className="py-24 px-4 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Capacidades */}
            <div id="capacidades" className="pt-28 -mt-28 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Capacidades Centrales</h2>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div> Modelado de productos sin dependencia de IT</li>
                <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div> Configuración dinámica de reglas y condiciones</li>
                <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div> Versionado continuo sin impacto operativo</li>
                <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div> Integración fluida con múltiples canales</li>
                <li className="flex gap-3"><div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div> Conectividad unificada con partners y terceros</li>
              </ul>
            </div>

            {/* Product Studio Deep Dive */}
            <div id="product-studio" className="p-8 bg-indigo-900/10 border border-indigo-500/20 rounded-2xl relative overflow-hidden pt-12 -mt-4 scroll-mt-32">
               <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Product Studio</h2>
               <p className="text-lg text-indigo-200 mb-6 relative z-10 font-medium">
                 El Product Studio redefine cómo se construyen los productos de seguros.
               </p>
               <div className="mb-6 relative z-10 p-4 border border-border/50 bg-background/80 backdrop-blur-md rounded-lg">
                  <p className="text-zinc-300 text-center font-bold">Los productos dejan de ser código.</p>
                  <p className="text-zinc-300 text-center font-bold">Pasan a ser configuraciones dinámicas.</p>
               </div>
               <p className="text-muted-foreground mb-4 relative z-10">Esto habilita:</p>
               <div className="flex flex-wrap gap-4 relative z-10 text-white font-semibold">
                  <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Velocidad</span>
                  <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Reutilización</span>
                  <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Consistencia</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ARQUITECTURA */}
      <section id="arquitectura" className="py-24 px-4 bg-muted/20 border-b border-border/50 pt-32 -mt-16 scroll-mt-32">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Fundación Técnica</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Arquitectura Desacoplada</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Infraestructura API-first, cien por ciento orientada a la integración profunda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 rounded-xl bg-background">
               <p className="font-semibold text-white">Convivir</p>
               <p className="text-sm text-zinc-400 mt-2">con cualquier core legacy on-premise.</p>
            </div>
            <div className="p-6 border border-border/50 rounded-xl bg-background">
               <p className="font-semibold text-white">Integrarse</p>
               <p className="text-sm text-zinc-400 mt-2">con ecosistemas y microservicios modernos.</p>
            </div>
            <div className="p-6 border border-border/50 rounded-xl bg-background">
               <p className="font-semibold text-white">Escalar</p>
               <p className="text-sm text-zinc-400 mt-2">sin fricción mediante alta disponibilidad.</p>
            </div>
            <div className="p-6 border border-border/50 rounded-xl bg-background">
               <p className="font-semibold text-white">Adaptarse</p>
               <p className="text-sm text-zinc-400 mt-2">a cualquier entorno corporativo de TI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUES PLACEHOLDERS SOLICITADOS POR ESTRUCTURA */}
      <section id="orquestacion" className="py-20 px-4 pt-32 -mt-16 border-b border-border/50 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Orquestación Comercial</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl">Automatice y controle la gestión de ciclos de vida completos. Desde la cotización y campañas hasta flujos externos con partners y ecosistemas, usando reglas claras sin intervención manual continua.</p>
        </div>
      </section>

      <section id="api-developer" className="py-20 px-4 pt-32 -mt-16 bg-[#050505] border-b border-border/50 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">API & Developer Platform</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl">Portal corporativo unificado de catálogos y servicios. Asegure una escalabilidad inmediata para equipos internos o desarrolladores terceros con sandboxes pre-configurados.</p>
        </div>
      </section>

      <section id="seguridad" className="py-20 px-4 pt-32 -mt-16 border-b border-border/50 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Seguridad & Compliance</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl">Cumplimiento nativo para arquitecturas financieras. Con ambientes auditables nativamente, gobierno de accesos estricto y trazabilidad criptográfica sobre cada configuración expuesta de sus pólizas.</p>
        </div>
      </section>

      <section id="licenciamiento" className="py-20 px-4 pt-32 -mt-16 bg-muted/20 pb-32 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Modelos de Licenciamiento</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">Ofrecemos infraestructura SaaS multi-tenant o despliegues dedicados Enterprise, brindando a las compañías libertad de acompañamiento evolutivo y seguridad de propiedad intelectual sobre el código.</p>
        </div>
      </section>

    </div>
  );
}
