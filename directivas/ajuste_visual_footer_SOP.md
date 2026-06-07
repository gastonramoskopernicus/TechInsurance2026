# SOP: Ajuste Visual de Footer (Unificación Tipográfica)

## Objetivo
Unificar la tipografía, tamaños, pesos y espaciado de todos los enlaces en el Footer, garantizando consistencia visual absoluta entre las columnas. Además, se cambiará el título de la columna "CTA" a "CONTACTO" sin alterar su contenido ni diseño general.

## Entradas
- Archivo del footer: `app/components/Footer.tsx`.

## Salidas
1. **Footer Modificado**: `app/components/Footer.tsx` con tipografías y cabeceras normalizadas.

## Lógica y Pasos
1. **Cambiar Título de Columna**:
   - Reemplazar `<h4 className="font-semibold mb-4 text-white text-sm tracking-wider uppercase">CTA</h4>` por `<h4 className="font-semibold mb-4 text-white text-sm tracking-wider uppercase">CONTACTO</h4>`.
2. **Normalizar Tipografía de Columna Legal**:
   - Localizar la sección "Legal" dentro de la columna "Empresa" en `app/components/Footer.tsx`.
   - Modificar la cabecera `h4` para que use `text-sm mb-4` en vez de `text-xs mb-3` para que sea idéntico a las demás.
   - Modificar la lista `ul` para usar `space-y-3 text-sm text-zinc-400 font-light` en vez de `space-y-2 text-xs text-zinc-500 font-light`, unificándola con las demás listas de enlaces del footer.
3. **Verificación**:
   - Correr `npm run build` para asegurar la compilación.

## Restricciones y Casos Borde
- No modificar el comportamiento de enlaces ni botones en el footer.
- Respetar el grid responsivo y clases del contenedor externo.
