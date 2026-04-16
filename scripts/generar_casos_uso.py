import os

def generar_casos_uso():
    base_dir = "sitio_estructura"
    casos_dir = os.path.join(base_dir, "casos-de-uso")
    os.makedirs(casos_dir, exist_ok=True)
    
    file_path = os.path.join(casos_dir, "index.html")

    html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casos de Uso - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .use-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    .use-card {
      background: rgba(16, 22, 35, 0.5);
      border: 1px solid rgba(124, 58, 237, 0.1);
      padding: 2.5rem;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }
    .use-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 4px; height: 100%;
      background: var(--accent-color);
    }
  </style>
</head>
<body>

  <!-- Hero Section -->
  <section class="hero" style="padding-bottom: 5rem; text-align: left;">
    <div class="container hero-content">
      <div class="hero-text" style="max-width: 900px;">
        <div class="badge">Aplicaciones Reales</div>
        <h1 style="font-size: 3.5rem; margin-bottom: 2rem;">Validando la tracción en el mundo real</h1>
        <p style="font-size: 1.25rem;">La arquitectura desacoplada de Tech Insurance se manifiesta en casos de innovación directa. Proveemos herramientas para materializar desde nuevos canales hasta testeo en frío de modelajes actuariales.</p>
      </div>
    </div>
  </section>

  <!-- Casos Aplicados -->
  <section style="background-color: var(--bg-surface);">
    <div class="container">
      <h2>Transformación en Ejecución</h2>
      <div class="use-grid">
        
        <!-- Caso 1 -->
        <div class="use-card">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Aceleración en Lanzamiento de Productos</h3>
          <p style="font-size: 1.05rem;">Al emparejar el Product Studio con conectores automáticos, las aseguradoras reemplazan sus ciclos de lanzamientos anuales (suscritos a la deuda técnica del monolito) por sprints mensuales. Habilita configuraciones orgánicas de nuevas coberturas derivadas, permitiendo go-to-market casi inmediato.</p>
        </div>
        
        <!-- Caso 2 -->
        <div class="use-card">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Embedded Insurance (Seguros Embebidos)</h3>
          <p style="font-size: 1.05rem;">Atracar microseguros paramétricos o de daños anexos en tiempo real al check-out de un retail de tecnología, app de movilidad o aerolínea. APIs ultraligeras comunican el carrito de compras con nuestro motor de cotización y emisión en milisegundos y con total transparencia para el usuario final.</p>
        </div>

        <!-- Caso 3 -->
        <div class="use-card">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Habilitación de Nuevos Canales (API First)</h3>
          <p style="font-size: 1.05rem;">Abandone la dependencia a portales obsoletos de brokers. Exponemos el 100% de la lógica de cotización a flujos web modernos, plataformas de e-banking, quioscos físicos de autoservicios y modelos de telemarketing unificados B2B2C para que terceros puedan revender el seguro como marca blanca.</p>
        </div>

        <!-- Caso 4 -->
        <div class="use-card">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Testeo de Modelos Actuariales sin Riesgo</h3>
          <p style="font-size: 1.05rem;">La caja de arena definitiva para los oficiales técnicos. Facilita la creación y despliegue de <em>testing A/B</em> en caliente. Lanza variaciones sobre la misma póliza o modelos de <em>pricing</em> paramétrico de vanguardia en segmentos segregados de audiencia sin contaminar, ni saturar el System of Record subyacente.</p>
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
    generar_casos_uso()
    print("Contenido de Casos de Uso generado existosamente en el directorio correspondiente.")
