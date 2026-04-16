export default function RecursosPage() {
  return (
    <div className="flex flex-col w-full">
       <section className="relative pt-32 pb-16 border-b border-border/50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-6">Recursos y Conocimiento</h1>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 border border-border bg-background rounded-lg">
             <h3 className="text-2xl font-bold text-white mb-4">Innovation Lab & Research</h3>
             <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                <li>Whitepapers de Tendencias</li>
                <li>Insights de Regulación Local</li>
                <li>Desempeño B2B2C en LATAM</li>
             </ul>
           </div>
           <div className="p-8 border border-border bg-background rounded-lg">
             <h3 className="text-2xl font-bold text-white mb-4">Casos Reales</h3>
             <p className="text-muted-foreground">Explore los papers de escalabilidad demostrada y casos de éxito de migraciones fluidas.</p>
           </div>
        </div>
      </section>
    </div>
  )
}
