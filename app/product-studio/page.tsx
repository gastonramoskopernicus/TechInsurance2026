"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductStudioPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col w-full relative bg-[#020104]">
      {/* 1. HERO - Product Studio */}
      <section id="que-es" className="relative pt-36 pb-20 border-b border-white/5 px-4 overflow-hidden scroll-mt-32 min-h-[90vh] flex items-center justify-center">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
        </div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Contenido Izquierda */}
          <div className="flex-1 text-left space-y-8 max-w-xl">
            {/* Logo Product Studio */}
            <div className={`inline-block relative w-28 h-28 mb-2 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <img
                src="/product-studio-logo.svg"
                alt="Product Studio Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              />
            </div>

            <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Core Engine</span>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Studio.</span>
            </h1>

            <div className={`text-zinc-400 font-light leading-relaxed space-y-4 text-base md:text-lg transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p>
                Product Studio es el corazón de Tech Insurance y su principal diferencial frente a soluciones tradicionales del mercado.
              </p>
              <p>
                A diferencia de los esquemas legacy estáticos y costosos, permite la reutilización de lógica, integración extendida y el modelado dinámico de seguros de forma ágil y estructurada.
              </p>
              <p className="font-medium text-white/80">
                Fomenta la autonomía comercial para perfiles no técnicos, sin depender de IT.
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
              <a href="#como-funciona" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-zinc-300 font-bold text-sm hover:bg-white/10 hover:text-white transition-all">
                Ver Funcionamiento
              </a>
            </div>
          </div>

          {/* Visual Derecha - Composición Orbital del Core */}
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

              {/* Etiqueta / Subtítulo explicativo en el fondo */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center z-20 pointer-events-none">
                <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase bg-[#050209]/95 border border-fuchsia-900/30 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  Motor de diseño y parametrización de productos aseguradores
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STICKY NAV PREMIUM (Navegación Interna de PS) */}
      <div className="sticky top-20 z-40 w-full flex justify-center px-4 pointer-events-none mt-8 mb-4">
        <nav className="pointer-events-auto flex items-center space-x-1 overflow-x-auto p-2 bg-gradient-to-r from-[#200e23]/90 via-[#0f0e11]/90 to-black/90 backdrop-blur-xl border border-fuchsia-900/20 rounded-full shadow-[0_10px_40px_rgba(217,70,239,0.1)] hide-scrollbar">
          {[
            { id: 'que-es', label: 'Qué es' },
            { id: 'como-funciona', label: 'Cómo funciona' },
            { id: 'capacidades', label: 'Capacidades' },
            { id: 'modelo', label: 'Modelo' },
            { id: 'ejemplo', label: 'Ejemplo Práctico' },
            { id: 'impacto', label: 'Impacto (ROI)' },
          ].map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm text-zinc-400 font-medium hover:text-white hover:bg-white/5 focus:bg-white/10 active:bg-white/10 transition-all font-semibold"
            >
              <span className="whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-4 bg-[#050106] border-b border-white/5 pt-28 -mt-20 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Flujo Dinámico en <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">5 Pasos</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">Mapeo del ciclo de vida end-to-end, puramente guiado por parámetros comerciales.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Producto', desc: 'Definición del alcance, coberturas, beneficios y exclusiones.', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
              { step: '02', title: 'Reglas', desc: 'Validación, políticas de suscripción, scoring y lógica de negocio.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>' },
              { step: '03', title: 'Variables', desc: 'Incorporación de variables internas, externas y servicios externos.', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
              { step: '04', title: 'Pricing', desc: 'Definición y armado del precio del producto.', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9"/><path d="M12 12l4.24 4.24"/>' },
              { step: '05', title: 'Publicación', desc: 'Disponibilidad en APIs, landings o experiencias de usuario.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 border border-white/5 bg-[#0f0e11] rounded-2xl hover:bg-[#1b081e] hover:border-fuchsia-900/50 transition-all duration-300 flex flex-col relative h-full">
                 <div className="absolute -top-3 -right-3 text-7xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors pointer-events-none">{item.step}</div>
                 <div className="mb-6 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h4>
                 <p className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 relative z-10 leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACIDADES CLAVE */}
      <section id="capacidades" className="py-24 px-4 bg-[#020104] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Capacidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Core</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light">Armamento completo para el diseño de seguros modernos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>', title: 'Modelado Modular', desc: 'Cree plantillas y master-products desacoplados donde coberturas base funcionan como legos totalmente independientes.' },
              { icon: '<path d="M21 2v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/>', title: 'Reutilización Funcional', desc: 'Transfiera y herede lógicas preexistentes para lanzar nuevas iteraciones iterativas con mínima intervención humana.' },
              { icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>', title: 'Productos Compuestos', desc: 'Empaquete capas múltiples (Ej: Vida + Riesgos Especiales) en una experiencia de subscripción unificada.' },
              { icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>', title: 'Variables Dinámicas', desc: 'Parametrice condiciones extremas, micro-tarifas y descuentos in-surance basándose en metadatos al vuelo.' },
              { icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>', title: 'Integración Extendida', desc: 'Inyecte telemetría externa (sensores IoT, geolocalización) al motor actuarial para coberturas paramétricas.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border border-white/5 bg-[#0f0e11] rounded-3xl hover:bg-[#200e23] hover:border-fuchsia-800/40 transition-all duration-300">
                 <div className="mb-6 text-fuchsia-800 group-hover:text-fuchsia-500 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4">
                   {item.title}
                 </h4>
                 <p className="text-zinc-500 text-lg font-light leading-relaxed group-hover:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO DE CONSTRUCCIÓN (ANTES / AHORA) */}
      <section id="modelo" className="py-32 px-4 bg-[#050106] border-b border-white/5 scroll-mt-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Cambio Absoluto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Paradigma</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* ANTES */}
            <div className="p-10 lg:p-14 border border-white/5 bg-[#0a0505] rounded-[2rem] flex flex-col opacity-80 backdrop-grayscale">
               <div className="flex items-center gap-4 mb-10 text-zinc-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-zinc-500">Antes</h4>
               </div>
               <ul className="space-y-8 flex-1">
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Desarrollo manual en código por equipos de ingeniería (Hardcode técnico).</p></li>
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Ciclos de certificación (QA) y deployments dependientes del Core eternos.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-red-500/50 mt-1 font-bold text-xl">⨯</span> <p className="text-zinc-400 text-lg leading-relaxed">Meses, o a veces trimestres completos para posicionar un producto MVP en calle.</p></li>
               </ul>
            </div>
            
            {/* AHORA */}
            <div className="p-10 lg:p-14 border border-fuchsia-500/40 bg-[#1b081e] rounded-[2rem] shadow-[0_0_60px_rgba(217,70,239,0.08)] flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[60px] pointer-events-none" />
               <div className="flex items-center gap-4 mb-10 text-fuchsia-400 relative z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><path d="M12 2L2 22l10-4 10 4L12 2z" strokeLinejoin="round"/></svg>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-white">Ahora</h4>
               </div>
               <ul className="space-y-8 flex-1 relative z-10">
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Configuración puramente visual e intuitiva mediante lógicas ya pre-validadas por el sistema.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Empoderamiento directo: Equipos Comerciales, Pricing y Actuariales asumen total autonomía para innovar.</p></li>
                 <li className="flex gap-4 items-start"><span className="text-fuchsia-500 font-bold mt-1 text-xl">✓</span> <p className="text-fuchsia-100/90 font-medium text-lg leading-relaxed">Días o semanas para lograr un GTM (Go-to-Market) de alto impacto y volumen en multicanal.</p></li>
               </ul>
            </div>
          </div>
        </div>
      </section>


      {/* IMPACTO EN NEGOCIO */}
      <section id="impacto" className="py-32 px-4 bg-[#050106] border-b border-fuchsia-900/30 scroll-mt-32">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Estratégico</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Velocidad', desc: 'Nunca una solución fue tan rápida para desplegar nuevos productos.', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
              { title: 'Libertad Creativa', desc: 'Una herramienta que permite crear, testear y monitorear el desarrollo de productos sin necesidad de conocimiento técnico.', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>' },
              { title: 'Autonomía del Área', desc: 'Departamentos comerciales liberados del cuello de botella y la dependencia del área de IT.', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="8.5" cy="7" r="4"/><path d="M23 11l-6 6-4-4"/>' },
              { title: 'Escalabilidad Multicanal', desc: 'Desde landings, APIs y experiencias ya definidas, permitiendo escalar productos en múltiples canales.', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-[#200523] border border-fuchsia-800/40 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(217,70,239,0.08)] hover:bg-[#310c36] hover:border-fuchsia-500/80 hover:-translate-y-2 transition-all duration-300">
                 <div className="mx-auto mb-6 text-fuchsia-400 w-fit p-4 rounded-full bg-fuchsia-950/40 border border-fuchsia-900/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                 <p className="text-fuchsia-200/70 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
