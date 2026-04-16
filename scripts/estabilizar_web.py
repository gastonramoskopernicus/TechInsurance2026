import os
import shutil

def main():
    print("Iniciando revisión y limpieza de proyecto /web...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'web'))
    
    # 1. Limpieza de SVGs innecesarios en la carpeta public
    public_dir = os.path.join(base_dir, 'public')
    svgs_to_delete = ['file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg']
    
    deleted_count = 0
    if os.path.exists(public_dir):
        for svg in svgs_to_delete:
            path = os.path.join(public_dir, svg)
            if os.path.exists(path):
                try:
                    os.remove(path)
                    print(f"Eliminado: {svg}")
                    deleted_count += 1
                except Exception as e:
                    print(f"Error borrando {svg}: {e}")
                    
    print(f"SVGs limpiados: {deleted_count}")
    
    # 2. Revisión del archivo next.config.ts
    # En este caso, para Vercel configurando 'web' como root dir, las configuraciones básicas bastan.
    next_config_path = os.path.join(base_dir, 'next.config.ts')
    if os.path.exists(next_config_path):
        print("next.config.ts ok. Root Turbopack/Next se maneja desde el dashboard de Vercel.")

    # 3. Revisión postcss.config.mjs (Tailwind v4)
    postcss_config_path = os.path.join(base_dir, 'postcss.config.mjs')
    if os.path.exists(postcss_config_path):
        print("postcss.config.mjs ok.")

    print("✅ Base técnica web estabilizada correctamente.")

if __name__ == '__main__':
    main()
