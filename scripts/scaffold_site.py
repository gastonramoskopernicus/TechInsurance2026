import os

def main():
    print("Iniciando scaffolding masivo de la estructura del sitio...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    # --- 1. MODIFICAR Header.tsx ---
    header_path = os.path.join(base_dir, 'components', 'Header.tsx')
    if os.path.exists(header_path):
        with open(header_path, 'r', encoding='utf-8') as f:
            header_content = f.read()
        
        # Reemplazar array navItems y links
        # Buscamos la asignacion del navItems const
        new_nav_array = """const navItems = [
    { label: "Plataforma", href: "/plataforma" },
    { label: "Product Studio", href: "/product-studio" },
    { label: "Arquitectura", href: "/arquitectura" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Recursos", href: "/recursos" },
    { label: "Empresa", href: "/empresa" },
    { label: "Contacto", href: "/contacto" },
  ];"""
        import re
        header_content = re.sub(r'const navItems = \[\s*\{[^\}]*\},\s*\{[^\}]*\},\s*\{[^\}]*\},\s*\{[^\}]*\},\s*\{[^\}]*\},\s*\{[^\}]*\},\s*\];', new_nav_array, header_content, flags=re.DOTALL)
        # Update link login and demo to physical pages
        header_content = header_content.replace('href="#login"', 'href="/login"')
        header_content = header_content.replace('href="#demo"', 'href="/contacto"')
        
        with open(header_path, 'w', encoding='utf-8') as f:
            f.write(header_content)
        print("Header.tsx actualizado.")

    # --- 2. MODIFICAR page.tsx (Home) ---
    home_content = """import Image from "next/image";

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
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block text-center">El Desafío</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">El dilema del Core Tradicional</h2>
          <div className="p-8 rounded-lg border border-border/50 bg-background/50">
            <p className="text-muted-foreground text-lg text-center leading-relaxed">
              Los sistemas legacy operan como cuellos de botella. Lanzar nuevos productos o integrar canales digitales toma meses, consume enormes presupuestos de IT y paraliza la tracción comercial frente a un mercado que exige inmediatez.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Solución (Tech Insurance) */}
      <section id="solucion" className="py-24 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Nuestra Solución</span>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Desacople la innovación del core</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tech Insurance actúa como un acelerador comercial middleware. Nos conectamos a sus sistemas existentes para exponer sus capacidades. Lance productos innovadores y capture nuevos segmentos de clientes sin la fricción de intervenir el código de su sistema central.
          </p>
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Resultados Claros y Medibles</h2>
          <p className="text-muted-foreground text-lg">
            Reduzca drásticamente el Time-To-Market comercial, minimice el riesgo tecnológico de la migración de sistemas y construya una unidad de negocio capaz de procesar miles de integraciones de pólizas con alta rentabilidad.
          </p>
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
"""
    with open(os.path.join(base_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(home_content)
    print("page.tsx de Home actualizado con subtítulos jerárquicos.")

    # --- 3. GENERAR PÁGINAS NUEVAS ---
    paginas_info = {
        'plataforma': {
            'title': 'Tech Insurance como plataforma de innovación aseguradora',
            'sections': ['Qué es Tech Insurance', 'Qué problemas resuelve', 'Qué NO es (no reemplaza el core)', 'Concepto de urbanización del core', 'Plataforma modular y escalable', 'Integración con ecosistema']
        },
        'product-studio': {
            'title': 'El núcleo de creación de productos',
            'sections': ['Modelado de productos', 'Coberturas reutilizables', 'Reglas y parametrización', 'Fórmulas dinámicas', 'Creación de productos a partir de otros productos', 'Autonomía del negocio (No-Code)']
        },
        'arquitectura': {
            'title': 'Arquitectura SaaS Enterprise',
            'sections': ['Arquitectura desacoplada', 'API-first', 'Integración con core legacy', 'Microservicios', 'Orquestación', 'Escalabilidad', 'Multi-entorno (cloud / on-premise)']
        },
        'soluciones': {
            'title': 'Soluciones por Vertical',
            'sections': ['Embedded Insurance', 'Bancaseguros', 'Canales digitales', 'B2B / B2B2C', 'Productos on-demand', 'Seguros paramétricos']
        },
        'casos-de-uso': {
            'title': 'Casos de Uso de la Plataforma',
            'sections': ['Lanzamiento rápido de productos', 'Integraciones con partners', 'Productos temporales', 'Bundles de productos', 'Testeo de nuevos modelos', 'Nichos específicos']
        },
        'casos-de-exito': {
            'title': 'Casos de Éxito',
            'sections': ['Problema', 'Solución implementada', 'Resultado (ROI / impacto)']
        },
        'recursos': {
            'title': 'Recursos y Papers',
            'sections': ['Artículos', 'Whitepapers', 'Insights de mercado', 'Innovación en seguros']
        },
        'empresa': {
            'title': 'Nuestra Empresa',
            'sections': ['Quién es Kopernicus Tech', 'Experiencia en seguros', 'Capacidades', 'Equipo', 'Presencia regional']
        },
        'pricing': {
            'title': 'Modelo Conceptual de Pricing',
            'sections': ['Licenciamiento (IP propia)', 'SaaS (multi-tenant)', 'Por producto (PoC)', 'Acompañamiento consultivo']
        },
        'contacto': {
            'title': 'Contacto Comercial',
            'sections': ['Formulario simple', 'CTA comercial', 'Mensaje orientado a discovery']
        },
        'login': {
            'title': 'Acceso a la Plataforma',
            'sections': ['Placeholder simple para acceso futuro']
        },
        'legal': {
            'title': 'Legal y Privacidad',
            'sections': ['Términos', 'Privacidad']
        }
    }

    base_tsx_template = """export default function {component_name}Page() {{
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#020202] px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections_jsx}
          </div>
        </div>
      </section>
    </div>
  );
}}
"""

    for path, data in paginas_info.items():
        page_dir = os.path.join(base_dir, path)
        os.makedirs(page_dir, exist_ok=True)
        
        # Component Name from path
        comp_name = path.replace('-', ' ').title().replace(' ', '')
        title = data['title']
        subtitle = "Descubra cómo nuestra plataforma acelera y potencia sus capacidades." if path != 'login' else "Inicie sesión en su portal administrativo."
        
        sections_jsx = ""
        for sec in data['sections']:
            sections_jsx += f'''
            <div className="p-8 rounded-xl bg-background border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">{sec}</h3>
              <p className="text-muted-foreground leading-relaxed">Contenido estructural base referente a {sec.lower()}. Aquí se insertará la información específica, infografías y métricas del módulo en futuras iteraciones de diseño.</p>
            </div>'''
            
        final_code = base_tsx_template.format(
            component_name=comp_name,
            title=title,
            subtitle=subtitle,
            sections_jsx=sections_jsx
        )
        
        with open(os.path.join(page_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
            f.write(final_code)
        
        print(f"Creada página: /{path}")

    print("✅ Scaffolding masivo finalizado.")

if __name__ == '__main__':
    main()
