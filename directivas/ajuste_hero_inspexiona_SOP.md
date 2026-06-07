# SOP: Ajuste de Hero en Landing de InspeXiona

## Objetivo
Optimizar la sección del Hero en la landing page de InspeXiona (`/inspexiona`) moviendo el carrusel de capturas de pantalla interactivas 3D desde su ubicación anterior inferior hacia el lateral derecho del Hero, reemplazando la imagen estática. Se eliminará la sección duplicada de capturas inferior para mantener un flujo limpio y consistente.

## Entradas
- Archivo del cliente de InspeXiona: `app/inspexiona/InspexionaClient.tsx`.
- Lógica de carrusel existente: array `screens`, estados `activeScreenIndex` e `isPaused`.

## Salidas
1. **Archivo de InspeXiona Modificado**: `app/inspexiona/InspexionaClient.tsx` con el carrusel de capturas en el Hero y sin sección duplicada.

## Lógica y Pasos
1. **Reemplazar mock de imagen en el Hero**:
   - Localizar el bloque del mockup estático del celular a la derecha del Hero.
   - Insertar en su lugar el contenedor del carrusel interactivo (`ref={containerRef}`, `onMouseEnter`, `onMouseLeave`).
   - Ajustar el estilo de cada elemento del array `screens` dentro del carrusel para renderizar cada captura en formato vertical de mockup de teléfono con bordes grises y notch superior.
   - Aplicar transformación 3D responsiva.
2. **Eliminar sección duplicada inferior**:
   - Localizar el bloque `<section id="screenshots" className="py-24 px-4 bg-[#050208] ...">` y eliminarlo por completo.
3. **Mantener Anclajes y Enlaces**:
   - Agregar `id="screenshots"` y `scroll-mt-24` a la sección de "Alcance Funcional" inmediatamente posterior, asegurando que el botón "Ver Interfaz" en el Hero mantenga un comportamiento coherente al hacer scroll.
4. **Verificación**:
   - Ejecutar `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No modificar textos de negocio, layouts globales, cabecera o footer.
- Garantizar que las imágenes no queden recortadas o deformadas.
