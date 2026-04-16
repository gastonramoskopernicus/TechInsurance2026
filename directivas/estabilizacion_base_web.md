# Directiva: Estabilización de Base Web (Tech Insurance 2026)

## Objetivo
Corregir y estabilizar la base técnica del proyecto web creado con Next.js, asegurando la correcta integración de Tailwind v4 y PostCSS, la configuración limpia de Next.js, y eliminando referencias residuales del template inicial.

## Archivos a Modificar
- `web/next.config.ts`: Asegurarse de que no requiere configuraciones adicionales para el root en el entorno Vercel a menos que estemos en un monorepo (por defecto ya toma `/web` si se configura en Vercel, pero se puede añadir validación u opciones base).
- Archivos en `web/public/`: Limpieza de los SVGs por defecto del template (`file.svg`, `globe.svg`, `window.svg`, `next.svg`, `vercel.svg`) que ya no se utilizan en la landing page.
- `web/app/globals.css` y `web/postcss.config.mjs`: Verificar que la sintaxis de Tailwind v4 y `@tailwindcss/postcss` es correcta (actualmente están correctas pero confirmaremos su estructura de imports).

## Paso a Paso (Scripts)
1. **Limpieza de Template:** Borrar archivos svg predeterminados de la carpeta public.
2. **Validación de Configs:** Asegurar la sintaxis de Next.js.
3. No alterar `app/page.tsx`, `app/layout.tsx` ni ningún diseño.

## Notas / Restricciones
- La carpeta root del servidor en Vercel debe ser `web`.
- No modificar el contenido de `landings` ni cambiar la UI / paleta de colores (Dark Mode).
