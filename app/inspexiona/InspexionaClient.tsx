"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const screens = [
  "/pantallas_inspexiona/screen-4.png", // Seleccione Tipo de Bien (Principal)
  "/pantallas_inspexiona/screen-2.png",
  "/pantallas_inspexiona/screen-3.png",
  "/pantallas_inspexiona/screen-5.png",
  "/pantallas_inspexiona/screen-6.png",
];

export default function InspexionaClient() {
  const [mounted, setMounted] = useState(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const TOTAL_SCREENS = screens.length;
  const SCREEN_CYCLE_DURATION = 4000;

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPaused(false);
        } else {
          setIsPaused(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !mounted) return;
    const timeout = setTimeout(() => {
      setActiveScreenIndex(prev => (prev + 1) % TOTAL_SCREENS);
    }, SCREEN_CYCLE_DURATION);
    return () => clearTimeout(timeout);
  }, [activeScreenIndex, isPaused, mounted, TOTAL_SCREENS]);

  const features = [
    {
      title: "Cero Descargas",
      desc: "Web app accesible desde cualquier navegador móvil. Sin instalaciones engorrosas para el cliente.",
      icon: <><text x="12" y="16" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">0</text><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/></>
    },
    {
      title: "Captura Guiada",
      desc: "Flujo inteligente que indica exactamente qué fotografías y videos tomar según el tipo de bien a inspeccionar.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>
    },
    {
      title: "Geolocalización",
      desc: "Sellado de coordenadas y tiempo real en cada fotografía y video para prevenir fraudes.",
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
      iconFile: "/iconos_inspexiona/Automoviles.png"
    },
    {
      title: "Embarcaciones",
      desc: "Documentación de cascos, motores e instrumental de navegación, validando amarre mediante geolocalización.",
      iconFile: "/iconos_inspexiona/Embarcaciones.png"
    },
    {
      title: "Hogar",
      desc: "Verificación de condiciones de la propiedad y medidas de seguridad (rejas, alarmas) mediante registro fotográfico y de video.",
      iconFile: "/iconos_inspexiona/Hogar.png"
    },
    {
      title: "Fábrica / Industria",
      desc: "Validación de equipos industriales y de construcción. Documentación de números de serie y estado operativo.",
      iconFile: "/iconos_inspexiona/Fabrica.png"
    },
    {
      title: "Salud / Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento exacto del incidente.",
      iconFile: "/iconos_inspexiona/Salud.png"
    },
    {
      title: "Otros",
      desc: "Arquitectura flexible para adaptarse a cualquier línea de negocio, desde seguros de mascotas hasta agro.",
      iconFile: "/iconos_inspexiona/Otros.png"
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
        {/* 1. HERO SECTION */}
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

            {/* Visual Derecha - Celular Premium Mockup */}
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
            </div>

          </div>
        </section>

        {/* 2. SECCIÓN SCREENSHOTS DE LA APP */}
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

        {/* CASOS DE USO (Iconografía Provista y Coloreada con Mask) */}
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
                <div key={idx} className="group relative p-8 md:p-10 rounded-[2rem] bg-[#0a050b] border border-white/5 flex flex-col justify-start hover:border-fuchsia-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icono de imagen con Mask en Magenta (#d946ef es fuchsia-500 de Tailwind) */}
                    <div className="w-20 h-20 flex items-center justify-center bg-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] flex-shrink-0" 
                         style={{
                           WebkitMaskImage: `url('${useCase.iconFile}')`,
                           WebkitMaskSize: 'contain',
                           WebkitMaskRepeat: 'no-repeat',
                           WebkitMaskPosition: 'center',
                           maskImage: `url('${useCase.iconFile}')`,
                           maskSize: 'contain',
                           maskRepeat: 'no-repeat',
                           maskPosition: 'center'
                         }}
                    />
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-base leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOSISTEMA Y COMPONENTES DEL MÓDULO (Sistema Orbital) */}
        <section className="py-32 px-4 bg-[#020104] relative overflow-hidden z-10 border-t border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-24">
              <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm mb-4 block">Interoperabilidad</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ecosistema Integrado</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Más que una app de fotos, InspeXiona es un motor de validación interconectado a tu ecosistema tecnológico.</p>
            </div>

            {/* Diseño Orbital */}
            <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-video flex items-center justify-center">
              
              {/* Círculos Orbitantes de Fondo */}
              <div className="absolute w-[60%] h-[60%] md:w-[500px] md:h-[500px] rounded-full border border-fuchsia-500/20 border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] md:w-[700px] md:h-[700px] rounded-full border border-fuchsia-500/10 border-dashed animate-[spin_80s_linear_infinite_reverse]" />
              <div className="absolute w-[100%] h-[100%] md:w-[900px] md:h-[900px] rounded-full border border-indigo-500/10 border-dashed animate-[spin_100s_linear_infinite]" />

              {/* Centro: InspeXiona Core X */}
              <div className="absolute z-30 flex items-center justify-center">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#050207] border border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.25)] flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 animate-pulse" />
                   <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 z-10">X</span>
                 </div>
              </div>

              {/* Satélites */}
              {/* Calculamos posiciones fijas en CSS usando porcentajes para 10 elementos.
                  La distribución aproximada en un círculo de radio r:
                  top = 50% - r * cos(theta), left = 50% + r * sin(theta)
               */}
              {[
                { name: "Integración ERP", top: "10%", left: "50%" },
                { name: "Integración CRM", top: "18%", left: "75%" },
                { name: "Tecnored", top: "40%", left: "90%" },
                { name: "RENAPER", top: "65%", left: "85%" },
                { name: "OCR Inteligente", top: "85%", left: "65%" },
                { name: "Motor M2M", top: "85%", left: "35%" },
                { name: "Workflow Auditoría", top: "65%", left: "15%" },
                { name: "APIs externas", top: "40%", left: "10%" },
                { name: "Validación documental", top: "18%", left: "25%" },
                { name: "Trazabilidad", top: "50%", left: "110%", hiddenMobile: true }, // Extra node adjustments
              ].map((node, idx) => (
                <div key={idx} 
                     className={`absolute z-20 flex flex-col items-center justify-center w-28 md:w-32 transform -translate-x-1/2 -translate-y-1/2 ${node.hiddenMobile ? 'hidden md:flex' : ''}`}
                     style={{ top: node.top, left: node.left }}
                >
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.8)] mb-2" />
                  <span className="text-xs md:text-sm font-medium text-zinc-300 text-center leading-tight bg-[#020104]/80 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                    {node.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL PREMIUM */}
        <section className="py-32 px-4 relative z-10 overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              La plataforma de inspecciones para <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">aseguradoras, intermediarios y clientes</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12">
              Transformar radicalmente la operación técnica y pericial de la compañía. Empieza a utilizar InspeXiona hoy.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                {/* Glow Background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-500" />
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
