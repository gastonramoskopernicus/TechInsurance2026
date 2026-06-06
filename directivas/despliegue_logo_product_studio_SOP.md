# SOP: Despliegue del Logo Oficial de Product Studio (Vectorial sin Fondo)

## Objetivo
Implementar la versión oficial del logotipo de Product Studio en su landing page (`/product-studio`). Para asegurar una estética enterprise premium coherente con EEP, se utilizará el archivo SVG transparente (`public/product-studio-logo.svg`) y se integrará en la sección superior izquierda del Hero y en el nodo central orbital del Hero derecho.

## Entradas
- Archivo SVG del logo de Product Studio: `public/product-studio-logo.svg`.
- Archivo de página de Product Studio: `app/product-studio/page.tsx`.

## Salidas
1. **Página de Product Studio Modificada**: `app/product-studio/page.tsx` utilizando la referencia de la imagen de logo oficial en lugar de los placeholders SVG inline.

## Lógica y Pasos
1. **Identificar los SVG inline**:
   - Localizar el primer SVG inline bajo el comentario `{/* Logo Product Studio */}` en el Hero izquierdo.
   - Localizar el segundo SVG inline bajo el comentario `{/* Cubo 3D / Box Central */}` en el Hero derecho.
2. **Reemplazo con la etiqueta `<img>`**:
   - Reemplazar el primer SVG inline por:
     ```tsx
     <img
       src="/product-studio-logo.svg"
       alt="Product Studio Logo"
       className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]"
     />
     ```
   - Reemplazar el segundo SVG inline por:
     ```tsx
     <img
       src="/product-studio-logo.svg"
       alt="Product Studio Core"
       className="w-24 h-24 object-contain filter drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
     />
     ```
3. **Verificación**:
   - Correr `npm run build` para validar que Next.js compile de forma exitosa.

## Restricciones y Casos Borde
- No alterar textos de negocio, navegación general, footer ni otras secciones del sitio.
- Asegurar transparencia absoluta del logo sobre el fondo oscuro (`bg-[#020104]`).
