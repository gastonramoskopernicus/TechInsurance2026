# SOP: Modificación Hero y Animación de Cubo

## Objetivo
Implementar una pieza visual interactiva y premium en la sección Hero de la Home. Representar el "core asegurador" como un cubo tridimensional tecnológico con iluminación dramática que, al hacer scroll, se desacople suavemente para simbolizar la evolución lograda con Tech Insurance.

## Entradas
- HTML y CSS de la Home actual (`sitio_estructura/index.html`, `sitio_estructura/styles.css`).
- Variables de esquema de color (fondos oscuros, accents púrpuras).
- Restricciones: Sin animaciones excesivas, estilo enterprise.

## Salidas
- `sitio_estructura/styles.css` modificado con las reglas de perspectiva 3D, caras del cubo, resplandores (iluminación) y transiciones basadas en variables CSS.
- `sitio_estructura/index.html` modificado con la inyección del DOM del cubo y un listener Vanilla JS minúsculo para atar el scroll a la variable CSS responsable del desacople.

## Lógica y Pasos
1. Abrir archivo HTML actual y localizar la sección `.hero`.
2. Insertar dentro un contenedor `.core-cube-container` con la estructura `.cube` y sus 6 `.face`.
3. Anexar al archivo CSS las reglas completas de 3D transform, rotaciones isométricas, colores dark/violet y sombras (box-shadow) para la iluminación dramática.
4. Anexar dentro del HTML un bloque `<script>` que capte `window.scrollY` y lo asigne a una variable CSS `--scroll` (normalizada).
5. En CSS, usar `calc()` con la variable `--scroll` para expandir el `translateZ` de las caras del cubo de manera elegante pero sutil sin movimientos bruscos.

## Restricciones y Casos Borde
- Mantener la elegancia del sitio SaaS (sin rebotes, rotaciones frenéticas ni colores chillones).
- Asegurarse de que el script preserve el contenido orgánico ya fijado en el JSON de la Home.
- Ejecutar mediante script Python.
