export default function PlataformaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-background px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Tech Insurance como Plataforma Central
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Acelerador comercial modular y escalable. Desacople la innovación del core legacy y orqueste productos al mercado en tiempo récord.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-20 px-4 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">1. El Enfoque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 rounded-xl bg-muted/40 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Qué Construimos</h3>
                <p className="text-muted-foreground">Urbanizamos el core actitudinal actuando como una capa middleware inteligente. Desbloqueamos el control permitiendo lanzar micro-productos y canales integrados de forma transparente.</p>
             </div>
             <div className="p-8 rounded-xl bg-muted/40 border border-border/50">
                <h3 className="text-xl font-semibold mb-3">Lo que No Somoss</h3>
                <p className="text-muted-foreground">No reemplazamos su Core PAS (Policy Administration System). Evolucionamos su capacidad perimetral conectando lo antiguo con lo nuevo sin migraciones dolorosas ni disrupciones en backend.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Módulos Principales */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">2. Suite de Módulos (Business Capabilities)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Product Studio', 'Commercial Engine', 'Data & Rules Engine', 'Partner Integration', 'Campaign Manager', 'API Gateway', 'Embedded Layer'].map((m) => (
              <div key={m} className="p-6 border border-border/50 bg-background rounded-lg hover:border-primary/50 transition-colors">
                 <h3 className="text-xl font-bold text-white mb-2">{m}</h3>
                 <p className="text-sm text-zinc-400">Modulo especializado en aceleración comercial y orquestación de vida del producto.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Studio & Architecture */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">3. Product Studio y Modelado Modular</h2>
            <p className="text-muted-foreground mb-6">Autonomía total. Permita a sus actuarios y gerentes producto reutilizar coberturas, crear productos compuestos y enlazar oráculos o datos externos sin intervención técnica exhaustiva.</p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>Configuración basada en roles y versiones.</li>
              <li>Parametrización dinámica por variable demográfica/contexto.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">4. Arquitectura y Seguridad Cloud</h2>
            <p className="text-muted-foreground mb-6">Nuestra capa API-first facilita integraciones omnicanal rápidas, despliegue SaaS / On-premise escalable a demanda, asegurando ambientes aislados, auditoría normativa y gobierno estricto de accesos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
