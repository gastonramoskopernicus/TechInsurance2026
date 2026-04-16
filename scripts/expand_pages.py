import os
import re

def main():
    print("Iniciando expansión estructural de la plataforma enterprise...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    # 1. ACTUALIZACIÓN DEL HEADER (Agregar Ecosistema)
    header_path = os.path.join(base_dir, 'components', 'Header.tsx')
    if os.path.exists(header_path):
        with open(header_path, 'r', encoding='utf-8') as f:
            header_content = f.read()
            
        if 'href: "/ecosistema"' not in header_content:
            new_nav = """const navItems = [
    { label: "Plataforma", href: "/plataforma" },
    { label: "Product Studio", href: "/product-studio" },
    { label: "Arquitectura", href: "/arquitectura" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Ecosistema", href: "/ecosistema" },
    { label: "Recursos", href: "/recursos" },
    { label: "Empresa", href: "/empresa" },
    { label: "Contacto", href: "/contacto" },
  ];"""
            header_content = re.sub(r'const navItems = \[\s*\{.*?\}[\s\S]*?\];', new_nav, header_content)
            with open(header_path, 'w', encoding='utf-8') as f:
                f.write(header_content)
            print("Header.tsx actualizado con Ecosistema.")

    # 2. DEFINICIÓN DE CONTENIDO PROFUNDO JSX
    
    page_plataforma = """export default function PlataformaPage() {
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
"""

    page_soluciones = """export default function SolucionesPage() {
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
"""

    page_ecosistema = """export default function EcosistemaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#050505] px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Ecosistema & Developer Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Conecte su entorno a nuestra red de integraciones certificadas y APIs. Un estándar abierto para potenciar colaboraciones sistémicas.</p>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">Partners e Integraciones</h3>
               <p className="text-muted-foreground">Colabore con la red de servicios insurtech, oráculos de datos KYC y procesadores de pago validados por el mercado.</p>
            </div>
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">APIs de Suscripción</h3>
               <p className="text-muted-foreground">Documentación detallada sobre endpoints OpenInsurance. Autenticación robusta (OAuth2), rate limits, y sandbox.</p>
            </div>
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">Templates B2B2C</h3>
               <p className="text-muted-foreground">Plantillas pre-estructuradas y widgets white-label listos para acoplarse en la web del patrocinador (banco, telecom, aerolínea).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"""

    page_casos = """export default function CasosUsoPage() {
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
"""

    page_recursos = """export default function RecursosPage() {
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
"""

    page_empresa = """export default function EmpresaPage() {
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
"""

    paginas = {
        'plataforma': page_plataforma,
        'soluciones': page_soluciones,
        'casos-de-uso': page_casos,
        'ecosistema': page_ecosistema,
        'recursos': page_recursos,
        'empresa': page_empresa
    }

    # Escribir todas las nuevas paginas
    for route, code in paginas.items():
        route_dir = os.path.join(base_dir, route)
        os.makedirs(route_dir, exist_ok=True)
        with open(os.path.join(route_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
            f.write(code)
        print(f"[{route}] Expandido y reorganizado satisfactoriamente.")

    # 3. MODIFICACIÓN LIGERA AL HOME PARA REFORZAR TONO
    home_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(home_path):
        with open(home_path, 'r', encoding='utf-8') as f:
            home_txt = f.read()
        
        # Inyectando palabras clave dentro del texto descriptivo (evitando romper etiquetas)
        # Vamos a reemplazar el lema default para añadir "Acelerador comercial modular y plataforma de desacople estratégico..."
        old_desc = "Plataforma modular que empodera al sector asegurador y financiero. Acelere la evolución de su negocio obteniendo resultados tangibles rápidamente y con bajo impacto tecnológico."
        new_desc = "Plataforma y acelerador comercial modular que empodera al sector asegurador. Desacople su core y acelere la evolución obteniendo altísimo impacto en el negocio (ROI) de forma transparente y escalable."
        if old_desc in home_txt:
            home_txt = home_txt.replace(old_desc, new_desc)
            with open(home_path, 'w', encoding='utf-8') as f:
                f.write(home_txt)
            print("Home (page.tsx) reforzado con tono comercial Enterprise.")

    print("✅ Operación de expanción enterprise completada.")

if __name__ == '__main__':
    main()
