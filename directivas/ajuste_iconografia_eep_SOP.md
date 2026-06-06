# SOP: Ajuste Visual de Iconografía y Elementos Gráficos en EEP

## Objetivo
Eliminar por completo los emojis y los elementos visuales multicolor de la landing page de EEP, sustituyéndolos por iconografía vectorial, monocromática (usando el magenta del sitio), lineal y consistente con la estética de Tech Insurance. Asimismo, reforzar los glows magentas de los nodos centrales y adaptar los fondos para evitar celestes y azules.

## Entradas
- Archivo del componente cliente `app/eep/EepClient.tsx`.
- Especificaciones de diseño minimalista (monocromático magenta, trazo lineal delgado).

## Salidas
1. **Componente Cliente Modificado**: `app/eep/EepClient.tsx` con la iconografía y glows actualizados.

## Lógica y Pasos
1. **Nodos Orbitales del Hero**:
   - Reemplazar los 6 emojis (`👤`, `⚡`, `💼`, `🌐`, `📊`, `🧠`) del array de nodos por componentes SVG inline monocromáticos en color fucsia/magenta:
     - Clientes: Usuario lineal.
     - Eventos: Rayo / Trigger minimalista.
     - Productores: Red / Portfolio de negocios.
     - Comunidades: Grafo / Red de mundos lineal.
     - Dashboards: Gráfico de líneas analítico.
     - Perfiles Dinámicos: Perfil de usuario conectado.
   - Modificar la clase del contenedor de cada nodo orbital para quitar el color y añadir un borde fucsia traslúcido y sombra fucsia suave.
2. **Nodo Central (EEP Core)**:
   - Reforzar el glow magenta del elemento EEP Core en el Hero y en el Ecosistema mediante clases de sombreado adicionales (`shadow-[0_0_60px_rgba(217,70,239,0.5)]`).
   - Reemplazar cualquier fondo en degradé hacia tonos celestes o azules por fucsias y violetas oscuros.
3. **Sección Resultados Concretos**:
   - Quitar el emoji `📈` del renderizado de Resultados Concretos.
   - Declarar e inyectar en el array `results` los 5 iconos vectoriales SVG premium en color fucsia con glow sutil que creamos anteriormente (conversión, retención, conocimiento, automatización, rentabilidad).
4. **Filtro de Paleta en Fondos**:
   - Reemplazar las referencias de fondos `bg-indigo-900/10` y similares por tonos fucsias (`bg-fuchsia-950/10` o `bg-purple-950/10`).

## Restricciones y Casos Borde
- No alterar textos, copies, posiciones, animaciones ni la navegación.
- Asegurar que la página sea responsiva en mobile, tablet y desktop.
