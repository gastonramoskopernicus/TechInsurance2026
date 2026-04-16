# Directiva: Evolución de Estructura hacia Plataforma Modular (Tech Insurance)

## Objetivo
Evolucionar todas las vistas de Tech Insurance, transformando simples placeholders en una jerarquía web rica orientada a una plataforma y suite comercial. La finalidad es proyectar el sistema (Product Studio, Commercial Engine, etc.) como un core desacoplado en el discurso B2B.

## Alcance Técnico
- **No alterar**: CSS Config, Next.JS router config (page/layout conventions), diseños base (mantener estilo dark SaaS, bg-background, border-border, etc.) ni las dependencias.
- **Ampliar**: Incorporar bloques JSX semánticamente estructurados mediante `<section>`, `<div>` y grillas nativas de Tailwind CSS (`grid-cols-2`, `grid-cols-3`...).
- **Nueva Ruta**: Construir `/app/ecosistema/page.tsx` para acomodar Developer Platform, APIs y Partners.
- **Actualización de Header**: Añadir Ecosistema al menú.

## Tono y Comunicación
- Priorizar frases comerciales clave: *acelerador comercial*, *desacople de core*, *impacto en negocio*, *modelo de plataforma*, *ROI*, y *escalabilidad rápida*.
- Evitar explicar mecánicas "dry code" del backend; centrarse de primera mano en las "capacidades de negocio" habilitadas. 
- La arquitectura en sí debe promocionarse como "robusta" y "cloud-native", no como el fin último del visitante.
