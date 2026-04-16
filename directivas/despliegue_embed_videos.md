# Directiva: Inyección de iFrames Audiovisuales (YouTube Embeds) en Recursos

## Objetivos
1. **Veracidad de Contenidos:** Sustituir los placeholders genéricos del bloque `#videos` en `/recursos` por reproductores de YouTube 100% reales apuntando a los identificadores `37LdiHUi6A8` y `5rF4i2rLTGk`.
2. **Integración Premium:** El `<iframe>` originario de YouTube no puede romper el flujo de la UI (Dark, redondeado, translúcido). Debe insertarse protegido dentro de un `div` con envolvente de formato de aspecto (`aspect-video`), bordes redondeados y sombra hiper-elegante.
3. **Distribución de Columnas:** Implementar una grilla `grid-cols-1 md:grid-cols-2` para respetar espacios, adjuntando a cada cápsula de video su respectivo título conceptual (Ej: "Tech Insurance Overview").

## Restricciones UI
- Ocultar la barra genérica de Youtube pasando parámetros limpios a la URL del embed: `?rel=0&modestbranding=1`.
- Envolver el iframe en los backgrounds establecidos (`#0a050b`), aplicando un border general en estado inactivo `border-white/5` que se ilumine hacia `border-fuchsia-900/50` en hover para instigar al clic en Play.
