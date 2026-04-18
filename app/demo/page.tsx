"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "KPS2020") {
      router.push("/demo/home");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex flex-col w-full relative bg-[#020104] items-center justify-center p-4 min-h-[calc(100vh-64px)]">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-[#020104]" />
      <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1),transparent)] flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-fuchsia-900/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-fuchsia-900/20 rounded-full" />
        </div>
      </div>
      <div className="absolute top-1/4 w-[400px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      
      {/* Central Glassmorphism Overlay */}
      <div className="relative z-10 w-full max-w-md p-10 lg:p-14 bg-[#1b081e]/80 backdrop-blur-xl border border-fuchsia-800/40 rounded-[2.5rem] shadow-[0_0_50px_rgba(217,70,239,0.05)] text-center">
        <div className="w-16 h-16 mx-auto bg-[#0a050b] rounded-2xl border border-fuchsia-900/40 text-fuchsia-500 flex items-center justify-center mb-6">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Demo Tech Insurance</h1>
        <p className="text-zinc-400 font-light text-sm mb-8">Acceda a una experiencia interactiva de la plataforma.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-left text-sm font-bold text-zinc-400 tracking-wider mb-2">Usuario</label>
            <input 
              type="text" 
              placeholder="Ingrese su usuario" 
              className="w-full bg-[#0a050b] border border-fuchsia-900/30 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500/60 transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left text-sm font-bold text-zinc-400 tracking-wider mb-2">Contraseña</label>
            <input 
              type="password" 
              placeholder="Ingrese su contraseña" 
              className="w-full bg-[#0a050b] border border-fuchsia-900/30 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-fuchsia-500/60 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400 text-sm font-medium mt-2">{error}</p>}
          <button 
            type="submit"
            className="w-full mt-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
