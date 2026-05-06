import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# 1. API Auth Login
login_route = """import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === "admin" && password === "KPS2020") {
      const response = NextResponse.json({ success: true });
      
      // En producción usar jwt firmado, acá simulamos token
      const token = "demo_kps_token_" + Date.now();
      
      response.cookies.set({
        name: "kps-demo-session",
        value: token,
        httpOnly: true,
        path: "/",
        domain: ".techinsurance.com.ar", // Cross-domain cookie
        sameSite: "lax",
        maxAge: 60 * 60 * 24 // 24 hours
      });

      // También setteamos para localhost para que funcione en desarrollo
      response.cookies.set({
        name: "kps-demo-session-dev",
        value: token,
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24
      });

      return response;
    }

    return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Error en login" }, { status: 500 });
  }
}
"""

logout_route = """import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  
  response.cookies.delete("kps-demo-session");
  response.cookies.delete("kps-demo-session-dev");
  
  return response;
}
"""

# 2. Middleware
middleware = """import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isDemoProtected = request.nextUrl.pathname.startsWith('/demo/home') || 
                          request.nextUrl.pathname.startsWith('/demo/inspecciones');

  if (isDemoProtected) {
    const hasProdCookie = request.cookies.has('kps-demo-session');
    const hasDevCookie = request.cookies.has('kps-demo-session-dev');
    
    if (!hasProdCookie && !hasDevCookie) {
      return NextResponse.redirect(new URL('/demo', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/demo/home/:path*', '/demo/inspecciones/:path*'],
}
"""

# 3. Refactor app/demo/page.tsx
demo_page = """"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/demo/home");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Error de red");
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-red-400 text-sm font-medium mt-2">{error}</p>}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Ingresando...
              </>
            ) : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
"""

# 4. Layout
layout = """"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/demo");
    router.refresh();
  };

  // Only show tabs if we are inside a nested demo route
  if (pathname === "/demo") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#020104] flex flex-col relative overflow-hidden">
      {/* Top Navigation Tabs */}
      <div className="w-full border-b border-fuchsia-900/30 bg-[#0a050b]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center h-16">
          
          {/* Tabs */}
          <div className="flex space-x-8 h-full">
            <Link 
              href="/demo/home" 
              className={`h-full flex items-center px-2 border-b-2 font-medium text-sm transition-colors ${
                pathname === "/demo/home" 
                ? "border-fuchsia-500 text-fuchsia-400" 
                : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              Tech Insurance
            </Link>
            <Link 
              href="/demo/inspecciones" 
              className={`h-full flex items-center px-2 border-b-2 font-medium text-sm transition-colors ${
                pathname === "/demo/inspecciones" 
                ? "border-fuchsia-500 text-fuchsia-400" 
                : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              InspeXiona
            </Link>
          </div>

          {/* Logout */}
          <button 
            onClick={handleLogout}
            className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
"""

# 5. Inspecciones
inspecciones_page = """"use client";

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
"""

base = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"

write_file(f"{base}/app/api/auth/login/route.ts", login_route)
write_file(f"{base}/app/api/auth/logout/route.ts", logout_route)
write_file(f"{base}/middleware.ts", middleware)
write_file(f"{base}/app/demo/page.tsx", demo_page)
write_file(f"{base}/app/demo/layout.tsx", layout)
write_file(f"{base}/app/demo/inspecciones/page.tsx", inspecciones_page)

print("Integración completada exitosamente. Archivos generados y modificados.")
