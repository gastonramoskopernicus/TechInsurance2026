import os

base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
file_path = os.path.join(base_dir, "app/inspexiona/InspexionaClient.tsx")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Logo InspeXiona (PNG oficial)
content = content.replace('src="/inspexiona-logo.svg"', 'src="/inspexiona-logo.png"')

# 2. Texto de bajada del Hero
content = content.replace(
    "Plataforma AI y Módulo Nativo para gestionar inspecciones previas y siniestros con flujos guiados, evidencias irrefutables y trazabilidad total.",
    "Plataforma nativa iOS / Android y Web para inspecciones previas y de siniestros."
)

# 3. Ícono "Cero Descargas" (Quitar el de pesos, usar el 0)
old_zero_icon = '<text x="12" y="16" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">0</text><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>'
new_zero_icon = '<><text x="12" y="16" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">0</text><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/></>'
content = content.replace(old_zero_icon, new_zero_icon)

# 4. Fotografías y Videos
content = content.replace("qué fotografías tomar", "qué fotografías y videos tomar")
content = content.replace("en cada fotografía para", "en cada fotografía y video para")
content = content.replace("mediante registro fotográfico.", "mediante registro fotográfico y de video.")

# 5. Casos de Uso - Tamaño de íconos (w-10 h-10 a w-20 h-20)
content = content.replace('className="w-10 h-10 flex items-center justify-center bg-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"', 'className="w-20 h-20 flex items-center justify-center bg-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] flex-shrink-0"')

# 6. CTA final - Título
content = content.replace(
    "La mejor plataforma de inspecciones para <span",
    "La plataforma de inspecciones para <span"
)

# 7. CTA final - Subtítulo
content = content.replace(
    "Integra inspecciones semanales y transforma radicalmente tu operación técnica y pericial. Empieza a utilizar InspeXiona hoy.",
    "Transformar radicalmente la operación técnica y pericial de la compañía. Empieza a utilizar InspeXiona hoy."
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("✅ Ajustes puntuales aplicados exitosamente.")
