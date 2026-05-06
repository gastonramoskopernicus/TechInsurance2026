"use client";

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
