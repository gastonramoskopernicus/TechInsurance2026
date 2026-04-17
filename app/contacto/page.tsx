"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactoPage() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('solucion');
  const [enviado, setEnviado] = useState(false);

  const opcionesContacto = [
    { 
      id: 'solucion', 
      label: 'Conocer la Solución', 
      icon: '<path d="M2 12h4l2-9 4 18 2-9h4"/><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>',
      placeholder: 'Contanos qué tipo de producto o iniciativa estás evaluando...' 
    },
    { 
      id: 'tecnico', 
      label: 'Equipo Técnico', 
      icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
      placeholder: 'Describí el contexto técnico o integración que estás analizando...' 
    },
    { 
      id: 'comercial', 
      label: 'Equipo Comercial', 
      icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
      placeholder: 'Contanos qué tipo de oportunidad comercial o pricing requerís...' 
    },
    { 
      id: 'partners', 
      label: 'Partners / Alianzas', 
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      placeholder: 'Queremos conocerte. Detallanos qué tipo de partnership te interesa...' 
    }
  ];

  const opcionActiva = opcionesContacto.find(opt => opt.id === tipoSeleccionado);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Simula una reconexión lógica al CRM
    setTimeout(() => {
      setEnviado(false);
      setTipoSeleccionado('solucion');
      // En un entorno real aquí se resetea todo el formulario (e.target.reset())
    }, 5000);
  };

  return (
    <div className="flex flex-col w-full relative bg-[#020104] min-h-screen">
      {/* 1. HERO - Contacto Dinámico */}
      <section className="relative pt-32 pb-16 border-b border-white/5 px-4 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="relative w-24 h-24 mx-auto mb-10 text-fuchsia-500 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hablemos según <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">lo que necesitás</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Seleccioná el motivo principal de contacto y enrutaremos internamente tu requerimiento al equipo corporativo exacto de Kopernicus.
          </p>
        </div>
      </section>

      {/* FORMULARIO Y SELECTORES */}
      <section className="py-24 px-4 bg-[#050106] border-b border-fuchsia-900/40 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {opcionesContacto.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setTipoSeleccionado(opt.id)}
                className={`group p-6 rounded-2xl border transition-all text-center flex flex-col items-center shadow-lg ${
                  tipoSeleccionado === opt.id 
                    ? 'bg-[#1b081e] border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.15)] -translate-y-2' 
                    : 'bg-[#0f0e11] border-white/5 hover:border-fuchsia-900/50 hover:bg-[#16141a]'
                }`}
              >
                 <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                   tipoSeleccionado === opt.id ? 'text-white bg-fuchsia-600' : 'text-zinc-600 bg-zinc-900 group-hover:text-fuchsia-500'
                 }`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" dangerouslySetInnerHTML={{ __html: opt.icon }}></svg>
                 </div>
                 <h4 className={`text-sm font-bold ${tipoSeleccionado === opt.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                   {opt.label}
                 </h4>
              </button>
            ))}
          </div>

          <div className="bg-[#0a050b] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             
             {enviado ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in fade-in zoom-in duration-500">
                   <div className="w-20 h-20 bg-[#1b081e] border border-fuchsia-500 text-fuchsia-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(217,70,239,0.2)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">Mensaje Recibido</h3>
                   <p className="text-zinc-400 max-w-md mx-auto">Gracias por contactarte. Nuestro equipo <strong className="text-white">({opcionActiva?.label})</strong> procesará la información y se pondrá en contacto a la brevedad.</p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in duration-500 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-400 tracking-wider">Nombre Completo</label>
                      <input required type="text" className="w-full bg-[#16141a] border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fuchsia-500 focus:bg-[#1b081e] transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-400 tracking-wider">Empresa / Institución</label>
                      <input required type="text" className="w-full bg-[#16141a] border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fuchsia-500 focus:bg-[#1b081e] transition-all" placeholder="Compañía Aseguradora S.A." />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-400 tracking-wider">Email Corporativo</label>
                      <input required type="email" className="w-full bg-[#16141a] border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fuchsia-500 focus:bg-[#1b081e] transition-all" placeholder="nombre@empresa.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-400 tracking-wider">Teléfono (Opcional)</label>
                      <input type="tel" className="w-full bg-[#16141a] border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fuchsia-500 focus:bg-[#1b081e] transition-all" placeholder="+54 9 11 0000-0000" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-zinc-400 tracking-wider flex items-center justify-between">
                      <span>Tu Mensaje</span>
                      <span className="text-xs text-fuchsia-500 border border-fuchsia-900/50 bg-fuchsia-950/30 px-3 py-1 rounded-full">Destino: {opcionActiva?.label}</span>
                    </label>
                    <textarea required rows={5} className="w-full bg-[#16141a] border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fuchsia-500 focus:bg-[#1b081e] transition-all resize-none" placeholder={opcionActiva?.placeholder}></textarea>
                  </div>

                  <button type="submit" className="mt-4 w-full md:w-auto self-end bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold text-lg px-12 py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:shadow-[0_0_50px_rgba(217,70,239,0.5)] flex items-center gap-3">
                    Enviar Consulta <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
             )}
          </div>
        </div>
      </section>

    </div>
  );
}
