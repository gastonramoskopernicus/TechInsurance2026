# SOP: Creación de la página y módulo InspeXiona

## Objetivo
Agregar la nueva sección/página `/inspexiona` dentro del sitio principal de Tech Insurance. Esta sección debe actuar como una landing page que detalle las funcionalidades, el alcance y el valor del módulo de inspecciones digitales, respetando la identidad visual, tipografía y diseño responsivo del sitio actual.

## Entradas
- Archivo del Header (`app/components/Header.tsx`).
- Textos y requerimientos funcionales y de negocio provistos.

## Salidas
1. **Página Principal**: `app/inspexiona/page.tsx`.
2. **Metadata**: Configuración SEO correcta en el `page.tsx` (`title` y `description`).
3. **Logo Placeholder**: `public/inspexiona-logo.svg`.
4. **Header**: `app/components/Header.tsx` actualizado para incluir "InspeXiona" en el menú principal.

## Lógica y Pasos
1. **Generación del Logo**:
   - Crear un archivo `inspexiona-logo.svg` como un placeholder profesional que contenga el texto "InspeXiona" con alguna iconografía orientada a escaneo o cámara, utilizando los colores fucsia/magenta característicos.
2. **Actualización del Menú**:
   - Agregar `{ label: "InspeXiona", href: "/inspexiona" }` a la lista `navItems` en `Header.tsx`.
3. **Construcción de la Landing Page (`/inspexiona`)**:
   - **Hero Section**: Mostrar el logo de InspeXiona, un título fuerte ("InspeXiona: inspecciones digitales para seguros") y el subtítulo indicado.
   - **Alcance Funcional (Features)**: Crear una grilla de `cards` o una lista con íconos que describa las funcionalidades (web app sin descarga, captura guiada, geolocalización, metadata, trazabilidad, etc.).
   - **Casos de Uso**: Mostrar en un formato visual (como tabs o un grid) los casos: Previa, Siniestros, Dispositivos Electrónicos, Remota.
   - **Beneficios**: Listado de beneficios claros para las aseguradoras.
   - **Componentes**: Detallar los módulos principales de la herramienta.
   - **Llamados a la acción (CTA)**: Incluir botones como "Solicitar demo", "Ver módulo InspeXiona" (`https://inspexiona.techinsurance.com.ar`) y "Contactar a Kopernicus".
4. **Metadata SEO**:
   - Incluir la metadata estándar de Next.js en la página para cumplir con los requerimientos SEO.

## Restricciones y Casos Borde
- No modificar el esquema de colores actual (mantener fondos `#020104`, bordes fucsia translúcidos, textos zinc y blancos).
- Los CTA deben funcionar en mobile y desktop.
- Asegurarse de que el script Python que ejecute estos cambios sea idempotente, reescribiendo o agregando el contenido de forma segura sin romper sintaxis TSX.
