import os
import re

BASE_DIR = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
PAGE_TSX_PATH = os.path.join(BASE_DIR, "app/page.tsx")

def main():
    with open(PAGE_TSX_PATH, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Reemplazar logo.imageClass por (logo as any).imageClass para evitar el error de typescript
    new_content = content.replace('${logo.imageClass || ""}', '${(logo as any).imageClass || ""}')
    
    if content != new_content:
        with open(PAGE_TSX_PATH, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print("Corregido el error de TypeScript en app/page.tsx.")
    else:
        print("No se encontró logo.imageClass, o ya estaba corregido.")

if __name__ == "__main__":
    main()
