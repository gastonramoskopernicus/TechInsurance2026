# SOP: Corregir Build Error en InspeXiona (Metadata en Client Component)

## Objetivo
Resolver el error de compilación de Next.js en `app/inspexiona/page.tsx`:
`You are attempting to export "metadata" from a component marked with "use client", which is disallowed.`

## Entradas
- Archivo problemático: `app/inspexiona/page.tsx` que combina `"use client"` con `export const metadata`.

## Salidas
- `app/inspexiona/InspexionaClient.tsx`: Nuevo Client Component con el contenido interactivo y la marca `"use client"`.
- `app/inspexiona/page.tsx`: Server Component refactorizado que exporta `metadata` e importa y renderiza `<InspexionaClient />`.

## Lógica y Pasos
1. **Crear InspexionaClient**:
   - Mover todo el código de UI, estado (`useState`, `useEffect`) y arrays de datos (`features`, `useCases`) al nuevo archivo `app/inspexiona/InspexionaClient.tsx`.
   - Asegurarse de que empiece con `"use client";`.
   - Cambiar el nombre de la función exportada a `InspexionaClient`.
2. **Refactorizar page.tsx**:
   - Eliminar `"use client";`.
   - Mantener únicamente `export const metadata`.
   - Importar `InspexionaClient` y renderizarlo.
3. **Idempotencia**:
   - El script que aplique este SOP debe sobreescribir ambos archivos asegurando su correcto estado final sin duplicar código.

## Restricciones y Casos Borde
- No perder ninguna clase de Tailwind ni animaciones (`mounted`).
- No modificar el contenido de `metadata`.
