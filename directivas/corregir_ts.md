# Directiva: Corrección de Sintaxis de TypeScript

## Objetivo
Resolver errores originados por la conversión automática de strings durante el scaffolding, asegurando compatibilidad estricta con TypeScript en todo el proyecto.

## Restricciones
- Tocar exclusivamente la sintaxis de los constructos de array y string operations.
- NO alterar el contenido conceptual, Layout, componentes, ni ruteo.

## Cambios a Realizar (Por el Script)
1. Escanear todos los archivos en `/web/app/` (y subcarpetas).
2. Reemplazar apariciones del método Python portado por error `.lower()` por el método estándar en Javascript `.toLowerCase()`.
3. Reemplazar apariciones erróneas (si existieren) de `.upper()` por `.toUpperCase()`.
4. Garantizar que todas las iteraciones `.map()` generadas recientemente tengan un prop `key`. (Dado el scaffolding reciente de la directiva anterior, todos los maps creados en `plataforma`, `soluciones` y `casos-de-uso` ya poseían sus atributos `key={m}`, `key={s.t}` y `key={c}`). El script comprobará y corregirá si hiciese falta.
