import os

def generar_product_studio():
    base_dir = "sitio_estructura"
    plataforma_dir = os.path.join(base_dir, "plataforma")
    os.makedirs(plataforma_dir, exist_ok=True)
    
    # Creamos un subdirectorio para match con la ruta limpia o lo volcamos como producto-studio.html
    # Lo más sano para la arquitectura de assets .html que manejamos es el .html en la carpeta principal
    file_path = os.path.join(plataforma_dir, "product-studio.html")

    html_content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Studio - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .studio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
  </style>
</head>
<body>

  <!-- Hero Section -->
  <section class="hero" style="padding-bottom: 5rem; text-align: left;">
    <div class="container hero-content">
      <div class="hero-text" style="max-width: 850px;">
        <div class="badge">Laboratorio de Innovación</div>
        <h1 style="font-size: 3.8rem; margin-bottom: 2rem;">El Product Studio cambia la forma de crear seguros</h1>
        <p style="font-size: 1.3rem;">Abandone los ciclos de desarrollo de 18 meses. Nuestro motor avanzado le permite modelar, probar y desplegar productos complejos mediante configuración en lugar de código duro.</p>
      </div>
    </div>
  </section>

  <!-- Características Analíticas -->
  <section style="background-color: var(--bg-surface);">
    <div class="container">
      <h2>Diseño Paramétrico Integral</h2>
      <div class="studio-grid">
        
        <div class="card">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            Modelado Dinámico & Reutilización
          </h3>
          <p style="font-size: 1rem; margin-bottom: 0;">Configure coberturas y garantías como bloques independientes. La reutilización de coberturas pre-certificadas permite generar derivadas de productos reduciendo radicalmente los márgenes de error técnicos y legales.</p>
        </div>

        <div class="card">
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Productos Combinables</h3>
          <p style="font-size: 1rem; margin-bottom: 0;">Unión algorítmica de múltiples pólizas (ej. Hogar + IoT + Vida). Componga pólizas cruzadas (cross-selling intrínseco) bajo un único identificador transaccional, habilitando ofertas verdaderamente híbridas.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Lógica y Precisión -->
  <section>
    <div class="container">
      <h2>Motores de Suscripción Flexibles</h2>
      <div class="studio-grid">
        
        <div>
          <h3 style="color: var(--accent-color);">Reglas, Variables y Parámetros</h3>
          <p style="font-size: 1rem;">Establezca límites de riesgo, copagos o deducibles basándose en la variabilidad del asegurado. Un entorno donde cada variable se documenta, valida y parametriza desde una lógica de condiciones booleanas o matrices estocásticas, sin intervención manual.</p>
        </div>

        <div>
          <h3 style="color: var(--accent-color);">Fórmulas Desacopladas</h3>
          <p style="font-size: 1rem;">El equipo actuarial puede inyectar fórmulas matemáticas avanzadas directamente sobre el canvas del producto. Incorpore multiplicadores dinámicos que alteran el <em>rating</em> final en milisegundos gracias al parseador matemático incorporado en la nube.</p>
        </div>

        <div>
          <h3 style="color: var(--accent-color);">Oráculos Dinámicos & Datos Externos</h3>
          <p style="font-size: 1rem;">Abandone la fricción en la originación. Interconecte su póliza con oráculos IoT, redes de open banking o APIs de scoring gubernamental/crediticio. El Product Studio suscribe o rechaza riesgos bebiendo información externa en tiempo real, permitiendo los auténticos <em>seguros paramétricos</em>.</p>
        </div>
        
      </div>
    </div>
  </section>

  <!-- CTA Section Interna -->
  <section style="background-color: var(--bg-surface); text-align: center;">
    <div class="container">
      <h2>Haga tangible su estrategia digital</h2>
      <p style="margin: 0 auto 2rem auto;">Inicie una prueba de concepto en nuestro entorno seguro.</p>
      <a href="#" class="cta-button">Ver Product Studio en Acción</a>
    </div>
  </section>

</body>
</html>
"""

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html_content)

if __name__ == "__main__":
    generar_product_studio()
    print("Contenido de Product Studio desplegado satisfactoriamente sin alterar terceros.")
