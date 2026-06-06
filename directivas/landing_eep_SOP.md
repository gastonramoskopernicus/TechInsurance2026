# SOP: Creación de la página y módulo EEP (Engagement Ecosystem Platform)

## Objetivo
Agregar la nueva sección/página `/eep` dentro del sitio principal de Tech Insurance. Esta sección debe actuar como una landing page que detalle las funcionalidades, el alcance, el funcionamiento, los casos de uso, las capacidades y los beneficios del módulo EEP, respetando la identidad visual, la tipografía y el diseño responsivo del sitio actual, e integrándola de manera orgánica como parte de la suite premium de Enterprise SaaS.

## Entradas
- Archivo del Header (`app/components/Header.tsx`).
- Requerimientos funcionales, textos, secciones y estructura detallada de la landing page provistos en la solicitud.
- Referencia estética y de componentes de `app/inspexiona/InspexionaClient.tsx` y de la Home principal del sitio.

## Salidas
1. **Página Principal**: `app/eep/page.tsx`.
2. **Componente Cliente de Landing**: `app/eep/EepClient.tsx`.
3. **Header**: `app/components/Header.tsx` actualizado para incluir "EEP" en el menú principal inmediatamente después de "InspeXiona".
4. **Metadata SEO**: Configuración SEO correcta en `app/eep/page.tsx` con el título `EEP | Engagement Ecosystem Platform` y las keywords definidas.

## Lógica y Pasos
1. **Actualización del Menú**:
   - Agregar `{ label: "EEP", href: "/eep" }` a la lista `navItems` en `app/components/Header.tsx` justo después de "InspeXiona".
2. **Construcción de la Landing Page (`/eep`)**:
   - **Hero Section**:
     - Mostrar un diseño premium de "Inteligencia de Engagement" con una composición visual en el lateral o fondo que represente nodos conectados, eventos, comunidades, clientes, productores, dashboards y perfiles dinámicos. Evitar pantallas de CRM tradicionales.
     - Títulos: "Convierta datos en crecimiento." y "Transforme interacciones en resultados."
     - Texto descriptivo según el copy provisto.
     - CTA Principal ("Solicitar Demo") y CTA Secundario ("Conocer Capacidades").
   - **Sección "¿Qué es EEP?"**:
     - Título: "¿Qué es EEP?" y textos aclaratorios sobre la diferencia con CRM y herramientas de marketing tradicionales.
     - Visualización mediante cards premium para: Behavioral Twin, Eventos Inteligentes, Inteligencia Predictiva, Automatización, Comunidades, Engagement Intelligence.
   - **Sección "El Desafío de la Industria Aseguradora"**:
     - Título: "Millones de eventos. Muy poca inteligencia."
     - Grilla o listado interactivo con los eventos cotidianos (Cotizaciones, Emisiones, etc.) y texto explicando la dispersión de datos y cómo EEP los resuelve.
   - **Sección "Cómo Funciona"**:
     - Proceso visual de 4 etapas:
       - Etapa 1: Captura de eventos (integraciones de seguros, CRM, portales, etc.).
       - Etapa 2: Behavioral Twin (perfil dinámico de cada individuo).
       - Etapa 3: Motor Analítico (Engagement Score, riesgo de abandono, afinidad, etc.).
       - Etapa 4: Activación Inteligente (Alertas, campañas, workflows, etc.).
   - **Sección "Casos de Uso para Aseguradoras"**:
     - Grilla con cards visuales para: Retención y Renovaciones, Cross Selling y Up Selling, Productores y Brokers, Prevención de Mora, Gestión de Comunidades, Segmentación Dinámica.
   - **Sección "Capacidades Diferenciales"**:
     - Cards premium para: Behavioral Twin, Engagement Score, Inteligencia Predictiva, Comunidades Inteligentes, Eventos Inteligentes, Multiindustria.
   - **Sección "Ecosistema TechInsurance"**:
     - Título: "Integrado al ecosistema TechInsurance".
     - Composición visual con EEP en el centro y conectores hacia otros componentes (InspeXiona, CRM, Core de Seguros, Portales, Apps Mobile, IA, Automatización, Data Lake, BI, Analytics).
   - **Sección "Beneficios"**:
     - Título: "Resultados concretos".
     - Cards para: Más conversión, Más retención, Más conocimiento, Más automatización, Más rentabilidad.
   - **CTA Final**:
     - Título: "Los datos cuentan historias. EEP las transforma en decisiones." y texto descriptivo.
     - Botón "Solicitar Demo" con el mismo comportamiento del resto del sitio.

## Restricciones y Casos Borde
- **NO** modificar ninguna landing existente, ni la Home, ni Tech Insurance, ni InspeXiona.
- **NO** modificar la arquitectura, los estilos generales ni la navegación existentes más allá del ítem añadido en el Header.
- Mantener exactamente la estética premium del sitio (fondos oscuros, bordes fucsia/magenta translúcidos, tipografía, micro-animaciones, etc.).
- Asegurar que la página sea responsiva en mobile, tablet y desktop.
