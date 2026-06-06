#!/usr/bin/env python3
import os

def main():
    print("Iniciando integración del logo oficial de Product Studio...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    page_path = os.path.join(base_dir, "app", "product-studio", "page.tsx")

    if not os.path.exists(page_path):
        print(f"Error: No se encontró el archivo en {page_path}")
        return

    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Reemplazo del Logo Product Studio en el Hero izquierdo
    old_logo_hero = """            {/* Logo Product Studio */}
            <div className={`inline-block relative w-28 h-28 mb-2 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinejoin="round"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinejoin="round"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>"""

    new_logo_hero = """            {/* Logo Product Studio */}
            <div className={`inline-block relative w-28 h-28 mb-2 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <img
                src="/product-studio-logo.svg"
                alt="Product Studio Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              />
            </div>"""

    # 2. Reemplazo del Cubo 3D / Box Central en el Hero derecho (composición orbital)
    old_cube_orbital = """            {/* Cubo 3D / Box Central */}
            <div className="absolute z-10 w-36 h-36 rounded-3xl bg-[#08040d] border border-fuchsia-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(217,70,239,0.5)] animate-breath">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#ps-hero-grad)" strokeWidth="1" className="w-20 h-20 text-fuchsia-400">
                <defs>
                  <linearGradient id="ps-hero-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinejoin="round"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinejoin="round"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>"""

    new_cube_orbital = """            {/* Cubo 3D / Box Central */}
            <div className="absolute z-10 w-36 h-36 rounded-3xl bg-[#08040d] border border-fuchsia-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(217,70,239,0.5)] animate-breath">
              <img
                src="/product-studio-logo.svg"
                alt="Product Studio Core"
                className="w-24 h-24 object-contain filter drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
              />
            </div>"""

    modified = False

    if old_logo_hero in content:
        content = content.replace(old_logo_hero, new_logo_hero)
        print("✓ Logo del Hero izquierdo reemplazado con éxito.")
        modified = True
    else:
        print("❌ Advertencia: No se encontró el bloque del logo del Hero izquierdo.")

    if old_cube_orbital in content:
        content = content.replace(old_cube_orbital, new_cube_orbital)
        print("✓ Box central orbital reemplazado con éxito.")
        modified = True
    else:
        print("❌ Advertencia: No se encontró el bloque del Box central orbital.")

    if modified:
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios guardados en page.tsx.")
    else:
        print("No se realizaron modificaciones en page.tsx.")

if __name__ == "__main__":
    main()
