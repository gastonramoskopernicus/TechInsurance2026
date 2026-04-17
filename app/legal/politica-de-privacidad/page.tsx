import React from "react";

export default function PoliticaPrivacidadPage() {
  return (
    <div className="flex flex-col w-full relative bg-[#020104] min-h-screen">
      <section className="relative pt-32 pb-24 border-b border-white/5 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.05),transparent)] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-fuchsia-500 font-semibold tracking-widest text-xs uppercase mb-3 block">Documentación Legal</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-400">Privacidad</span>
          </h1>
          <p className="text-zinc-500 font-light text-sm mb-12">Última actualización: Noviembre 2026</p>
          
          <div className="prose prose-invert prose-fuchsia max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white prose-li:text-zinc-400 prose-ul:space-y-2">
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">1. INTRODUCCIÓN</h2>
            <p>
              Tech Insurance, solución tecnológica desarrollada por Kopernicus Tech, se compromete a proteger la privacidad, confidencialidad y seguridad de la información de sus usuarios, clientes, partners y cualquier tercero que interactúe con el sitio o con sus soluciones.
            </p>
            <p>
              La presente Política de Privacidad describe cómo se recopila, utiliza, almacena y protege la información en el contexto del uso del sitio web y de las soluciones asociadas.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">2. ALCANCE</h2>
            <p>Esta política aplica a:</p>
            <ul className="list-disc pl-5">
              <li>Usuarios del sitio web</li>
              <li>Clientes potenciales</li>
              <li>Clientes activos</li>
              <li>Partners</li>
              <li>Visitantes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">3. INFORMACIÓN RECOPILADA</h2>
            <p>Podemos recopilar:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">3.1 Información personal:</h3>
            <ul className="list-disc pl-5">
              <li>Nombre</li>
              <li>Email</li>
              <li>Empresa</li>
              <li>Teléfono</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Información técnica:</h3>
            <ul className="list-disc pl-5">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Dispositivo</li>
              <li>Sistema operativo</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.3 Información comercial:</h3>
            <ul className="list-disc pl-5">
              <li>Intereses en productos</li>
              <li>Interacciones con el sitio</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.4 Información proporcionada voluntariamente:</h3>
            <ul className="list-disc pl-5">
              <li>Formularios</li>
              <li>Consultas</li>
              <li>Solicitudes comerciales</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">4. FINALIDAD DEL TRATAMIENTO</h2>
            <p>La información se utiliza para:</p>
            <ul className="list-disc pl-5">
              <li>Gestión comercial</li>
              <li>Contacto con usuarios</li>
              <li>Presentación de soluciones</li>
              <li>Mejora de productos</li>
              <li>Desarrollo de nuevas funcionalidades</li>
              <li>Análisis de uso del sitio</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">5. BASE LEGAL</h2>
            <p>El tratamiento se basa en:</p>
            <ul className="list-disc pl-5">
              <li>Consentimiento del usuario</li>
              <li>Interés legítimo comercial</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">6. CONFIDENCIALIDAD</h2>
            <p>La información será tratada con confidencialidad.</p>
            <p>No se venderán datos personales.</p>
            <p>Podrá compartirse con:</p>
            <ul className="list-disc pl-5">
              <li>proveedores tecnológicos</li>
              <li>servicios de hosting</li>
              <li>herramientas de análisis</li>
            </ul>
            <p>Siempre bajo estándares de protección adecuados.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">7. SEGURIDAD DE LA INFORMACIÓN</h2>
            <p>Se implementan medidas como:</p>
            <ul className="list-disc pl-5">
              <li>controles de acceso</li>
              <li>cifrado cuando corresponde</li>
              <li>monitoreo</li>
              <li>gestión de incidentes</li>
            </ul>
            <p>Sin embargo, ningún sistema es completamente invulnerable.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">8. PROPIEDAD DE LOS DATOS Y KNOW-HOW</h2>
            <ul className="list-disc pl-5">
              <li>Los datos del cliente son propiedad del cliente</li>
              <li>Tech Insurance NO adquiere derechos sobre dichos datos</li>
              <li>La plataforma, su arquitectura, algoritmos y diseño son propiedad de Kopernicus Tech</li>
              <li>El know-how asociado es confidencial y protegido</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">9. COOKIES</h2>
            <p>El sitio puede utilizar cookies para:</p>
            <ul className="list-disc pl-5">
              <li>mejorar experiencia</li>
              <li>analizar tráfico</li>
              <li>optimizar rendimiento</li>
            </ul>
            <p>El usuario puede gestionarlas desde su navegador.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">10. CONSERVACIÓN DE DATOS</h2>
            <p>Los datos se conservarán:</p>
            <ul className="list-disc pl-5">
              <li>mientras exista relación comercial</li>
              <li>o el tiempo necesario para cumplir obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">11. DERECHOS DEL USUARIO</h2>
            <p>El usuario puede:</p>
            <ul className="list-disc pl-5">
              <li>acceder a sus datos</li>
              <li>solicitar corrección</li>
              <li>solicitar eliminación</li>
              <li>limitar tratamiento</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">12. TRANSFERENCIAS INTERNACIONALES</h2>
            <p>
              Los datos pueden ser almacenados en servidores ubicados fuera del país del usuario.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">13. MODIFICACIONES</h2>
            <p>
              Esta política puede actualizarse sin previo aviso.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-fuchsia-50">14. CONTACTO</h2>
            <p>
              Para consultas:<br/>
              <a href="mailto:legal@kopernicustech.com" className="text-fuchsia-400 hover:text-fuchsia-300">legal@kopernicustech.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
