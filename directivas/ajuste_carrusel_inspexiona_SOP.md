# SOP: Ajuste de Carrusel en Landing de InspeXiona

## Objetivo
Mover el carrusel de capturas de pantalla de InspeXiona desde la columna derecha del Hero a una sección centralizada e independiente inmediatamente debajo de la información del Hero. El carrusel debe mostrarse en formato horizontal de ventana de navegador web, permitiendo visualizar las capturas completas sin cortes ni apariencia móvil vertical.

## Entradas
- Archivo del cliente de InspeXiona: `app/inspexiona/InspexionaClient.tsx`.
- Lógica de carrusel: array `screens`, estados `activeScreenIndex` e `isPaused`.

## Salidas
1. **Archivo de InspeXiona Modificado**: `app/inspexiona/InspexionaClient.tsx` con el Hero centrado y el carrusel en formato navegador horizontal en su base.

## Lógica y Pasos
1. **Reestructurar el Hero superior**:
   - Modificar la estructura de columnas del Hero para remover el carrusel derecho.
   - Centrar el texto, logo, bajada y CTAs en un contenedor `max-w-4xl mx-auto text-center flex flex-col items-center justify-center`.
2. **Posicionar el Carrusel Horizontal (Browser Mockup)**:
   - Insertar un contenedor directamente debajo de los CTAs del Hero.
   - Darle la clase de anclaje `id="screenshots"`.
   - Estructurar el carrusel simulando un navegador web con botones de flecha (anterior/siguiente) e indicadores de dots inferiores.
   - Usar `Image` de Next.js con la clase `object-contain` y un padding sutil para asegurar que las capturas de pantalla de la aplicación (`1608x955px`) se visualicen completas sin deformación.
3. **Revertir duplicados de id**:
   - Remover el id `"screenshots"` de la sección `"Alcance Funcional"` para evitar duplicaciones.
4. **Verificación**:
   - Ejecutar `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No modificar el Header, el footer, los textos ni la lógica de negocio.
- Asegurar que el carrusel escale correctamente en mobile, tablet y desktop.
