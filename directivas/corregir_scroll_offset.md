# Directiva: Corrección del Scroll Offset en Navegación

## Objetivo
Solucionar el problema de solapamiento que ocurre cuando la barra sticky "pisa" los títulos de las secciones al utilizar los anclajes (Anchor Links) de la navegación secundaria en `/plataforma`.

## Restricciones
- Conservar los IDs existentes y el enrutamiento interno (`#capacidades`, etc).
- NO reescribir contenido, ni el diseño general ni los flujos funcionales.
- Restringirse exclusivamente a inyectar la utilidad `scroll-mt-*` correspondiente de Tailwind CSS.

## Resolución Programática
1. Incorporar la clase de Tailwind `scroll-mt-32` a cada contenedor (`section` o `div`) que posea un `id` asociado a la navegación pegajosa en `page.tsx`. Esta directriz CSS le indica al navegador que agregue un margen de seguridad (`margin-top` virtual de 8rem) sobre el punto meta del scrolleo, preservando íntegramente la visibilidad del título sin alterar la pintura estructural de la página en estado estático.
