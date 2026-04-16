export default function EmpresaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#020202] px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Nuestra Empresa
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Descubra cómo nuestra plataforma acelera y potencia sus capacidades.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Quién es Kopernicus Tech</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a quién es kopernicus tech. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Experiencia en seguros</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a experiencia en seguros. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Capacidades</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a capacidades. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Equipo</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a equipo. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Presencia regional</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a presencia regional. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
