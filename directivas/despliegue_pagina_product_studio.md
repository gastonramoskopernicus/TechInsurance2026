# Directiva: Extracción y Despliegue de Single-Page "Product Studio"

## Objetivos
1. **Promoción de Jerarquía:** Mudar el hiper-nodo "Product Studio" (actualmente una sección inserta en `/plataforma`) a su propio ecosistema de página completa (`/product-studio/page.tsx`), erigiéndolo como un sub-producto soberano.
2. **Sub-Navegación Exclusiva:** El nuevo sitio `/product-studio` constará de su propio menú Sticky idéntico al de Plataforma, navegando anclajes internos: `#que-es`, `#como-funciona`, `#capacidades`, `#modelo`, `#ejemplo`, `#impacto`.
3. **Resumen Inteligente en Plataforma:** La cicatriz que quede en `/plataforma` debe sanarse con un Teaser (CTA) de alto impacto visual que linkee (`<Link href='/product-studio'>`) al usuario a la nueva página profunda, sin romper el flow conceptual de quien viene navegando.
4. **Constancia UI:** Mantener la estética `bg-[#0f0e11]`, hover magentas y gradientes tipográficos (`fuchsia-400 to pink-400`).

## Restricciones Operativas
- **Idempotencia de Rutas:** Nos aseguraremos de crear el path directory `app/product-studio` en Next.js.
- **Respetar componentes Next:** Utilizar `<Link href="...">` para navegación SPA (Single Page Application) fluida sin recargas duras para el Teaser de la Plataforma.
