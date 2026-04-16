import os
import json

def generar_contenido_home():
    base_dir = "sitio_estructura"
    input_file = os.path.join(base_dir, "home_estructura.json")
    output_file = os.path.join(base_dir, "home_contenido.json")

    with open(input_file, "r", encoding="utf-8") as f:
        estructura = json.load(f)

    contenidos = {
        1: {
            "titulo": "Acelerá la evolución de tu negocio asegurador",
            "descripcion": "Plataforma que potencia el core y habilita nuevos productos y canales en semanas."
        },
        2: {
            "titulo": "Agilidad bloqueada por tecnología inflexible",
            "descripcion": "Los sistemas core tradicionales retrasan el time-to-market. El alto costo de mantenimiento, la deuda técnica y las integraciones monolíticas impiden la rapidez comercial necesaria para los ecosistemas digitales actuales."
        },
        3: {
            "titulo": "Un motor comercial para tu sistema actual",
            "descripcion": "Tech Insurance opera como un acelerador comercial por capas. Nos integramos directamente a tu core heredado, inyectando agilidad, automatización y modernas capacidades de venta digital sin requerir dolorosas migraciones."
        },
        4: {
            "titulo": "Capacidades nativas para el negocio de escala",
            "descripcion": "Gestión paramétrica del ciclo de vida de la póliza, motores de cotización en tiempo real, suscripción automatizada con reglas de negocio dinámicas y liquidación ágil de siniestros."
        },
        5: {
            "titulo": "Product Studio: El núcleo de la innovación",
            "descripcion": "Diseña, empaqueta y distribuye. Nuestro Product Studio es una herramienta avanzada que permite a los equipos comerciales e IT configurar nuevos productos aseguradores o canales de distribución en cuestión de minutos. Del concepto a la venta de forma transparente y controlada."
        },
        6: {
            "titulo": "Arquitectura desacoplada y API-First",
            "descripcion": "Una infraestructura tecnológica moderna construida sobre microservicios. Expone capacidades complejas a través de APIs limpias, facilitando la integración fluida con cualquier ecosistema de partners y plataformas externas con cero interrupciones transaccionales."
        },
        7: {
            "titulo": "Casos de uso adaptables",
            "descripcion": "Diseñado para múltiples portafolios: desde líneas tradicionales como Automotriz, Vida y Salud, hasta innovadores Seguros Embebidos (Embedded Insurance) y micro-pólizas para la nueva economía digital."
        },
        8: {
            "titulo": "Métricas de ROI que transforman",
            "descripcion": "Impacto inmediato en los resultados: Reducción drástica del time-to-market (de meses a semanas), disminución de los costos operativos de emisión y un crecimiento sostenible de ingresos mediante operaciones cross-selling en ecosistemas ampliados."
        },
        9: {
            "titulo": "Robustez y control a escala Enterprise",
            "descripcion": "Cumplimiento normativo estricto, infraestructura en la nube de alta disponibilidad, encriptación a nivel bancario y SLAs superiores al 99.9%. Un aliado seguro para gestionar el riesgo a gran escala."
        },
        10: {
            "titulo": "¿Listo para la transformación acelerada?",
            "descripcion": "Conversa con nuestros especialistas, revisa nuestra arquitectura o solicita una demostración controlada que potenciará los resultados de tu actual core asegurador.",
            "cta_texto": "Agendar demostración técnica"
        }
    }

    # Anexar el contenido a las secciones originales
    for seccion in estructura:
        orden = seccion["orden"]
        if orden in contenidos:
            seccion["contenido"] = contenidos[orden]

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(estructura, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    generar_contenido_home()
    print(f"Contenido aplicado exitosamente en {os.path.join('sitio_estructura', 'home_contenido.json')}")

