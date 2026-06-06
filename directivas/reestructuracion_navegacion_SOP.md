# SOP: Reestructuración de Navegación y Arquitectura del Sitio

## Objetivo
Reorganizar la navegación principal (Header) y el footer para reflejar de forma clara y jerárquica la arquitectura de Tech Insurance. La plataforma actúa como base, mientras que Product Studio, InspeXiona y EEP son soluciones construidas sobre ella.

## Entradas
- Archivo del Header: `app/components/Header.tsx`
- Archivo del Footer: `app/components/Footer.tsx`

## Salidas
1. **Header Modificado**: `app/components/Header.tsx` con un menú ordenado y un dropdown de "Soluciones" en versiones desktop y mobile.
2. **Footer Modificado**: `app/components/Footer.tsx` con columnas estructuradas bajo: Tech Insurance, Soluciones, Empresa y CTA.

## Lógica y Pasos

### 1. Menú Principal (Header)
- Reordenar la barra de navegación para seguir la jerarquía:
  - Plataforma (`/plataforma`)
  - Soluciones (Menú desplegable / Dropdown):
    - Product Studio (`/product-studio`)
    - InspeXiona (`/inspexiona`)
    - EEP (`/eep`)
  - Arquitectura (`/arquitectura`)
  - Casos de Uso (`/casos-de-uso`)
  - Ecosistema (`/ecosistema`)
  - Empresa (`/empresa`)
  - Demo (`/demo`)
  - Contacto (`/contacto`)
- El botón de acción "Solicitar Demo" a la derecha debe mantenerse apuntando a `/contacto` con el mismo diseño premium.
- **Dropdown "Soluciones" en Desktop**:
  - Implementar un menú interactivo que responda al hover y click de forma fluida.
  - Asegurar transiciones suaves y estética premium (vidrio/glassmorphism, bordes semi-transparentes fucsias/magenta).
- **Dropdown "Soluciones" en Mobile**:
  - En la vista móvil, incluir "Soluciones" como un menú colapsable/desplegable interno en la navegación vertical para que el usuario pueda acceder a Product Studio, InspeXiona y EEP.

### 2. Footer
- Distribuir las columnas de navegación bajo los siguientes títulos principales:
  - **TECH INSURANCE**: Plataforma, Arquitectura, Casos de Uso, Ecosistema.
  - **SOLUCIONES**: Product Studio, InspeXiona, EEP.
  - **EMPRESA**: Empresa, Contacto, Demo. (Conservar enlaces legales de Política de Privacidad y Términos y Condiciones debajo o en esta misma columna).
  - **CTA**: Un bloque que contenga un botón de acción premium de "Solicitar Demo".
- Mantener la información de marca y el endorsement de Kopernicus intactos en el lateral izquierdo.

### 3. Validaciones
- Ejecutar `npm run build` para asegurar que todo compila perfectamente.
- Verificar que todas las páginas sigan siendo accesibles y que no se hayan roto enlaces ni alterado las landings.

## Restricciones y Casos Borde
- NO modificar el contenido de las landings.
- NO alterar URLs de las rutas actuales.
- Asegurar que la navegación responsive (mobile) funcione perfectamente.
