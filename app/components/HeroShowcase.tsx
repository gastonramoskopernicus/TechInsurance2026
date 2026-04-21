"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function HeroShowcase() {
  const [phase, setPhase] = useState<'logo' | 'screens'>('logo');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const LOGO_DURATION = 3500;
  const SCREEN_CYCLE_DURATION = 4000;
  const TOTAL_SCREENS = 3;

  useEffect(() => {
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
    if (isPaused) return;

    let timeout: NodeJS.Timeout;
    
    if (phase === 'logo') {
      timeout = setTimeout(() => {
        setPhase('screens');
        setActiveScreenIndex(0);
      }, LOGO_DURATION);
    } else if (phase === 'screens') {
      timeout = setTimeout(() => {
        if (activeScreenIndex < TOTAL_SCREENS - 1) {
          setActiveScreenIndex(prev => prev + 1);
        } else {
          setPhase('logo');
        }
      }, SCREEN_CYCLE_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [phase, activeScreenIndex, isPaused]);

  return (
    <div 
      ref={containerRef}
      className="relative flex justify-center items-center w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] mb-6 z-20 group perspective-[1000px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fase 1: Logo */}
      <div 
        className={`absolute inset-0 flex justify-center items-center transition-all duration-[1200ms] ease-in-out ${
          phase === 'logo' 
            ? 'opacity-100 scale-100 blur-0' 
            : 'opacity-0 scale-[0.9] blur-md pointer-events-none'
        }`}
      >
        <div className="w-full h-full relative animate-breath drop-shadow-[0_0_25px_rgba(217,70,239,0.2)]">
          <Image 
            src="/logo.svg" 
            alt="Tech Insurance Official Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Fase 2: Pantallas Flotantes */}
      <div 
        className={`absolute inset-0 flex justify-center items-center transition-all duration-[1200ms] ease-in-out ${
          phase === 'screens' 
            ? 'opacity-100 scale-100 blur-0' 
            : 'opacity-0 scale-[1.05] blur-md pointer-events-none'
        }`}
      >
         <div className="relative w-full h-full flex items-center justify-center translate-x-4">
            <DashboardMock 
               index={0} 
               activeIndex={activeScreenIndex} 
               title="Product Builder" 
               color="fuchsia"
               stats={["2.4x", "+45%"]} 
            />
            <DashboardMock 
               index={1} 
               activeIndex={activeScreenIndex} 
               title="Channel Rules API" 
               color="blue"
               stats={["99.9%", "Activo"]} 
            />
            <DashboardMock 
               index={2} 
               activeIndex={activeScreenIndex} 
               title="Partner Connect" 
               color="purple"
               stats={["145", "Nodos"]} 
            />
         </div>
      </div>
    </div>
  );
}

// Subcomponente de Pantalla SaaS Glassmorphism
function DashboardMock({ index, activeIndex, title, color, stats }: { index: number, activeIndex: number, title: string, color: string, stats: string[] }) {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  const offset = index - activeIndex;
  
  const getTransform = () => {
    if (isActive) return 'translateZ(0px) translateX(0px) scale(1) rotateY(0deg)';
    if (isPast) return 'translateZ(-200px) translateX(-60px) scale(0.8) rotateY(-15deg)';
    // Futuras
    return `translateZ(-${offset * 80}px) translateX(${offset * 40}px) scale(${1 - offset * 0.05}) rotateY(${offset * 8}deg)`;
  };

  const getOpacity = () => {
    if (isActive) return 'opacity-100';
    if (isPast) return 'opacity-0';
    return 'opacity-[0.85]';
  };

  const colorVariants = {
    fuchsia: 'from-fuchsia-500/10 to-pink-500/5 border-fuchsia-500/30 shadow-fuchsia-500/20 text-fuchsia-400',
    blue: 'from-sky-500/10 to-blue-500/5 border-sky-500/30 shadow-sky-500/20 text-sky-400',
    purple: 'from-purple-500/10 to-indigo-500/5 border-purple-500/30 shadow-purple-500/20 text-purple-400',
  };
  
  const currentVariant = colorVariants[color as keyof typeof colorVariants];

  return (
    <div 
      className={`absolute w-[115%] sm:w-[130%] max-w-2xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#0a050f]/80 backdrop-blur-2xl border ${currentVariant} shadow-2xl p-4 sm:p-5 flex flex-col gap-4 overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${getOpacity()}`}
      style={{
        transform: getTransform(),
        zIndex: 10 - index,
      }}
    >
      {/* Navbar de la App */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 opacity-60">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-80">{title}</span>
        </div>
        <div className="h-5 w-12 bg-white/5 rounded-full" />
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 flex gap-4">
        {/* Sidebar Mini */}
        <div className="w-12 sm:w-16 border-r border-white/5 flex flex-col gap-3 py-2">
          <div className="w-full h-6 bg-white/20 rounded-md animate-pulse" />
          <div className="w-full h-6 bg-white/5 rounded-md" />
          <div className="w-full h-6 bg-white/5 rounded-md" />
          <div className="w-full h-6 bg-white/5 rounded-md mt-auto" />
        </div>
        
        {/* Work Area */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3 h-14 sm:h-20">
            <div className="flex-1 bg-white/[0.03] rounded-lg border border-white/5 p-3 flex flex-col justify-center">
              <span className="text-[10px] text-zinc-500 uppercase">Impacto</span>
              <span className="text-white font-bold text-base sm:text-xl">{stats[0]}</span>
            </div>
            <div className="flex-1 bg-white/[0.03] rounded-lg border border-white/5 p-3 flex flex-col justify-center">
              <span className="text-[10px] text-zinc-500 uppercase">Status</span>
              <span className="text-white font-bold text-base sm:text-xl">{stats[1]}</span>
            </div>
          </div>
          
          {/* Chart Area Abstracta */}
          <div className="flex-1 relative w-full bg-gradient-to-t from-white/[0.02] to-transparent rounded-lg border border-white/5 overflow-hidden flex items-end">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute inset-0 opacity-40">
              <path d="M0,40 L10,25 L20,30 L30,15 L40,25 L50,10 L60,18 L70,5 L80,15 L90,2 L100,20 L100,40 Z" fill="currentColor" className="opacity-10" />
              <polyline points="0,40 10,25 20,30 30,15 40,25 50,10 60,18 70,5 80,15 90,2 100,20" fill="none" stroke="currentColor" className="stroke-[0.3]" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-cosmic-drift pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
