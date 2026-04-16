export default function SolucionesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-background px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Soluciones Estratégicas</h1>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {t: 'Para Aseguradoras', d: 'Expanda sus canales y retome el control de time-to-market sin modificar su core crítico.'},
                {t: 'Para Brokers', d: 'Integre capacidades digitales, cotizadores y emisión en sus portales nativos.'},
                {t: 'Para Bancos', d: 'Bancaseguros integrado. Active micro-seguros embebidos directamente en sus flujos transaccionales.'},
                {t: 'Para Partners', d: 'Retención B2B2C mediante cross-selling transparente.'}
              ].map((s) => (
                 <div key={s.t} className="p-8 border border-border/50 bg-muted/20 rounded-xl">
                   <h3 className="text-xl font-bold mb-4 text-primary">{s.t}</h3>
                   <p className="text-muted-foreground">{s.d}</p>
                 </div>
              ))}
           </div>
           
           <h2 className="text-3xl font-bold mb-8 text-foreground">Formatos de Distribución</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-[#0a0a0a] rounded-xl">
                 <h3 className="text-2xl font-bold text-white mb-3">Embedded Insurance</h3>
                 <p className="text-zinc-400">Insertamos el proceso asegurador dentro del customer journey nativo de una empresa que no es del rubro. Compra y suscripción sin fricción.</p>
              </div>
              <div className="p-8 border border-border bg-[#0a0a0a] rounded-xl">
                 <h3 className="text-2xl font-bold text-white mb-3">Canales Digitales Omnicanal</h3>
                 <p className="text-zinc-400">Implemente sus productos a través de flujos e-commerce tradicionales o billeteras virtuales de rápida integración.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
