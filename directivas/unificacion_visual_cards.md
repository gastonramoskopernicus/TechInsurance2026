# Directiva: Estandarización Visual de Cards y Adición de Marquee (Enterprise SaaS)

## Objetivos
1. **Unificación Geométrica:** Propagar la estética Magenta Oscuro (`bg-[#311030]`, `bg-[#150d1a]`, `bg-[#0f0e11]`) y la tridimensionalidad (elevación hover + bordes Fuchsia) a todas las capas de `Problema`, `Solución` y ahora *`ROI`*.
2. **Íconos Protagonistas:** Reescalar agresivamente los SVG vectoriales de las cajas (pasando a `w-14` / `h-14` mínimo) e integrando variaciones de opacidad sutil, abandonando el formato de listados.
3. **Identidad Core Hub:** Inyectar una instancia limpia y centralizada del isotipo animado (`TechInsurance.svg`) dentro de la sección "Innovation Hub" antes del copy.
4. **Credibilidad Comercial:** Construir desde cero un carrusel fotográfico (Marquee de scroll infinito en CSS puro) de "Empresas que ya utilizan..." conteniendo placeholders isométricos (logos en escala estricta de gris, encendiendo color original/brillo nativo con el hover).

## Restricciones
- No reescribir ni tocar las macros de texto. Todas conservarán sus anclajes semánticos existentes.
- Prohibición de cargar librerías extrenas pesadas (Framer Motion o Swiper). Todo el Marquee se rige con `@keyframes` inyectado en `globals.css` logrando `-translate-x-1/2` del widht 200%.
- No usar colores azules al generar los nuevos íconos en SVG (mantenerse estrictos en la paleta Magenta y Zinc transparente).
