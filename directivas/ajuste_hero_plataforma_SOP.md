# SOP: Ajuste de Icono en Hero de Plataforma

## Objetivo
Reemplazar el icono de 3 capas apiladas del Hero de la página Plataforma (`/plataforma`) por el isotipo/cubo oficial de Tech Insurance (`/TechInsurance.svg`) utilizado en la sección "Corazón de la Innovación", escalándolo al doble de tamaño de esta última (`w-48 h-48`) para mantener una jerarquía visual premium.

## Entradas
- Archivo de la página Plataforma: `app/plataforma/page.tsx`.
- Asset del isotipo: `/TechInsurance.svg`.

## Salidas
1. **Página de Plataforma Modificada**: `app/plataforma/page.tsx` utilizando el cubo de Tech Insurance con la animación de respiración y el tamaño `w-48 h-48`.

## Lógica y Pasos
1. **Localizar el icono en el Hero**:
   - Buscar el contenedor del icono superior del Hero:
     ```tsx
     <div className="relative w-32 h-32 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.2)]">
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-fuchsia-500">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
       </svg>
     </div>
     ```
2. **Reemplazo por el Cubo**:
   - Sustituir por:
     ```tsx
     <div className="relative w-48 h-48 mx-auto mb-10 animate-breath opacity-90 drop-shadow-[0_0_25px_rgba(217,70,239,0.25)]">
       <Image src="/TechInsurance.svg" alt="Tech Insurance Cube" fill className="object-contain" priority />
     </div>
     ```
3. **Verificación**:
   - Correr `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No modificar el título, textos, animaciones, estilos ni otras secciones de la landing.
- Mantener la alineación central en mobile, tablet y desktop sin generar desbordamiento horizontal.
