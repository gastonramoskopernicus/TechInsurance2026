# Directiva: Eliminar Motorola y Volkswagen del Carrusel

## Objetivo
Eliminar completamente del carrusel de la landing principal (`app/page.tsx`) cualquier referencia visual o textual a Volkswagen y Motorola, manteniendo la integridad funcional y estética del componente. Además, eliminar los assets asociados en la carpeta `public/empresas/`.

## Contexto
El usuario solicitó limpiar las referencias a estas dos empresas del carrusel de marcas en la página principal para reflejar los partners actuales correctamente.

## Pasos a Ejecutar por el Script
1. Abrir el archivo `app/page.tsx`.
2. Buscar la declaración del array de logos en la sección del componente marquee de empresas.
3. Eliminar los objetos del array que contengan `Motorola_new_logo.svg` y `Volkswagen-Logo-PNG-High-Quality-Image.png`.
4. Guardar los cambios en `app/page.tsx`.
5. Eliminar el archivo `public/empresas/Motorola_new_logo.svg` si existe.
6. Eliminar el archivo `public/empresas/Volkswagen-Logo-PNG-High-Quality-Image.png` si existe.

## Restricciones y Casos Borde
- Asegurarse de no dejar comas sueltas en el array de JavaScript/TypeScript que puedan causar errores de sintaxis.
- Si la eliminación reduce mucho la cantidad de logos, el slider continuará funcionando porque los logos mapeados mantienen un ancho flexible y se repiten en el loop (el array base se duplica ya con `[...Array(2)]`).
- **Nota: No remover el logo de VW sin castear `logo.imageClass` porque causa el error de Typescript de que `imageClass` no existe (solo VW lo usaba). En su lugar, reemplazar `${logo.imageClass || ""}` por `${(logo as any).imageClass || ""}`.**
