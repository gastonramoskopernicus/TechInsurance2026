# Directiva: Re-Arquitectura de Suite Modular (Capas Funcionales)

## Objetivos
1. **Delineación por Capas (Layers):** Transformar la vista monolítica de "Módulos Core" en un mapeo estructurado de 7 capas arquitectónicas del producto (Product, Commercial, Experience, Integration, Data, Governance y Payments) dejando manifiesto el paradigma de "Plataforma Real" y no "Core Generalista".
2. **Jerarquía Product Studio:** Alinear el primer grid (Product Layer) para que la tarjeta de "Product Studio" escale masivamente ocupando span-2 o mayor relevancia cromática (brillo/halo radiante).
3. **Sistematización Visual:** Aplicar el gradiente `text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400` a las capas lógicas (textos principales). Todas las tarjetas heredan la regla de la Home (`bg-[#130a16] border fuchsia` con transiciones de color oscuro a magenta hover).
4. **Copy Estratégico:** Incluir copys de negocio que refuercen aceleradores y desacople para los 26 nuevos módulos desglosados, erradicando micro-copys excesivamente técnicos.

## Reglas de Implementación DOM
- El re-mapeo visual se acota EXCLUSIVAMENTE a la `<section id="modulos">`. 
- No alterar estructuralmente los anclajes de `id="orquestacion"`, `id="product-studio"`, ni la navegación. 
- Implementar SVGs limpios en Outline (`strokeWidth="1"`) acordes a cada nuevo bloque funcional modular.
