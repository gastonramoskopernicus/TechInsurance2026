# SOP: Ajuste Puntual de Iconos en Resultados Concretos (EEP)

## Objetivo
Reemplazar los emojis de la sección "Resultados Concretos" en la landing page de EEP por iconografía vectorial premium en SVG, garantizando consistencia de diseño con la suite de Tech Insurance (outline moderno, grosor de línea uniforme y un sutil brillo/glow fucsia).

## Entradas
- Archivo del componente cliente `app/eep/EepClient.tsx`.
- Especificaciones de diseño: 5 iconos vectoriales (conversión, retención, conocimiento, automatización, rentabilidad).

## Salidas
1. **Componente Cliente Modificado**: `app/eep/EepClient.tsx` con la sección "Resultados Concretos" actualizada.

## Lógica y Pasos
1. **Identificar la sección**: Localizar la lista `results` y su renderizado en `app/eep/EepClient.tsx`.
2. **Reemplazo de Iconos**:
   - Quitar el campo o elemento de emoji en `results`.
   - Incorporar iconos vectoriales inline en SVG para cada uno de los 5 beneficios:
     - Más conversión: Gráfico de barras ascendente / tendencia.
     - Más retención: Escudo protector con silueta de usuario.
     - Más conocimiento: Grafo / Red de nodos interconectados (analytics).
     - Más automatización: Flujo circular de automatización / workflows.
     - Más rentabilidad: Símbolo de ROI / rendimiento.
   - Definir un grosor de línea (`strokeWidth="1.5"` o similar) y aplicar una sombra/glow sutil en color fucsia (`drop-shadow-[0_0_8px_rgba(217,70,239,0.35)]`).
3. **Mantener Resto de la Landing**:
   - Asegurarse de no realizar ningún cambio en otras secciones (Hero, Ecosistema, CTA final, etc.).

## Restricciones y Casos Borde
- No modificar el Header, ni layouts, ni el enrutador.
- Comprobar que compile sin advertencias o errores (`npm run build`).
