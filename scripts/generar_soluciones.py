import os

def generar_soluciones():
    base_dir = "sitio_estructura"
    soluciones_dir = os.path.join(base_dir, "soluciones")
    os.makedirs(soluciones_dir, exist_ok=True)
    
    file_path = os.path.join(soluciones_dir, "index.html")

    html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soluciones - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .sol-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2.5rem;
      margin-top: 3rem;
    }
  </style>
</head>
<body>

  <!-- Hero Section Soluciones -->
  <section class="hero" style="padding-bottom: 5rem; text-align: left;">
    <div class="container hero-content">
      <div class="hero-text" style="max-width: 900px;">
        <div class="badge">Ecosistema de Soluciones</div>
        <h1 style="font-size: 3.5rem; margin-bottom: 2rem;">Acelerando el Retorno de Inversión en toda la cadena de valor</h1>
        <p style="font-size: 1.25rem;">Nuestras soluciones tecnológicas están diseñadas con un único objetivo: maximizar el valor de negocio. Integramos y modernizamos los canales de distribución para capturar primas de manera eficiente, reduciendo el costo de adquisición de clientes operando en ecosistemas embebidos y directos.</p>
      </div>
    </div>
  </section>

  <!-- Section 1: Target Audiences -->
  <section style="background-color: var(--bg-surface);">
    <div class="container">
      <h2>Transformación por Segmento Comercial</h2>
      <div class="sol-grid">
        
        <!-- Aseguradoras -->
        <div class="card" style="border-left: 3px solid var(--accent-color)">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Aseguradoras (Carriers)</h3>
          <p style="font-size: 1.05rem;"><strong>Desafío:</strong> Altos costos hundidos en sistemas heredados que asfixian la rapidez de salida al mercado.</p>
          <p style="font-size: 1.05rem; margin-bottom: 0;"><strong>El Valor de Negocio:</strong> Reducción del <em>Time-to-Market</em> de productos complejos de 12 meses a sólo semanas. Tech Insurance permite realizar pruebas A/B de nuevos seguros sin riesgo para el core. Esto incrementa drásticamente la capacidad de innovación y captación de primas en canales end-to-end puramente digitales, disminuyendo el costo operativo por póliza emitida en más de un 40%.</p>
        </div>
        
        <!-- Bancos -->
        <div class="card" style="border-left: 3px solid #3b82f6;">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Bancos (Bancaseguros)</h3>
          <p style="font-size: 1.05rem;"><strong>Desafío:</strong> Baja penetración en la base de clientes cautivos y flujos de contratación desconectados de las apps bancarias.</p>
          <p style="font-size: 1.05rem; margin-bottom: 0;"><strong>El Valor de Negocio:</strong> Monetización radical de la cartera. Habilitamos canales 100% integrados dentro del home banking o billeteras digitales mediante librerías API limpias. Al ofrecer el producto correcto (cruzando data transaccional), se incrementa drásticamente la conversión cruzada y se engrosa el LTV (Life-Time Value) del usuario sin sumar carga estructural a la sucursal.</p>
        </div>

        <!-- Brokers -->
        <div class="card" style="border-left: 3px solid #10b981;">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Brokers & MGAs</h3>
          <p style="font-size: 1.05rem;"><strong>Desafío:</strong> Multiplicidad de portales de cotización ineficientes y consolidación manual de la cartera.</p>
          <p style="font-size: 1.05rem; margin-bottom: 0;"><strong>El Valor de Negocio:</strong> Centralización y superpoderes de distribución. Brindamos una capa unificada donde comparar y emitir pólizas de múltiples proveedores se soluciona en segundos. Reducimos el tiempo de gestión administrativa (Backoffice y liquidación de comisiones) permitiendo a sus equipos concentrarse netamente en la adquisición B2B y el asesoramiento a gran volumen.</p>
        </div>

        <!-- Partners -->
        <div class="card" style="border-left: 3px solid #f59e0b;">
          <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.5rem;">Partners & Retail (Embebidos)</h3>
          <p style="font-size: 1.05rem;"><strong>Desafío:</strong> Falta de líneas de ingresos adicionales en la experiencia de cierre o checkout del usuario.</p>
          <p style="font-size: 1.05rem; margin-bottom: 0;"><strong>El Valor de Negocio:</strong> Creación de nuevas unidades de ganancias sin esfuerzo. Permite que tiendas retail, e-commerces, telcos o empresas de movilidad adjunten coberturas de micro-riesgos exactas justo en su carrito de compras (Embedded Insurance). Capitalizan sus bases de usuarios masivas reteniendo un margen (revenue-share) directo de la originación de la póliza.</p>
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
    generar_soluciones()
    print("Contenido Comercial enfocado en ROI generado en /soluciones")
