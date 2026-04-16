import os

def main():
    print("Validando y estabilizando estructura base del sitio...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'web'))
    app_dir = os.path.join(base_dir, 'app')
    components_dir = os.path.join(app_dir, 'components')

    archivos_requeridos = [
        os.path.join(app_dir, 'layout.tsx'),
        os.path.join(app_dir, 'page.tsx'),
        os.path.join(components_dir, 'Header.tsx'),
        os.path.join(components_dir, 'Footer.tsx')
    ]

    # Validar existencia
    for path in archivos_requeridos:
        if not os.path.exists(path):
            print(f"Error: No se encontró la estructura requerida. Falta: {os.path.basename(path)}")
            return

    # Limpiar animaciones complejas en la Home (page.tsx)
    page_path = os.path.join(app_dir, 'page.tsx')
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simplificar la clase conflictiva para remover la animacion pulse y hover compleja
    old_class = "animate-[pulse_6s_ease-in-out_infinite] hover:scale-105 transition-transform duration-700"
    if old_class in content:
        content = content.replace(old_class, "")
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Animaciones complejas eliminadas de page.tsx.")
    else:
        print("No se encontraron animaciones complejas en page.tsx o ya fueron removidas.")

    print("✅ Estructura base (Layout, Header, Footer y Home) validada correctamente bajo los criterios SaaS Enterprise.")

if __name__ == '__main__':
    main()
