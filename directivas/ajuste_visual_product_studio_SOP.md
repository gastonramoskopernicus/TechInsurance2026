# SOP: Ajuste Visual - Composición Orbital de Product Studio

## Objetivo
Rediseñar el componente visual del Hero derecho en la landing page de Product Studio (`/product-studio`) para representar las tres capas concéntricas de capacidades (anillos de parametrización), manteniendo el logo del cubo central, la animación de respiración (breath) y el estilo minimalista premium.

## Entradas
- Archivo de página de Product Studio: `app/product-studio/page.tsx`.
- Estructura de capacidades por anillo:
  - Primer anillo: Productos, Coberturas, Prestaciones, Planes, Fórmulas, Reglas.
  - Segundo anillo: Pricing, Canales, Comisiones, Promociones, Vigencias, Versionado.
  - Tercer anillo: Workflow, Integraciones, APIs, Documentos, Validaciones, Analytics.

## Salidas
1. **Página de Product Studio Modificada**: `app/product-studio/page.tsx` con el componente orbital completo y responsivo.

## Lógica y Pasos
1. **Definición de Nodos y Posiciones**:
   - Posicionar un nodo central con un círculo de fondo oscuro y borde fucsia que contenga el logo SVG (`/product-studio-logo.svg`) y la etiqueta "PRODUCT STUDIO".
   - Distribuir radialmente las capacidades usando coordenadas relativas calculadas mediante trigonometría en un contenedor de 500x500px.
   - Definir iconos lineales monocromáticos inline en SVG para cada capacidad.
2. **Dibujar Conexiones**:
   - Agregar un SVG subyacente que trace líneas de conexión sutiles de color fucsia/índigo desde el centro `(250, 250)` hasta la coordenada de cada capacidad.
   - Incluir círculos de referencia punteados para destacar las órbitas (anillos).
3. **Optimización Responsiva**:
   - Usar clases de Tailwind CSS como `scale-[0.6] xs:scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-100` para reducir el tamaño del contenedor orbital en pantallas más pequeñas sin romper el diseño.
4. **Verificación**:
   - Correr `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No usar emojis ni imágenes adicionales.
- Mantener exactamente la estética premium actual (fondo oscuro, glow magenta sutil).
- No modificar ninguna otra sección de la landing page.
