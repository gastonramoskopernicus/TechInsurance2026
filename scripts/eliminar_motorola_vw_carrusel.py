import os
import re

# Definición de rutas
BASE_DIR = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
PAGE_TSX_PATH = os.path.join(BASE_DIR, "app/page.tsx")
ASSETS_DIR = os.path.join(BASE_DIR, "public/empresas")

def main():
    print(f"Abriendo {PAGE_TSX_PATH}...")
    
    with open(PAGE_TSX_PATH, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Eliminar referencias a Motorola y Volkswagen del array
    # El patron buscará: { file: "Motorola_new_logo.svg", ... },
    # y { file: "Volkswagen-Logo-PNG-High-Quality-Image.png", ... },
    # incluyendo espacios y posibles comas
    
    # Expresión regular para eliminar las líneas completas de esos logos del array
    # Usamos re.sub con un patrón que hace match desde inicio de la llave hasta la coma o fin de llave
    motorola_pattern = r'\s*\{\s*file:\s*"Motorola_new_logo\.svg"[^\}]+\},?'
    vw_pattern = r'\s*\{\s*file:\s*"Volkswagen-Logo-PNG-High-Quality-Image\.png"[^\}]+\},?'
    
    new_content = re.sub(motorola_pattern, '', content)
    new_content = re.sub(vw_pattern, '', new_content)
    
    # Manejar el caso donde el último elemento tenga coma, o quede un espacio extra que rompa algo
    # Asegurar de que la sintaxis final sea válida no es tan trivial con regex,
    # pero como asuminos el formato del array, deberia quedar limpio si la regex remueve todo el match,
    # incluyendo la coma. Si el último elemento tenía coma y se borró el siguiente, no importa porque JS/TS permite trailing commas.
    
    if content != new_content:
        with open(PAGE_TSX_PATH, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print("Referencias eliminadas exitosamente de app/page.tsx.")
    else:
        print("No se encontraron referencias a Motorola o Volkswagen en app/page.tsx, o ya fueron eliminadas.")
        
    # Eliminar assets
    motorola_asset = os.path.join(ASSETS_DIR, "Motorola_new_logo.svg")
    vw_asset = os.path.join(ASSETS_DIR, "Volkswagen-Logo-PNG-High-Quality-Image.png")
    
    if os.path.exists(motorola_asset):
        os.remove(motorola_asset)
        print(f"Eliminado: {motorola_asset}")
    else:
        print(f"No encontrado: {motorola_asset}")
        
    if os.path.exists(vw_asset):
        os.remove(vw_asset)
        print(f"Eliminado: {vw_asset}")
    else:
        print(f"No encontrado: {vw_asset}")

    print("Proceso finalizado.")

if __name__ == "__main__":
    main()
