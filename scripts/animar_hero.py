import os
import json
import re

def animar_hero():
    base_dir = "sitio_estructura"
    index_file = os.path.join(base_dir, "index.html")
    css_file = os.path.join(base_dir, "styles.css")
    home_json = os.path.join(base_dir, "home_contenido.json")

    # 1. Obtener los textos del Hero original desde el JSON para no romper contenido
    with open(home_json, "r", encoding="utf-8") as f:
        home_data = json.load(f)
    
    hero_title = ""
    hero_desc = ""
    for sec in home_data:
        if sec["orden"] == 1:
            hero_title = sec.get("contenido", {}).get("titulo", "")
            hero_desc = sec.get("contenido", {}).get("descripcion", "")
            break

    # 2. Modificar styles.css agregando el bloque tridimensional
    with open(css_file, "r", encoding="utf-8") as f:
        old_css = f.read()

    cube_css = """

/* === NEW HERO CUBE LAYOUT === */
.hero {
  padding: 10rem 0 8rem 0;
  text-align: left; /* reset from old state */
}

.hero .container.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.hero-text { flex: 1; max-width: 600px; }
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  height: 480px;
}

/* Reset inner elements to left align */
.hero-text h1, .hero-text p { text-align: left; margin-left: 0; }

/* El Cubo Tecnológico Central */
.cube-container {
  width: 160px;
  height: 160px;
  position: relative;
  transform-style: preserve-3d;
  /* Sútil flotación para evitar estatismo */
  animation: floatCube 8s ease-in-out infinite;
}

.cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(40deg);
  /* Rotate sutil como extra if wanted, pero con scroll es elegante limitarse al desacople */
  transition: transform 0.1s linear;
}

.face {
  position: absolute;
  width: 160px;
  height: 160px;
  background: rgba(14, 21, 38, 0.85); /* Fondo Dark-Glass */
  border: 1px solid rgba(124, 58, 237, 0.5); /* Violeta vibrante */
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
  transition: transform 0.2s cubic-bezier(0.1, 0.7, 0.1, 1);
}

/* Efecto de luz interna dramática */
.face::before {
  content: '';
  position: absolute;
  top: 10%; left: 10%; right: 10%; bottom: 10%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 60%);
  z-index: -1;
}

/* El desacople del Core evolutivo ligado al Scroll usando la variable --scroll-factor */
.front  { transform: translateZ(calc(80px + (var(--scroll-factor, 0) * 120px))); }
.back   { transform: rotateY(180deg) translateZ(calc(80px + (var(--scroll-factor, 0) * 120px))); }
.right  { transform: rotateY(90deg) translateZ(calc(80px + (var(--scroll-factor, 0) * 120px))); }
.left   { transform: rotateY(-90deg) translateZ(calc(80px + (var(--scroll-factor, 0) * 120px))); }
.top    { transform: rotateX(90deg) translateZ(calc(80px + (var(--scroll-factor, 0) * 120px))); }
.bottom { 
  transform: rotateX(-90deg) translateZ(calc(80px + (var(--scroll-factor, 0) * 120px)));
  /* Resplandor base o iluminación dramática desde el piso del objeto */
  box-shadow: 0 0 100px 30px rgba(124, 58, 237, 0.4); 
}

@keyframes floatCube {
  0%   { transform: translateY(0px) rotateY(0deg); }
  50%  { transform: translateY(-20px) rotateY(5deg); }
  100% { transform: translateY(0px) rotateY(0deg); }
}
"""
    if "=== NEW HERO CUBE LAYOUT ===" not in old_css:
        with open(css_file, "a", encoding="utf-8") as f:
            f.write(cube_css)

    # 3. Modificar el index.html
    nuevo_hero_html = f"""
  <section class="hero" id="hero-section">
    <div class="container hero-content">
      <div class="hero-text">
        <div class="badge">Acelerador Core</div>
        <h1>{hero_title}</h1>
        <p>{hero_desc}</p>
        <a href="#" class="cta-button">Agendar demostración técnica</a>
      </div>
      <div class="hero-visual">
        <div class="cube-container">
          <div class="cube" id="core-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
"""

    script_js = """
<!-- Scripts Interacción Hero -->
<script>
  document.addEventListener('scroll', () => {
    // Normalizar scroll de 0 a 800px para evitar expansiones infinitas
    let scrollY = window.scrollY;
    let factor = Math.min(scrollY / 800, 1.0);
    // Aplicar a nivel global para que CSS calc() trabaje
    document.documentElement.style.setProperty('--scroll-factor', factor);
    
    // Opcional: pequeñisima rotación sobre sí mismo según scroll
    const cube = document.getElementById('core-cube');
    if (cube) {
      cube.style.transform = `rotateX(${-20 - (factor * 10)}deg) rotateY(${40 + (factor * 45)}deg)`;
    }
  });
</script>
</body>
"""

    with open(index_file, "r", encoding="utf-8") as f:
        html_code = f.read()

    # Reemplazar la sección hero original (uso regex simple)
    # Se reemplaza todo el bloque <section class="hero"> ... </section>
    hero_pattern = re.compile(r'<section class="hero">.*?</section>', re.DOTALL)
    html_code = re.sub(hero_pattern, nuevo_hero_html.strip(), html_code)

    # Inyectar el script antes de cerrar el body
    if "<!-- Scripts Interacción Hero -->" not in html_code:
        html_code = html_code.replace("</body>", script_js)

    with open(index_file, "w", encoding="utf-8") as f:
        f.write(html_code)

if __name__ == "__main__":
    animar_hero()
    print("Modificacin animada del cubo insertada en la estructura HTML/CSS satisfactoriamente.")
