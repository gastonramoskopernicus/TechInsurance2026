# Directiva: Re-ambientación del Hero Cósmico

## Objetivo
Optimizar la profundidad escénica y la integración de la atmósfera espacial ("Universo Kopernicus") en el Hero, sin corromper el logo SVG implantado ni el layout de textos.

## Modificaciones Técnicas
1. **Atmosfera y Estrellas Sutiles:** Se inyectará un campo estelar generado puramente en CSS (`radial-gradients` minúsculos) como base inmersiva de baja latencia. 
2. **Backdrop Nebular:** Se ajustará la textura de `hero-cosmic-bg.png` existente aumentando su contraste e integración (`mix-blend-screen` con baja opacidad) para que fluya como un plasma abstracto oscuro, borrando toda pesadez visual.
3. **Halo de Foco:** Se establecerá un orbe de contención centrado explícitamente detrás del Logo (`bg-fuchsia-500/20` con `blur-[100px]`) que pulse a la par del "respiro" (`animate-breath`) para actuar como lente de iluminación y jerarquizar geométricamente al SVG.
4. **Respeto Estricto:** La estructura del texto permanecerá intocable.
