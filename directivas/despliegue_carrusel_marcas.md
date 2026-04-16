# Directiva: Actualización de Marquesina de Marcas (Confianza B2B)

## Objetivos
1. **Validación Visual:** Inyectar una fila de marcas de altísimo calibre en la Home (Assurant, Barbuss, Sura, Vida Security, Motorola, Volkswagen, Banco Galicia, Europ Assistance) para revalidar el target Enterprise.
2. **Estética Homogénea:** Los logos de las marcas clientes no pueden generar ruido visual. Deben ser insertados como tipografías neutrales SVG estrictamente de color blanco.
3. **Flujo de Animación Continua:** Se exigirá un Carrusel en *Loop Infinito* usando CSS Keyframes de transición lineal sin fin (`linear infinite`), que al duplicar la lista de nodos permita un scroll eterno.

## Restricciones UI
- Todos los componentes de las marcas tendrán una clase estándar transparente `opacity-40 hover:opacity-100 transition-opacity duration-300`.
- El bloque "Trusted By" debe situarse estratégicamente antes del Pie de página (Footer) o al finalizar el clímax de "Casos de Uso".
- Las fuentes que representen a los logos deben ser pesadas y geométricas (`font-black tracking-widest`) simulando pesos isotópicos reales de las marcas.
