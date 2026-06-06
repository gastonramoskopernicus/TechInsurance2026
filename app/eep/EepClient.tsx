"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EepClient() {
  const [mounted, setMounted] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Behavioral Twin",
      desc: "Construye una representación digital dinámica de cada individuo basada en sus interacciones reales.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0 1 10.089 21c-2.902 0-5.54-1.088-7.53-2.873a4.125 4.125 0 0 1 7.53-2.497M14 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6.303 3.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    },
    {
      title: "Eventos Inteligentes",
      desc: "Captura y analiza eventos en tiempo real provenientes de múltiples sistemas y canales.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    },
    {
      title: "Inteligencia Predictiva",
      desc: "Predice el riesgo de abandono, propensión de compra y afinidad de productos con modelos analíticos.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    },
    {
      title: "Automatización",
      desc: "Ejecuta workflows reactivos y acciones automáticas sin intervención manual.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 0M19.5 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
    },
    {
      title: "Comunidades",
      desc: "Comprende la interacción entre clientes, productores y organizaciones dentro de tu ecosistema.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    },
    {
      title: "Engagement Intelligence",
      desc: "Mide el nivel de relación continua y valor a largo plazo de cada individuo y red comercial.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    }
  ];

  const industryEvents = [
    "Cotizaciones", "Emisiones", "Renovaciones", "Endosos", "Reclamos",
    "Siniestros", "Inspecciones", "Pagos", "Mora", "Navegación web",
    "Interacciones digitales", "Actividad de productores", "Aplicaciones móviles"
  ];

  const workflowStages = [
    {
      number: "01",
      title: "Captura de eventos",
      desc: "Integración out-of-the-box con múltiples sistemas de la compañía.",
      items: ["Core de seguros", "CRM", "Portales", "Apps móviles", "WhatsApp", "Contact Center", "Plataformas de inspección", "Sistemas de cobranza", "Marketing", "Redes sociales", "Sistemas externos"]
    },
    {
      number: "02",
      title: "Behavioral Twin",
      desc: "Construye un perfil comportamental dinámico y único para cada individuo.",
      bullets: [
        "Representación digital evolutiva.",
        "Monitoreo continuo de acciones.",
        "Historial comportamental unificado."
      ]
    },
    {
      number: "03",
      title: "Motor Analítico",
      desc: "Inteligencia artificial que evalúa y califica comportamientos al instante.",
      metrics: [
        "Engagement Score", "Riesgo de abandono", "Afinidad de productos",
        "Potencial comercial", "Propensión de compra", "Probabilidad de renovación",
        "Riesgo de mora", "Nivel de actividad", "Influencia en comunidades"
      ]
    },
    {
      number: "04",
      title: "Activación Inteligente",
      desc: "Automatiza acciones inmediatas basadas en la inteligencia del comportamiento.",
      items: ["Alertas en tiempo real", "Campañas personalizadas", "Workflows interactivos", "Notificaciones push", "Recomendaciones dinámicas", "Tareas comerciales auto-generadas", "Eventos automáticos", "Acciones de fidelización"]
    }
  ];

  const casesOfUse = [
    {
      title: "Retención y Renovaciones",
      desc: "Detecte clientes con riesgo de cancelación antes del vencimiento y ejecute acciones preventivas.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.656 48.656 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3-3" />
    },
    {
      title: "Cross Selling y Up Selling",
      desc: "Identifique oportunidades de venta cruzada utilizando comportamiento real y no únicamente reglas estáticas.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
    },
    {
      title: "Productores y Brokers",
      desc: "Analice actividad, productividad y engagement de su red comercial.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    },
    {
      title: "Prevención de Mora",
      desc: "Detecte tempranamente comportamientos asociados a incumplimientos.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    },
    {
      title: "Gestión de Comunidades",
      desc: "Comprenda cómo interactúan clientes, productores y organizaciones dentro del ecosistema.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
    },
    {
      title: "Segmentación Dinámica",
      desc: "Construya audiencias que evolucionan automáticamente según el comportamiento de cada individuo.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    }
  ];

  const premiumCapabilities = [
    {
      title: "Behavioral Twin",
      desc: "Representación digital dinámica de cada individuo."
    },
    {
      title: "Engagement Score",
      desc: "Medición continua de la relación entre la organización y sus comunidades."
    },
    {
      title: "Inteligencia Predictiva",
      desc: "Predicción de abandono, conversión, actividad y crecimiento."
    },
    {
      title: "Comunidades Inteligentes",
      desc: "Detección automática de agrupaciones y patrones."
    },
    {
      title: "Eventos Inteligentes",
      desc: "Generación automática de acciones basadas en comportamientos observados."
    },
    {
      title: "Multiindustria",
      desc: "Arquitectura adaptable para Seguros, Retail, Banca, Salud, Deporte y Fidelización."
    }
  ];

  const results = [
    {
      title: "Más conversión",
      desc: "Identifique oportunidades antes que la competencia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25" />
        </svg>
      )
    },
    {
      title: "Más retención",
      desc: "Anticipe riesgos de abandono.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593" />
          <circle cx="12" cy="9" r="3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16c0-2 2-3 5-3s5 1 5 3" />
        </svg>
      )
    },
    {
      title: "Más conocimiento",
      desc: "Comprenda el comportamiento real de sus clientes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <circle cx="12" cy="19" r="3" />
          <line x1="12" y1="8" x2="5" y2="12" />
          <line x1="12" y1="8" x2="19" y2="12" />
          <line x1="5" y1="12" x2="12" y2="19" />
          <line x1="19" y1="12" x2="12" y2="19" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      )
    },
    {
      title: "Más automatización",
      desc: "Transforme insights en acciones automáticas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <rect x="3" y="3" width="6" height="6" rx="1.5" />
          <rect x="15" y="3" width="6" height="6" rx="1.5" />
          <rect x="9" y="15" width="6" height="6" rx="1.5" />
          <path d="M6 9v3h6m0 0v3M18 9v3h-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Más rentabilidad",
      desc: "Optimice decisiones comerciales y operativas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879-.659c1.546-1.16 3.794-.972 5.13.404L15 15.5M9 9.5l1.621-1.216c1.547-1.16 3.794-.972 5.13.404L15 9.5M12 3v18" />
        </svg>
      )
    }
  ];

  const ecosystemItems = [
    { name: "InspeXiona", x: 30, y: 15 },
    { name: "CRM", x: 75, y: 20 },
    { name: "Core de Seguros", x: 90, y: 45 },
    { name: "Portales", x: 80, y: 75 },
    { name: "Apps Mobile", x: 60, y: 88 },
    { name: "IA", x: 35, y: 85 },
    { name: "Automatización", x: 12, y: 70 },
    { name: "Data Lake", x: 8, y: 45 },
    { name: "BI", x: 15, y: 22 },
    { name: "Analytics", x: 50, y: 10 }
  ];

  return (
    <main className="min-h-screen bg-[#020104] text-white overflow-hidden relative selection:bg-fuchsia-500/30">
      {/* Fondo General del Ecosistema */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-fuchsia-900/10 rounded-full blur-[180px] mix-blend-screen animate-breath" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="pt-36 pb-20 px-4 relative min-h-[90vh] flex items-center justify-center border-b border-white/5">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Contenido Izquierda */}
            <div className="flex-1 text-left space-y-8 max-w-xl">
              <span className="text-fuchsia-400 font-bold tracking-widest uppercase text-sm block">Engagement Ecosystem Platform</span>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Convierta datos en crecimiento.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                  Transforme interacciones en resultados.
                </span>
              </h1>
              
              <div className={`text-zinc-400 font-light leading-relaxed space-y-4 text-base md:text-lg transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p>
                  EEP es una plataforma de inteligencia de engagement diseñada para aseguradoras, brokers, productores y ecosistemas de distribución.
                </p>
                <p>
                  Centraliza eventos, comportamientos e interacciones para construir perfiles dinámicos, predecir oportunidades y ejecutar acciones automáticas que mejoran conversión, retención y rentabilidad.
                </p>
                <p className="font-medium text-white/80">
                  Conozca a sus clientes antes de que tomen una decisión.
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
                <a href="#capacidades" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-zinc-300 font-bold text-sm hover:bg-white/10 hover:text-white transition-all">
                  Conocer Capacidades
                </a>
              </div>
            </div>

            {/* Visual Derecha - Composición Inteligencia de Engagement */}
            <div className={`flex-1 relative w-full max-w-lg aspect-square flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              
              {/* Círculos e irradiaciones orbitales */}
              <div className="absolute w-[90%] h-[90%] rounded-full border border-fuchsia-500/10 border-dashed animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[70%] h-[70%] rounded-full border border-indigo-500/20 animate-[spin_80s_linear_infinite_reverse]" />
              <div className="absolute w-[50%] h-[50%] rounded-full bg-gradient-to-br from-fuchsia-600/5 to-indigo-600/5 blur-xl pointer-events-none" />

              {/* Centro de Inteligencia de Engagement */}
              <div className="absolute z-10 w-24 h-24 rounded-3xl bg-[#08040d] border border-fuchsia-500/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.3)] animate-breath">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-fuchsia-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.808 13.064a8.962 8.962 0 0 1-2.3-2.3" />
                </svg>
                <span className="text-[10px] uppercase tracking-wider text-fuchsia-300 font-bold mt-1">EEP Core</span>
              </div>

              {/* Nodos Periféricos (Eventos, Clientes, Comunidades, etc.) */}
              {[
                { name: "Clientes", angle: 0, icon: "👤", color: "from-fuchsia-500 to-pink-500" },
                { name: "Eventos", angle: 60, icon: "⚡", color: "from-amber-500 to-orange-500" },
                { name: "Productores", angle: 120, icon: "💼", color: "from-blue-500 to-indigo-500" },
                { name: "Comunidades", angle: 180, icon: "🌐", color: "from-teal-500 to-emerald-500" },
                { name: "Dashboards", angle: 240, icon: "📊", color: "from-fuchsia-500 to-indigo-500" },
                { name: "Perfiles Dinámicos", angle: 300, icon: "🧠", color: "from-purple-500 to-pink-500" }
              ].map((node, idx) => {
                const radius = 160; // Píxeles de distancia del centro
                const angleRad = (node.angle * Math.PI) / 180;
                const top = 50 + (radius / 220) * 40 * Math.sin(angleRad);
                const left = 50 + (radius / 220) * 40 * Math.cos(angleRad);

                return (
                  <div
                    key={idx}
                    className="absolute z-20 flex flex-col items-center group cursor-pointer"
                    style={{ top: `${top}%`, left: `${left}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {/* Conector visual (Línea hacia el centro) */}
                    <div className="absolute w-[2px] h-[80px] bg-gradient-to-t from-fuchsia-500/20 to-transparent origin-bottom"
                         style={{
                           bottom: "50%",
                           transform: `rotate(${node.angle - 90}deg)`,
                         }}
                    />
                    
                    {/* Nodo */}
                    <div className={`w-12 h-12 rounded-full bg-[#0d0914] border border-white/10 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 hover:border-fuchsia-500/50 transition-all duration-300`}>
                      <span>{node.icon}</span>
                    </div>

                    <span className="text-[11px] font-semibold text-zinc-400 tracking-wide mt-2 bg-[#020104]/80 px-2 py-0.5 rounded border border-white/5 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                      {node.name}
                    </span>
                  </div>
                );
              })}
              
            </div>

          </div>
        </section>

        {/* 2. SECCIÓN ¿QUÉ ES EEP? */}
        <section className="py-28 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a050b]/40 relative">
          <div className="container mx-auto max-w-6xl">
            
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm block">Arquitectura Inteligente</span>
              <h2 className="text-3xl md:text-5xl font-bold">¿Qué es EEP?</h2>
              <div className="text-zinc-400 text-lg font-light leading-relaxed space-y-4">
                <p>
                  EEP (Engagement Ecosystem Platform) es una plataforma que captura eventos provenientes de múltiples sistemas y canales, los transforma en inteligencia de negocio y permite actuar automáticamente sobre clientes, productores, brokers, terceros y comunidades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                  <div className="p-6 rounded-2xl bg-[#0f0a15]/50 border border-white/5">
                    <span className="text-fuchsia-400 font-bold block mb-2">Comportamiento vs. Contactos</span>
                    <p className="text-sm">A diferencia de un CRM tradicional, EEP no administra contactos. <strong className="text-white font-normal">Analiza comportamientos.</strong></p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0f0a15]/50 border border-white/5">
                    <span className="text-indigo-400 font-bold block mb-2">Conocimiento Continuo vs. Campañas</span>
                    <p className="text-sm">A diferencia de una herramienta de marketing, EEP no ejecuta campañas aisladas. <strong className="text-white font-normal">Construye conocimiento continuo sobre cada individuo y comunidad.</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-[#16141a]/60 border border-white/5 backdrop-blur-md hover:bg-[#1b1820] hover:border-fuchsia-500/20 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-fuchsia-950/40 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                      {feat.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feat.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. SECCIÓN EL DESAFÍO DE LA INDUSTRIA ASEGURADORA */}
        <section className="py-28 px-4 bg-[#050208] border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              
              <div className="flex-1 text-left space-y-6 max-w-xl">
                <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm block">El Desafío Técnico</span>
                <h2 className="text-3xl md:text-5xl font-bold">Millones de eventos. Muy poca inteligencia.</h2>
                <div className="text-zinc-400 font-light leading-relaxed space-y-4">
                  <p>
                    La mayoría de esta información permanece dispersa entre múltiples sistemas heredados y desconectados.
                  </p>
                  <p className="font-semibold text-zinc-300">Como consecuencia directa:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2">
                    <li className="flex items-center gap-2 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Se pierden oportunidades comerciales.
                    </li>
                    <li className="flex items-center gap-2 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Aumenta la tasa de cancelación.
                    </li>
                    <li className="flex items-center gap-2 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Se dificulta anticipar comportamientos.
                    </li>
                    <li className="flex items-center gap-2 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Se reduce la efectividad comercial.
                    </li>
                    <li className="flex items-center gap-2 text-zinc-400 sm:col-span-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Se desaprovecha el conocimiento generado por los datos.
                    </li>
                  </ul>
                  <p className="text-white font-medium pt-4 border-t border-white/5">
                    EEP resuelve este problema consolidando, interpretando y activando tus datos en tiempo real.
                  </p>
                </div>
              </div>

              {/* Eventos Generados Diariamente (Visual Grid) */}
              <div className="flex-1 w-full max-w-md p-8 rounded-[2.5rem] bg-[#0c0914] border border-white/5 relative">
                <div className="absolute top-4 left-6 text-xs text-zinc-500 font-mono">Eventos generados diariamente</div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {industryEvents.map((ev, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#140e1d] border border-white/5 text-zinc-300 hover:text-white hover:border-fuchsia-500/40 hover:bg-[#1a1127] transition-all cursor-default flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                      {ev}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECCIÓN CÓMO FUNCIONA */}
        <section className="py-28 px-4 bg-[#020104] relative">
          <div className="container mx-auto max-w-6xl">
            
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">El Proceso</span>
              <h2 className="text-3xl md:text-5xl font-bold">Cómo Funciona</h2>
              <p className="text-zinc-400 font-light mt-4">Una plataforma de 4 etapas que transforma eventos crudos en activaciones automatizadas e inteligentes.</p>
            </div>

            {/* Selector de Etapas / Flujo Visual */}
            <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
              
              {/* Navegación lateral izquierda */}
              <div className="w-full lg:w-1/3 flex flex-col gap-3 justify-center">
                {workflowStages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`p-6 rounded-2xl text-left border transition-all duration-300 flex items-center gap-4 ${
                      idx === activeStage
                        ? "bg-[#181123] border-fuchsia-500/40 shadow-lg"
                        : "bg-[#0a050b] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <span className={`text-2xl font-black ${idx === activeStage ? "text-fuchsia-400" : "text-zinc-600"}`}>
                      {stage.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-base">{stage.title}</h4>
                      <p className="text-xs text-zinc-400 line-clamp-1">{stage.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Panel de Contenido derecho */}
              <div className="flex-1 p-10 rounded-[2.5rem] bg-[#0c0914] border border-white/5 flex flex-col justify-between min-h-[400px]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-black text-fuchsia-500/20">{workflowStages[activeStage].number}</span>
                    <span className="px-3 py-1 bg-fuchsia-950/40 text-fuchsia-400 text-xs font-bold rounded-full border border-fuchsia-500/20 uppercase">
                      Etapa activa
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-white">{workflowStages[activeStage].title}</h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">{workflowStages[activeStage].desc}</p>

                  {/* Renderizado dinámico según la etapa */}
                  {activeStage === 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-4">
                      {workflowStages[0].items?.map((item, i) => (
                        <div key={i} className="p-3 bg-[#140e1d] border border-white/5 rounded-xl text-xs font-medium text-zinc-300">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStage === 1 && (
                    <div className="space-y-3 pt-4">
                      <p className="text-sm text-zinc-400">
                        EEP construye un perfil comportamental dinámico de cada individuo. Cada cliente, productor o tercero posee una representación digital que evoluciona constantemente según sus acciones e interacciones.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {workflowStages[1].bullets?.map((b, i) => (
                          <div key={i} className="p-4 bg-[#140e1d] border border-white/5 rounded-xl text-xs text-zinc-300 flex flex-col items-center text-center">
                            <span className="text-xl mb-1">🧠</span>
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStage === 2 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-4">
                      {workflowStages[2].metrics?.map((metric, i) => (
                        <div key={i} className="p-3 bg-[#140e1d] border border-white/5 rounded-xl text-xs text-zinc-300 flex items-center gap-2 hover:border-indigo-500/30 transition-all cursor-default">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStage === 3 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-4">
                      {workflowStages[3].items?.map((act, i) => (
                        <div key={i} className="p-3 bg-[#140e1d] border border-white/5 rounded-xl text-xs text-zinc-300 text-center hover:border-fuchsia-500/30 transition-all">
                          {act}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs text-zinc-500">
                  <span>Plataforma EEP</span>
                  <span>Motor de Engagement en tiempo real</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. SECCIÓN CASOS DE USO PARA ASEGURADORAS */}
        <section className="py-28 px-4 bg-[#050208] border-t border-b border-white/5 relative z-10">
          <div className="container mx-auto max-w-6xl">
            
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl text-left">
                <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Aplicabilidad real</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Casos de Uso para Aseguradoras</h2>
              </div>
              <p className="text-zinc-400 max-w-md text-right hidden lg:block">
                Alineado a las necesidades de retención, rentabilidad y conversión de la industria de seguros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {casesOfUse.map((c, idx) => (
                <div key={idx} className="group relative p-8 md:p-10 rounded-[2rem] bg-[#0c0914] border border-white/5 flex flex-col justify-start hover:border-fuchsia-500/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-fuchsia-950/40 text-fuchsia-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        {c.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">{c.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. SECCIÓN CAPACIDADES DIFERENCIALES */}
        <span id="capacidades"></span>
        <section className="py-28 px-4 bg-[#020104] relative">
          <div className="container mx-auto max-w-6xl">
            
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Valor Único</span>
              <h2 className="text-3xl md:text-5xl font-bold">Capacidades Diferenciales</h2>
              <p className="text-zinc-400 font-light mt-4">Nuestra arquitectura e inteligencia analítica marca la diferencia frente a cualquier suite tradicional.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumCapabilities.map((cap, idx) => (
                <div key={idx} className="group relative p-8 rounded-[2rem] bg-gradient-to-br from-[#0c0813] to-[#040207] border border-white/5 hover:border-fuchsia-500/20 transition-all duration-300">
                  <div className="absolute top-4 right-4 text-xs font-mono text-fuchsia-500/30 font-bold group-hover:text-fuchsia-500/60 transition-colors">
                    CAP // {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 pt-2 group-hover:text-fuchsia-300 transition-colors">{cap.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. SECCIÓN ECOSISTEMA TECHINSURANCE */}
        <section className="py-28 px-4 bg-[#050208] border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.02)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Ecosistema Conectado</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Integrado al Ecosistema TechInsurance</h2>
              <p className="text-zinc-400 max-w-xl mx-auto font-light">
                EEP se posiciona como el cerebro de engagement unificado, interconectado bidireccionalmente con todas las herramientas de la suite.
              </p>
            </div>

            {/* Representación Visual del Ecosistema */}
            <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-3xl bg-[#0c0914] border border-white/5 overflow-hidden flex items-center justify-center p-8">
              
              {/* Ondas radiales conectivas */}
              <div className="absolute w-72 h-72 rounded-full border border-fuchsia-500/20 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-500/10 border-dashed animate-[spin_60s_linear_infinite_reverse]" />
              
              {/* EEP Centro */}
              <div className="absolute z-30">
                <div className="w-28 h-28 rounded-full bg-[#050207] border border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.25)] flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 animate-pulse" />
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 z-10">EEP</span>
                </div>
              </div>

              {/* Satélites Orbitantes */}
              {ecosystemItems.map((item, idx) => (
                <div
                  key={idx}
                  className="absolute z-20 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: `${item.y}%`, left: `${item.x}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.8)] mb-1.5" />
                  <span className="text-[10px] md:text-xs font-semibold text-zinc-400 bg-[#020104]/80 px-2 py-0.5 rounded border border-white/5 select-none text-center whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* 8. SECCIÓN BENEFICIOS */}
        <section className="py-28 px-4 bg-[#020104] relative">
          <div className="container mx-auto max-w-6xl">
            
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Retorno de inversión</span>
              <h2 className="text-3xl md:text-5xl font-bold">Resultados Concretos</h2>
              <p className="text-zinc-400 font-light mt-4">Impacto directo sobre las métricas comerciales y de rentabilidad del negocio.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {results.map((r, idx) => (
                <div key={idx} className="group relative p-6 rounded-[1.5rem] bg-[#0c0914] border border-white/5 flex flex-col justify-between text-center hover:border-fuchsia-500/20 hover:bg-[#120e1d] transition-all">
                  <div className="w-full flex justify-center mb-4 group-hover:scale-110 transition-transform">{r.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{r.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 9. CTA FINAL */}
        <section className="py-32 px-4 relative z-10 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#050208] to-[#020104]">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Los datos cuentan historias.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                EEP las transforma en decisiones.
              </span>
            </h2>
            <p className="text-base md:text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubra cómo las aseguradoras están utilizando inteligencia de engagement para aumentar conversión, retención y crecimiento sostenible.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contacto" className="group relative inline-flex items-center justify-center">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-40 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 px-10 py-5 bg-[#0a050b] border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/5 transition-colors">
                  Solicitar Demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
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
