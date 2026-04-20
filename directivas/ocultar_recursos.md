# Directiva: Ocultar Recursos (Navegación Visible)

## Objetivo
Quitar de forma temporal y segura la página "Recursos" de las barras de navegación principales (Header y Footer), sin alterar la URL ni romper el contenido.

## Restricciones y Casos Borde
- **No Borrar Archivos:** El archivo `/app/recursos/page.tsx` no debe ser borrado bajo ninguna circunstancia.
- **Rutas Inexistentes/Desalineadas:** Al quitarlo del array de objetos en Navbar, la renderización flex/grid se acomoda sola.
- **Footer Structure:** El enlace `Recursos` que pertenecía a la sección "Explorar" debe comentarse, no eliminarse, para facilitar su reintegración inmediata en el futuro.

## Reaparición (Revertir)
Cuando el usuario solicite reactivar la sección:
1. En `app/components/Header.tsx`, eliminar el comentario del objeto en el arreglo `navItems`.
2. En `app/components/Footer.tsx`, descomentar el tag html `<li>` bajo la columna "Explorar".
