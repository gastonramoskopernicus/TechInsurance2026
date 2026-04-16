# Directiva: Expansión Profunda de Módulo "Product Studio"

## Objetivos
1. **Despliegue Vertical:** Expandir el abstracto actual de "Product Studio" (dentro de `/plataforma/page.tsx`) hacia una anatomía multipropósito completa, fungiendo como una "página dentro de la página", destacando la extrema diferenciación del componente "No-Code".
2. **Ciclo Explicativo Secuencial:** Implantar un pipeline de lectura que responda a: *Qué es -> Cómo funciona (Pasos) -> Capacidades Core -> Comparativa Evolutiva (Antes/Después) -> Caso de Uso Práctico -> Impacto Financiero*.
3. **Lenguaje UI Coherente:** Explotar la paleta `fuchsia-400 / pink-400`, grids en `bg-[#0f0e11] hover:bg-[#16141a]` e iconografía vectorizada grupal (`w-14` mínimo), asegurando la unificación de identidad con la Home.

## Reglas UI para Expansion
- **Card Paradigma "Antes vs Ahora":** Construir dos contenedores antagónicos. El "Antes" usará escalas de grises rojizas (alerta/obsolescencia técnica sutil: `text-red-400/50`) mientras el "Ahora" fulgurará en Magenta vibrante corporativo.
- **Caso de Uso (Ejemplo):** Diseñar usando un diagrama abstracto basado en Flex/Grid (e.g. Cajas conectadas por flechas o signos `+`) para el "Seguro embebido", en lugar de usar imágenes.
- **Mantener Anclaje:** Todo el mega-bloque debe estar envuelto en o seguir respondiendo a `<section id="product-studio">` para el smooth scrolling.
