import os
import re

APP_DIR = 'app'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Normalizar StrokeWidth en todo el proyecto a 1.5
    # Cuidado: exclude if it's inside some path that is not an svg but usually strokeWidth is on <svg> or <path>
    content = re.sub(r'strokeWidth="[0-9.]+"', 'strokeWidth="1.5"', content)

    # 2. Normalizar clases de iconos (SVGs) - hacer todo w-12 h-12 para los modulos si eran w-14 o w-16
    content = re.sub(r'className="w-1[046] h-1[046]', 'className="w-12 h-12', content)

    # 3. Unificar Card System (Hover states and Backgrounds)
    # Algunos tienen bg-black/40, vamos a hacerlos bg-[#0f0e11] para consistencia premium
    content = content.replace('bg-black/40', 'bg-[#0f0e11] hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300')
    content = content.replace('bg-[#130a16]', 'bg-[#0f0e11]')
    
    # Agregar la sombra glow fuchsia al hover si no la tiene
    # Haremos que todos los borders de cards se comporten parecido
    content = re.sub(r'border-white/5(?!\s*rounded)', 'border-white/5', content)
    
    # 4. Asegurar header titles espaciales y degradados Magenta consistentes
    content = content.replace('text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400', 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400')
    
    # Escribir si hubo un cambio
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

for root, _, files in os.walk(APP_DIR):
    for filename in files:
        if filename.endswith('.tsx') or filename.endswith('.ts'):
            filepath = os.path.join(root, filename)
            process_file(filepath)
