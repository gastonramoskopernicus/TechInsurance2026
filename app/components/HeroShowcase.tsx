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
  const TOTAL_SCREENS = 8;

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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                <ScreenImage
                   key={num}
                   index={idx}
                   activeIndex={activeScreenIndex}
                   src={`/pantallas/pantalla${num}.png`}
                />
            ))}
         </div>
      </div>
    </div>
  );
}

// Subcomponente de Pantalla Imagen Glassmorphism
function ScreenImage({ index, activeIndex, src }: { index: number, activeIndex: number, src: string }) {
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

  return (
    <div 
      className={`absolute w-[115%] sm:w-[130%] max-w-2xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#0a050f]/60 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${getOpacity()}`}
      style={{
        transform: getTransform(),
        zIndex: 20 - index,
      }}
    >
      <Image 
         src={src} 
         alt={`Tech Insurance Interface ${index + 1}`} 
         fill 
         className="object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100" 
         sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Glare effect suave para mantener el look premium */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
    </div>
  );
}
