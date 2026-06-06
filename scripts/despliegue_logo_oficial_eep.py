#!/usr/bin/env python3
import os

def main():
    print("Iniciando despliegue de la imagen oficial del logo de EEP...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    logo_svg_path = os.path.join(base_dir, "public", "eep-logo.svg")
    client_path = os.path.join(base_dir, "app", "eep", "EepClient.tsx")

    # 1. Contenido del SVG vectorial del logo oficial (estrella/cúbico con nodos y gradientes)
    logo_svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <defs>
    <!-- Colores base:
      Celeste: #51b4d3
      Rosa/Magenta: #d93d82
      Amarillo: #eed035
      Violeta: #76479f
    -->
    <linearGradient id="g-sup-supder" x1="100" y1="20" x2="169.28" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-supder-infder" x1="169.28" y1="60" x2="169.28" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#51b4d3" />
    </linearGradient>
    <linearGradient id="g-infder-inf" x1="169.28" y1="140" x2="100" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#eed035" />
    </linearGradient>
    <linearGradient id="g-inf-infizq" x1="100" y1="180" x2="30.72" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#eed035" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-infizq-supizq" x1="30.72" y1="140" x2="30.72" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#76479f" />
    </linearGradient>
    <linearGradient id="g-supizq-sup" x1="30.72" y1="60" x2="100" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#76479f" />
      <stop offset="100%" stop-color="#51b4d3" />
    </linearGradient>
    
    <!-- Gradientes de la estrella -->
    <linearGradient id="g-supizq-supder" x1="30.72" y1="60" x2="169.28" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#76479f" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-supder-inf" x1="169.28" y1="60" x2="100" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#eed035" />
    </linearGradient>
    <linearGradient id="g-inf-supizq" x1="100" y1="180" x2="30.72" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#eed035" />
      <stop offset="100%" stop-color="#76479f" />
    </linearGradient>

    <linearGradient id="g-infizq-infder" x1="30.72" y1="140" x2="169.28" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#51b4d3" />
    </linearGradient>
    <linearGradient id="g-infder-sup" x1="169.28" y1="140" x2="100" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#51b4d3" />
    </linearGradient>
    <linearGradient id="g-sup-infizq" x1="100" y1="20" x2="30.72" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>

    <!-- Gradientes hacia el centro -->
    <linearGradient id="g-sup-c" x1="100" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-supder-c" x1="169.28" y1="60" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-infder-c" x1="169.28" y1="140" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#51b4d3" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-inf-c" x1="100" y1="180" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#eed035" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-infizq-c" x1="30.72" y1="140" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d93d82" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>
    <linearGradient id="g-supizq-c" x1="30.72" y1="60" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#76479f" />
      <stop offset="100%" stop-color="#d93d82" />
    </linearGradient>

    <!-- Glow suave para los nodos -->
    <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- LÍNEAS CONECTIVAS EXTERIORES (Hexágono) -->
  <line x1="100" y1="20" x2="169.28" y2="60" stroke="url(#g-sup-supder)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="60" x2="169.28" y2="140" stroke="url(#g-supder-infder)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="140" x2="100" y2="180" stroke="url(#g-infder-inf)" stroke-width="3" stroke-linecap="round" />
  <line x1="100" y1="180" x2="30.72" y2="140" stroke="url(#g-inf-infizq)" stroke-width="3" stroke-linecap="round" />
  <line x1="30.72" y1="140" x2="30.72" y2="60" stroke="url(#g-infizq-supizq)" stroke-width="3" stroke-linecap="round" />
  <line x1="30.72" y1="60" x2="100" y2="20" stroke="url(#g-supizq-sup)" stroke-width="3" stroke-linecap="round" />

  <!-- LÍNEAS CONECTIVAS INTERNAS (Estrella de David) -->
  <line x1="30.72" y1="60" x2="169.28" y2="60" stroke="url(#g-supizq-supder)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="60" x2="100" y2="180" stroke="url(#g-supder-inf)" stroke-width="3" stroke-linecap="round" />
  <line x1="100" y1="180" x2="30.72" y2="60" stroke="url(#g-inf-supizq)" stroke-width="3" stroke-linecap="round" />

  <line x1="30.72" y1="140" x2="169.28" y2="140" stroke="url(#g-infizq-infder)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="140" x2="100" y2="20" stroke="url(#g-infder-sup)" stroke-width="3" stroke-linecap="round" />
  <line x1="100" y1="20" x2="30.72" y2="140" stroke="url(#g-sup-infizq)" stroke-width="3" stroke-linecap="round" />

  <!-- LÍNEAS RADIALES HACIA EL CENTRO -->
  <line x1="100" y1="20" x2="100" y2="100" stroke="url(#g-sup-c)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="60" x2="100" y2="100" stroke="url(#g-supder-c)" stroke-width="3" stroke-linecap="round" />
  <line x1="169.28" y1="140" x2="100" y2="100" stroke="url(#g-infder-c)" stroke-width="3" stroke-linecap="round" />
  <line x1="100" y1="180" x2="100" y2="100" stroke="url(#g-inf-c)" stroke-width="3" stroke-linecap="round" />
  <line x1="30.72" y1="140" x2="100" y2="100" stroke="url(#g-infizq-c)" stroke-width="3" stroke-linecap="round" />
  <line x1="30.72" y1="60" x2="100" y2="100" stroke="url(#g-supizq-c)" stroke-width="3" stroke-linecap="round" />

  <!-- NODOS (Vértices) -->
  <circle cx="100" cy="20" r="9" fill="#51b4d3" filter="url(#node-glow)" />
  <circle cx="169.28" cy="60" r="9" fill="#d93d82" filter="url(#node-glow)" />
  <circle cx="169.28" cy="140" r="9" fill="#51b4d3" filter="url(#node-glow)" />
  <circle cx="100" cy="180" r="9" fill="#eed035" filter="url(#node-glow)" />
  <circle cx="30.72" cy="140" r="9" fill="#d93d82" filter="url(#node-glow)" />
  <circle cx="30.72" cy="60" r="9" fill="#76479f" filter="url(#node-glow)" />
  
  <circle cx="100" cy="100" r="10" fill="#d93d82" filter="url(#node-glow)" />
</svg>
"""

    with open(logo_svg_path, "w", encoding="utf-8") as f:
        f.write(logo_svg_content)
    print(f"Archivo logo SVG creado en: {logo_svg_path}")

    # 2. Modificaciones de EepClient.tsx
    with open(client_path, "r", encoding="utf-8") as f:
        content = f.read()

    # A) Agregar el logo oficial en el Hero principal
    old_hero_top = """            {/* Contenido Izquierda */}
            <div className="flex-1 text-left space-y-8 max-w-xl">
              <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Engagement Ecosystem Platform</span>"""
              
    new_hero_top = """            {/* Contenido Izquierda */}
            <div className="flex-1 text-left space-y-8 max-w-xl">
              {/* Logo Oficial EEP */}
              <div className="inline-block relative w-36 h-36 mb-2">
                <img 
                  src="/eep-logo.svg" 
                  alt="EEP Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(217,70,239,0.45)]" 
                />
              </div>
              <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Engagement Ecosystem Platform</span>"""

    if old_hero_top in content:
        content = content.replace(old_hero_top, new_hero_top)
        print("Logo oficial insertado en la sección Hero.")
    else:
        print("ADVERTENCIA: No se pudo localizar el punto de inserción del Hero.")

    # B) Reemplazar el texto "EEP" en el centro del Ecosistema por el logo oficial
    old_ecosystem_center = """              {/* EEP Centro */}
              <div className="absolute z-30">
                <div className="w-28 h-28 rounded-full bg-[#050207] border border-fuchsia-500/55 shadow-[0_0_60px_rgba(217,70,239,0.55)] flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-purple-500/15 animate-pulse" />
                  <span className="text-3xl font-black text-fuchsia-400 z-10">EEP</span>
                </div>
              </div>"""

    new_ecosystem_center = """              {/* EEP Centro */}
              <div className="absolute z-30">
                <div className="w-28 h-28 rounded-full bg-[#050207] border border-fuchsia-500/55 shadow-[0_0_60px_rgba(217,70,239,0.55)] flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-purple-500/15 animate-pulse" />
                  <img 
                    src="/eep-logo.svg" 
                    alt="EEP Core Logo" 
                    className="w-16 h-16 object-contain z-10 filter drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" 
                  />
                </div>
              </div>"""

    if old_ecosystem_center in content:
        content = content.replace(old_ecosystem_center, new_ecosystem_center)
        print("Logo oficial insertado en el nodo central del Ecosistema.")
    else:
        print("ADVERTENCIA: No se pudo localizar el bloque Ecosistema central.")

    # C) Agregar el logo oficial en el CTA final
    old_cta_top = """        {/* 9. CTA FINAL */}
        <section className="py-32 px-4 relative z-10 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#050208] to-[#020104]">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">"""

    new_cta_top = """        {/* 9. CTA FINAL */}
        <section className="py-32 px-4 relative z-10 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#050208] to-[#020104]">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            {/* Logo Oficial EEP */}
            <div className="flex justify-center mb-8">
              <img 
                src="/eep-logo.svg" 
                alt="EEP Logo" 
                className="h-24 w-auto filter drop-shadow-[0_0_20px_rgba(217,70,239,0.4)]" 
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">"""

    if old_cta_top in content:
        content = content.replace(old_cta_top, new_cta_top)
        print("Logo oficial insertado en la sección CTA Final.")
    else:
        print("ADVERTENCIA: No se pudo localizar el punto de inserción del CTA Final.")

    # Escribimos los cambios finales
    with open(client_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Modificaciones en EepClient.tsx aplicadas exitosamente.")

if __name__ == "__main__":
    main()
