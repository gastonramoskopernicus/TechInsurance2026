import os
import sys

def main():
    filepath = '/Users/gastonramos/Documents/Antigravity/tech-insurance-2026/app/page.tsx'
    
    if not os.path.exists(filepath):
        print(f"Error: No se encontró el archivo en {filepath}")
        sys.exit(1)
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Cambio 1: Motorola
    old_moto = '{ file: "Motorola_new_logo.svg", filterClass: "grayscale brightness-0 invert" }'
    new_moto = '{ file: "Motorola_new_logo.svg", filterClass: "grayscale invert opacity-90" }'
    
    # Cambio 2: Volkswagen
    old_vw = '{ file: "Volkswagen-Logo-PNG-High-Quality-Image.png", filterClass: "grayscale brightness-0 invert", imageClass: "transform scale-[1.8]" }'
    new_vw = '{ file: "Volkswagen-Logo-PNG-High-Quality-Image.png", filterClass: "grayscale invert opacity-90 brightness-200", imageClass: "transform scale-[1.8]" }'
    
    # Cambio 3: Galicia
    old_galicia = '{ file: "Logo_Banco_Galicia.svg.png", filterClass: "grayscale brightness-[1.4] contrast-125 mix-blend-screen" }'
    new_galicia = '{ file: "Logo_Banco_Galicia.svg.png", filterClass: "grayscale invert opacity-90" }'
    
    nuevo_contenido = content.replace(old_moto, new_moto).replace(old_vw, new_vw).replace(old_galicia, new_galicia)
    
    if nuevo_contenido == content:
        print("Advertencia: No se encontraron las cadenas exactas para reemplazar, verifica si el código fuente ha cambiado.")
    else:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(nuevo_contenido)
        print("Éxito: Se han corregido los estilos de los logos en app/page.tsx.")

if __name__ == '__main__':
    main()
