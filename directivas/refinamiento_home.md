# Directiva: Refinamiento de la Home (Jerarquía y UI Premium)

## Objetivos
1. Incrementar drásticamente el peso analítico de las secciones "Problema" y "Solución" pasándolas a esquemas basados en grids de alto impacto visual.
2. Afinar la paleta de las "Core Capabilities Cards" exclusivamente hacia gradientes de Magenta y Gris.
3. Eliminar los CTAs del Hero para limpiar la escena y priorizar el logo.

## Modificaciones de Renderizado
- **Hero:** Extraer el `div` de botones que encapsula "Solicitar Demo" bajo la bajada textual del hero, liberando la atención netamente hacia el isotipo animado.
- **Sección Problema:** Rediseñar la actual alerta en un Grid 2x2. Utilizar contenedores con fondos muy oscuros (`bg-zinc-900/50`) e inyectar íconos stroke monocromáticos contrastados para listar `Tiempos largos`, `Alto costo`, `Dependencia` y `Riesgo`.
- **Sección Solución:** Desplegar los 4 ítems como tarjetas pequeñas 1x4 (Desk) y apiladas (Mobile) con transiciones en Hover. Cada una integrará iconos de stroke 1.5 y textos en tipografía moderna e imponente.
- **Cards de Capacidades:**
   - Card 1: Re-entintada a Magenta profundo puro (`#311030`).
   - Card 2: Aplicación de fondo gradiente (`from-[#3b0b3d] to-[#1a081c]`).
   - Card 3: Mezcla de grafito asfalto con tintes bordó magenta (`#1a191e`).

## Restricciones
- Respetar al 100% los identificadores de anclaje de navegación (`id="solucion"`, `id="problema"`).
- Ejecutar mediante reescritura directa a nivel DOM para evitar romper el encapsulamiento de dependencias.
