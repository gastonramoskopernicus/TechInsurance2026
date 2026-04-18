export default function ZeroClickDemo() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104] items-center justify-center p-4 min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background Continuity */}
      <div className="absolute inset-0 z-0 bg-[#020104]" />
      <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)] flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-fuchsia-900/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-fuchsia-900/20 rounded-full" />
        </div>
      </div>
      <div className="absolute top-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
         <span className="text-zinc-500 font-semibold tracking-wider text-xs uppercase mb-6 block">Demo ZeroClick</span>
         <a 
            href="https://ti-zeroclick.kopernicus.tech/security/login"
            className="group flex flex-col items-center justify-center gap-4 px-10 py-12 md:px-16 md:py-16 bg-[#1b081e]/60 backdrop-blur-xl border border-fuchsia-500/30 rounded-[3rem] hover:bg-[#200924] hover:border-fuchsia-400 transition-all duration-500 shadow-[0_0_50px_rgba(217,70,239,0.1)] hover:shadow-[0_0_80px_rgba(217,70,239,0.25)] hover:scale-[1.02] w-full"
         >
           <span className="text-3xl md:text-5xl font-black text-white tracking-tight group-hover:text-fuchsia-100 transition-colors">
              Ir a experiencia <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">ZeroClick</span>
           </span>
           <div className="w-14 h-14 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all mt-6 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </div>
         </a>
      </div>
    </div>
  );
}
