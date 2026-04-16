import os

def generar_ecosistema():
    base_dir = "sitio_estructura"
    eco_dir = os.path.join(base_dir, "ecosistema")
    os.makedirs(eco_dir, exist_ok=True)
    
    file_path = os.path.join(eco_dir, "index.html")

    html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ecosistema - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .eco-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
  </style>
</head>
<body>

  <!-- Hero Section Tecnico -->
  <section class="hero" style="padding-bottom: 5rem; text-align: left;">
    <div class="container hero-content">
      <div class="hero-text" style="max-width: 900px;">
        <div class="badge">Hiper-Conectividad</div>
        <h1 style="font-size: 3.5rem; margin-bottom: 2rem;">El Hub orquestador de la red aseguradora</h1>
        <p style="font-size: 1.25rem;">Ningún producto digital funciona de forma aislada. Tech Insurance se erige como el nodo central de un ecosistema interconectado; unificando APIs, distribuidores, Insurtechs externas y motores de terceros para maximizar su capacidad de originación e integración.</p>
      </div>
    </div>
  </section>

  <!-- Detalles de la red -->
  <section style="background-color: var(--bg-surface);">
    <div class="container">
      <h2>Pilares del Ecosistema Abierto</h2>
      
      <div class="eco-grid">
        <!-- Integraciones -->
        <div class="card" style="border-top: 3px solid var(--accent-color);">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            🔌 Integraciones (Plug & Play)
          </h3>
          <p style="font-size: 1rem; margin-bottom: 0;">Extienda su poder tecnológico en días, no en semestres. Soporte nativo para engancharse con pasarelas de pago recurrentes, proveedores de validación Biométrica, ERPs financieros o sistemas automatizados de peritaje inteligente y First Notice of Loss (FNOL).</p>
        </div>

        <!-- Partners -->
        <div class="card" style="border-top: 3px solid #3b82f6;">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">🤝 Red de Partners y Oráculos</h3>
          <p style="font-size: 1rem; margin-bottom: 0;">No construya en solitario. Su ecosistema puede nutrirse de oráculos de datos de clima, scoring de crédito gubernamental o integradores KYC de nuestro Marketplace oficial. Al tercerizar la ingesta de riesgo, su suscripción obtiene viabilidad en tiempo real.</p>
        </div>
      </div>
      
      <div class="eco-grid" style="margin-top: 2rem;">
        <!-- APIs -->
        <div class="card" style="border-top: 3px solid #10b981;">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">⚡ API-First Development</h3>
          <p style="font-size: 1rem; margin-bottom: 0;">Abandone la caja negra. Todo nuestro entorno está mapeado bajo endpoints RESTful y GraphQL con documentación síncrona/open-source (Swagger/OpenAPI). Sus desarrolladores internos tienen la libertad de invocar funciones directas al motor <em>headless</em> de cotización y emisión sin intermediarios.</p>
        </div>

        <!-- Canales -->
        <div class="card" style="border-top: 3px solid #f59e0b;">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">🌐 Canales Híbridos Inagotables</h3>
          <p style="font-size: 1rem; margin-bottom: 0;">Multiplique la superficie de contacto. Un único producto configurado en Tech Insurance puede ser distribuido de forma instintiva a través de agencias de venta en formato portal B2B, checkouts asincrónicos B2B2C, APIs públicas para Agregadores y brokers, o ventas directas (DTC).</p>
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
    generar_ecosistema()
    print("Contenido generado existosamente en el directorio /ecosistema")
