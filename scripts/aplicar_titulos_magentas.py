import os
import re

def main():
    print("Aplicando gradientes magentas a títulos principales...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # The style span definition we want to inject:
        GSPAN = '<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">'
        
        # Replacement Dictionary: target title substring -> replaced substring
        replacements = [
            (
                # Already processed partially in hero, make sure to not break it
                # Wait, hero is already correct. Problem section has "Es estructural" with zinc gradient.
                r'<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">Es estructural.</span>',
                f'{GSPAN}Es estructural.</span>'
            ),
            (
                r'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tech Insurance desacopla la innovación.</h2>',
                f'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tech Insurance desacopla <br className="hidden md:block"/>{GSPAN}la innovación.</span></h2>'
            ),
            (
                r'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Acelere productos, canales y experiencias</h2>',
                f'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Acelere productos, canales y {GSPAN}experiencias</span></h2>'
            ),
            (
                r'<h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Product Studio: Autonomía Comercial</h2>',
                f'<h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Product Studio: {GSPAN}Autonomía Comercial</span></h2>'
            ),
            (
                r'<h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Arquitectura API-First y Cloud-Native</h2>',
                f'<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Arquitectura API-First y {GSPAN}Cloud-Native</span></h2>'
            ),
            (
                r'<h2 className="text-3xl font-bold mb-12 text-white">Impulsando Modelos de Negocio Modernos</h2>',
                f'<h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Impulsando Modelos de {GSPAN}Negocio Modernos</span></h2>'
            ),
            (
                r'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Resultados Claros y Medibles \(ROI\)</h2>',
                f'<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Resultados Claros y Medibles {GSPAN}(ROI)</span></h2>'
            ),
            (
                r'<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">Libere el potencial <br\/>de su negocio<\/h2>',
                f'<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">Libere el potencial <br/>{GSPAN}de su negocio</span></h2>'
            )
        ]

        for target, replacement in replacements:
            content = re.sub(target, replacement, content)

        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Gradientes magentas aplicados dinámicamente a todos los H2 de la Home.")

if __name__ == '__main__':
    main()
