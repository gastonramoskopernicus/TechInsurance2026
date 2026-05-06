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
      title: "Inspección Previa",
      desc: "Validación del estado real del bien antes de la emisión de la póliza. Ideal para onboarding digital de vehículos y propiedades.",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      title: "Inspección de Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento del incidente.",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      title: "Validación Remota",
      desc: "Generación de links seguros y únicos que pueden ser enviados por SMS/WhatsApp al productor, taller o asegurado.",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      title: "Dispositivos Electrónicos",
      desc: "Módulo especializado para validar celulares, notebooks y tablets utilizando los sensores del propio dispositivo.",
      color: "from-emerald-400 to-teal-500"
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
              <div className="inline-flex items-center justify-center p-6 mb-8 rounded-[2rem] bg-[#0a050b]/80 border border-fuchsia-900/30 shadow-[0_0_50px_rgba(217,70,239,0.15)] backdrop-blur-xl">
                <Image src="/inspexiona-logo.svg" alt="InspeXiona Logo" width={240} height={70} className="drop-shadow-lg" />
              </div>
            </div>

            <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-8 transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Inspecciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Digitales</span> para Seguros
            </h1>
            
            <p className={`text-xl md:text-2xl text-zinc-400 font-light max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Un módulo nativo de Tech Insurance diseñado para gestionar inspecciones previas y de siniestros mediante flujos guiados, evidencias fotográficas, geolocalización y trazabilidad total.
            </p>

            <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="https://inspexiona.techinsurance.com.ar" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:shadow-[0_0_50px_rgba(217,70,239,0.5)] hover:-translate-y-1 flex items-center gap-2">
                Ver módulo InspeXiona
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
              <Link href="/contacto" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-2xl transition-all hover:-translate-y-1">
                Solicitar demo
              </Link>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                  <div className="relative h-full p-8 md:p-10 rounded-[2rem] bg-[#0a050b] flex flex-col justify-center">
                    <div className={`w-3 h-3 rounded-full mb-6 bg-gradient-to-r ${useCase.color}`} />
                    <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{useCase.desc}</p>
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
