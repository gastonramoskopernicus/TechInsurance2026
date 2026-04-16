import os

def generar_empresa():
    base_dir = "sitio_estructura"
    empresa_dir = os.path.join(base_dir, "empresa")
    os.makedirs(empresa_dir, exist_ok=True)
    
    file_path = os.path.join(empresa_dir, "index.html")

    html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Empresa - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .split-layout {
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;
      align-items: center;
      margin-top: 3rem;
    }
    .split-text {
      flex: 1;
      min-width: 300px;
    }
    .kopernicus-box {
      background: radial-gradient(circle at top right, rgba(124, 58, 237, 0.15) 0%, rgba(0,0,0,0.3) 100%);
      border: 1px solid rgba(124, 58, 237, 0.2);
      border-radius: 12px;
      padding: 3rem;
      margin-top: 5rem;
    }
  </style>
</head>
<body>

  <!-- Hero Section: Foco en Tecnología / Producto primero -->
  <section class="hero" style="padding-bottom: 3rem; text-align: left;">
    <div class="container hero-content">
      <div class="hero-text" style="max-width: 900px;">
        <div class="badge">Nuestra Tecnología</div>
        <h1 style="font-size: 3.5rem; margin-bottom: 2rem;">Redefinimos el tejido conectivo de los seguros</h1>
        <p style="font-size: 1.25rem;">Tech Insurance nace ante un fallo de sistema claro en la industria global tecnológica: los desarrollos monolíticos. Nuestro producto es un orquestador radical, una pieza de vanguardia diseñada para ser introducida limpiamente sobre montañas de deuda técnica.</p>
      </div>
    </div>
  </section>

  <!-- Producto y Visión -->
  <section style="background-color: var(--bg-surface);">
    <div class="container split-layout">
      
      <div class="split-text">
        <h2 style="font-size: 2.2rem; color: var(--text-primary);">El Producto</h2>
        <h3 style="color: var(--accent-color); margin-bottom: 1rem;">¿Qué es Tech Insurance?</h3>
        <p style="font-size: 1.05rem;">Es el ecosistema agnóstico más avanzado para asegurar la aceleración comercial. Un motor central que abstrae las reglas de negocio, rating y pólizas de un core rígido (System of Record) y las envuelve en un flujo Headless API-First.</p>
        <p style="font-size: 1.05rem;">Tech Insurance permite experimentar, ensamblar productos compuestos y dominar la cadena de distribución sin requerir reemplazar bases de datos subyacentes ni enfrentar costosas parálisis corporativas.</p>
      </div>

      <div class="split-text">
        <h2 style="font-size: 2.2rem; color: var(--text-primary);">Nuestra Visión</h2>
        <h3 style="color: #3b82f6; margin-bottom: 1rem;">Estandarización del Tiempo Real</h3>
        <p style="font-size: 1.05rem;">Concebimos un futuro próximo donde el desarrollo y cotización de una cobertura compleja o un reaseguro industrial se ejecute con la misma agilidad táctica que el armado de una tienda e-commerce.</p>
        <p style="font-size: 1.05rem;">Al erradicar el <em>"No se puede hacer por limitaciones de sistema"</em>, la visión es transformar el seguro global en un microservicio verdaderamente reactivo y on-demand embebido dentro del tejido digital que la humanidad consume día a día.</p>
      </div>

    </div>
  </section>

  <!-- Kopernicus Tech -->
  <section>
    <div class="container">
      
      <div class="kopernicus-box">
        <div style="margin-bottom: 2rem;">
          <span class="badge" style="background-color: rgba(255,255,255,0.1); color: var(--text-primary);">Company Built</span>
        </div>
        <h2 style="font-size: 2.5rem;">Desarrollado y respaldado por Kopernicus Tech</h2>
        <div style="max-width: 800px;">
          <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">La disrupción monumental del mercado no puede lograrse desde un vacío. Tech Insurance es una plataforma desarrollada, mantenida e impulsada por <strong>Kopernicus Tech</strong>.</p>
          <p style="font-size: 1.1rem; line-height: 1.7;">Como holding y empresa matriz constructora de infraestructuras críticas (Company Builder), Kopernicus Tech transfiere su ADN corporativo a Tech Insurance, dotando a la plataforma de absoluta solvencia financiera, robustez legal de estándares Enterprise y una matriz global de talento tecnológico de élite. Kopernicus asume el rol del astillero, garantizando que el navío resista cualquier escalada en infraestructura o contingencias durante décadas.</p>
        </div>
      </div>

    </div>
  </section>

</body>
</html>
"""

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html_content)

if __name__ == "__main__":
    generar_empresa()
    print("Contenido corporativo instanciado en /empresa respetando su prioridad conceptual.")
