import os
import re

base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
file_path = os.path.join(base_dir, "app/inspexiona/InspexionaClient.tsx")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Eliminar CTAs del Hero
cta_block_regex = re.compile(
    r'<div className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 transform \$\{mounted \? \'translate-y-0 opacity-100\' : \'translate-y-10 opacity-0\'\}`\}>.*?</div>',
    re.DOTALL
)
content = cta_block_regex.sub('', content)

# 2. Actualizar Logo en Hero
old_logo_block = """<div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center p-6 mb-8 rounded-[2rem] bg-[#0a050b]/80 border border-fuchsia-900/30 shadow-[0_0_50px_rgba(217,70,239,0.15)] backdrop-blur-xl">
                <Image src="/inspexiona-logo.svg" alt="InspeXiona Logo" width={240} height={70} className="drop-shadow-lg" />
              </div>
            </div>"""

new_logo_block = """<div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center justify-center mb-10">
                <Image src="/inspexiona-logo.png" alt="InspeXiona Logo" width={340} height={100} className="drop-shadow-[0_0_40px_rgba(217,70,239,0.2)] object-contain" />
              </div>
            </div>"""

content = content.replace(old_logo_block, new_logo_block)

# 3. Actualizar useCases array
old_usecases_regex = re.compile(r'const useCases = \[\s*\{.*?\}\s*\];', re.DOTALL)

new_usecases = """const useCases = [
    {
      title: "Inspección Vehicular",
      desc: "Validación del estado de la unidad antes de la emisión de la póliza. Captura guiada de frentes, laterales y daños preexistentes.",
      color: "from-fuchsia-500 to-pink-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
    },
    {
      title: "Hogar",
      desc: "Verificación de condiciones de la propiedad y medidas de seguridad (rejas, alarmas) mediante registro fotográfico.",
      color: "from-indigo-500 to-cyan-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.592 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
    },
    {
      title: "Siniestros",
      desc: "Herramienta ágil para que el asegurado o perito capture evidencia del daño en el momento exacto del incidente.",
      color: "from-violet-500 to-fuchsia-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    },
    {
      title: "Maquinaria",
      desc: "Validación de equipos industriales y de construcción. Documentación de números de serie y estado operativo.",
      color: "from-amber-400 to-orange-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.053c.814-1.005.475-2.812-1.051-3.214l-1.105-.292a1.439 1.439 0 00-1.11.233l-1.11.834m-2.121-2.12l1.583-1.584c.338-.338.338-.885 0-1.223L8.647 4.146a.864.864 0 00-1.223 0L5.84 5.73a.864.864 0 000 1.223l3.584 3.584c.338.338.885.338 1.223 0z"/>
    },
    {
      title: "Embarcaciones",
      desc: "Documentación de cascos, motores e instrumental de navegación, validando amarre mediante geolocalización.",
      color: "from-blue-400 to-cyan-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M5 17h14c1.105 0 2 .895 2 2H3c0-1.105.895-2 2-2zm2-4V5c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v8M9 9h6"/>
    },
    {
      title: "Agro",
      desc: "Captura de lotes, maquinaria agrícola y cultivos, combinando fotografías con coordenadas geográficas precisas.",
      color: "from-emerald-400 to-teal-500",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
    }
  ];"""

content = old_usecases_regex.sub(new_usecases, content)

# 4. Actualizar el renderizado de los use cases
old_usecases_render_regex = re.compile(
    r'<div className="grid grid-cols-1 md:grid-cols-2 gap-8">\s*\{useCases\.map\(\(useCase, idx\) => \(\s*<div key=\{idx\} className="group relative p-\[1px\] rounded-\[2rem\] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">\s*<div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />\s*<div className="relative h-full p-8 md:p-10 rounded-\[2rem\] bg-\[#0a050b\] flex flex-col justify-center">\s*<div className={`w-3 h-3 rounded-full mb-6 bg-gradient-to-r \$\{useCase\.color\}`} />\s*<h3 className="text-2xl font-bold mb-4 text-white">\{useCase\.title\}</h3>\s*<p className="text-zinc-400 text-lg leading-relaxed">\{useCase\.desc\}</p>\s*</div>\s*</div>\s*\)\)\}\s*</div>',
    re.DOTALL
)

new_usecases_render = """<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                  <div className="relative h-full p-8 md:p-10 rounded-[2rem] bg-[#0a050b] flex flex-col justify-start">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${useCase.color} bg-opacity-10 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                         <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                           {useCase.icon}
                         </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              ))}
            </div>"""

content = old_usecases_render_regex.sub(new_usecases_render, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Rediseño visual de InspeXiona completado.")
