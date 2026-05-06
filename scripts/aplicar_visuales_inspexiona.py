import os
import shutil
import re

base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
source_dir = "/Users/gastonramos/Documents/Antigravity/InspeXiona/screenshootinspexiona"
dest_dir = os.path.join(base_dir, "public/pantallas_inspexiona")

# 1. Copiar y renombrar imágenes
os.makedirs(dest_dir, exist_ok=True)

try:
    files = sorted(os.listdir(source_dir))
    image_files = [f for f in files if f.endswith('.png')]
    for idx, filename in enumerate(image_files):
        src_path = os.path.join(source_dir, filename)
        dst_filename = f"screen-{idx + 1}.png"
        dst_path = os.path.join(dest_dir, dst_filename)
        shutil.copy2(src_path, dst_path)
    print(f"Copiadas {len(image_files)} imágenes a public/pantallas_inspexiona/")
except Exception as e:
    print(f"Error copiando archivos: {e}")

# 2. Modificar el archivo InspexionaClient.tsx
client_file = os.path.join(base_dir, "app/inspexiona/InspexionaClient.tsx")
with open(client_file, "r", encoding="utf-8") as f:
    content = f.read()

# Inyectar la composición flotante después del párrafo descriptivo en el Hero
# El párrafo termina en: </p>\n          </div>\n        </section>
# Buscamos esa estructura específica

search_pattern = r'(\s*</p>\s*)(</div>\s*</section>)'

saas_composition = """
            {/* FLOATING SAAS COMPOSITION */}
            <div className={`mt-20 mb-8 relative w-full max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative aspect-[16/9] w-full flex items-center justify-center perspective-[1200px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 via-transparent to-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                
                {/* Left Floating Image (Desktop only) */}
                <div className="hidden lg:block absolute z-20 w-[35%] left-0 top-1/4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform -translate-x-12 -translate-y-8 -rotate-y-12 rotate-z-[-2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 transition-all duration-700 ease-out opacity-70 hover:opacity-100 bg-[#0a050b]">
                   <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <img src="/pantallas_inspexiona/screen-2.png" alt="InspeXiona Pantalla Secundaria" className="w-full h-auto mt-6 object-cover" />
                </div>
                
                {/* Right Floating Image (Desktop only) */}
                <div className="hidden lg:block absolute z-20 w-[35%] right-0 bottom-1/4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform translate-x-12 translate-y-8 rotate-y-12 rotate-z-[2deg] hover:rotate-y-0 hover:rotate-z-0 hover:z-40 transition-all duration-700 ease-out opacity-70 hover:opacity-100 bg-[#0a050b]">
                   <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <img src="/pantallas_inspexiona/screen-3.png" alt="InspeXiona Pantalla Secundaria" className="w-full h-auto mt-6 object-cover" />
                </div>

                {/* Main Center Image */}
                <div className="relative z-30 w-[90%] lg:w-[65%] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_100px_rgba(217,70,239,0.25)] bg-[#050207] transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 ease-out">
                  <div className="absolute top-0 left-0 w-full h-8 md:h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  {/* Container for the image to prevent breaking aspect ratio drastically */}
                  <div className="mt-8 md:mt-10 overflow-hidden bg-[#0a050b]">
                     <img src="/pantallas_inspexiona/screen-1.png" alt="InspeXiona Dashboard" className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>"""

if "{/* FLOATING SAAS COMPOSITION */}" not in content:
    # Solo agregar si no existe ya
    content = re.sub(search_pattern, r'\1' + saas_composition + r'\n\2', content)
    with open(client_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Inyectada la composición visual en InspexionaClient.tsx")
else:
    print("La composición visual ya existe en el archivo.")
