# Directiva: Reingeniería del Hub de Contacto Dinámico

## Objetivos
1. **Segmentación de Leads por Diseño:** El formulario de la página `/contacto` dejará de ser una bolsa muerta para transformarse en un calificador primario que divide el tráfico en 4 flujos (Solución, Técnico, Comercial, Partners).
2. **Interactividad Reactiva:** Aprovechando los Hooks Client-Side de React (`useState`), toda la UI responderá inmediatamente al hacer clic en las macro cards, mutando los placeholders del input final de Mensaje y el highlight del botón seleccionado.
3. **Persistencia Visual:** Consistencia inmaculada con los "Neon Dark Grids" de Tech Insurance. Hover cards con destellos magenta interrumpiendo el abismo `#020104`.

## Restricciones UI Críticas
- Agrega imperativamente `"use client"` al tope del componente React al utilizar interactividad en el App Router.
- Ocultar la navegación (sticky bar) interior ya que esta es una página de "conversión", no de lectura masiva.
- Formulario B2B estándar: Nombres, Empresa, Email, Teléfono (Opcional) y Mensaje.
- No disparar backend real al enviar, usar simulación visual (timeout de éxito).
