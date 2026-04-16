import os
import json
from xml.etree.ElementTree import Element, SubElement, tostring
from xml.dom import minidom

def generate_structure():
    # Estructura del sitio
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
    
    # 1. Crear directorios y páginas
    os.makedirs(base_dir, exist_ok=True)
    
    all_urls = []
    navigation = []

    for section, subpages in site_structure.items():
        section_slug = section.lower().replace(" ", "-")
        section_path = os.path.join(base_dir, section_slug)
        os.makedirs(section_path, exist_ok=True)
        
        # Pagina principal de seccion
        with open(os.path.join(section_path, "index.html"), "w", encoding="utf-8") as f:
            f.write(f"<!-- Página: {section} -->\n")
        
        all_urls.append(f"/{section_slug}/")
        
        nav_item = {
            "title": section,
            "path": f"/{section_slug}/",
            "subpages": []
        }

        # Subpaginas
        for sub in subpages:
            sub_slug = sub.lower().replace(" ", "-")
            with open(os.path.join(section_path, f"{sub_slug}.html"), "w", encoding="utf-8") as f:
                f.write(f"<!-- Subpágina: {sub} de la sección {section} -->\n")
            
            sub_url = f"/{section_slug}/{sub_slug}.html"
            all_urls.append(sub_url)
            nav_item["subpages"].append({"title": sub, "path": sub_url})
            
        navigation.append(nav_item)

    # 2. Generar navigation.json
    with open(os.path.join(base_dir, "navegacion_principal.json"), "w", encoding="utf-8") as f:
        json.dump(navigation, f, indent=4, ensure_ascii=False)

    # 3. Generar sitemap.xml
    urlset = Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    # Añadir home
    url_element = SubElement(urlset, 'url')
    loc = SubElement(url_element, 'loc')
    loc.text = "https://www.techinsurance.com/"
    
    for url in all_urls:
        url_element = SubElement(urlset, 'url')
        loc = SubElement(url_element, 'loc')
        loc.text = f"https://www.techinsurance.com{url}"
        
    xmlstr = minidom.parseString(tostring(urlset, 'utf-8')).toprettyxml(indent="  ")
    with open(os.path.join(base_dir, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(xmlstr)

if __name__ == "__main__":
    generate_structure()
    print("Estructura del sitio generada en /sitio_estructura/")
