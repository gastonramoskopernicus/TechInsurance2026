# Directiva: Refinamiento de Hero Espacial y Menú

## Objetivo
Lograr un impacto visual rotundo utilizando la identidad y el espacio "Kopernicus" en la página principal, e integrando la navegación Desktop con transiciones refinadas de branding Magenta.

## Restricciones
- No reescribir copys, ni modificar enrutamiento. Mantener jerarquía responsiva intacta.
- El objeto central debe basarse en la extracción generada (`hero_logo_...`) con fondo oscurecido; y el background incorporará la textura espacial (`hero_bg_...`) a pantalla completa bajo una capa semitransparente.
- Usar el CSS `mix-blend-screen` y/o `mix-blend-lighten` para desaparecer los remanentes puramente oscuros del logo artificial flotante sobre la nueva atmósfera.

## Implementación
1. **Header Hover:** Localizar iteración matemática `.map()` en `Header.tsx` y transmutar la clase abstracta `hover:text-foreground` por la terna elegante `transition-all duration-300 hover:text-fuchsia-500 hover:scale-105 inline-block`.
2. **Hero Background:** Inyectar una capa absoluta `Image` debajo de los gradientes (en el `<section id="hero">`) alimentada con `hero-cosmic-bg.png`. 
3. **Hero Ícono:** Reemplazar `hero-cube.png` por la nueva gema 3D `hero-logo-premium.png` asegurando que la caja contenedora aplique `mix-blend-screen`.
