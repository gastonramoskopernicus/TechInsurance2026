import os

base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
file_path = os.path.join(base_dir, "app/inspexiona/InspexionaClient.tsx")

client_content = """\"use client\";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InspexionaClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Cero Descargas",
      desc: "Web app accesible desde cualquier navegador móvil. Sin instalaciones engorrosas para el cliente.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    },
    {
      title: "Captura Guiada",
      desc: "Flujo inteligente que indica exactamente qué fotografías tomar según el tipo de bien a inspeccionar.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>
    },
    {
      title: "Geolocalización",
      desc: "Sellado de coordenadas y tiempo real en cada fotografía para prevenir fraudes.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>
    },
    {
      title: "Trazabilidad Total",
      desc: "Registro inmutable de cada paso del proceso, metadata extraída e interacciones del usuario.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0 1 18 0v6"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M3 19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/></>
    }
  ];

  const useCases = [
    {
      title: "Automóviles",
      desc: "Validación del estado de la unidad antes de la emisión. Captura guiada de frentes, laterales y daños.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H5a2 2 0 0 0-2 2v7.2"/><circle cx="7" cy="16.5" r="2.5"/><circle cx="17" cy="16.5" r="2.5"/></>
    },
    {
      title: "Embarcaciones",
      desc: "Documentación de cascos, motores e instrumental de navegación, validando amarre mediante geolocalización.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path strokeLinecap="round" strokeLinejoin="round" d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6M12 10v4"/></>
    },
    {
      title: "Hogar",
      desc: "Verificación de condiciones de la propiedad y medidas de seguridad (rejas, alarmas) mediante registro fotográfico.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />
    },
    {
      title: "Fábrica / Industria",
      desc: "Validación de equipos industriales y de construcción. Documentación de números de serie y estado operativo.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 18h1" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h1" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 18h1" /></>
    },
    {
      title: "Salud / Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento exacto del incidente.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" /></>
    },
    {
      title: "Otros Riesgos",
      desc: "Arquitectura flexible para adaptarse a cualquier línea de negocio, desde seguros de mascotas hasta agro.",
      icon: <><rect width="20" height="14" x="2" y="7" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>
    }
  ];

  return (
    <main className="min-h-screen bg-[#020104] text-white overflow-hidden relative selection:bg-fuchsia-500/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-fuchsia-900/10 rounded-full blur-[180px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-10 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            
            {/* Logo */}
            <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center mb-8">
                <Image src="/inspexiona-logo.svg" alt="InspeXiona Logo" width={300} height={90} className="drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] object-contain" />
              </div>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Inspecciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Digitales</span> para Seguros
            </h1>
            
            <p className={`text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Plataforma AI y Módulo Nativo para gestionar inspecciones previas y siniestros con flujos guiados, evidencias irrefutables y trazabilidad total.
            </p>

            {/* FLOATING SAAS COMPOSITION LIMPIA (Ecosistema) */}
            <div className={`mt-16 relative w-full max-w-5xl mx-auto transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative aspect-[4/3] md:aspect-[21/9] w-full flex items-center justify-center">
                
                {/* Back screens - Más nítidas, menos blur y sombras oscuras */}
                <div className="hidden md:block absolute z-10 w-[25%] left-[8%] top-[10%] rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-6">
                   <img src="/pantallas_inspexiona/screen-2.png" alt="Screen 2" className="w-full h-auto object-cover opacity-90" />
                </div>
                <div className="hidden md:block absolute z-10 w-[25%] right-[8%] top-[20%] rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-6">
                   <img src="/pantallas_inspexiona/screen-3.png" alt="Screen 3" className="w-full h-auto object-cover opacity-90" />
                </div>
                <div className="hidden md:block absolute z-10 w-[20%] left-[20%] bottom-[5%] rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-3">
                   <img src="/pantallas_inspexiona/screen-5.png" alt="Screen 5" className="w-full h-auto object-cover opacity-90" />
                </div>
                <div className="hidden md:block absolute z-10 w-[20%] right-[20%] bottom-[10%] rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform rotate-3">
                   <img src="/pantallas_inspexiona/screen-6.png" alt="Screen 6" className="w-full h-auto object-cover opacity-90" />
                </div>

                {/* Main Center Image - Seleccione Tipo de Bien (Limpiada) */}
                <div className="relative z-30 w-[90%] sm:w-[60%] md:w-[45%] rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(217,70,239,0.2)] bg-[#050207] transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-[#111] border-b border-white/10 flex items-center px-3 gap-1.5 z-20">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="mt-6 md:mt-8 overflow-hidden bg-[#0a050b] relative z-0">
                     {/* Se usa screen-4.png asumiendo que es la "Seleccione tipo de bien" */}
                     <img src="/pantallas_inspexiona/screen-4.png" alt="Seleccione el Tipo de Bien" className="w-full h-auto object-cover opacity-100" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ALCANCE FUNCIONAL */}
        <section className="py-24 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/50 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Alcance Funcional</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Una suite completa de herramientas diseñadas para transformar la captura de evidencia en un proceso estructurado, seguro y libre de fricciones.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-[#16141a]/60 border border-white/5 backdrop-blur-md hover:bg-[#1b1820] transition-all duration-300 group">
                  <div className="w-14 h-14 bg-indigo-950/40 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section className="py-24 px-4 relative z-10">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900/30 to-transparent -z-10" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Versatilidad</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Casos de Uso</h2>
              </div>
              <p className="text-zinc-400 max-w-md text-right hidden lg:block">
                Arquitectura flexible para adaptarse a cualquier línea de negocio y etapa del ciclo de vida de la póliza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="group relative p-8 md:p-10 rounded-[2rem] bg-[#0a050b] border border-white/5 flex flex-col justify-start hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                       <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                         {useCase.icon}
                       </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-base leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOSISTEMA Y COMPONENTES DEL MÓDULO */}
        <section className="py-24 px-4 bg-[#050207] border-t border-b border-white/5 relative overflow-hidden z-10">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-violet-400 font-bold tracking-widest uppercase text-sm mb-4 block">Interoperabilidad</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ecosistema Integrado</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Más que una app de fotos, InspeXiona es un motor de validación interconectado a tu ecosistema tecnológico.</p>
            </div>

            {/* Malla de Ecosistema */}
            <div className="relative w-full max-w-5xl mx-auto py-12">
              {/* Conectores SVG Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                 <path d="M 50% 50% L 15% 15% M 50% 50% L 50% 10% M 50% 50% L 85% 15% M 50% 50% L 15% 50% M 50% 50% L 85% 50% M 50% 50% L 15% 85% M 50% 50% L 50% 90% M 50% 50% L 85% 85% M 50% 50% L 30% 90% M 50% 50% L 70% 90%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="3 3" />
                 <defs>
                   <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#22d3ee" />
                     <stop offset="100%" stopColor="#8b5cf6" />
                   </linearGradient>
                 </defs>
              </svg>

              {/* Centro: InspeXiona Core (ISOTIPO X) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                 <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#0a050b] border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] flex items-center justify-center">
                   <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">X</span>
                 </div>
              </div>

              {/* Nodos Orbitantes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 relative z-10">
                {[
                  { name: "Integración ERP", pos: "col-span-1 flex justify-center md:justify-start" },
                  { name: "Motor M2M", pos: "col-span-1 flex justify-center" },
                  { name: "OCR Inteligente", pos: "col-span-1 flex justify-center" },
                  { name: "Integración CRM", pos: "col-span-1 flex justify-center md:justify-end" },
                  
                  { name: "Tecnored", pos: "col-span-1 flex justify-center md:justify-start mt-20" },
                  { name: "Workflow Auditoría", pos: "col-span-1 flex justify-center mt-20 md:mt-32 opacity-0" }, 
                  { name: "Trazabilidad", pos: "col-span-1 flex justify-center mt-20 md:mt-32 opacity-0" }, 
                  { name: "RENAPER", pos: "col-span-1 flex justify-center md:justify-end mt-20" },
                  
                  { name: "APIs externas", pos: "col-span-1 flex justify-center md:justify-start mt-10 md:mt-0" },
                  { name: "Validación documental", pos: "col-span-1 flex justify-center mt-10 md:mt-0" },
                  { name: "Workflow Auditoría", pos: "col-span-1 flex justify-center mt-10 md:mt-0" },
                  { name: "Trazabilidad", pos: "col-span-1 flex justify-center md:justify-end mt-10 md:mt-0" }
                ].map((node, idx) => (
                  <div key={idx} className={`${node.pos} ${node.name.includes("Espaciador") ? 'hidden md:block pointer-events-none' : ''}`}>
                    <div className="flex flex-col items-center group bg-[#050207] p-2 rounded-xl">
                      <div className="w-3 h-3 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300" />
                      <span className="mt-3 text-xs md:text-sm font-medium text-zinc-400 group-hover:text-white transition-colors text-center">{node.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL PREMIUM */}
        <section className="py-32 px-4 relative z-10 overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Lidera la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">automatización</span> en seguros.
            </h2>
            <p className="text-xl text-zinc-400 mb-12">Integra InspeXiona en semanas y transforma radicalmente tu operación técnica y pericial.</p>
            
            <div className="flex justify-center">
              <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                {/* Glow Background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-500" />
                {/* Botón Core */}
                <div className="relative flex items-center gap-3 px-10 py-5 bg-[#0a050b] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-colors">
                  Solicitar Demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(client_content)

print("✅ Modificaciones de InspeXiona aplicadas exitosamente.")
