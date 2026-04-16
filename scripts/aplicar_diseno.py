import os
import json

def aplicar_diseno():
    base_dir = "sitio_estructura"
    css_file = os.path.join(base_dir, "styles.css")
    home_json = os.path.join(base_dir, "home_contenido.json")
    index_file = os.path.join(base_dir, "index.html")

    # 1. Definir el diseño (CSS)
    css_content = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

:root {
  --bg-core: #090e17; /* Fondo azul oscuro profundo */
  --bg-surface: #101623;
  --text-primary: #ffffff;
  --text-secondary: #a0aec0;
  --accent-color: #7c3aed; /* Violeta moderno SaaS */
  --accent-hover: #6d28d9;
  
  --space-y-section: 8rem;
  --space-box: 2rem;
  --border-radius: 8px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-core);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: var(--space-y-section) 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

section:nth-child(even) {
  background-color: var(--bg-surface);
}

h1, h2, h3 {
  margin-top: 0;
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: 3.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2.5rem;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero {
  padding: 10rem 0 8rem 0;
  text-align: center;
}

.hero h1 {
  background: linear-gradient(135deg, #ffffff 0%, #a0aec0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  margin: 0 auto 3rem auto;
  font-size: 1.25rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(124, 58, 237, 0.15);
  color: var(--accent-color);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: var(--accent-color);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 1rem;
}

.cta-button:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(124, 58, 237, 0.5);
}

.card {
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.05);
  padding: var(--space-box);
  border-radius: var(--border-radius);
  transition: border-color 0.3s;
}
.card:hover { border-color: rgba(124,58,237,0.3); }

/* Destacado: Product Studio */
.featured-section {
  background: radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%), var(--bg-core);
  border-top: 1px solid rgba(124,58,237,0.2);
  border-bottom: 1px solid rgba(124,58,237,0.2);
}
"""

    with open(css_file, "w", encoding="utf-8") as f:
        f.write(css_content.strip())

    # 2. Generar el index.html usando el JSON existente (solo integrador, no modifica estuctura/contenido nativo)
    if os.path.exists(home_json):
        with open(home_json, "r", encoding="utf-8") as f:
            datos_home = json.load(f)
            
        html_salida = [
            "<!DOCTYPE html>",
            "<html lang='es'>",
            "<head>",
            "  <meta charset='UTF-8'>",
            "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
            "  <title>Tech Insurance - Home</title>",
            "  <link rel='stylesheet' href='styles.css'>",
            "</head>",
            "<body>"
        ]

        # Iterar inyectando el diseño base sobre las secciones de home
        for seccion in sorted(datos_home, key=lambda x: x["orden"]):
            orden = seccion["orden"]
            nombre = seccion["seccion"]
            
            # Obtener el contenido si existe, sino usar proxy texto del proposito
            cont = seccion.get("contenido", {})
            titulo = cont.get("titulo", nombre)
            desc = cont.get("descripcion", seccion.get("proposito", ""))

            # Hero Section (Orden 1)
            if orden == 1:
                html_salida.append(f"""
  <section class="hero">
    <div class="container">
      <div class="badge">Acelerador Core</div>
      <h1>{titulo}</h1>
      <p>{desc}</p>
      <a href="#" class="cta-button">Conocer más</a>
    </div>
  </section>
                """)
            # Product Studio (Destacado) (Orden 5)
            elif "Product Studio" in nombre:
                html_salida.append(f"""
  <section class="featured-section">
    <div class="container" style="text-align: center;">
      <div class="badge">{nombre}</div>
      <h2>{titulo}</h2>
      <p style="margin: 0 auto 3rem auto;">{desc}</p>
      <div class="card" style="display:inline-block; max-width:800px; text-align:left;">
         <div style="height:200px; background:rgba(0,0,0,0.3); border-radius:4px; border:1px solid rgba(255,255,255,0.05); display:flex; align-items:center; justify-content:center; color:var(--text-secondary)">[ UI Placeholder ]</div>
      </div>
    </div>
  </section>
                """)
            # CTA Final (Orden 10)
            elif orden == 10:
                cta_t = cont.get("cta_texto", "Comenzar")
                html_salida.append(f"""
  <section style="text-align:center;">
    <div class="container">
      <h2>{titulo}</h2>
      <p style="margin: 0 auto 2rem auto;">{desc}</p>
      <a href="#" class="cta-button">{cta_t}</a>
    </div>
  </section>
                """)
            # Resto de Secciones
            else:
                html_salida.append(f"""
  <section>
    <div class="container">
      <div class="badge">{nombre}</div>
      <h2>{titulo}</h2>
      <p>{desc}</p>
    </div>
  </section>
                """)

        html_salida.append("</body>\n</html>")

        with open(index_file, "w", encoding="utf-8") as f:
            f.write("\n".join(html_salida))

if __name__ == "__main__":
    aplicar_diseno()
    print("Diseño y variables CSS aplicadas en sitio_estructura/styles.css e integrado en sitio_estructura/index.html")

