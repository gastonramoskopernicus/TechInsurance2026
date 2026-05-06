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
      title: "Inspección Vehicular",
      desc: "Validación del estado de la unidad antes de la emisión de la póliza. Captura guiada de frentes, laterales y daños.",
      color: "from-fuchsia-500 to-pink-500",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H5a2 2 0 0 0-2 2v7.2"/><circle cx="7" cy="16.5" r="2.5"/><circle cx="17" cy="16.5" r="2.5"/></>
    },
    {
      title: "Hogar",
      desc: "Verificación de condiciones de la propiedad y medidas de seguridad (rejas, alarmas) mediante registro fotográfico.",
      color: "from-indigo-500 to-cyan-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />
    },
    {
      title: "Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento exacto del incidente.",
      color: "from-violet-500 to-fuchsia-500",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M12 9v4M12 17h.01"/></>
    },
    {
      title: "Maquinaria",
      desc: "Validación de equipos industriales y de construcción. Documentación de números de serie y estado operativo.",
      color: "from-amber-400 to-orange-500",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>
    },
    {
      title: "Embarcaciones",
      desc: "Documentación de cascos, motores e instrumental de navegación, validando amarre mediante geolocalización.",
      color: "from-blue-400 to-cyan-500",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path strokeLinecap="round" strokeLinejoin="round" d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6M12 10v4"/></>
    },
    {
      title: "Agro",
      desc: "Captura de lotes, maquinaria agrícola y cultivos, combinando fotografías con coordenadas geográficas precisas.",
      color: "from-emerald-400 to-teal-500",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>
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
              <div className="inline-flex items-center justify-center mb-10">
                <Image src="/inspexiona-logo.png" alt="InspeXiona Logo" width={300} height={90} className="drop-shadow-[0_0_30px_rgba(217,70,239,0.25)] object-contain" />
              </div>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Inspecciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Digitales</span> para Seguros
            </h1>
            
            <p className={`text-lg md:text-xl lg:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Plataforma AI y Módulo Nativo para gestionar inspecciones previas y siniestros con flujos guiados, evidencias irrefutables y trazabilidad total.
            </p>

            {/* FLOATING SAAS COMPOSITION (Ecosistema) */}
            <div className={`mt-20 relative w-full max-w-5xl mx-auto transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative aspect-[16/10] md:aspect-[21/9] w-full flex items-center justify-center perspective-[1500px]">
                
                {/* Back screens (Small) */}
                <div className="hidden md:block absolute z-10 w-[22%] left-[5%] top-[10%] rounded-xl overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] transform -rotate-y-12 -translate-z-20 opacity-40 bg-[#0a050b]">
                   <img src="/pantallas_inspexiona/screen-2.png" alt="Screen 2" className="w-full h-auto object-cover opacity-60" />
                </div>
                <div className="hidden md:block absolute z-10 w-[22%] right-[5%] bottom-[10%] rounded-xl overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)] transform rotate-y-12 -translate-z-20 opacity-40 bg-[#0a050b]">
                   <img src="/pantallas_inspexiona/screen-3.png" alt="Screen 3" className="w-full h-auto object-cover opacity-60" />
                </div>

                {/* Mid screens */}
                <div className="hidden sm:block absolute z-20 w-[28%] left-[12%] bottom-[15%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform -rotate-y-6 rotate-z-[-2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 hover:scale-105 transition-all duration-500 ease-out opacity-70 hover:opacity-100 bg-[#0a050b] group">
                   <div className="absolute top-0 left-0 w-full h-5 bg-white/5 border-b border-white/5 flex items-center px-2 gap-1 backdrop-blur-md z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" /><div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                   </div>
                   <div className="absolute inset-0 bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10 pointer-events-none" />
                   <img src="/pantallas_inspexiona/screen-5.png" alt="Screen 5" className="w-full h-auto mt-5 object-cover" />
                </div>
                
                <div className="hidden sm:block absolute z-20 w-[28%] right-[12%] top-[15%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform rotate-y-6 rotate-z-[2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 hover:scale-105 transition-all duration-500 ease-out opacity-70 hover:opacity-100 bg-[#0a050b] group">
                   <div className="absolute top-0 left-0 w-full h-5 bg-white/5 border-b border-white/5 flex items-center px-2 gap-1 backdrop-blur-md z-10">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" /><div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                   </div>
                   <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10 pointer-events-none" />
                   <img src="/pantallas_inspexiona/screen-6.png" alt="Screen 6" className="w-full h-auto mt-5 object-cover" />
                </div>

                {/* Main Center Image - Seleccione Tipo de Bien */}
                <div className="relative z-30 w-[85%] sm:w-[50%] md:w-[40%] rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_100px_rgba(217,70,239,0.3)] bg-[#050207] transform hover:scale-[1.05] hover:-translate-y-4 transition-all duration-700 ease-out group">
                  <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-white/10 border-b border-white/10 flex items-center px-3 gap-1.5 backdrop-blur-xl z-20">
                    <div className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                  <div className="mt-6 md:mt-8 overflow-hidden bg-[#0a050b] relative z-0">
                     <img src="/pantallas_inspexiona/screen-4.png" alt="InspeXiona Tipo de Bien" className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="hidden md:flex absolute z-40 top-[30%] left-[25%] px-3 py-1.5 bg-black/60 backdrop-blur-md border border-fuchsia-500/30 rounded-full text-xs font-medium text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.2)] animate-[bounce_4s_infinite]">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 mr-2 animate-pulse mt-1" /> M2M Engine
                </div>
                <div className="hidden md:flex absolute z-40 bottom-[30%] right-[25%] px-3 py-1.5 bg-black/60 backdrop-blur-md border border-indigo-500/30 rounded-full text-xs font-medium text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)] animate-[bounce_5s_infinite_reverse]">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse mt-1" /> Validaciones AI
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
                <div key={idx} className="p-8 rounded-[2rem] bg-[#16141a]/60 border border-white/5 backdrop-blur-md hover:bg-[#1b1820] hover:border-fuchsia-500/30 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-fuchsia-950/40 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all">
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
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-900/30 to-transparent -z-10" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-4 block">Versatilidad</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Casos de Uso</h2>
              </div>
              <p className="text-zinc-400 max-w-md text-right hidden lg:block">
                Arquitectura flexible para adaptarse a cualquier línea de negocio y etapa del ciclo de vida de la póliza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                  <div className="relative h-full p-8 md:p-10 rounded-[2rem] bg-[#0a050b] flex flex-col justify-start">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${useCase.color} bg-opacity-10 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform`}>
                         <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                           {useCase.icon}
                         </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOSISTEMA Y COMPONENTES DEL MÓDULO */}
        <section className="py-24 px-4 bg-[#050207] border-t border-b border-white/5 relative overflow-hidden z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Interoperabilidad</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ecosistema Integrado</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Más que una app de fotos, InspeXiona es un motor de validación interconectado a tu ecosistema tecnológico.</p>
            </div>

            {/* Malla de Ecosistema */}
            <div className="relative w-full max-w-4xl mx-auto py-12">
              {/* Conectores SVG Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                 <path d="M 50% 50% L 20% 20% M 50% 50% L 80% 20% M 50% 50% L 20% 80% M 50% 50% L 80% 80% M 50% 50% L 10% 50% M 50% 50% L 90% 50%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                 <defs>
                   <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#d946ef" />
                     <stop offset="100%" stopColor="#6366f1" />
                   </linearGradient>
                 </defs>
              </svg>

              {/* Centro: InspeXiona Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0a050b] border-2 border-fuchsia-500/50 shadow-[0_0_50px_rgba(217,70,239,0.3)] flex items-center justify-center p-4">
                   <Image src="/inspexiona-logo.png" alt="Core" width={100} height={40} className="object-contain drop-shadow-md" />
                 </div>
              </div>

              {/* Nodos Orbitantes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 relative z-10">
                {[
                  { name: "Integración ERP", icon: "M20 7h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 4h6v3H9V4z", pos: "col-span-1 flex justify-center" },
                  { name: "OCR Inteligente", icon: "M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 8h10v8H7z", pos: "col-span-1 md:col-start-3 flex justify-center" },
                  { name: "RENAPER API", icon: "M10 21v-6.5A3.5 3.5 0 0 1 13.5 11h0A3.5 3.5 0 0 1 17 14.5V21M21 21v-7M3 21v-7M7 21v-7M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", pos: "col-span-1 flex justify-start md:justify-center mt-12 md:mt-0" },
                  { name: "Integración CRM", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", pos: "col-span-1 md:col-start-3 flex justify-end md:justify-center mt-12 md:mt-0" },
                  { name: "Motor M2M", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", pos: "col-span-1 flex justify-center mt-8 md:mt-24" },
                  { name: "Workflow Auditoría", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", pos: "col-span-1 md:col-start-3 flex justify-center mt-8 md:mt-24" },
                ].map((node, idx) => (
                  <div key={idx} className={`${node.pos}`}>
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-zinc-400 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d={node.icon} />
                        </svg>
                      </div>
                      <span className="mt-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center w-28">{node.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Listado de Beneficios Complementarios */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 "Web App PWA", "Geolocalización", "Panel de Control", "Mis Inspecciones",
                 "Kanban de Validaciones", "Exportación PDF/ZIP", "APIs B2B Públicas", "Trazabilidad Blockchain"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                   <span className="text-zinc-300 text-sm font-medium">{item}</span>
                 </div>
               ))}
            </div>

          </div>
        </section>

        {/* CTA FINAL PREMIUM */}
        <section className="py-32 px-4 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Lidera la <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">automatización</span> en seguros.
            </h2>
            <p className="text-xl text-zinc-400 mb-12">Integra InspeXiona en semanas y transforma radicalmente tu operación técnica y pericial.</p>
            
            <div className="flex justify-center">
              <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                {/* Glow Background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
                {/* Botón Core */}
                <div className="relative flex items-center gap-3 px-10 py-5 bg-[#0a050b] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-colors">
                  Solicitar Demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-zinc-500 text-sm font-medium">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Despliegue Rápido</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> API Restful</span>
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> Marca Blanca</span>
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

print("✅ Landing InspeXiona refactorizada exitosamente con UI Premium.")
