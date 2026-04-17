import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Insurance | Enterprise Platform",
  description: "La plataforma enterprise definitiva para acelerar y transformar el mercado asegurador con tecnología de punta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        
        {/* Floating Action Button (FAB) */}
        <a 
          href="/contacto" 
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-[#130a16] border border-fuchsia-900/50 shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] hover:border-fuchsia-500 hover:scale-105 transition-all duration-300"
          aria-label="Contactar a Tech Insurance"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="relative w-7 h-7 flex items-center justify-center drop-shadow-[0_0_10px_rgba(217,70,239,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-all">
            <img src="/logo-icon.png" alt="Tech Insurance Logo" className="object-contain w-full h-full filter saturate-200" />
          </div>
        </a>
      </body>
    </html>
  );
}
