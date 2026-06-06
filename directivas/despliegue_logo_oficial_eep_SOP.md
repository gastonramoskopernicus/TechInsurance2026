# SOP: Despliegue del Logo Oficial de EEP (Vectorial sin Fondo)

## Objetivo
Implementar la versión oficial de la imagen del logo de EEP en la landing page de EEP (/eep). Para garantizar un diseño premium enterprise, se vectorizará geométricamente la red cúbica del logo en formato SVG transparente sin fondo blanco, y se integrará en el Hero principal, en el nodo central del Ecosistema EEP y en la sección del CTA final.

## Entradas
- Archivo de imagen del logo de EEP provisto por el usuario.
- Archivo del componente cliente `app/eep/EepClient.tsx`.

## Salidas
1. **Logo SVG**: `public/eep-logo.svg` creado como un SVG con gradientes nativos y transparencia.
2. **Componente Cliente Modificado**: `app/eep/EepClient.tsx` con el logo aplicado en el Hero, en el Ecosistema central y en el CTA final.

## Lógica y Pasos
1. **Vectorización y Generación del Logo**:
   - Crear el archivo `public/eep-logo.svg` dibujando un hexágono regular con un nodo central y conexiones formando una estrella de David inscrita.
   - Usar las coordenadas matemáticas de vértices regulares.
   - Definir gradientes lineales en SVG que mezclen los colores exactos de cada nodo:
     - Celeste claro: `#51b4d3`
     - Rosa/Magenta: `#d93d82`
     - Amarillo: `#eed035`
     - Violeta: `#76479f`
2. **Integración en EepClient**:
   - **Hero Section**: Insertar un contenedor con el logo `eep-logo.svg` antes del título principal.
   - **Ecosistema**: Reemplazar el texto "EEP" del nodo central por la etiqueta `<img src="/eep-logo.svg" ... />` escalada correctamente.
   - **CTA Final**: Añadir la imagen del logo centrada antes del título del CTA final.
3. **Verificación**:
   - Comprobar que compile localmente sin errores de sintaxis (`npm run build`).

## Restricciones y Casos Borde
- No modificar el Header, textos de negocio, navegación, layouts ni otras secciones del sitio.
- Garantizar que el logo cargue correctamente tanto en mobile como en desktop.
