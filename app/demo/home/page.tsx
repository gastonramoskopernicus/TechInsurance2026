import Link from "next/link";
import Image from "next/image";

export default function DemoHome() {
  const secondaryOptions = [
    {
      title: "Product Studio",
      desc: "Motor paramétrico y configuración de productos vivos.",
      href: "#",
      icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
    },
    {
      title: "Canales & Distribución",
      desc: "Gestión B2B, front-ends marca blanca y API.",
      href: "#",
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
      title: "Data & Inteligencia",
      desc: "Integración de oráculos y telemática externa.",
      href: "#",
      icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'
    },
    {
      title: "Ecosistema",
      desc: "InspeXiona, Xplorer y Hub de APIs extendido.",
      href: "#",
      icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="5" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="19" r="3"/><path d="M18 5L12 12"/><path d="M6 5L12 12"/><path d="M12 12L12 19"/>'
    }
  ];

  return (
    <div className="flex flex-col w-full relative bg-[#020104] p-4 py-20 min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background - Deep Space Continuity */}
      <div className="absolute inset-0 z-0 bg-[#020104]" />
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
         <Image src="/hero-cosmic-bg.png" alt="Cosmic Layer" fill className="object-cover object-bottom" priority quality={80} />
      </div>
      
      {/* Floating Nebula Effects */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-fuchsia-900/20 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[180px] pointer-events-none z-0 mix-blend-screen" />

      <div className="container mx-auto max-w-6xl relative z-10 flex-1 flex flex-col justify-center">
        
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[50px] -z-10" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Bienvenido, admin</h1>
          <p className="text-xl text-zinc-400 font-light">Ecosistema operativo desplegado. Seleccione un módulo a explorar.</p>
        </div>

        {/* Central Component: ZeroClick (The Sun/Core of our system) */}
        <div className="flex justify-center mb-16 relative mt-10">
           <a 
              href="https://ti-zeroclick.kopernicus.tech/security/login" 
              className="group relative flex flex-col items-center justify-center p-12 md:p-16 bg-[#1b081e]/80 backdrop-blur-xl border border-fuchsia-500/50 rounded-[3.5rem] shadow-[0_0_80px_rgba(217,70,239,0.3)] hover:shadow-[0_0_120px_rgba(217,70,239,0.5)] hover:border-fuchsia-400 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 z-20 w-full max-w-2xl text-center"
           >
              {/* Outer Core Glow */}
              <div className="absolute inset-0 rounded-[3.5rem] bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="mb-6 text-fuchsia-100 group-hover:text-white transition-colors duration-300 w-24 h-24 bg-gradient-to-br from-fuchsia-600 to-fuchsia-900 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.7)] group-hover:shadow-[0_0_80px_rgba(217,70,239,0.9)] border border-fuchsia-400/50">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight group-hover:text-fuchsia-50 transition-colors">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">ZeroClick</span> Experience
              </h2>
              <p className="text-fuchsia-200/80 font-light text-lg md:text-xl max-w-md">Experiencia de seguros embebidos sin fricción.</p>
           </a>
           
           {/* Orbit lines behind ZeroClick */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-fuchsia-900/30 rounded-full z-0 pointer-events-none border-dashed animate-[spin_100s_linear_infinite]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-fuchsia-900/10 rounded-full z-0 pointer-events-none border-dashed animate-[spin_150s_linear_infinite_reverse]" />
        </div>

        {/* Orbiting Satellites (Other Modules) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-6xl mx-auto w-full">
          {secondaryOptions.map((opt, idx) => (
            <Link 
              key={idx} 
              href={opt.href}
              className="group p-6 border border-white/5 bg-[#0a050b]/60 backdrop-blur-md rounded-[2rem] hover:bg-[#16141a]/80 hover:border-fuchsia-900/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col items-center text-center opacity-80 hover:opacity-100"
            >
               <div className="mb-4 text-zinc-500 group-hover:text-fuchsia-400 transition-colors duration-300 w-12 h-12 p-2.5 bg-white/5 rounded-2xl flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" dangerouslySetInnerHTML={{ __html: opt.icon }}></svg>
               </div>
               <h4 className="text-base font-bold text-zinc-200 mb-2">{opt.title}</h4>
               <p className="text-zinc-600 font-light text-xs leading-relaxed">{opt.desc}</p>
            </Link>
          ))}
        </div>

        {/* ONE INSURANCE BLOCK */}
        <div className="mt-28 w-full relative z-10 max-w-6xl mx-auto border-t border-fuchsia-900/30 pt-20">
          <div className="text-center mb-12 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-fuchsia-600/10 rounded-full blur-[60px] -z-10" />
             <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-950/30 mb-4 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
                <span className="text-fuchsia-400 font-bold text-xs tracking-[0.2em] uppercase">Ecosistema Específico</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
               One <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Insurance</span>
             </h3>
             <p className="text-zinc-400 font-light text-lg">Solución implementada y flujos de país con acceso directo a paneles de control.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* 1. Administración */}
             <a href="https://oneinsurance.kopernicus.tech/security/login" target="_blank" rel="noopener noreferrer" className="group p-8 border border-white/5 bg-[#0f0e11]/80 backdrop-blur-md rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-500/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                <div className="mb-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors duration-300 w-14 h-14 p-3 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Administración</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 flex-1">Panel administrativo de gestión de la plataforma.</p>
                <div className="w-full pt-4 border-t border-white/10 mt-auto">
                   <div className="flex justify-between items-center text-xs text-zinc-400">
                      <span>User: <strong className="text-fuchsia-300 font-medium">admin</strong></span>
                      <span>Pass: <strong className="text-fuchsia-300 font-medium">123123123</strong></span>
                   </div>
                </div>
             </a>

             {/* 2. Usuario Dealer */}
             <a href="https://oneinsurance.kopernicus.tech/security/login" target="_blank" rel="noopener noreferrer" className="group p-8 border border-white/5 bg-[#0f0e11]/80 backdrop-blur-md rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-500/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                <div className="mb-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors duration-300 w-14 h-14 p-3 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">Dealer / Campañas</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 flex-1">Panel de administración de campañas con visualización de métricas.</p>
                <div className="w-full pt-4 border-t border-white/10 mt-auto">
                   <div className="flex justify-between items-center text-xs text-zinc-400">
                      <span>User: <strong className="text-fuchsia-300 font-medium">kps</strong></span>
                      <span>Pass: <strong className="text-fuchsia-300 font-medium">123123123</strong></span>
                   </div>
                </div>
             </a>

             {/* 3. Flujo Chile */}
             <a href="https://kps.kopernicus.tech/" target="_blank" rel="noopener noreferrer" className="group p-8 border border-white/5 bg-[#0f0e11]/80 backdrop-blur-md rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-500/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                <div className="mb-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors duration-300 w-14 h-14 p-3 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Flujo Chile</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 flex-1">Experiencia comercial desplegada para el mercado chileno.</p>
                <div className="w-full pt-4 border-t border-white/10 mt-auto flex justify-center">
                   <span className="text-xs text-fuchsia-500/50 group-hover:text-fuchsia-400 flex items-center gap-1 transition-colors font-medium">Acceder Portal <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
             </a>

             {/* 4. Flujo Colombia */}
             <a href="https://kps2.kopernicus.tech/" target="_blank" rel="noopener noreferrer" className="group p-8 border border-white/5 bg-[#0f0e11]/80 backdrop-blur-md rounded-[2rem] hover:bg-[#16141a] hover:border-fuchsia-500/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                <div className="mb-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors duration-300 w-14 h-14 p-3 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2.5 9h19M2.5 15h19"/></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Flujo Colombia</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 flex-1">Experiencia comercial desplegada para el mercado colombiano.</p>
                <div className="w-full pt-4 border-t border-white/10 mt-auto flex justify-center">
                   <span className="text-xs text-fuchsia-500/50 group-hover:text-fuchsia-400 flex items-center gap-1 transition-colors font-medium">Acceder Portal <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
                </div>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
