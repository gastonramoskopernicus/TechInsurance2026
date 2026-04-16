import os
import re

def main():
    print("Inyectando carrusel de logos corporativos infinitos en app/page.tsx ...")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    page_path = os.path.join(base_dir, 'page.tsx')
    
    if not os.path.exists(page_path):
        print(f"Error: {page_path} no encontrado.")
        return

    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Bloque de reemplazo HTML del Marquee
    marquee_section = r'''{/* 8.5 Empresas Adopters (Marquee B2B Premium) */}
      <section className="py-24 border-b border-fuchsia-900/30 bg-[#040105] overflow-hidden relative">
        <style>{`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="container mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Empresas que ya utilizan <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Tech Insurance</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">
            Una plataforma pensada para compañías, partners y ecosistemas que necesitan escalar con velocidad y flexibilidad extrema.
          </p>
        </div>

        <div className="relative w-full overflow-hidden group py-10">
          {/* Edge Masking para que el slider se difumine en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-[#040105] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-[#040105] to-transparent z-20 pointer-events-none" />
          
          <div className="animate-infinite-scroll flex items-center">
            {/* Duplicamos el array de logos para que el loop infinito sea fluido */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
                 {/* 1. ASSURANT */}
                 <div className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 200 40" className="w-[180px] h-auto fill-current text-white"><text x="10" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" letterSpacing="2">ASSURANT</text></svg>
                 </div>
                 {/* 2. BARBUSS */}
                 <div className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 200 40" className="w-[180px] h-auto fill-current text-white"><text x="10" y="30" fontFamily="Verdana, sans-serif" fontWeight="800" fontSize="26" letterSpacing="1">BARBUSS</text></svg>
                 </div>
                 {/* 3. SURA */}
                 <div className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 150 40" className="w-[140px] h-auto fill-current text-white"><text x="10" y="30" fontFamily="Helvetica, sans-serif" fontWeight="900" fontSize="30" fontStyle="italic" letterSpacing="1">sura</text></svg>
                 </div>
                 {/* 4. VIDA SECURITY */}
                 <div className="flex-shrink-0 flex gap-2 items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 30 30" className="w-8 h-8 stroke-current text-white" fill="none" strokeWidth="2"><circle cx="15" cy="15" r="10"/><path d="M12 18l4-6H10l4-6"/></svg>
                    <svg viewBox="0 0 220 40" className="w-[190px] h-auto fill-current text-white"><text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22">VIDA SECURITY</text></svg>
                 </div>
                 {/* 5. MOTOROLA */}
                 <div className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                   <svg viewBox="0 0 220 40" className="w-[190px] h-auto fill-current text-white"><text x="10" y="30" fontFamily="Trebuchet MS, sans-serif" fontWeight="800" fontSize="26" letterSpacing="3">motorola</text></svg>
                 </div>
                 {/* 6. VOLKSWAGEN */}
                 <div className="flex-shrink-0 flex gap-3 items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 30 30" className="w-10 h-10 stroke-current text-white" fill="none" strokeWidth="1.5"><circle cx="15" cy="15" r="12"/><polyline points="5 9 10 20 15 11 20 20 25 9"/><polyline points="10 5 15 15 20 5"/></svg>
                    <svg viewBox="0 0 220 40" className="w-[180px] h-auto fill-current text-white"><text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="22">Volkswagen</text></svg>
                 </div>
                 {/* 7. BANCO GALICIA */}
                 <div className="flex-shrink-0 flex gap-2 items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 30 30" className="w-8 h-8 fill-current text-white"><polygon points="15,2 28,28 2,28"/></svg>
                    <svg viewBox="0 0 220 40" className="w-[200px] h-auto fill-current text-white"><text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24">Banco Galicia</text></svg>
                 </div>
                 {/* 8. EUROP ASSISTANCE */}
                 <div className="flex-shrink-0 flex gap-2 items-center justify-center opacity-40 hover:opacity-100 hover:text-fuchsia-400 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0">
                    <svg viewBox="0 0 30 30" className="w-8 h-8 fill-current text-white"><rect x="5" y="5" width="20" height="20" rx="4"/></svg>
                    <svg viewBox="0 0 250 40" className="w-[230px] h-auto fill-current text-white"><text x="0" y="30" fontFamily="Georgia, serif" fontWeight="700" fontSize="20" letterSpacing="1">EUROP ASSISTANCE</text></svg>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>'''

    # Usamos re.sub para reemplazar la sección vieja 8.5
    pattern = r'\{\/\* 8\.5 Empresas Adopters \(Marquee\) \*\/\}.*?(?=\{\/\* 9\. Business Impact ROI \*\/\})'
    
    new_content = re.sub(pattern, marquee_section + '\n\n      ', content, flags=re.DOTALL)
    
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("✅ Carrusel Logos B2B actualizado.")

if __name__ == '__main__':
    main()
