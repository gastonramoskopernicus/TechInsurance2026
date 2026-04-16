# Directiva: Reingeniería Minimalista de Casos de Uso

## Objetivos
1. **Limpieza Visual con Impacto:** Respetar la naturaleza de "scaneo rápido" de `/casos-de-uso` aplicando el estándar de interfaz de la Plataforma (Cards Enterprise esmeriladas, Grid, y Tipografía Magenta).
2. **Copy Orientado a la Acción:** El `micro-copy` pasa de lo descriptivo a lo imperativo (Ej: "Implementación ágil" -> "Lanzá productos en días").
3. **Inyección Vectorial:** Todos los casos de uso deben contener un icono abstracto `Outline SVG` (`w-10`) con transición `zinc-600` a `fuchsia-500` on-hover.

## Restricciones UI
- **Sin Bloatware Visual:** A diferencia de Soluciones o Plataforma, esta vista NO lleva un Mega-Menu Sticky. Debe sentirse veloz y directa. La lectura se concentra estrictamente en la matriz de tarjetas.
- **Identidad de Cards:** `bg-[#0f0e11] hover:bg-[#16141a]`, bordes translúcidos en blanco base que suben a fuchsia en estado hover. Espaciado interno generoso `p-8`.
