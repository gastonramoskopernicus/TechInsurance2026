# SOP: Integración de Favicon y Assets de Marca

## Objetivo
Implementar correctamente el favicon y todos los assets asociados (iconos para iOS, Android, manifest) para Tech Insurance, manteniendo el estándar de calidad visual y garantizando compatibilidad en todas las plataformas y navegadores.

## Lógica y Pasos
1. **Validación de Assets**: Revisar los logos disponibles (logo completo, isologo) y seleccionar el que mejor se adapte a tamaños pequeños (generalmente el isotipo/cubo).
2. **Generación de Tamaños**:
   - `favicon.ico` (múltiples resoluciones o al menos 32x32)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
3. **PWA / Manifest**: Generar `site.webmanifest` con la información básica e iconos.
4. **Integración en Next.js**:
   - App Router (`app/layout.tsx` o metadatos estándar de Next.js colocando archivos `icon.png`, `apple-icon.png` en `app/`).
   - Opcionalmente usando la API de Metadata en `layout.tsx`.
5. **Generación mediante script**: Usar Python (Pillow) para procesar `public/logo-icon.png` y guardar los resultados en la ubicación adecuada (`public/` o `app/`).

## Restricciones y Casos Borde
- No usar SVG directamente como único favicon si se requiere compatibilidad con navegadores antiguos.
- Next.js 13/14 App Router prefiere los archivos `icon.png`, `favicon.ico`, `apple-icon.png` directamente en la carpeta de `app/` para generación automática de metadata. Pero como se pide explicitamente `site.webmanifest`, podemos alojarlos en `public/` y referenciarlos en el `Metadata` object en `app/layout.tsx`.
- Cuidado con el fondo transparente para PWA icons frente a los apple-touch-icons, en Apple a veces requieren fondo sólido, sin embargo, Next.js lo gestiona bien si simplemente proveemos el PNG con transparencia de alta calidad.
