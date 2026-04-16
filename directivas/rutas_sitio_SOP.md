# SOP: Definición de Rutas del Sitio Web

## Objetivo
Definir y listar de manera exhaustiva las rutas (URLs relativas) amigables y limpias basadas en la estructura del sitio Tech Insurance previamente acordada, sin modificar estructura física de archivos ni generar contenido.

## Entradas
Estructura previamente generada en `directivas/estructura_sitio_SOP.md`.

## Salidas
- Documento `sitio_estructura/rutas_limpias.txt` con la lista de rutas exactas ordenadas.

## Lógica y Pasos
1. Leer o replicar el árbol de jerarquía (site_structure) existente.
2. Definir una función de "slugify" estandarizada para minúsculas y guiones.
3. Iterar por secciones base agregando `/{seccion_slug}`.
4. Iterar por sub-secciones agregando `/{seccion_slug}/{sub_slug}`.
5. Volcar la lista en el archivo de texto.

## Restricciones y Casos Borde
- Ninguna ruta debe terminar con barra (`/`), excepto la raíz (`/`).
- Generar solo los nombres de ruta sin dominio base.
