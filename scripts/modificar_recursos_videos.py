import os
import re

def main():
    print("Inyectando Videos Youtube Embed B2B en /recursos ...")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    page_path = os.path.join(base_dir, 'recursos', 'page.tsx')
    
    if not os.path.exists(page_path):
        print(f"Error: {page_path} no encontrado.")
        return

    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    video_block = r'''<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {[
              { id: '37LdiHUi6A8', title: 'Visión Estratégica: Ecosistemas Aseguradores Abiertos', desc: 'Análisis profundo sobre el impacto del desacople y el futuro del core corporativo integrando agentes externos.'},
              { id: '5rF4i2rLTGk', title: 'Product Studio en Práctica', desc: 'Taller de integración. Demostración práctica de cómo generar rentabilidad en banca-seguros apalancando módulos agnósticos.'}
            ].map((item, idx) => (
              <div key={idx} className="group flex flex-col bg-[#0f0e11] rounded-[2rem] hover:bg-[#16141a] border border-white/5 hover:border-fuchsia-900/50 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                 <div className="w-full aspect-video relative bg-black border-b border-white/5">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                 </div>
                 <div className="p-8 flex flex-col justify-center flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-fuchsia-100">{item.title}</h4>
                    <p className="text-zinc-500 font-light text-sm mb-6 leading-relaxed flex-1">{item.desc}</p>
                    <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer" className="text-fuchsia-600/80 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-fuchsia-400 w-fit">
                       Visualizar en Youtube <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                 </div>
              </div>
            ))}
          </div>'''

    # Usamos re.sub para reemplazar la vieja grid en VIDEOS
    # Extraemos desde: <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    # Hasta: antes del <div className="flex justify-center">
    pattern = r'<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">.*?</div>\s+(?=<div className="flex justify-center">)'
    new_content = re.sub(pattern, video_block + '\n\n          ', content, flags=re.DOTALL)
    
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("✅ Embeds de Youtube agregados correctamente en /recursos.")

if __name__ == '__main__':
    main()
