import os
import json

def generate_home_structure():
    home_sections = [
        {
            "orden": 1,
            "seccion": "Hero",
            "proposito": "Introducir la plataforma y su propuesta de valor principal de forma inmediata y clara."
        },
        {
            "orden": 2,
            "seccion": "Problema del mercado",
            "proposito": "Identificar y empatizar con los dolores o cuellos de botella actuales en la industria aseguradora tradicional."
        },
        {
            "orden": 3,
            "seccion": "Solución",
            "proposito": "Explicar cómo Tech Insurance resuelve los problemas planteados de manera unificada."
        },
        {
            "orden": 4,
            "seccion": "Capacidades",
            "proposito": "Listar los módulos u operaciones core del sistema."
        },
        {
            "orden": 5,
            "seccion": "Product Studio (sección destacada)",
            "proposito": "Resaltar específicamente la herramienta de diseño de productos, enfatizando la velocidad de comercialización."
        },
        {
            "orden": 6,
            "seccion": "Arquitectura",
            "proposito": "Mostrar brevemente la robustez técnica, modularidad o enfoque tecnológico."
        },
        {
            "orden": 7,
            "seccion": "Casos de uso",
            "proposito": "Proveer ejemplos rápidos y prácticos sobre cómo diferentes líneas de negocio pueden usar el producto."
        },
        {
            "orden": 8,
            "seccion": "Impacto en negocio",
            "proposito": "Mostrar valor mediante métricas de ROI, mejora de la eficiencia o reducción de tiempos esperada."
        },
        {
            "orden": 9,
            "seccion": "Validación / robustez",
            "proposito": "Generar confianza comunicando certificaciones de cumplimiento normativo, seguridad de datos y SLAs."
        },
        {
            "orden": 10,
            "seccion": "CTA final",
            "proposito": "Invitar al usuario a realizar la acción principal, ya sea iniciar una prueba, contactar a ventas o solicitar demo."
        }
    ]

    base_dir = "sitio_estructura"
    os.makedirs(base_dir, exist_ok=True)
    output_file = os.path.join(base_dir, "home_estructura.json")

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(home_sections, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    generate_home_structure()
    print("Estructura de Home generada en sitio_estructura/home_estructura.json")
