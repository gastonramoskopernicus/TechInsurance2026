import os
import re

def main():
    print("Elevando copy de Home (page.tsx) a nivel enterprise...")
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'page.tsx'))
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update HERO
    content = re.sub(
        r'<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-\[1\.1\]">.*?</h1>',
        '''<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Deje de depender <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                de su core para innovar.
              </span>
            </h1>''',
        content,
        flags=re.DOTALL
    )
    
    content = re.sub(
        r'<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">.*?<\/p>',
        '''<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Tech Insurance permite lanzar productos, integrar canales y escalar su negocio sin rediseñar sus sistemas existentes.
            </p>
            <p className="text-md text-zinc-500 font-medium max-w-2xl mx-auto pt-2">
              Mientras el core mantiene la operación, Tech Insurance acelera la innovación.
            </p>''',
        content,
        count=1,
        flags=re.DOTALL
    )

    # 2. Update PROBLEMA
    content = re.sub(
        r'<h2 className="text-3xl font-bold mb-6 text-foreground text-center">.*?</h2>\s*<div className="p-8 rounded-lg border border-border/50 bg-background/50">\s*<p className="text-muted-foreground text-lg text-center leading-relaxed">.*?</p>\s*</div>',
        '''<h2 className="text-3xl font-bold mb-6 text-foreground text-center">El problema no es tecnológico.<br/>Es estructural.</h2>
          <div className="p-8 rounded-lg border border-border/50 bg-background/50 max-w-2xl mx-auto">
            <p className="text-foreground text-lg text-center leading-relaxed font-medium mb-6">
              Los sistemas core fueron diseñados para operar, no para innovar.
            </p>
            <p className="text-muted-foreground text-center mb-4">Cada cambio implica:</p>
            <ul className="flex flex-col items-center text-muted-foreground space-y-2 mb-6">
              <li>• Tiempos largos</li>
              <li>• Alto costo</li>
              <li>• Dependencia de IT</li>
              <li>• Riesgo operativo</li>
            </ul>
            <p className="text-foreground text-center font-semibold text-lg">
              Esto limita la capacidad real de competir.
            </p>
          </div>''',
        content,
        flags=re.DOTALL
    )

    # 3. Update SOLUCIÓN
    content = re.sub(
        r'<h2 className="text-3xl font-bold mb-6 text-foreground">.*?<\/h2>\s*<p className="text-muted-foreground text-lg mb-8">.*?<\/p>',
        '''<h2 className="text-3xl font-bold mb-6 text-foreground">Tech Insurance desacopla la innovación del core.</h2>
          <div className="max-w-2xl mx-auto mb-8">
             <p className="text-muted-foreground text-lg mb-6 text-center">
               Permite:
             </p>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-muted-foreground">
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Lanzar productos en días</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Integrar partners sin fricción</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Testear modelos sin riesgo</li>
               <li className="flex items-center gap-2"><span className="text-primary">✓</span> Escalar sin reescribir sistemas</li>
             </ul>
          </div>''',
        content,
        flags=re.DOTALL
    )

    # 4. Update IMPACTO ROI
    content = re.sub(
        r'<h2 className="text-3xl font-bold mb-6 text-foreground">Resultados Claros y Medibles<\/h2>\s*<p className="text-muted-foreground text-lg">.*?<\/p>',
        '''<h2 className="text-3xl font-bold mb-8 text-foreground text-center">Resultados Claros y Medibles</h2>
          <div className="max-w-2xl mx-auto rounded-lg border border-border/50 bg-muted/20 p-8">
            <ul className="space-y-4 text-muted-foreground text-lg text-left">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Reducción drástica del time-to-market</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Aumento de ingresos por nuevos canales</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Menor dependencia tecnológica</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div> Mayor capacidad de innovación</li>
            </ul>
          </div>''',
        content,
        flags=re.DOTALL
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        print("✅ Copy optimizado y jerarquía mejorada en page.tsx")

if __name__ == '__main__':
    main()
