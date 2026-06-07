#!/usr/bin/env python3
import os

def main():
    print("Iniciando ajuste visual del Footer...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    footer_path = os.path.join(base_dir, "app", "components", "Footer.tsx")

    if not os.path.exists(footer_path):
        print(f"Error: No se encontró el archivo en {footer_path}")
        return

    with open(footer_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Reemplazo del título CTA por CONTACTO
    old_cta_header = """          {/* CTA */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col items-start">
            <h4 className="font-semibold mb-4 text-white text-sm tracking-wider uppercase">CTA</h4>"""

    new_cta_header = """          {/* CTA */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col items-start">
            <h4 className="font-semibold mb-4 text-white text-sm tracking-wider uppercase">CONTACTO</h4>"""

    # 2. Reemplazo de la sección Legal
    old_legal_section = """            <h4 className="font-semibold mb-3 text-white text-xs tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-xs text-zinc-500 font-light">
              <li><Link href="/legal/politica-de-privacidad" className="hover:text-fuchsia-400 transition-colors">Privacidad</Link></li>
              <li><Link href="/legal/terminos-y-condiciones" className="hover:text-fuchsia-400 transition-colors">Términos</Link></li>
            </ul>"""

    new_legal_section = """            <h4 className="font-semibold mb-4 text-white text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-light">
              <li><Link href="/legal/politica-de-privacidad" className="hover:text-fuchsia-400 transition-colors">Privacidad</Link></li>
              <li><Link href="/legal/terminos-y-condiciones" className="hover:text-fuchsia-400 transition-colors">Términos</Link></li>
            </ul>"""

    modified = False

    if old_cta_header in content:
        content = content.replace(old_cta_header, new_cta_header)
        print("✓ Título de columna CTA reemplazado por CONTACTO con éxito.")
        modified = True
    else:
        print("❌ Error: No se encontró el bloque del título de la columna CTA.")

    if old_legal_section in content:
        content = content.replace(old_legal_section, new_legal_section)
        print("✓ Tipografías y clases de la columna Legal normalizadas con éxito.")
        modified = True
    else:
        print("❌ Error: No se encontró el bloque de la sección Legal.")

    if modified:
        with open(footer_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios guardados en Footer.tsx.")
    else:
        print("No se realizaron modificaciones en Footer.tsx.")

if __name__ == "__main__":
    main()
