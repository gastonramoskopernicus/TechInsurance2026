#!/usr/bin/env python3
import os

def main():
    print("Iniciando ajuste visual de Product Studio...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    page_path = os.path.join(base_dir, "app", "product-studio", "page.tsx")

    if not os.path.exists(page_path):
        print(f"Error: No se encontró el archivo en {page_path}")
        return

    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Definimos el bloque antiguo
    old_block = """          {/* Visual Derecha - Composición Orbital del Core */}
          <div className={`flex-1 relative w-full max-w-lg aspect-square flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/10 to-indigo-600/10 blur-3xl pointer-events-none opacity-60" />
            
            {/* Círculos e irradiaciones orbitales */}
            <div className="absolute w-[90%] h-[90%] rounded-full border border-fuchsia-500/10 border-dashed animate-[spin_120s_linear_infinite]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-indigo-500/20 animate-[spin_80s_linear_infinite_reverse]" />
            <div className="absolute w-[50%] h-[50%] rounded-full bg-gradient-to-br from-fuchsia-600/5 to-indigo-600/5 blur-xl pointer-events-none" />

            {/* Cubo 3D / Box Central */}
            <div className="absolute z-10 w-36 h-36 rounded-3xl bg-[#08040d] border border-fuchsia-500/50 flex items-center justify-center shadow-[0_0_60px_rgba(217,70,239,0.5)] animate-breath">
              <img
                src="/product-studio-logo.svg"
                alt="Product Studio Core"
                className="w-24 h-24 object-contain filter drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
              />
            </div>
          </div>"""

    # 2. Definimos el nuevo bloque orbital detallado de tres anillos
    new_block = """          {/* Visual Derecha - Composición Orbital del Core */}
          <div className={`flex-1 relative w-full max-w-lg aspect-square flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-fuchsia-600/10 to-indigo-600/10 blur-3xl pointer-events-none opacity-60" />

            {/* Componente Orbital Detallado */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.6] xs:scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-100 transition-transform duration-500 origin-center select-none">
              
              {/* Líneas de Conexión SVG (Subyacentes) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="line-grad-1" x1="250" y1="250" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="line-grad-2" x1="250" y1="250" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="line-grad-3" x1="250" y1="250" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Anillos concéntricos de referencia */}
                <circle cx="250" cy="250" r="90" fill="none" stroke="rgba(217, 70, 239, 0.08)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(99, 102, 241, 0.06)" strokeWidth="1.2" />
                <circle cx="250" cy="250" r="225" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeDasharray="10 5" />

                {/* Líneas radiales a los nodos */}
                {/* Primer Anillo (R=90, 6 nodos) */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / 6;
                  const x = 250 + 90 * Math.cos(angle);
                  const y = 250 + 90 * Math.sin(angle);
                  return (
                    <line key={`line-r1-${i}`} x1="250" y1="250" x2={x} y2={y} stroke="url(#line-grad-1)" strokeWidth="1.5" />
                  );
                })}

                {/* Segundo Anillo (R=160, 6 nodos, offset 30deg/0.523rad) */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / 6 + Math.PI / 6;
                  const x = 250 + 160 * Math.cos(angle);
                  const y = 250 + 160 * Math.sin(angle);
                  return (
                    <line key={`line-r2-${i}`} x1="250" y1="250" x2={x} y2={y} stroke="url(#line-grad-2)" strokeWidth="1.2" />
                  );
                })}

                {/* Tercer Anillo (R=225, 6 nodos, offset 15deg/0.262rad) */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / 6 + Math.PI / 12;
                  const x = 250 + 225 * Math.cos(angle);
                  const y = 250 + 225 * Math.sin(angle);
                  return (
                    <line key={`line-r3-${i}`} x1="250" y1="250" x2={x} y2={y} stroke="url(#line-grad-3)" strokeWidth="1" />
                  );
                })}
              </svg>

              {/* Nodo Central (Núcleo) */}
              <div className="absolute z-20 w-36 h-36 rounded-full bg-[#08040d] border-2 border-fuchsia-500/60 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(217,70,239,0.55)] animate-breath">
                <img
                  src="/product-studio-logo.svg"
                  alt="Product Studio Core"
                  className="w-16 h-16 object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                />
                <span className="text-[10px] font-black tracking-widest text-fuchsia-300 mt-2 uppercase text-center px-2">
                  PRODUCT STUDIO
                </span>
              </div>

              {/* Nodos del Primer Anillo (Radius=90) */}
              {[
                { name: "Productos", angle: 0, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
                { name: "Coberturas", angle: 60, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
                { name: "Prestaciones", angle: 120, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg> },
                { name: "Planes", angle: 180, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> },
                { name: "Fórmulas", angle: 240, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4H6l6 8-6 8h12"></path></svg> },
                { name: "Reglas", angle: 300, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="2" y1="14" x2="6" y2="14"></line><line x1="10" y1="8" x2="14" y2="8"></line></svg> }
              ].map((node, i) => {
                const angleRad = (node.angle * Math.PI) / 180;
                const x = 250 + 90 * Math.cos(angleRad);
                const y = 250 + 90 * Math.sin(angleRad);
                return (
                  <div
                    key={`node-r1-${i}`}
                    className="absolute z-20 flex flex-col items-center group cursor-pointer"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#0a0510] border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.2)] group-hover:scale-110 group-hover:border-fuchsia-400 group-hover:text-white transition-all duration-300">
                      {node.icon}
                    </div>
                    <span className="text-[9px] font-semibold text-zinc-400 mt-1.5 whitespace-nowrap bg-black/60 px-1.5 py-0.5 rounded border border-white/5 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                      {node.name}
                    </span>
                  </div>
                );
              })}

              {/* Nodos del Segundo Anillo (Radius=160, offset angle por 30deg) */}
              {[
                { name: "Pricing", angle: 30, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> },
                { name: "Canales", angle: 90, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> },
                { name: "Comisiones", angle: 150, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg> },
                { name: "Promociones", angle: 210, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg> },
                { name: "Vigencias", angle: 270, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
                { name: "Versionado", angle: 330, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> }
              ].map((node, i) => {
                const angleRad = (node.angle * Math.PI) / 180;
                const x = 250 + 160 * Math.cos(angleRad);
                const y = 250 + 160 * Math.sin(angleRad);
                return (
                  <div
                    key={`node-r2-${i}`}
                    className="absolute z-20 flex flex-col items-center group cursor-pointer"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#050308] border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.15)] group-hover:scale-110 group-hover:border-indigo-400 group-hover:text-white transition-all duration-300">
                      {node.icon}
                    </div>
                    <span className="text-[9px] text-zinc-500 mt-1 whitespace-nowrap bg-black/60 px-1 py-0.5 rounded opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                      {node.name}
                    </span>
                  </div>
                );
              })}

              {/* Nodos del Tercer Anillo (Radius=225, offset angle por 15deg) */}
              {[
                { name: "Workflow", angle: 15, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> },
                { name: "Integraciones", angle: 75, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.9 7a2.72 2.72 0 0 0-2.7-2.7h-3V1.5a1.5 1.5 0 0 0-3 0v2.8h-3a2.72 2.72 0 0 0-2.7 2.7v3h-2.8a1.5 1.5 0 0 0 0 3h2.8v3a2.72 2.72 0 0 0 2.7 2.7h3v2.8a1.5 1.5 0 0 0 3 0v-2.8h3a2.72 2.72 0 0 0 2.7-2.7v-3h2.8a1.5 1.5 0 0 0 0-3h-2.8z"></path></svg> },
                { name: "APIs", angle: 135, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                { name: "Documentos", angle: 195, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> },
                { name: "Validaciones", angle: 255, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> },
                { name: "Analytics", angle: 315, icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> }
              ].map((node, i) => {
                const angleRad = (node.angle * Math.PI) / 180;
                const x = 250 + 225 * Math.cos(angleRad);
                const y = 250 + 225 * Math.sin(angleRad);
                return (
                  <div
                    key={`node-r3-${i}`}
                    className="absolute z-20 flex flex-col items-center group cursor-pointer"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-7.5 h-7.5 rounded-full bg-[#030205] border border-blue-500/20 flex items-center justify-center text-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.1)] group-hover:scale-110 group-hover:border-blue-400 group-hover:text-white transition-all duration-300">
                      {node.icon}
                    </div>
                    <span className="text-[9px] text-zinc-600 mt-1 whitespace-nowrap bg-black/60 px-1 py-0.5 rounded opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                      {node.name}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>"""

    if old_block in content:
        content = content.replace(old_block, new_block)
        print("✓ Reemplazo del bloque orbital realizado con éxito.")
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("✓ Archivo page.tsx modificado exitosamente.")
    else:
        print("❌ Error: No se encontró el bloque antiguo en page.tsx.")
        print("Buscando bloque simplificado alternativo...")

if __name__ == "__main__":
    main()
