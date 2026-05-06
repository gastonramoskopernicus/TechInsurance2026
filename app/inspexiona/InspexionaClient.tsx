"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeroShowcase from "../components/HeroShowcase";


export default function InspexionaClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Cero Descargas",
      desc: "Web app accesible desde cualquier navegador móvil. Sin instalaciones engorrosas para el cliente.",
      icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    },
    {
      title: "Captura Guiada",
      desc: "Flujo inteligente que indica exactamente qué fotografías tomar según el tipo de bien a inspeccionar.",
      icon: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>
    },
    {
      title: "Geolocalización",
      desc: "Sellado de coordenadas y tiempo real en cada fotografía para prevenir fraudes.",
      icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>
    },
    {
      title: "Trazabilidad Total",
      desc: "Registro inmutable de cada paso del proceso, metadata extraída e interacciones del usuario.",
      icon: <><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"/><path d="M3 19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/></>
    }
  ];

  const useCases = [
    {
      title: "Inspección Vehicular",
      desc: "Validación del estado de la unidad antes de la emisión de la póliza. Captura guiada de frentes, laterales y daños preexistentes.",
      color: "from-fuchsia-500 to-pink-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
    },
    {
      title: "Hogar",
      desc: "Verificación de condiciones de la propiedad y medidas de seguridad (rejas, alarmas) mediante registro fotográfico.",
      color: "from-indigo-500 to-cyan-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.592 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
    },
    {
      title: "Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento exacto del incidente.",
      color: "from-violet-500 to-fuchsia-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    },
    {
      title: "Maquinaria",
      desc: "Validación de equipos industriales y de construcción. Documentación de números de serie y estado operativo.",
      color: "from-amber-400 to-orange-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.053c.814-1.005.475-2.812-1.051-3.214l-1.105-.292a1.439 1.439 0 00-1.11.233l-1.11.834m-2.121-2.12l1.583-1.584c.338-.338.338-.885 0-1.223L8.647 4.146a.864.864 0 00-1.223 0L5.84 5.73a.864.864 0 000 1.223l3.584 3.584c.338.338.885.338 1.223 0z"/>
    },
    {
      title: "Embarcaciones",
      desc: "Documentación de cascos, motores e instrumental de navegación, validando amarre mediante geolocalización.",
      color: "from-blue-400 to-cyan-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M5 17h14c1.105 0 2 .895 2 2H3c0-1.105.895-2 2-2zm2-4V5c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v8M9 9h6"/>
    },
    {
      title: "Agro",
      desc: "Captura de lotes, maquinaria agrícola y cultivos, combinando fotografías con coordenadas geográficas precisas.",
      color: "from-emerald-400 to-teal-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
    }
  ];

  return (
    <main className="min-h-screen bg-[#020104] text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-fuchsia-900/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Logo Badge */}
            <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center mb-10">
                <Image src="/inspexiona-logo.png" alt="InspeXiona Logo" width={340} height={100} className="drop-shadow-[0_0_40px_rgba(217,70,239,0.2)] object-contain" />
              </div>
            </div>

            <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-8 transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Inspecciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Digitales</span> para Seguros
            </h1>
            
            <p className={`text-xl md:text-2xl text-zinc-400 font-light max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Un módulo nativo de Tech Insurance diseñado para gestionar inspecciones previas y de siniestros mediante flujos guiados, evidencias fotográficas, geolocalización y trazabilidad total.
            </p>

            
          
            {/* FLOATING SAAS COMPOSITION */}
            <div className={`mt-20 mb-8 relative w-full max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative aspect-[16/9] w-full flex items-center justify-center perspective-[1200px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 via-transparent to-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                
                {/* Left Floating Image (Desktop only) */}
                <div className="hidden lg:block absolute z-20 w-[35%] left-0 top-1/4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform -translate-x-12 -translate-y-8 -rotate-y-12 rotate-z-[-2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 transition-all duration-700 ease-out opacity-70 hover:opacity-100 bg-[#0a050b]">
                   <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <img src="/pantallas_inspexiona/screen-2.png" alt="InspeXiona Pantalla Secundaria" className="w-full h-auto mt-6 object-cover" />
                </div>
                
                {/* Right Floating Image (Desktop only) */}
                <div className="hidden lg:block absolute z-20 w-[35%] right-0 bottom-1/4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform translate-x-12 translate-y-8 rotate-y-12 rotate-z-[2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 transition-all duration-700 ease-out opacity-70 hover:opacity-100 bg-[#0a050b]">
                   <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <img src="/pantallas_inspexiona/screen-3.png" alt="InspeXiona Pantalla Secundaria" className="w-full h-auto mt-6 object-cover" />
                </div>

                {/* Main Center Image */}
                <div className="relative z-30 w-[90%] lg:w-[65%] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_100px_rgba(217,70,239,0.25)] bg-[#050207] transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 ease-out">
                  <div className="absolute top-0 left-0 w-full h-8 md:h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  {/* Container for the image to prevent breaking aspect ratio drastically */}
                  <div className="mt-8 md:mt-10 overflow-hidden bg-[#0a050b]">
                     <img src="/pantallas_inspexiona/screen-1.png" alt="InspeXiona Dashboard" className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
</div>
        </section>

        {/* ALCANCE FUNCIONAL */}
        <section className="py-24 px-4 border-t border-fuchsia-900/20 bg-gradient-to-b from-transparent to-[#0a050b]/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Alcance Funcional</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Una suite completa de herramientas diseñadas para transformar la captura de evidencia en un proceso estructurado, seguro y libre de fricciones.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-[#16141a]/60 border border-white/5 backdrop-blur-md hover:bg-[#1b1820] hover:border-fuchsia-500/30 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-fuchsia-950/40 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
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
        <section className="py-24 px-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-900/30 to-transparent -z-10" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-4 block">Flexibilidad</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Casos de Uso</h2>
              </div>
              <p className="text-zinc-400 max-w-md text-right hidden lg:block">
                Diseñado para adaptarse a cualquier línea de negocio y etapa del ciclo de vida de la póliza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                  <div className="relative h-full p-8 md:p-10 rounded-[2rem] bg-[#0a050b] flex flex-col justify-start">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${useCase.color} bg-opacity-10 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
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

        {/* BENEFICIOS & COMPONENTES */}
        <section className="py-24 px-4 bg-[#0a050b]/80 border-t border-b border-fuchsia-900/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Beneficios */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  Beneficios Clave
                </h2>
                <ul className="space-y-4">
                  {[
                    "Reduce dramáticamente los tiempos operativos.",
                    "Disminuye el fraude con geolocalización y metadatos inmutables.",
                    "Mejora la experiencia del cliente (sin apps que descargar).",
                    "Estandariza las capturas fotográficas (flujos estrictos).",
                    "Reduce la dependencia de inspecciones presenciales costosas.",
                    "Facilita la auditoría y la revisión pericial remota."
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="mt-1 w-2 h-2 rounded-full bg-fuchsia-500 flex-shrink-0" />
                      <span className="text-zinc-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Componentes */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  </div>
                  Componentes del Módulo
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web App PWA", "Wizard Guiado", "Geolocalización", 
                    "Panel de Control", "Mis Inspecciones", "Kanban de Validaciones", 
                    "Exportación PDF/ZIP", "Integraciones M2M", "API B2B", 
                    "Event Log / Trazabilidad", "Configurador de Bienes"
                  ].map((comp, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 transition-colors">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 px-4 relative">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Modernice su proceso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">suscripción y siniestros</span>.</h2>
            <p className="text-xl text-zinc-400 mb-12">Contacte a nuestro equipo para descubrir cómo InspeXiona puede transformar su operación en días.</p>
            <div className="flex justify-center gap-4">
              <Link href="/contacto" className="px-10 py-5 bg-white text-black hover:bg-zinc-200 font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Contactar a Kopernicus
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
