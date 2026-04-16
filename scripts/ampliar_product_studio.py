import os
import re

def main():
    print("Iniciando expansión arquitectónica del módulo Product Studio...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'plataforma'))
    
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_studio = r'''{/* 4. PRODUCT STUDIO (NÚCLEO DIFERENCIAL REUBICADO Y EXPANDIDO) */}
      <section id="product-studio" className="py-32 border-b border-border/50 relative overflow-hidden bg-[#0d040e] scroll-mt-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.06),transparent)] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 space-y-32">
          
          {/* 4.1 HERO & QUÉ ES */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="relative w-32 h-32 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <Image src="/TechInsurance.svg" alt="Product Studio Logo Component" fill className="object-contain" priority />
            </div>

            <span className="text-fuchsia-500 font-semibold tracking-wider text-sm uppercase mb-3 block">El Corazón de la Innovación</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white tracking-tight">
              Product Studio: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Redefiniendo cómo se construyen seguros</span>
            </h2>
            
            <div className="border border-fuchsia-500/20 rounded-3xl p-10 lg:p-14 bg-black/50 backdrop-blur-md shadow-2xl">
              <p className="text-fuchsia-100/90 text-xl font-light leading-relaxed mb-8">
                Es la capa central de abstraimiento tecnológico. Otorgue el poder a sus equipos estratégicos mediante un entorno de configuración visual. Modele productos, coberturas y reglas a una velocidad sin precedentes, desacoplando completamente el área de negocios del área de IT.
              </p>
              <div className="p-6 border border-white/10 bg-zinc-900/50 rounded-xl inline-block">
                 <p className="text-zinc-300 text-center font-medium text-lg leading-relaxed">
                    Los productos dejan de ser código.<br/>
                    <span className="text-white font-bold">Pasan a ser configuraciones dinámicas.</span>
                 </p>
              </div>
            </div>
          </div>

          {/* 4.2 CÓMO FUNCIONA (PIPELINE) */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Flujo Dinámico en <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">5 Pasos</span></h3>
              <p className="text-zinc-400 font-light">Ciclo de vida end-to-end puramente guiado por parámetros comerciales.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', title: 'Definición de coberturas', desc: 'Ensamblado de beneficios y exclusiones', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
                { step: '02', title: 'Configuración de reglas', desc: 'Validación, suscripción y scoring en BD', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>' },
                { step: '03', title: 'Parametrización', desc: 'Asignación de pricing y deducibles', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
                { step: '04', title: 'Versionado', desc: 'Control de cambios sin apagar pólizas', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9"/><path d="M12 12l4.24 4.24"/>' },
                { step: '05', title: 'Publicación', desc: 'Distribución API instantánea', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
              ].map((item, idx) => (
                <div key={idx} className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#1b081e] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col relative h-full">
                   <div className="absolute -top-3 -right-3 text-6xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors pointer-events-none">{item.step}</div>
                   <div className="mb-4 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                   </div>
                   <h4 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4.3 CAPACIDADES CLAVE */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4">Capacidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Core</span></h3>
              <p className="text-zinc-400 font-light">Armamento completo para diseño de seguros modernos.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Modelado Modular', desc: 'Cree plantillas y master-products desacoplados donde coberturas base funcionan como legos independientes.' },
                { title: 'Reutilización', desc: 'Aproveche lógicas preexistentes a través de herencia, reduciendo el trabajo duplicado al lanzar variables.' },
                { title: 'Productos Compuestos', desc: 'Empaquete seguros multicapa (Ej. Vida + Salud + Asistencia) en una única transacción B2C unificada.' },
                { title: 'Parametrización Dinámica', desc: 'Aplique descuentos, recargos y micro-tarifas en función a metadatos de usuario recogidos en tiempo real.' },
                { title: 'Integración Extendida', desc: 'Consuma webhooks de terceros en el oráculo paramétrico (clima, vuelos, finanzas) para activar pólizas autónomas.' }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 border border-white/5 bg-[#130a16] rounded-2xl hover:bg-[#200e23] hover:border-fuchsia-800/40 transition-all duration-300">
                   <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-fuchsia-500 group-hover:animate-pulse"></span>
                     {item.title}
                   </h4>
                   <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4.4 CAMBIO DE PARADIGMA (ANTES / AHORA) */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Modelo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Construcción</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ANTES */}
              <div className="p-10 border border-white/5 bg-[#0a0505] rounded-3xl flex flex-col opacity-80 backdrop-grayscale">
                 <div className="flex items-center gap-4 mb-8 text-zinc-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    <h4 className="text-2xl font-bold uppercase tracking-widest text-zinc-500">Antes</h4>
                 </div>
                 <ul className="space-y-6 flex-1">
                   <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1">⨯</span> <p className="text-zinc-400">Desarrollo manual programado (Hardcode).</p></li>
                   <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1">⨯</span> <p className="text-zinc-400">Ciclos de QA técnica eternos y bloqueantes.</p></li>
                   <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1">⨯</span> <p className="text-zinc-400">Dependencia absoluta de fábricas de software e IT interno.</p></li>
                   <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1">⨯</span> <p className="text-zinc-400">Meses para llegar al Time-to-Market de un MVP.</p></li>
                 </ul>
              </div>
              
              {/* AHORA */}
              <div className="p-10 border border-fuchsia-500/30 bg-[#1b081e] rounded-3xl shadow-[0_0_50px_rgba(217,70,239,0.08)] flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[60px] pointer-events-none" />
                 <div className="flex items-center gap-4 mb-8 text-fuchsia-400 relative z-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><polyline points="20 6 9 17 4 12"/></svg>
                    <h4 className="text-2xl font-bold uppercase tracking-widest text-white">Ahora (Tech Insurance)</h4>
                 </div>
                 <ul className="space-y-6 flex-1 relative z-10">
                   <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1">✓</span> <p className="text-fuchsia-100/90 font-medium">Configuración visual basada en componentes pre-validados.</p></li>
                   <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1">✓</span> <p className="text-fuchsia-100/90 font-medium">Reutilización instantánea de arquitectura de producto.</p></li>
                   <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1">✓</span> <p className="text-fuchsia-100/90 font-medium">Equipos de Negocio, Pricing y Actuarial 100% autónomos.</p></li>
                   <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1">✓</span> <p className="text-white font-bold leading-relaxed bg-black/40 px-3 py-1 rounded inline-block">Semanas u horas para lograr Go-to-Market crítico.</p></li>
                 </ul>
              </div>
            </div>
          </div>

          {/* 4.5 EJEMPLO CONCRETO (DIAGRAMA FLOW) */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Ejemplo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Seguro Embebido en E-Commerce</span></h3>
            <div className="p-8 border border-white/5 bg-[#08040a] rounded-3xl relative">
              <p className="text-center text-zinc-400 font-light mb-12">Cómo Product Studio ensambla y despliega un seguro de Daños en Punto de Venta en tiempo real.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                 {/* Línea conectora trasera (solo visible en desktop) */}
                 <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-zinc-800 via-fuchsia-900/50 to-fuchsia-500/50 -translate-y-1/2 z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center flex-1">
                   <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 mb-4 shadow-lg shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                   </div>
                   <div className="text-center">
                     <p className="text-white font-bold mb-1">Business Team</p>
                     <p className="text-zinc-500 text-xs">Define Regla: +5% sobre valor de compra del electrodoméstico.</p>
                   </div>
                 </div>

                 <div className="text-zinc-700 hidden md:block relative z-10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1">
                   <div className="w-16 h-16 rounded-2xl bg-[#1b081e] border border-fuchsia-800 flex items-center justify-center text-fuchsia-500 mb-4 shadow-[0_0_20px_rgba(217,70,239,0.2)] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                   </div>
                   <div className="text-center">
                     <p className="text-fuchsia-200 font-bold mb-1">Product Studio</p>
                     <p className="text-zinc-500 text-xs">Aplica cobertura de Robo y compila tarifador dinámico en 1 clic.</p>
                   </div>
                 </div>

                 <div className="text-fuchsia-900 hidden md:block relative z-10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="9 18 15 12 9 6"/></svg></div>
                 
                 <div className="relative z-10 flex flex-col items-center flex-1">
                   <div className="w-16 h-16 rounded-2xl bg-zinc-100 border border-white flex items-center justify-center text-black mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                   </div>
                   <div className="text-center">
                     <p className="text-white font-bold mb-1">API & Checkout</p>
                     <p className="text-zinc-500 text-xs">Endpoint consumido por el Retailer; póliza emitida en 0.2s al cliente.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* 4.6 IMPACTO EN NEGOCIO */}
          <div className="pb-16">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Impacto Estratégico <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">(ROI)</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Reducción Time-to-Market', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
                { title: 'Menor Dependencia IT', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
                { title: 'Flexibilidad Aumentada', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>' },
                { title: 'Alta Capacidad de Testeo', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-[#200523] border border-fuchsia-800/50 rounded-2xl text-center shadow-[0_4px_20px_rgba(217,70,239,0.06)] hover:bg-[#310c36] hover:border-fuchsia-500/80 transition-all duration-300">
                   <div className="mx-auto mb-4 text-fuchsia-400 w-fit p-3 rounded-full bg-fuchsia-950/30">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                   </div>
                   <h4 className="text-lg font-bold text-white mb-1 leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
'''

        # Cut and replace the existing product-studio section exactly as intended
        pattern = r'\{\/\* 4\. PRODUCT STUDIO \(NÚCLEO DIFERENCIAL REUBICADO\) \*\/\}.*?(?=\{\/\* 5\. MÓDULOS DE NEGOCIO \*\/\})'
        new_content = re.sub(pattern, new_studio, content, flags=re.DOTALL)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("✅ Módulo Product Studio expandido masivamente como super-sección.")

if __name__ == '__main__':
    main()
