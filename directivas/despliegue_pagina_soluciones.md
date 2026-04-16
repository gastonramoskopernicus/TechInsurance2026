# Directiva: Reingeniería del Módulo de Soluciones Comerciales

## Objetivos
1. **Verticalización por Actor de Industria:** Mapear la oferta de la Plataforma hacia 6 clientes/vehículos principales: Aseguradoras, Brokers/PAS, Bancos/Fintech, Partners, Embedded Insurance y Canales Digitales.
2. **Adopción de Patrón Enterprise:** Desplegar el mismo ecosistema de UX que en Arquitectura y Plataforma (Hero Cósmico, NavBar Sticky Glassmorfismo, Tarjetas con Gradiente Fuchsia).
3. **Erradicación de la Ambigüedad:** Cada bloque del actor mostrará beneficios tácticos y "cómo impacta" en lugar de descripciones vacías (Ej. "Velocidad de implementación", "Nuevos Ingresos").

## Reglas UI
- Los anchors del subnav mapearán a: `#aseguradoras`, `#brokers`, `#bancos`, `#partners`, `#embedded`, `#canales`.
- Las cards en la sección de Soluciones adoptan una disposición híbrida: Texto introductorio fuerte al lado izquierdo / Grid de Cards con SVG massive al lado derecho o debajo.
- No incluir código técnico, todo es copy B2B Comercial.
