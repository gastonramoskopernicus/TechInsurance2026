# Directiva: Navegación Secundaria en Plataforma

## Objetivo
Transformar `/app/plataforma/page.tsx` en un hub interactivo navegable, implementando un sticky menú secundario que ancle a las diversas sub-secciones de la página.

## Restricciones
- No crear nuevas páginas ni modificar archivos de ruteo externos.
- Mantener estrictamente el contenido actual y copy de negocio que se mejoró anteriormente.
- No alterar diseños globales.
- Evitar animaciones complejas, enfocándose en la utilidad estructural (scroll target).

## Implementación
1. **Sticky Nav:** Inyectar una capa `<nav>` con posicionamiento `sticky top-[64px]` (debajo del header principal si es posible o top-16), `z-40`, fondo transparente/oscuro y scroll horizontal para los links.
2. **Links:** 
   - Capacidades (`#capacidades`)
   - Módulos (`#modulos`)
   - Arquitectura (`#arquitectura`)
   - Product Studio (`#product-studio`)
   - Orquestación Comercial (`#orquestacion`)
   - API & Developer Platform (`#api-developer`)
   - Seguridad & Compliance (`#seguridad`)
   - Modelos de Licenciamiento (`#licenciamiento`)
3. **IDs y Sub-Secciones:** Asegurar que cada tag destino, tanto los existentes (Módulos, Capacidades) como los que faltaron detallar en iteraciones previas (Orquestación, API, etc.), cuenten con su `id="..."` y una base estructural coherente que honre la directiva de "no romper contenido".
