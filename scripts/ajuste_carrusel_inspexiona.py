#!/usr/bin/env python3
import os

def main():
    print("Iniciando ajuste del carrusel en InspeXionaClient...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    client_path = os.path.join(base_dir, "app", "inspexiona", "InspexionaClient.tsx")

    if not os.path.exists(client_path):
        print(f"Error: No se encontró el archivo en {client_path}")
        return

    with open(client_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Definimos el bloque completo del Hero a reemplazar
    old_hero_section = """        {/* 1. HERO SECTION */}
        <section className="pt-36 pb-20 px-4 relative min-h-[90vh] flex items-center justify-center border-b border-white/5">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Contenido Izquierda */}
            <div className="flex-1 text-left space-y-8 max-w-xl">
              {/* Logo InspeXiona */}
              <div className={`inline-block relative w-36 h-36 mb-2 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <img 
                  src="/inspexiona-logo.png" 
                  alt="" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(217,70,239,0.4)]" 
                />
              </div>
              
              <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Inspección Inteligente</span>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Los ojos de las aseguradoras en las manos de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                  clientes o intermediarios.
                </span>
              </h1>
              
              <div className={`text-zinc-400 font-light leading-relaxed space-y-4 text-base md:text-lg transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p>
                  Plataforma nativa iOS / Android y Web para inspecciones previas y de siniestros.
                </p>
                <p>
                  Permite ejecutar flujos guiados para capturar datos e imágenes confiables en tiempo real, previniendo el fraude y acelerando la emisión y liquidación de siniestros.
                </p>
              </div>

              {/* Botones de acción */}
              <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-40 blur-md group-hover:opacity-75 transition-opacity" />
                  <div className="relative flex items-center gap-2 px-8 py-4 bg-[#0a050b] border border-white/10 rounded-xl text-white font-bold text-sm hover:bg-white/5 transition-colors">
                    Solicitar Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </Link>
                <a href="#screenshots" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-zinc-300 font-bold text-sm hover:bg-white/10 hover:text-white transition-all">
                  Ver Interfaz
                </a>
              </div>
            </div>

            {/* Visual Derecha - Carrousel de Celulares 3D */}
            <div 
              ref={containerRef}
              className={`flex-1 relative w-full max-w-md h-[460px] sm:h-[520px] flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} perspective-[1000px] z-20 group`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/15 to-indigo-600/15 blur-3xl pointer-events-none opacity-60" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                {screens.map((src, idx) => {
                  const isActive = idx === activeScreenIndex;
                  const isPast = idx < activeScreenIndex;
                  let offset = idx - activeScreenIndex;
                  if (offset < 0) offset += TOTAL_SCREENS;
                  
                  const getTransform = () => {
                    if (isActive) return 'translateZ(0px) translateX(-20px) scale(1) rotateY(0deg)';
                    if (isPast && idx === activeScreenIndex - 1) return 'translateZ(-150px) translateX(-120px) scale(0.85) rotateY(-12deg)';
                    return `translateZ(-${offset * 80}px) translateX(${offset * 40 - 20}px) scale(${1 - offset * 0.08}) rotateY(${offset * 6}deg)`;
                  };

                  const getOpacity = () => {
                    if (isActive) return 'opacity-100';
                    if (isPast && idx === activeScreenIndex - 1) return 'opacity-0 pointer-events-none';
                    if (offset > 3) return 'opacity-0 pointer-events-none';
                    return 'opacity-[0.95]'; 
                  };

                  return (
                    <div 
                      key={idx}
                      className={`absolute w-[200px] h-[355px] sm:w-[240px] sm:h-[426px] rounded-[2.2rem] bg-[#0c0914] border-[3px] sm:border-4 border-zinc-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${getOpacity()}`}
                      style={{
                        transform: getTransform(),
                        zIndex: 20 - offset,
                      }}
                    >
                      {/* Notch / Speaker */}
                      <div className="absolute top-0 inset-x-0 h-4 bg-zinc-950 flex items-center justify-center z-30">
                        <div className="w-12 h-2.5 rounded-full bg-zinc-900 border border-white/5" />
                      </div>
                      {/* Imagen de Pantalla */}
                      <div className="relative flex-1 mt-4">
                        <Image 
                          src={src} 
                          alt="InspeXiona Screen" 
                          fill 
                          className="object-cover bg-[#0a050b]" 
                          sizes="(max-width: 640px) 200px, 240px"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>"""

    # 2. Definimos el nuevo bloque del Hero centrado y el carrusel de navegador horizontal abajo
    new_hero_section = """        {/* 1. HERO SECTION */}
        <section className="pt-36 pb-16 px-4 relative flex flex-col items-center justify-center border-b border-white/5 bg-[#020104]">
          <div className="container mx-auto max-w-4xl text-center flex flex-col items-center justify-center z-10 space-y-8">
            
            {/* Logo InspeXiona */}
            <div className={`inline-block relative w-36 h-36 mb-2 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <img 
                src="/inspexiona-logo.png" 
                alt="InspeXiona Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(217,70,239,0.4)]" 
              />
            </div>
            
            <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Inspección Inteligente</span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Los ojos de las aseguradoras en las manos de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                clientes o intermediarios.
              </span>
            </h1>
            
            <div className={`text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto space-y-4 text-base md:text-lg transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p>
                Plataforma nativa iOS / Android y Web para inspecciones previas y de siniestros.
              </p>
              <p>
                Permite ejecutar flujos guiados para capturar datos e imágenes confiables en tiempo real, previniendo el fraude y acelerando la emisión y liquidación de siniestros.
              </p>
            </div>

            {/* Botones de acción */}
            <div className={`flex flex-wrap justify-center gap-4 pt-4 transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-40 blur-md group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center gap-2 px-8 py-4 bg-[#0a050b] border border-white/10 rounded-xl text-white font-bold text-sm hover:bg-white/5 transition-colors">
                  Solicitar Demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
              <a href="#screenshots" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-zinc-300 font-bold text-sm hover:bg-white/10 hover:text-white transition-all">
                Ver Interfaz
              </a>
            </div>
          </div>

          {/* Carrusel de screenshots en formato horizontal / navegador web (Browser mockup) */}
          <div 
            id="screenshots"
            className={`w-full max-w-5xl mt-16 px-4 z-20 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} scroll-mt-24`}
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-white/10 bg-[#08040d]/80 shadow-[0_0_60px_rgba(217,70,239,0.15)] overflow-hidden flex flex-col group">
              {/* Header del Navegador */}
              <div className="h-8 sm:h-10 bg-zinc-950/80 border-b border-white/5 flex items-center justify-between px-4 z-20">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-md px-10 py-0.5 text-[10px] text-zinc-500 font-mono select-none hidden sm:block">
                  inspexiona.techinsurance.com/app
                </div>
                <div className="w-12" />
              </div>
              
              {/* Diapositivas */}
              <div 
                ref={containerRef}
                className="relative flex-1 bg-[#0a050b] overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {screens.map((src, idx) => {
                  const isActive = idx === activeScreenIndex;
                  return (
                    <div 
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    >
                      <Image 
                        src={src} 
                        alt={`InspeXiona Screenshot ${idx + 1}`} 
                        fill 
                        className="object-contain bg-[#0a050b] p-2 sm:p-4" 
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}

                {/* Controles de navegación */}
                <button 
                  onClick={() => setActiveScreenIndex(prev => (prev - 1 + TOTAL_SCREENS) % TOTAL_SCREENS)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-fuchsia-600 hover:border-fuchsia-500 transition-all opacity-0 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button 
                  onClick={() => setActiveScreenIndex(prev => (prev + 1) % TOTAL_SCREENS)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-fuchsia-600 hover:border-fuchsia-500 transition-all opacity-0 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>

                {/* Indicadores / Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {screens.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === activeScreenIndex ? 'bg-fuchsia-500 w-6' : 'bg-white/30 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>"""

    # 3. Quitamos el id="screenshots" y scroll-mt-24 del bloque de Alcance Funcional
    old_alcance_section = """        {/* ALCANCE FUNCIONAL */}
        <section id="screenshots" className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/50 relative z-10 scroll-mt-24">"""

    new_alcance_section = """        {/* ALCANCE FUNCIONAL */}
        <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/50 relative z-10">"""

    modified = False

    if old_hero_section in content:
        content = content.replace(old_hero_section, new_hero_section)
        print("✓ Hero reestructurado y carrusel horizontal inyectado en su base.")
        modified = True
    else:
        print("❌ Error: No se encontró la sección de Hero esperada en InspexionaClient.tsx.")

    if old_alcance_section in content:
        content = content.replace(old_alcance_section, new_alcance_section)
        print("✓ Sección de Alcance Funcional restaurada (se retiró el id screenshots duplicado).")
        modified = True
    else:
        print("❌ Advertencia: No se encontró el id de screenshots en la sección Alcance Funcional (puede que ya se haya corregido).")

    if modified:
        with open(client_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios guardados en InspexionaClient.tsx.")
    else:
        print("No se realizaron modificaciones.")

if __name__ == "__main__":
    main()
