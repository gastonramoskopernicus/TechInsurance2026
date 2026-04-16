# Directiva: Actualización de Identidad Visual (Branding Magenta)

## Objetivo
Reemplazar la paleta de colores azul/celeste/cian y desplegar la identidad visual oficial del producto basada en la paleta Magenta/Fuchsia. Adicionalmente, ubicar el isotipo geométrico puro proporcionado en la barra de navegación.

## Restricciones
- Solo se realiza "Find & Replace" selectivo a nivel de tokens CSS y variables de Tailwind.
- NO alterar grillas, spacings, anidamiento de componentes ni copys.
- El isotipo se instalará al costado del texto `TECH INSURANCE` utilizando la etiqueta nativa o estándar preservando las proporciones 1:1, sin efectos artificiales (glow, shadows).
- El background blanco del logo original ya fue suprimido mediante procesamiento por script en el paso previo (creando `public/logo-icon.png`).

## Procedimiento (Script)
1. **Global CSS**: Actualizar `--primary` en `app/globals.css` desde el código `#3b82f6` hacia el Magenta (`#d946ef`).
2. **Tailwind Tokens**: Escanear los archivos `.tsx` de `app/` para transmutar los strings de clases nativos: `blue-*` → `fuchsia-*`, e `indigo-*` / `cyan-*` → `pink-*`.
3. **Navbar**: Inyectar `<img src="/logo-icon.png" className="h-8 w-auto" />` dentro del bloque `Link` del header, acomodándolo con un layout `flex items-center gap-2`.
