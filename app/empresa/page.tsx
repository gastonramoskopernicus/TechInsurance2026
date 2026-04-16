export default function EmpresaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-6">Sobre Kopernicus Tech</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Visión de transformación corporativa e impacto para el sector global de seguros.</p>
        </div>
      </section>
      <section className="py-20 px-4 container mx-auto max-w-4xl space-y-16">
         <div>
            <h2 className="text-2xl font-bold mb-4">Visión y Necesidad del Mercado</h2>
            <p className="text-muted-foreground leading-relaxed">El mundo digital requiere inmediatez. Los sistemas Core han garantizado la seguridad, pero es perentorio habilitar una capa complementaria especializada en la adopción, tracción comercial e innovación.</p>
         </div>
         <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg"><h3 className="font-bold mb-2">Nuestro Equipo</h3><p className="text-sm text-zinc-400">Expertos en Core bancario, actuarios, cloud y arquitectos sistémicos.</p></div>
            <div className="bg-muted p-6 rounded-lg"><h3 className="font-bold mb-2">Presencia Regional</h3><p className="text-sm text-zinc-400">Desplegados estratégicamente para brindar cobertura Latam, Europa y Global.</p></div>
         </div>
         <div className="text-center pt-8 border-t border-border/50">
            <p className="mb-4 font-bold">Contactos y Relaciones Corporativas</p>
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90">Escríbanos a Business Development</button>
         </div>
      </section>
    </div>
  );
}
