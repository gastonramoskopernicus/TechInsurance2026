#!/usr/bin/env python3
import os
import re

def main():
    print("Iniciando ajuste de iconos de Resultados Concretos...")
    
    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    client_path = os.path.join(base_dir, "app", "eep", "EepClient.tsx")

    with open(client_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Definición de la nueva constante results con los iconos vectoriales SVG
    new_results_block = """  const results = [
    {
      title: "Más conversión",
      desc: "Identifique oportunidades antes que la competencia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
        </svg>
      )
    },
    {
      title: "Más retención",
      desc: "Anticipe riesgos de abandono.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593" />
          <circle cx="12" cy="9" r="3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16c0-2 2-3 5-3s5 1 5 3" />
        </svg>
      )
    },
    {
      title: "Más conocimiento",
      desc: "Comprenda el comportamiento real de sus clientes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <circle cx="12" cy="19" r="3" />
          <line x1="12" y1="8" x2="5" y2="12" />
          <line x1="12" y1="8" x2="19" y2="12" />
          <line x1="5" y1="12" x2="12" y2="19" />
          <line x1="19" y1="12" x2="12" y2="19" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      )
    },
    {
      title: "Más automatización",
      desc: "Transforme insights en acciones automáticas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <rect x="3" y="3" width="6" height="6" rx="1.5" />
          <rect x="15" y="3" width="6" height="6" rx="1.5" />
          <rect x="9" y="15" width="6" height="6" rx="1.5" />
          <path d="M6 9v3h6m0 0v3M18 9v3h-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Más rentabilidad",
      desc: "Optimice decisiones comerciales y operativas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879-.659c1.546-1.16 3.794-.972 5.13.404L15 15.5M9 9.5l1.621-1.216c1.547-1.16 3.794-.972 5.13.404L15 9.5M12 3v18" />
        </svg>
      )
    }
  ];"""

    # Localizamos y reemplazamos la definición del array results
    results_pattern = r'  const results = \[\s*\{\s*title: "Más conversión",.*?\}\s*\];'
    modified_content, count = re.subn(results_pattern, new_results_block, content, flags=re.DOTALL)
    if count > 0:
        print("Definición de results modificada exitosamente en memoria.")
    else:
        print("ADVERTENCIA: No se pudo modificar el array results mediante regex estándar.")
        # Fallback alternativo buscando entre marcadores fijos
        start_idx = content.find("  const results = [")
        end_idx = content.find("  const ecosystemItems = [")
        if start_idx != -1 and end_idx != -1:
            modified_content = content[:start_idx] + new_results_block + "\n\n" + content[end_idx:]
            print("Definición de results modificada mediante búsqueda de marcadores fijos.")
        else:
            print("ERROR: Marcadores del array results no encontrados.")
            return

    # 2. Modificación del renderizado del emoji en el map de results
    old_render = '<div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📈</div>'
    new_render = '<div className="w-full flex justify-center mb-4 group-hover:scale-110 transition-transform">{r.icon}</div>'

    if old_render in modified_content:
        modified_content = modified_content.replace(old_render, new_render)
        print("Renderizado del icono modificado con éxito.")
    else:
        print("ERROR: No se encontró la etiqueta de renderizado del emoji.")
        return

    # Escribimos los cambios de vuelta en EepClient.tsx
    with open(client_path, "w", encoding="utf-8") as f:
        f.write(modified_content)
    
    print("Ajuste de iconos de EepClient.tsx finalizado con éxito.")

if __name__ == "__main__":
    main()
