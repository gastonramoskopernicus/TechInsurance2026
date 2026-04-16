export default function CasosUsoPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#020202] px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Casos de Uso Acelerados</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Desde el testeo de modelos experimentales hasta migraciones paralelas sin riesgos operacionales.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Lanzamiento de productos flash', 'Embedded insurance nativo', 'Onboarding de Nuevos Canales', 
              'Modelos B2B / B2B2C masivos', 'A/B Testing de Tarificación', 'Experiencias 100% Digitales', 
              'Replicación de productos Legacy', 'Operación Híbrida (OnPremise+Cloud)'].map((c) => (
               <div key={c} className="p-8 border-l-2 border-primary/40 bg-muted/20 pb-12">
                  <h3 className="text-lg font-bold text-foreground mb-3">{c}</h3>
                  <p className="text-sm text-zinc-400">Implementación de {c.lower()} habilitando una escalabilidad horizontal y midiendo conversiones de mercado, maximizando resultados y mitigando el impacto en core.</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
