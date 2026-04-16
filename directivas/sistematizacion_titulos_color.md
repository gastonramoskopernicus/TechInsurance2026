# Directiva: Sistemática tipográfica mediante Gradientes Radiales 

## Objetivos
Implantar un patrón predecible tipo SaaS ("text-gradient") consistente en todas las cabeceras `<h2>` de las secciones de navegación en la Home. Los títulos se fraccionarán con la tipología de 2 o 3 estados.

## Método Visual
- Primera fracción del texto: Blanco Sólido.
- Palabra Clave/Resolución (El foco semántico de la declaración): Enmascarada en fondo degradado que fluye orgánicamente entre fuchsia eléctrico y rosa profundo, utilizando el set de utildiades de Tailwind: `text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400`.

## Restricciones
- La estructura semántica del texto no puede ser removida, tan solo envuelta parcialmente en etiquetas `<span className="...">`.
- Asegurar coherencia visual horizontal. Ningún título en solitario debe quedar excesivamente recargado de magenta. Únicamente la porción representativa asume el highlight.
