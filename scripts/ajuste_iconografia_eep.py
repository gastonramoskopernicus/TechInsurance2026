#!/usr/bin/env python3
import os
import re

def main():
    print("Iniciando ajuste visual e iconográfico puntual de EEP...")

    base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"
    client_path = os.path.join(base_dir, "app", "eep", "EepClient.tsx")

    with open(client_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Reemplazo del array de nodos orbitales del Hero (sin duplicar corchetes)
    old_orbital_nodes_pattern = r'\{\s*name:\s*"Clientes",\s*angle:\s*0,\s*icon:\s*"👤".*?\}\s*\]\.map\(\(node,\s*idx\)\s*=>\s*\{'
    new_orbital_nodes_block = """{
                  name: "Clientes",
                  angle: 0,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  )
                },
                {
                  name: "Eventos",
                  angle: 60,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  )
                },
                {
                  name: "Productores",
                  angle: 120,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )
                },
                {
                  name: "Comunidades",
                  angle: 180,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <circle cx="12" cy="5" r="2.5" />
                      <circle cx="5" cy="12" r="2.5" />
                      <circle cx="19" cy="12" r="2.5" />
                      <circle cx="12" cy="19" r="2.5" />
                      <line x1="12" y1="7.5" x2="5" y2="12" />
                      <line x1="12" y1="7.5" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="12" y2="16.5" />
                      <line x1="19" y1="12" x2="12" y2="16.5" />
                      <line x1="12" y1="7.5" x2="12" y2="16.5" />
                    </svg>
                  )
                },
                {
                  name: "Dashboards",
                  angle: 240,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  )
                },
                {
                  name: "Perfiles Dinámicos",
                  angle: 300,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-fuchsia-400">
                      <circle cx="12" cy="8" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                      <circle cx="20" cy="12" r="1.5" />
                      <circle cx="4" cy="12" r="1.5" />
                      <line x1="8" y1="12" x2="4" y2="12" strokeDasharray="2 2" />
                      <line x1="16" y1="12" x2="20" y2="12" strokeDasharray="2 2" />
                    </svg>
                  )
                }
              ].map((node, idx) => {"""

    modified_content, count = re.subn(old_orbital_nodes_pattern, new_orbital_nodes_block, content, flags=re.DOTALL)
    if count > 0:
        print("Nodos orbitales del Hero modificados con éxito.")
    else:
        # Intento de reemplazo exacto
        start_marker = '[\\n                { name: "Clientes", angle: 0, icon: "👤", color: "from-fuchsia-500 to-pink-500" },'
        end_marker = '].map((node, idx) => {'
        start_idx = content.find(start_marker)
        end_idx = content.find(end_marker)
        if start_idx != -1 and end_idx != -1:
            modified_content = content[:start_idx] + new_orbital_nodes_block
            print("Nodos orbitales del Hero modificados usando búsqueda exacta.")
        else:
            print("ERROR: No se pudo localizar la declaración de nodos del Hero.")
            return

    # 2. Modificación del renderizado del nodo del Hero
    old_hero_node_render = """                    {/* Nodo */}
                    <div className={`w-12 h-12 rounded-full bg-[#0d0914] border border-white/10 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 hover:border-fuchsia-500/50 transition-all duration-300`}>
                      <span>{node.icon}</span>
                    </div>"""

    new_hero_node_render = """                    {/* Nodo */}
                    <div className="w-12 h-12 rounded-full bg-[#0d0914] border border-fuchsia-500/20 flex items-center justify-center shadow-lg shadow-fuchsia-500/5 group-hover:scale-110 hover:border-fuchsia-500/50 transition-all duration-300">
                      {node.icon}
                    </div>"""

    if old_hero_node_render in modified_content:
        modified_content = modified_content.replace(old_hero_node_render, new_hero_node_render)
        print("Renderizado del nodo del Hero modificado con éxito.")
    else:
        # Reemplazo por partes si tiene diferencias de espacios
        print("ADVERTENCIA: Renderizado exacto no encontrado. Intentando reemplazo de subcadenas.")
        modified_content = modified_content.replace('<span>{node.icon}</span>', '{node.icon}')
        modified_content = modified_content.replace('bg-[#0d0914] border border-white/10 flex items-center justify-center text-lg shadow-lg', 'bg-[#0d0914] border border-fuchsia-500/20 flex items-center justify-center shadow-lg shadow-fuchsia-500/5')

    # 3. Reforzar el glow en el centro de EEP del Hero ("EEP Core")
    old_eep_core_hero = """              {/* Centro de Inteligencia de Engagement */}
              <div className="absolute z-10 w-24 h-24 rounded-3xl bg-[#08040d] border border-fuchsia-500/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.3)] animate-breath">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-fuchsia-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.808 13.064a8.962 8.962 0 0 1-2.3-2.3" />
                </svg>
                <span className="text-[10px] uppercase tracking-wider text-fuchsia-300 font-bold mt-1">EEP Core</span>
              </div>"""

    new_eep_core_hero = """              {/* Centro de Inteligencia de Engagement */}
              <div className="absolute z-10 w-24 h-24 rounded-full bg-[#08040d] border border-fuchsia-500/50 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(217,70,239,0.6)] animate-breath">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-fuchsia-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.808 13.064a8.962 8.962 0 0 1-2.3-2.3" />
                </svg>
                <span className="text-[10px] uppercase tracking-wider text-fuchsia-400 font-extrabold mt-1">EEP Core</span>
              </div>"""

    if old_eep_core_hero in modified_content:
        modified_content = modified_content.replace(old_eep_core_hero, new_eep_core_hero)
        print("Glow y diseño de EEP Core del Hero actualizados.")
    else:
        print("ADVERTENCIA: No se pudo localizar el bloque EEP Core del Hero para reemplazo exacto.")

    # 4. Reforzar el glow en el centro de Ecosistema
    old_eep_ecosystem_center = """              {/* EEP Centro */}
              <div className="absolute z-30">
                <div className="w-28 h-28 rounded-full bg-[#050207] border border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.25)] flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 animate-pulse" />
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 z-10">EEP</span>
                </div>
              </div>"""

    new_eep_ecosystem_center = """              {/* EEP Centro */}
              <div className="absolute z-30">
                <div className="w-28 h-28 rounded-full bg-[#050207] border border-fuchsia-500/55 shadow-[0_0_60px_rgba(217,70,239,0.55)] flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-purple-500/15 animate-pulse" />
                  <span className="text-3xl font-black text-fuchsia-400 z-10">EEP</span>
                </div>
              </div>"""

    if old_eep_ecosystem_center in modified_content:
        modified_content = modified_content.replace(old_eep_ecosystem_center, new_eep_ecosystem_center)
        print("Glow y diseño del Ecosistema central actualizados.")
    else:
        print("ADVERTENCIA: No se pudo localizar el bloque Ecosistema central para reemplazo exacto.")

    # 5. Ajuste de paleta en los fondos (evitar celestes/azules)
    old_bg_layer = 'bg-indigo-900/10'
    new_bg_layer = 'bg-purple-950/10'
    if old_bg_layer in modified_content:
        modified_content = modified_content.replace(old_bg_layer, new_bg_layer)
        print("Fondo general del ecosistema ajustado a la paleta magenta/violeta.")

    # Guardamos los cambios finales
    with open(client_path, "w", encoding="utf-8") as f:
        f.write(modified_content)

    print("Reescritura de EepClient.tsx finalizada correctamente.")

if __name__ == "__main__":
    main()
