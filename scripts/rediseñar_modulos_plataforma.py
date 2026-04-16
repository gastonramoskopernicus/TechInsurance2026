import os
import re

def main():
    print("Re-Arquitectando Módulos Core (Layers) en /plataforma/page.tsx...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app', 'plataforma'))
    
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Generamos el nuevo bloque de la sección 5
        new_section = r'''{/* 5. MÓDULOS DE NEGOCIO (ORGANIZADO POR CAPAS - LAYERS) */}
      <section id="modulos" className="py-32 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-900/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-fuchsia-600 font-semibold tracking-widest text-xs uppercase mb-3 block">La Suite</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Módulos <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Core</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
              Tech Insurance está compuesto por bloques funcionales independientes que rodean su sistema legacy.
              Un diseño urbanizado, clasificado por capas lógicas de maduración de negocio.
            </p>
          </div>
          
          <div className="space-y-32">
          
            {/* LAYER 1: Product & Core Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">01</span> Product & Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                
                {/* Product Studio - DESTACADO SPAN-2 */}
                <div className="group p-8 border border-fuchsia-800/40 bg-[#1b081e] rounded-2xl hover:bg-[#250b28] hover:border-fuchsia-500/60 shadow-[0_0_40px_rgba(217,70,239,0.05)] hover:shadow-[0_0_50px_rgba(217,70,239,0.15)] transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-2">
                   <div className="mb-6 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-3">Product Studio (Núcleo)</h4>
                   <p className="text-fuchsia-100/70 font-light group-hover:text-fuchsia-100/90 transition-colors text-lg leading-relaxed">Entorno visual No-Code donde los equipos comerciales crean, modelan y versionan seguros listos para la calle sin pedir permiso ni escribir código.</p>
                </div>
                
                {/* Otros Módulos Layer 1 */}
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M12 2l8 4.6v9.2L12 20.4l-8-4.6V6.6z"/><path d="M12 2v20"/><path d="M12 11.2l-8-4.6"/><path d="M12 11.2l8-4.6"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Coberturas</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Diseño granular de garantías y exclusiones adaptables por segmento.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Pricing Engine</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Motor de tarificación dinámica parametrizable en tiempo real.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Motor de Reglas de Negocio</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Sususcripción, scoring y lógicas de validación sin dependencia técnica.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Ciclo de Vida</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Automatización de endosos, renovaciones y cancelaciones orquestadas.</p>
                </div>
              </div>
            </div>

            {/* LAYER 2: Commercial Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">02</span> Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Canales</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Omnicanalidad nativa. Controle la red de agentes, brókers y referidos en una sola visión.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Gestión de Campañas</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Despliegue ultra-veloz de esquemas promocionales y cross-selling parametrizado.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Embedded Insurance</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Venta en sitio (Affinity). Incruste garantías e hiper-seguros en el punto digital exacto de sus partners.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M12 8v4l3 3"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Customer Journey</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Mapeo total de la experiencia del prospecto con touchpoints comerciales controlados.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Portales B2B / B2B2C</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Oficinas virtuales seguras (Multi-tenant) para la red comercial escalada al instante.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">E-commerce de Seguros</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Venta directa tipo retail con experiencias de consumo modernas y efectivas.</p>
                </div>
              </div>
            </div>

            {/* LAYER 3: Experience Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">03</span> Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Onboarding Digital</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Fricción cero en altas. Firmas electrónicas y biometría.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Portal de Clientes</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Espacio consolidado y brandeado para cartera con visión 360°.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Autogestión</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Desvío de llamadas: el cliente gestiona sus reclamos y certificados solo.</p>
                </div>
                <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <div className="mb-6 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg></div>
                   <h4 className="text-xl font-bold text-white mb-2">Notificaciones</h4>
                   <p className="text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Motor multicanal proactivo vía SMS, Email y Push.</p>
                </div>
              </div>
            </div>

            {/* LAYER 4: Integration Layer */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">04</span> Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">API Gateway</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Control de exposición, rate limit y seguridad.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Catálogo APIs</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Documentación viva (Swagger/OpenAPI) estándar.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Conectores</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Wrappers asíncronos para convivir con el Core Legacy.</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Orquestador</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">BPM y flujos integrados con sistemas 3ros (buro).</p>
                </div>
                <div className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col">
                   <h4 className="text-lg font-bold text-white mb-2">Webhooks</h4>
                   <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Arquitectura orientada a eventos para latencia cero.</p>
                </div>
              </div>
            </div>

            {/* LAYER 5: Data & Intelligence */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center">
                <span className="text-zinc-600 mr-4 font-light text-xl">05</span> Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Intelligence</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Motor de Datos</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Lagos de información unificados para reportería limpia.</p>
                 </div>
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Decisiones Predictivas</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">IA para recomendación comercial y scoring ágil.</p>
                 </div>
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Dashboards & KPIs</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Analítica operativa accionable sin depender de analistas.</p>
                 </div>
                 <div className="group p-8 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#16141a] hover:border-fuchsia-900/50 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">Segmentación</h4>
                    <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400">Clustering dinámico para productos híper-pesonalizados.</p>
                 </div>
              </div>
            </div>

            {/* LAYER 6 & 7: Governance and Payments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center">
                    <span className="text-zinc-600 mr-4 font-light text-xl">06</span> GRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Gestión de Usuarios Multi-empresa</p></div>
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Roles y Permisos Granulares</p></div>
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Auditoría y Trazabilidad Compliance</p></div>
                     <div className="p-6 border border-white/5 bg-black/40 rounded-xl"><p className="text-white font-medium text-sm">Gestión de Versiones de Pólizas</p></div>
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center">
                    <span className="text-zinc-600 mr-4 font-light text-xl">07</span> Payments <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 ml-2">Layer</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 border border-white/5 bg-[#130a16] border-fuchsia-900/20 rounded-xl h-full flex flex-col justify-center">
                       <h4 className="text-lg font-bold text-white mb-2">Gestión de Primas</h4>
                       <p className="text-sm text-zinc-500 font-light">Cuotas, recibos y conciliación.</p>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#130a16] border-fuchsia-900/20 rounded-xl h-full flex flex-col justify-center">
                       <h4 className="text-lg font-bold text-white mb-2">Pasarelas Digitales</h4>
                       <p className="text-sm text-zinc-500 font-light">Stripe, Mercadopago y Open Banking integrations.</p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
'''

        # We inject this dynamically into page.tsx replacing the entire {/* 5. MÓDULOS DE NEGOCIO */}
        # Using a regex that captures everything between the Módulos comment and the Arquitectura comment
        pattern = r'\{\/\* 5\. MÓDULOS DE NEGOCIO \*\/\}.*?(?=\{\/\* 6\. ARQUITECTURA \*\/\})'
        content = re.sub(pattern, new_section, content, flags=re.DOTALL)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Refinamiento Modular de Alta Gama completado.")

if __name__ == '__main__':
    main()
