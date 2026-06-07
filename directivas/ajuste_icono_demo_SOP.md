# SOP: Ajuste de Icono en Landing de Demo

## Objetivo
Reemplazar el icono de candado en el contenedor superior del formulario de Demo (`app/demo/page.tsx`) por el isotipo/cubo oficial de Tech Insurance (`/TechInsurance.svg`), logrando la unificación visual e identitaria de toda la suite de productos.

## Entradas
- Archivo de página Demo: `app/demo/page.tsx`.
- Asset del isotipo: `/TechInsurance.svg`.

## Salidas
1. **Archivo de Demo Modificado**: `app/demo/page.tsx` importando `Image` y mostrando el cubo de Tech Insurance centrado en el contenedor superior.

## Lógica y Pasos
1. **Importar Image de Next.js**:
   - Agregar `import Image from "next/image";` al inicio del archivo.
2. **Localizar e inyectar el cubo**:
   - Reemplazar el bloque:
     ```tsx
     <div className="w-16 h-16 mx-auto bg-[#0a050b] rounded-2xl border border-fuchsia-900/40 text-fuchsia-500 flex items-center justify-center mb-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
     </div>
     ```
     por:
     ```tsx
     <div className="relative w-16 h-16 mx-auto bg-[#0a050b] rounded-2xl border border-fuchsia-900/40 flex items-center justify-center mb-6 overflow-hidden">
       <div className="absolute inset-0 p-3.5 flex items-center justify-center">
         <Image src="/TechInsurance.svg" alt="Tech Insurance Cube" width={36} height={36} className="object-contain" />
       </div>
     </div>
     ```
3. **Verificación**:
   - Correr `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No modificar el formulario de login, textos, estilos, validaciones ni enrutamiento.
- Asegurar que el logo quede perfectamente centrado y con el mismo glow magenta.
