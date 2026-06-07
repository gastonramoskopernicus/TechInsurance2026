#!/usr/bin/env python3
import os

def main():
    print("Iniciando ajuste del Hero en landing InspeXiona...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    client_path = os.path.join(base_dir, "app", "inspexiona", "InspexionaClient.tsx")

    if not os.path.exists(client_path):
        print(f"Error: No se encontró el archivo en {client_path}")
        return

    with open(client_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Reemplazo de la sección visual derecha del Hero ( mock estático -> carrusel 3D )
    old_hero_right = """            {/* Visual Derecha - Celular Premium Mockup */}
            <div className={`flex-1 relative w-full max-w-sm aspect-[9/16] flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-fuchsia-600/20 to-indigo-600/20 blur-2xl pointer-events-none opacity-60" />
              
              {/* Contenedor del Teléfono */}
              <div className="relative w-[85%] h-[90%] rounded-[2.5rem] bg-[#0c0914] border-4 border-zinc-800 shadow-[0_0_50px_rgba(217,70,239,0.3)] overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-950 flex items-center justify-center z-30">
                  <div className="w-20 h-4 rounded-full bg-zinc-900 border border-white/5" />
                </div>
                <div className="relative flex-1 mt-6">
                  <img 
                    src="/pantallas_inspexiona/screen-4.png" 
                    alt="InspeXiona App" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>"""

    new_hero_right = """            {/* Visual Derecha - Carrousel de Celulares 3D */}
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
            </div>"""

    # 2. Eliminación de la Sección de Screenshots redundante
    old_screenshots_section = """        {/* 2. SECCIÓN SCREENSHOTS DE LA APP */}
        <section id="screenshots" className="py-24 px-4 bg-[#050208] border-b border-white/5 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-900/10 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Capturas de Pantalla</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Explore la Interfaz de InspeXiona</h2>
            <p className="text-zinc-400 font-light max-w-2xl mx-auto mb-16">
              Wizard guiado interactivo que reduce los tiempos de inspección de horas a minutos.
            </p>

            <div className={`relative w-full flex justify-center items-center transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div 
                ref={containerRef}
                className="relative flex justify-center items-center w-80 h-48 sm:w-[32rem] sm:h-[20rem] md:w-[48rem] md:h-[28rem] z-20 group perspective-[1200px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full h-full flex items-center justify-center translate-x-4">
                  {screens.map((src, idx) => {
                    const isActive = idx === activeScreenIndex;
                    const isPast = idx < activeScreenIndex;
                    let offset = idx - activeScreenIndex;
                    if (offset < 0) offset += TOTAL_SCREENS;
                    
                    const getTransform = () => {
                      if (isActive) return 'translateZ(0px) translateX(0px) scale(1) rotateY(0deg)';
                      if (isPast && idx === activeScreenIndex - 1) return 'translateZ(-300px) translateX(-100px) scale(0.8) rotateY(-15deg)';
                      return `translateZ(-${offset * 120}px) translateX(${offset * 60}px) scale(${1 - offset * 0.05}) rotateY(${offset * 8}deg)`;
                    };

                    const getOpacity = () => {
                      if (isActive) return 'opacity-100';
                      if (isPast && idx === activeScreenIndex - 1) return 'opacity-0';
                      if (offset > 3) return 'opacity-0';
                      return 'opacity-[0.95]'; 
                    };

                    return (
                      <div 
                        key={idx}
                        className={`absolute w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${getOpacity()}`}
                        style={{
                          transform: getTransform(),
                          zIndex: 20 - offset,
                        }}
                      >
                        <div className="absolute top-0 left-0 w-full h-4 sm:h-6 md:h-8 bg-[#111] border-b border-white/10 flex items-center px-3 gap-1.5 z-20">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500" />
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500" />
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" />
                        </div>
                        <Image 
                          src={src} 
                          alt="" 
                          fill 
                          className="object-cover mt-4 sm:mt-6 md:mt-8 bg-[#0a050b]" 
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>"""

    # 3. Adición del id="screenshots" y scroll-mt-24 en la siguiente sección ("Alcance Funcional")
    old_alcance_section = """        {/* ALCANCE FUNCIONAL */}
        <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/50 relative z-10">"""

    new_alcance_section = """        {/* ALCANCE FUNCIONAL */}
        <section id="screenshots" className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/50 relative z-10 scroll-mt-24">"""

    modified = False

    if old_hero_right in content:
        content = content.replace(old_hero_right, new_hero_right)
        print("✓ Carrusel 3D inyectado en el Hero con éxito.")
        modified = True
    else:
        print("❌ Error: No se encontró la imagen estática del teléfono en el Hero.")

    if old_screenshots_section in content:
        content = content.replace(old_screenshots_section, "")
        print("✓ Sección duplicada de screenshots eliminada con éxito.")
        modified = True
    else:
        print("❌ Error: No se encontró la sección original de screenshots abajo.")

    if old_alcance_section in content:
        content = content.replace(old_alcance_section, new_alcance_section)
        print("✓ Redirección de anchor 'screenshots' a Alcance Funcional configurada con éxito.")
        modified = True
    else:
        print("❌ Error: No se encontró la cabecera de la sección Alcance Funcional.")

    if modified:
        with open(client_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Cambios guardados en InspexionaClient.tsx.")
    else:
        print("No se realizaron modificaciones en InspexionaClient.tsx.")

if __name__ == "__main__":
    main()
