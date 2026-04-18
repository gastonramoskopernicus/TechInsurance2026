import Link from "next/link";

export default function DemoHome() {
  const options = [
    {
      title: "ZeroClick Experience",
      desc: "Experiencia de seguros embebidos sin fricción",
      href: "/demo/zeroclick",
      icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'
    },
    {
      title: "Product Studio",
      desc: "Motor paramétrico y configuración de productos vivos.",
      href: "#",
      icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
    },
    {
      title: "Canales & Distribución",
      desc: "Gestión B2B, front-ends marca blanca y orquestación API.",
      href: "#",
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.1 0-2 .9-2 2v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
      title: "Data & Inteligencia",
      desc: "Integración de oráculos y telemática en tiempo real.",
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
    <div className="flex flex-col w-full relative bg-[#020104] p-4 py-20 min-h-[calc(100vh-64px)]">
      {/* Background Continuity */}
      <div className="absolute inset-0 z-0 bg-[#020104]" />
      <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)] flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-fuchsia-900/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]" />
      </div>
      <div className="absolute top-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      
      <div className="container mx-auto max-w-5xl relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Bienvenido, admin</h1>
          <p className="text-xl text-zinc-400 font-light">Seleccione una experiencia para explorar Tech Insurance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((opt, idx) => (
            <Link 
              key={idx} 
              href={opt.href}
              className={`group p-8 border ${idx === 0 ? 'border-fuchsia-500/50 bg-[#1b081e]/60 shadow-[0_0_30px_rgba(217,70,239,0.15)]' : 'border-fuchsia-900/40 bg-[#0f0e11]'} rounded-[2rem] hover:bg-[#210924] hover:border-fuchsia-500/70 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col items-center text-center`}
            >
               <div className="mb-4 text-fuchsia-600 group-hover:text-fuchsia-400 transition-colors duration-300 w-14 h-14 p-2.5 bg-fuchsia-950/30 rounded-2xl flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10" dangerouslySetInnerHTML={{ __html: opt.icon }}></svg>
               </div>
               <h4 className="text-xl font-bold text-white mb-2">{opt.title}</h4>
               <p className="text-zinc-500 font-light text-sm leading-relaxed">{opt.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
