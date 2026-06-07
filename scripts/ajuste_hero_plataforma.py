#!/usr/bin/env python3
import os

def main():
    print("Iniciando reemplazo de icono en Hero de Plataforma...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    page_path = os.path.join(base_dir, "app", "plataforma", "page.tsx")

    if not os.path.exists(page_path):
        print(f"Error: No se encontró el archivo en {page_path}")
        return

    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Bloque antiguo a reemplazar
    old_icon_block = """          <div className="relative w-32 h-32 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-fuchsia-500">
               <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
            </svg>
          </div>"""

    # 2. Nuevo bloque con el asset de la sección "Corazón de la Innovación" escalado a w-48 h-48 (el doble de w-24 h-24)
    new_icon_block = """          <div className="relative w-48 h-48 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_25px_rgba(217,70,239,0.25)]">
            <Image src="/TechInsurance.svg" alt="Tech Insurance Cube" fill className="object-contain" priority />
          </div>"""

    if old_icon_block in content:
        content = content.replace(old_icon_block, new_icon_block)
        print("✓ Icono de capas apiladas reemplazado por el cubo Tech Insurance.")
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios aplicados en app/plataforma/page.tsx.")
    else:
        print("❌ Error: No se encontró el bloque del icono del Hero original en page.tsx.")

if __name__ == "__main__":
    main()
