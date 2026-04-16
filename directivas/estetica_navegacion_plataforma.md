# Directiva: Refinamiento Visual de Navegación (Plataforma)

## Objetivo
Elevar la navegación interna ("Secondary Sticky Nav") del componente Plataforma hacia un estándar puramente Premium SaaS. Consiste de un bloque estético "Pill Glassmorphism" centrado, con iconos interactivos de colores acentuados (Fuchsia) orientados a una mejor experiencia visual y menor rigidez formal.

## Restricciones
- Conservar la estructura general del archivo y la lógica de negocio (Secciones y textos sin modificaciones).
- NO agregar dependencias (como react-icons o lucide-react) para no contaminar el `package.json`. Todos los iconos serán Strings SVG limpios inyectados internamente.
- No alterar otros layouts o containers fuera del entorno perimetral de la barra de navegación `<nav>`.

## Procedimiento
1. **Contenedor:** Eliminar los bordes extendidos de ancho máximo (`w-full` borders). Instaurar en su lugar un contenedor `rounded-full` localizado en el centro (utilizando `flex justify-center flex-wrap`).
2. **Cristalería:** Asignar clases de gradiente oscuro difuminado `bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl border border-white/5 shadow-2xl`.
3. **Tipografía & Íconos:** Crear un mapeo interno para los enlaces incluyendo etiquetas SVG en estilo outline puro (2px stroke, transparent fill). Letras más pequeñas que el cuerpo (`text-[13px]`). Color unificado en gris pálido.
4. **Interacción:** El cursor `hover` detonará el cambio del SVG hacia color Magenta/Fuchsia y las letras a color Blanco.
