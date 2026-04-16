# SOP: Generación de Contenido - Recursos

## Objetivo
Desarrollar estratégicamente la vista de `/recursos/index.html` enfocándose en ser un repositorio agnóstico de alto valor intelectual (Centro de Conocimiento o Resource Center) sin violar las normas de inmutabilidad del resto de las páginas.

## Entradas
- Temáticas funcionales exigidas: Whitepapers, Papers (técnicos/analíticos), Casos de éxito y Research de mercado.
- Restricción: Edición atómica y exclusiva al directorio referenciado.

## Salidas
- Documento `/recursos/index.html` autogenerado bajo las directrices estéticas generales (`../styles.css`).

## Lógica y Pasos
1. Emplear Python para desplegar una grilla de componentes HTML simulando un repositorio de documentos.
2. Inyectar copies enmarcados dentro de pilares de generación de demanda (Lead Magnets B2B):
   - **Whitepapers:** Descargas orientadas a estrategia (Ej: Urbanización de Cores Monolíticos).
   - **Papers Analíticos:** Orientación algorítmica y actuarial.
   - **Casos de Éxito:** Narrativas enfocadas en KPI's reales alcanzados por Aseguradoras y Bancos partenaires.
   - **Research:** Investigaciones periódicas sobre *Embedded Insurance* y tendencias macro.
3. Ejecutar y notificar el aprovisionamiento.

## Restricciones y Casos Borde
- Lenguaje académico/corporativo (C-Level).
