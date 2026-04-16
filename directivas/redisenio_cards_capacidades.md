# Directiva: Rediseño Enterprise de Cards de Capacidades (SaaS Premium)

## Objetivo
Elevar la jerarquía visual del bloque "Core Capabilities" (Diseño modular, Distribución omnicanal y Orquestación continua) hacia un modelo visual tipo "Premium Enterprise SaaS". Los 3 ítems pasarán de ser rectángulos básicos a convertirse en un componente tri-stack inmersivo, protagonizado por geometría lineal, gran espacio en blanco interior y contrastes sutiles con la identidad cromática.

## Especificaciones de Layout y Color
1.  **Diseño Modular:** Fondo Gris Oscuro Sólido (`bg-zinc-900`) con un wireframe hexagonal central.
2.  **Distribución Omnicanal:** Fondo Gris Matiz Magenta (`bg-[#150d1a]`) y bordes iluminados sutilmente por `fuchsia-500/10`. Iconografía basada en diagrama de red interconectada.
3.  **Orquestación Continua:** Fondo oscuro de degradé angular (`bg-gradient-to-br from-zinc-900 to-black`). Icono de flujo o ciclo continuo (sync puro).

## Restricciones
-   **Ninguna** reescritura del contenido de texto subyacente (Títulos y Bajadas deben permanecer idénticos semánticamente a la fase anterior).
-   **Cero** uso de cian, azules o celestes.
-   El cambio se orquesta únicamente sustituyendo el árbol DOM del elemento `<section id="capacidades">` en `app/page.tsx`.
