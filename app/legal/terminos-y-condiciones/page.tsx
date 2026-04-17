import React from "react";

export default function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104] min-h-screen">
      <section className="relative pt-32 pb-24 border-b border-white/5 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.05),transparent)] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Documentación Legal</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Términos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Condiciones</span>
          </h1>
          <p className="text-zinc-500 font-light text-sm mb-12">Última actualización: Noviembre 2026</p>
          
          <div className="prose prose-invert prose-fuchsia max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-li:text-zinc-400 prose-ul:space-y-2">
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">1. INTRODUCCIÓN</h2>
            <p>
              El presente sitio web tiene fines informativos y comerciales relacionados con Tech Insurance, solución desarrollada por Kopernicus Tech.
            </p>
            <p>
              El uso del sitio implica la aceptación de estos términos.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">2. ALCANCE DEL SITIO</h2>
            <p>El sitio:</p>
            <ul className="list-disc pl-5">
              <li>no constituye una oferta contractual directa</li>
              <li>presenta información comercial</li>
              <li>permite contacto con el equipo</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">3. USO DEL SITIO</h2>
            <p>El usuario se compromete a:</p>
            <ul className="list-disc pl-5">
              <li>utilizar el sitio de forma legítima</li>
              <li>no realizar actividades ilícitas</li>
              <li>no intentar vulnerar sistemas</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">4. PROPIEDAD INTELECTUAL</h2>
            <p>Todo el contenido es propiedad de Kopernicus Tech:</p>
            <ul className="list-disc pl-5">
              <li>marca</li>
              <li>diseño</li>
              <li>contenido</li>
              <li>arquitectura</li>
            </ul>
            <p>Queda prohibida:</p>
            <ul className="list-disc pl-5">
              <li>reproducción</li>
              <li>distribución</li>
              <li>uso no autorizado</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">5. KNOW-HOW</h2>
            <p>Tech Insurance incluye:</p>
            <ul className="list-disc pl-5">
              <li>metodologías</li>
              <li>modelos</li>
              <li>frameworks</li>
              <li>arquitectura</li>
            </ul>
            <p>Todo esto es propiedad intelectual protegida.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">6. MODALIDAD DE CONTRATACIÓN</h2>
            <p>Tech Insurance puede ofrecerse como:</p>
            <ul className="list-disc pl-5">
              <li>SaaS</li>
              <li>Licenciamiento</li>
              <li>Implementación</li>
              <li>Venta parcial o total</li>
            </ul>
            <p>Los términos específicos se acuerdan contractualmente.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">7. LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p>Kopernicus Tech no será responsable por:</p>
            <ul className="list-disc pl-5">
              <li>uso indebido del sitio</li>
              <li>decisiones basadas en el contenido</li>
              <li>interrupciones</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">8. DISPONIBILIDAD</h2>
            <p>
              El sitio puede modificarse, actualizarse o discontinuarse sin previo aviso.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">9. CONFIDENCIALIDAD</h2>
            <p>
              Las interacciones pueden estar sujetas a acuerdos de confidencialidad.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">10. ENLACES A TERCEROS</h2>
            <p>El sitio puede contener links externos.</p>
            <p>Kopernicus Tech no se responsabiliza por su contenido.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">11. LEGISLACIÓN</h2>
            <p>
              Aplican las leyes correspondientes según jurisdicción.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">12. CONTACTO</h2>
            <p>
              <a href="mailto:legal@kopernicustech.com" className="text-fuchsia-400 hover:text-fuchsia-300">legal@kopernicustech.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
