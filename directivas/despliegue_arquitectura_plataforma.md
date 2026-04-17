# Directiva: Re-estructuración Arquitectónica de Plataforma y Desacople Product Studio

## Objetivos
1. **Urbanización:** La comunicación core de la página de `/plataforma` debe enfocarse tajantemente en la "Urbanización". Esta urbanización asume la obsolescencia del legacy de las aseguradoras (20+ años), operando como un Hub que alarga la vida del monolito al extraer la transaccionalidad hacia sistemas modernos rápidos.
2. **Jerarquía Modular (Anti-Duplicación):** El `Product Studio` no debe ser explicado íntegramente dentro de `/plataforma`. Plataforma es el entorno completo, Product Studio es un entorno especializado para perfiles técnico/comerciales. Todo rastro grueso de Product Studio debe reducirse a un Teaser (Card/Banner referencial) apuntando hacia `/product-studio`.

## Restricciones UI
- La grilla en "Desacoplar Evolución" debe presentarse formalmente en un `grid-cols-1 md:grid-cols-3`.
- Mantener los fondos de tarjeta como neutrales corporativos `#0f0e11` con borde magenta invisible `fuchsia-900/30` que se encienda en hover `hover:border-fuchsia-500/40`.
- El teaser redireccional hacia `/product-studio` utilizará siempre el botón magenta corporativo de acción fuerte con icono `<path d="m12 5 7 7-7 7"/>`.
