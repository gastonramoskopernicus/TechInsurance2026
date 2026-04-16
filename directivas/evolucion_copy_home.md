# Directiva: Elevación de Copy (Home)

## Objetivo
Optimizar el copy de la Home (`app/page.tsx`), inyectando tonos hiper-directos orientados a ejecutivos (SaaS Enterprise). Se reemplazan largos párrafos por listas de impacto y oraciones cortas ("El problema no es tecnológico. Es estructural.").

## Restricciones
- Solo se reescriben los textos y sub-estructuras divisorias lógicas de copy dentro de la Hero, Problema, Solución e Impacto.
- El diseño general (tailwind grids, gradients, paddings, backgrounds) debe quedar intacto.

## Cambios por el script
1. **Hero:** Modificar H1 (`"Deje de depender..."`), y añadir la bajada explícita de "Mientras el core mantiene la operación...".
2. **Problema:** Transformar de texto plano a lista con los pain points (tiempos largos, alto costo...).
3. **Solución:** Introducir listado de checks (lanzar productos en días, etc.).
4. **Impacto:** Modificar la descripción única por bullets de ROI con énfasis visual (emerald circles).
