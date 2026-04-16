import os

def main():
    print("Elevando copy de Plataforma (page.tsx) a nivel enterprise...")
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'plataforma', 'page.tsx'))
    
    # Nuevo template completo manteniendo la fidelidad visual estricta.
    page_content = """export default function PlataformaPage() {
  return (
    <div className="flex flex-col w-full">
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

      {/* 2. CONCEPTO CLAVE - URBANIZACIÓN */}
      <section className="py-20 px-4 border-b border-border/50 bg-background">
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
      <section className="py-24 px-4 bg-[#050505] border-b border-border/50">
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
            <div>
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
            <div className="p-8 bg-indigo-900/10 border border-indigo-500/20 rounded-2xl relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Product Studio</h2>
              <p className="text-lg text-indigo-200 mb-6 relative z-10 font-medium">
                El Product Studio redefine cómo se construyen los productos de seguros.
              </p>
              <div className="mb-6 relative z-10 p-4 border border-border/50 bg-background/80 backdrop-blur-md rounded-lg">
                 <p className="text-zinc-300 text-center font-bold">Los productos dejan de ser código.</p>
                 <p className="text-zinc-300 text-center font-bold">Pasan a ser configuraciones dinámicas.</p>
              </div>
              <p className="text-muted-foreground mb-4 relative z-10">Esto habilita:</p>
              <div className="flex gap-4 relative z-10 text-white font-semibold">
                 <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Velocidad</span>
                 <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Reutilización</span>
                 <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-sm">Consistencia</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ARQUITECTURA */}
      <section className="py-24 px-4 bg-muted/20">
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

    </div>
  );
}
"""

    with open(path, 'w', encoding='utf-8') as f:
        f.write(page_content)

    print("✅ Copy optimizado y jerarquía empresarial aplicada en plataforma/page.tsx")

if __name__ == '__main__':
    main()
