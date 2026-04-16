import os
import re

def main():
    print("Iniciando auditoria y corrección de sintaxis TypeScript...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    corrections = 0
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # 1. Correcciones explicitas de String methods erroneos
                if '.lower()' in content:
                    content = content.replace('.lower()', '.toLowerCase()')
                    corrections += 1
                
                if '.upper()' in content:
                    content = content.replace('.upper()', '.toUpperCase()')
                    corrections += 1
                
                # Guardar si hubo cambios
                if content != original_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"[{file}] Corregido tipado estricto TS (Funciones String).")

    print(f"✅ Auditoría completada. {corrections} archivos modificados exitosamente para cumplir con NPM Build estricto.")

if __name__ == '__main__':
    main()
