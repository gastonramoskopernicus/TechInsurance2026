# Directiva: Estructura Base del Sitio (Tech Insurance)

## Objetivo
Establecer y consolidar la estructura base (Layout, Header, Footer y Home estructural) del sitio Tech Insurance. Se debe mantener el contenido actual y el diseño tipo SaaS enterprise, asegurando que la navegación y los contenedores estén correctamente configurados sin añadir complejidad innecesaria (ej. sin animaciones complejas).

## Entradas y Archivos Involucrados
- `web/app/layout.tsx`: Layout general que debe incluir `<Header />` y `<Footer />`.
- `web/app/components/Header.tsx`: Componente de navegación principal.
- `web/app/components/Footer.tsx`: Pie de página.
- `web/app/page.tsx`: Home estructural.

## Lógica y Restricciones
- **Navegación:** Se debe mantener el array `navItems` ya definido en el Header.
- **Aspecto SaaS Enterprise:** Conserve estilo limpio ('dark mode' con paletas neutras y blue/indigo primitives).
- **Animaciones:** Eliminar o simplificar animaciones muy complejas en esta etapa estructural para priorizar la estabilidad.
- **Home:** Mantener las 9 secciones conceptuales base pero sin rehacer el texto ni el contenido completo. 
- Restricción Clave: **NO** crear otras páginas web todavía.

## Pasos del Script
1. Validar la existencia de `Header.tsx` y `Footer.tsx` en `app/components/`.
2. Validar que `layout.tsx` importe e incluya dichos componentes dentro del body.
3. Revisar `page.tsx` para simplificar la animación del 'tech cube' y asegurar que la estructura esté alineada a la directiva base estructural.
