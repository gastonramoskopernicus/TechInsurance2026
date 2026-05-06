"use client";

import { useState } from "react";

export default function InspeccionesDemo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full flex-1 flex flex-col relative bg-[#020104]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#020104]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#020104]/50 backdrop-blur-sm">
           <div className="w-16 h-16 border-4 border-fuchsia-500/20 border-t-fuchsia-500 rounded-full animate-spin mb-4" />
           <p className="text-zinc-400 font-medium tracking-wide animate-pulse">Cargando Plataforma de Inspecciones...</p>
        </div>
      )}

      {/* Full width/height Iframe */}
      <div className="relative z-20 flex-1 w-full h-full min-h-[calc(100vh-128px)]">
        <iframe 
          src="https://inspexiona.techinsurance.com.ar/"
          className="w-full h-full absolute inset-0 border-none bg-transparent"
          title="InspeXiona Demo"
          onLoad={() => setIsLoading(false)}
          allow="camera; microphone; geolocation"
        />
      </div>
    </div>
  );
}
