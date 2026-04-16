import os

def generar_contacto_legal():
    base_dir = "sitio_estructura"
    cont_dir = os.path.join(base_dir, "contacto")
    leg_dir = os.path.join(base_dir, "legal")
    
    os.makedirs(cont_dir, exist_ok=True)
    os.makedirs(leg_dir, exist_ok=True)
    
    path_contacto = os.path.join(cont_dir, "index.html")
    path_legal = os.path.join(leg_dir, "index.html")

    # --- CONTACTO HTML ---
    html_contacto = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .form-group { margin-bottom: 1.5rem; text-align: left; }
    .form-label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.95rem; }
    .form-input {
      width: 100%; padding: 0.8rem 1rem; border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.3); color: var(--text-primary);
      font-family: inherit; font-size: 1rem;
      box-sizing: border-box;
    }
    .form-input:focus { outline: none; border-color: var(--accent-color); }
    .contact-layout { display: flex; flex-wrap: wrap; gap: 4rem; margin-top: 3rem; }
    .contact-info, .contact-form { flex: 1; min-width: 300px; }
  </style>
</head>
<body>

  <section class="hero" style="padding-bottom: 3rem; text-align: left;">
    <div class="container">
      <h1 style="font-size: 3rem;">Hablemos de escala</h1>
      <p style="font-size: 1.25rem; max-width: 700px;">Nuestros especialistas comerciales y arquitectos de soluciones están disponibles para analizar su actual infraestructura aseguradora y trazar un mapa de migración seguro.</p>
    </div>
  </section>

  <section style="background-color: var(--bg-surface);">
    <div class="container contact-layout">
      
      <div class="contact-info">
        <h2 style="font-size: 2rem;">Asesoría Técnica Demos</h2>
        <p>Complete el formulario y agendaremos una sesión técnica de 45 minutos (Discovery Call). En esta primera instancia nos enfocaremos en:</p>
        <ul style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8;">
          <li>Validar compatibilidad con su actual Core o ERP (AS/400).</li>
          <li>Analizar posibles flujos de automatización para brokers o asegurados.</li>
          <li>Revisar esquemas API y requerimientos especiales de cumplimiento (Compliance) regional.</li>
        </ul>
      </div>

      <div class="contact-form">
        <div class="card">
          <form onsubmit="event.preventDefault();">
            <div class="form-group">
              <label class="form-label">Nombre Completo</label>
              <input type="text" class="form-input" placeholder="Ej. Ana Martínez" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email Corporativo</label>
              <input type="email" class="form-input" placeholder="ana@enterprise.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">Empresa / Entidad</label>
              <input type="text" class="form-input" placeholder="Compañía de Seguros S.A.">
            </div>
            <div class="form-group">
              <label class="form-label">¿Cúal es su dolor principal actual?</label>
              <textarea class="form-input" rows="4" placeholder="Breve descripción del desafío técnico u objetivo de negocio..." required></textarea>
            </div>
            <button type="submit" class="cta-button" style="width: 100%; border: none; cursor: pointer;">Solicitar Asesoría</button>
          </form>
        </div>
      </div>

    </div>
  </section>

</body>
</html>
"""

    # --- LEGAL HTML ---
    html_legal = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Legal & Privacidad - Tech Insurance</title>
  <link rel="stylesheet" href="../styles.css">
  <style>
    .legal-content { max-width: 800px; margin: 0 auto; color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8; }
    .legal-content h2 { color: var(--text-primary); margin-top: 3rem; font-size: 1.8rem; }
    .legal-content h3 { color: var(--text-primary); margin-top: 2rem; font-size: 1.3rem; margin-bottom: 0.5rem; }
  </style>
</head>
<body>

  <section class="hero" style="padding-bottom: 2rem; padding-top: 6rem; text-align: center;">
    <div class="container">
      <h1 style="font-size: 2.5rem;">Avisos Legales</h1>
      <p>Políticas base de uso, licenciamiento y privacidad transaccional de Tech Insurance.</p>
    </div>
  </section>

  <section style="background-color: var(--bg-surface);">
    <div class="container legal-content">
      
      <h2>1. Términos y Condiciones de Uso (ToS)</h2>
      <p>Tech Insurance, un producto auspiciado y mantenido bajo las garantías operacionales de Kopernicus Tech, provee sus servicios de orquestación, consumo API y plataforma en la nube (SaaS) rigiéndose mediante estrictos controles institucionales.</p>
      
      <h3>Licenciamiento Corporativo</h3>
      <p>El uso de la plataforma Tech Insurance para la distribución, modelado o testeo actuarial de entidades financieras reguladas está sujeta enteramente a un contrato de licenciamiento Maestro (SLA) rubricado expresamente por ambo departamentos legales previo a la integración productiva. Ninguna función de <em>Product Studio</em> asume responsabilidades finales jurídicas ante entidades superintendentes regionales, recayendo las mismas sobre los directores técnicos de la Aseguradora de base (Carrier).</p>
      
      <h3>Disponibilidad (SLA) y Uptime</h3>
      <p>Aseguramos un esquema de redundancia de bases de datos activa proveyendo de un tiempo operativo garantizado (Uptime) del 99.9%. Las métricas del sistema no aplican en caso de caídas atribuidas única y estrictamente al nodo core (AS/400 o ERP legacy) del propio cliente que deniegue las comunicaciones síncronas a nuestras APIs.</p>
      
      <hr style="border-color: rgba(255,255,255,0.05); margin: 3rem 0;">

      <h2>2. Política de Privacidad de Datos</h2>
      <p>Comprendemos la sensibilidad subyacente a toda transacción aseguradora. Toda política o información sanitaria, patrimonial u crediticia enrutada a través de Tech Insurance es aislada y tratada bajo la normativa de neutralidad de datos.</p>
      
      <h3>Encriptación y Resguardo PCI/GDPR</h3>
      <p>Todo paquete o carga (payload) enviada por nuestros Webhooks o transitada mediante GraphQL es encriptada <i>End-to-End</i> empleando los estándares de la industria bancaria. Asimismo, nuestra infraestructura cloud alojada está adaptada nativamente a lineamientos exigentes (GDPR, ISO-27001) prohibiendo expresa y terminantemente la utilización de la data de la poliza individual por parte de Kopernicus Tech para cruzado o comercialización estadística externa.</p>
      
      <h3>Data de Analítica de Sesión</h3>
      <p>Al utilizar este portal institutivo público, recolectamos exclusivamente cookies transaccionales pasivas y analítica de visita genérica para auditorías de soporte, exceptuando la ingesta de perfiles nominales identificables a fines publicitarios. Su confianza de seguridad es nuestra licencia de operación primordial.</p>
      
      <br><br>
    </div>
  </section>

</body>
</html>
"""

    with open(path_contacto, "w", encoding="utf-8") as f:
        f.write(html_contacto)

    with open(path_legal, "w", encoding="utf-8") as f:
        f.write(html_legal)

if __name__ == "__main__":
    generar_contacto_legal()
    print("Contenido de /contacto y /legal implementado nativamente dentro de sitio_estructura.")
