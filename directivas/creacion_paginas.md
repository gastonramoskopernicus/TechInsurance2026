# Directiva: Creación Masiva de Páginas (Tech Insurance)

## Objetivo
Implementar la estructura fundacional completa del sitio web "Tech Insurance", operando bajo la premisa de ser una plataforma SaaS Enterprise orientada a la industria aseguradora.

## Restricciones
- NO modificar configuración técnica (Next.js, Tailwind).
- NO romper el layout actual ni el Header/Footer general.
- NO agregar animaciones en estos componentes.
- Mantener diseño "dark mode".

## Alcance del Scaffolding
- Rutas nuevas a crear dentro de `/web/app/`:
  - `/plataforma`
  - `/product-studio`
  - `/arquitectura`
  - `/soluciones`
  - `/casos-de-uso`
  - `/casos-de-exito`
  - `/recursos`
  - `/empresa`
  - `/pricing`
  - `/contacto`
  - `/login`
  - `/legal`
- Cada de estas páginas poseerá un export con una estructura base mínima que incluya los subtítulos que exige el plan.

## Ediciones de componentes actuales
- **Header:** Modificar la navegación sustituyendo anchors (`#...`) por enlaces directos (`/...`). Las anclas internas quedan para sub-sitios o se remueven en la navegación global priorizando los Next `<Link>`.
- **Home (page.tsx):** Reorganizar las secciones para mejorar jerarquía visual e incluir subtítulos explícitos, pero sin alterar radicalmente el 'hero' component.
