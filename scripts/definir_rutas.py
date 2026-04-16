import os

def generate_routes():
    site_structure = {
        "Plataforma": ["Core", "Seguridad", "API", "Integraciones"],
        "Soluciones": ["Pymes", "Enterprises", "Startups", "Agencias"],
        "Casos de Uso": ["Seguros de Vida", "Salud", "Automotriz", "Hogar"],
        "Ecosistema": ["Desarrolladores", "Partners", "Comunidad"],
        "Recursos": ["Blog", "Webinars", "Guias", "Centro de Ayuda"],
        "Empresa": ["Sobre Nosotros", "Carreras", "Prensa", "Inversores"],
        "Login": ["Recuperar Password", "Registro"],
        "Contacto": ["Soporte", "Ventas", "Feedback"],
        "Legal": ["Terminos de Servicio", "Privacidad", "Cookies", "Cumplimiento"]
    }

    base_dir = "sitio_estructura"
    output_file = os.path.join(base_dir, "rutas_limpias.txt")
    os.makedirs(base_dir, exist_ok=True)
    
    routes = ["/"]

    for section, subpages in site_structure.items():
        section_slug = section.lower().replace(" ", "-")
        routes.append(f"/{section_slug}")
        
        for sub in subpages:
            sub_slug = sub.lower().replace(" ", "-")
            routes.append(f"/{section_slug}/{sub_slug}")
            
    with open(output_file, "w", encoding="utf-8") as f:
        for route in routes:
            f.write(route + "\n")

if __name__ == "__main__":
    generate_routes()
    print("Rutas limpias generadas en sitio_estructura/rutas_limpias.txt")
