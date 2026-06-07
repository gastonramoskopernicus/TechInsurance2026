#!/usr/bin/env python3
import os

def main():
    print("Iniciando reemplazo de icono en página de Demo...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    page_path = os.path.join(base_dir, "app", "demo", "page.tsx")

    if not os.path.exists(page_path):
        print(f"Error: No se encontró el archivo en {page_path}")
        return

    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Agregar import de Image al inicio del archivo si no está
    if 'import Image from "next/image";' not in content:
        # Buscamos 'import { useState } from "react";' para insertar después
        old_import = 'import { useState } from "react";'
        new_import = 'import { useState } from "react";\nimport Image from "next/image";'
        if old_import in content:
            content = content.replace(old_import, new_import)
            print("✓ Import de Image agregado al archivo.")
        else:
            print("❌ Error: No se encontró la línea de import de useState.")
            return

    # 2. Reemplazo del candado por el cubo
    old_lock_block = """        <div className="w-16 h-16 mx-auto bg-[#0a050b] rounded-2xl border border-fuchsia-900/40 text-fuchsia-500 flex items-center justify-center mb-6">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>"""

    new_lock_block = """        <div className="relative w-16 h-16 mx-auto bg-[#0a050b] rounded-2xl border border-fuchsia-900/40 flex items-center justify-center mb-6 overflow-hidden">
          <div className="absolute inset-0 p-3.5 flex items-center justify-center">
            <Image src="/TechInsurance.svg" alt="Tech Insurance Cube" width={36} height={36} className="object-contain" />
          </div>
        </div>"""

    if old_lock_block in content:
        content = content.replace(old_lock_block, new_lock_block)
        print("✓ Icono de candado reemplazado por el cubo de Tech Insurance.")
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios aplicados en app/demo/page.tsx.")
    else:
        print("❌ Error: No se encontró el bloque del icono del candado en page.tsx.")

if __name__ == "__main__":
    main()
