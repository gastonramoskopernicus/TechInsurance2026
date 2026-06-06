# SOP: Ajuste Visual de la Landing Page EEP

## Objetivo
Refinar y pulir visualmente la landing page de EEP (/eep) para adaptarla a los requerimientos estéticos específicos: usar el logo oficial de EEP en las secciones críticas (Hero, Ecosistema, CTA final), reemplazar emojis por iconografía vectorial premium, rediseñar la representación de ecosistemas y comunidades con una estructura de múltiples anillos y clústeres, y ajustar la paleta de colores.

## Entradas
- Archivos del componente `app/eep/EepClient.tsx` y `app/eep/page.tsx`.
- Imagen oficial del logo de EEP (provista por el usuario o ubicada en el directorio del proyecto).
- Pautas estéticas: prioridad de paleta magenta, violeta y blanco; reducir celestes/azules.

## Salidas
1. **Componente Cliente Ajustado**: `app/eep/EepClient.tsx` modificado visualmente.
2. **Metadata**: Asegurar la correcta persistencia de la metadata SEO en `app/eep/page.tsx`.

## Lógica y Pasos
1. **Logo Oficial**:
   - Reemplazar las referencias de texto u otros logos por el archivo de imagen oficial de EEP en: Hero principal, Ecosistema EEP y CTA final.
   - Asegurar clases CSS apropiadas para un comportamiento responsivo excelente.
2. **Iconografía Premium (Resultados Concretos)**:
   - Eliminar emojis en las cards de la sección de resultados concretos.
   - Crear componentes SVG Inline con un diseño moderno (outline, trazo delgado y uniforme, glow magenta suave) para:
     - Más conversión: Gráfico de barras ascendente / tendencia.
     - Más retención: Escudo protector combinado con un avatar o usuario.
     - Más conocimiento: Estructura de nodos interconectados (analytics/intelligence).
     - Más automatización: Icono de flujos / loops de procesos conectados (workflow).
     - Más rentabilidad: Icono de porcentaje / gráfico de rendimiento (ROI).
3. **Ecosistema EEP (Red de Inteligencia)**:
   - Rediseñar el componente del ecosistema para representar dos anillos concéntricos alrededor de EEP:
     - Centro: Logo/nodo EEP.
     - Primer Anillo: Nodos para Clientes, Productores, Brokers, Sponsors, Terceros, Comunidades.
     - Segundo Anillo: Nodos para CRM, Core Seguros, Apps Mobile, WhatsApp, Portales, IA, BI, Data Lake.
   - Conectar los nodos con líneas de conexión SVG curvas (`d="M..."` o curvas de Bézier), agregando opacidades tenues y glows en magenta/violeta para transmitir una red relacional viva.
4. **Clusters de Comunidades**:
   - Incorporar representaciones de pequeños clusters o nodos agrupados en las secciones de: Behavioral Twin, Comunidades Inteligentes y Engagement Intelligence.
5. **Ajuste de Paleta**:
   - Reemplazar acentos, degradados y bordes que utilicen tonos celestes o azules brillantes por transiciones en la gama de magentas, fucsias y violetas profundos combinados con blanco de alto contraste.

## Restricciones y Casos Borde
- No modificar el Header ni añadir ítems adicionales de navegación.
- Mantener la integridad de los textos y copies provistos en el requerimiento original.
- El diseño debe ser responsive y fluido.
