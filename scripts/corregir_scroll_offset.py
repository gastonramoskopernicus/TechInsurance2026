import os
import re

def main():
    print("Ajustando scroll offset en anclajes de Plataforma...")
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'plataforma', 'page.tsx'))
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # List of IDs targeted by the sticky navigation
    target_ids = [
        "capacidades",
        "modulos",
        "arquitectura",
        "product-studio",
        "orquestacion",
        "api-developer",
        "seguridad",
        "licenciamiento"
    ]
    
    # We will look for id="target_id" className="..." and inject scroll-mt-32 to the className
    for tid in target_ids:
        # Regex to match the id and className of elements to safely append scroll-mt-32 if not exists
        pattern = rf'(id="{tid}"\s+className=")([^"]*)(")'
        match = re.search(pattern, content)
        if match:
            # check if scroll-mt is already there
            if "scroll-mt-" not in match.group(2):
                replacement = rf'\1\2 scroll-mt-32\3'
                content = re.sub(pattern, replacement, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("✅ Offset de scroll-margin (scroll-mt-32) añadido satisfactoriamente a las anclas del documento.")

if __name__ == '__main__':
    main()
