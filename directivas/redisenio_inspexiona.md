# SOP: Rediseño Visual de Landing InspeXiona

## Objetivo
Refinar y profesionalizar la experiencia visual de la página `/inspexiona`. Se debe incorporar el logo oficial, simplificar el Hero eliminando CTAs para limpiar la interfaz, y mejorar la legibilidad de los Casos de Uso integrando iconografía moderna (estilo Lucide/Heroicons).

## Entradas
- Página actual: `app/inspexiona/InspexionaClient.tsx`.
- Logo oficial provisto por el cliente (se asumirá ubicación `public/inspexiona-logo.png`).

## Salidas
- Script de Python `scripts/redisenar_inspexiona.py` que refactorice `InspexionaClient.tsx`.
- `InspexionaClient.tsx` actualizado con el nuevo diseño.

## Lógica y Pasos

1. **Actualizar el Hero**:
   - Reemplazar el SVG temporal por el logo oficial (`<img src="/inspexiona-logo.png" />` o componente Image).
   - Eliminar los botones "Ver módulo InspeXiona" y "Solicitar demo" del Hero.
   - Ajustar los márgenes, espaciados (padding) y alineación del Hero para que el texto y el logo ocupen el espacio armónicamente sin verse desbalanceados.

2. **Sección Alcance Funcional**:
   - Mantener intacta sin modificaciones.

3. **Sección Casos de Uso**:
   - Para cada caso de uso existente (o los nuevos si se amplían), agregar un ícono SVG minimalista (outline, strokeWidth="1.5") que represente visualmente la temática.
   - Mejorar el diseño de la *card* para que el ícono resalte (por ejemplo, dentro de un contenedor con fondo sutil) y el texto sea fácil de escanear.

4. **UI/UX General**:
   - Revisar que el fondo oscuro premium y los acentos de color se mantengan.
   - Ajustar el layout en mobile/tablet para evitar saturación visual.

## Restricciones y Casos Borde
- No romper la separación de Server/Client components ya establecida.
- No modificar los textos de "Alcance Funcional".
- Asegurar que los íconos insertados usen clases de Tailwind consistentes con el diseño actual.
