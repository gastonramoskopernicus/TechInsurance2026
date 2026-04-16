# SOP: Generación de Contenido - Ecosistema

## Objetivo
Desarrollar la vista estática `/ecosistema/index.html` limitándose a explicar la propuesta de valor basada en la extensibilidad e interconexión (Integraciones, Partners, APIs, Canales).

## Entradas
- Aspectos temáticos obligatorios a incluir: Integraciones, Partners, APIs y Canales.
- Restricción: No tocar ningún documento u hoja de ruta salvo la asignada.

## Salidas
- Documento `sitio_estructura/ecosistema/index.html` compilado en formato semántico consumiendo la estética común desde `../styles.css`.

## Lógica y Pasos
1. Modelar la grilla visual idéntica o complementaria a los assets previos (clase base container, grid o listados limpios).
2. Escribir copy para cada bloque enfocándose en el rol de "Hub o Nodo Central" de la plataforma:
   - **APIs:** Lenguaje técnico destacando SDKs y endpoints REST.
   - **Integraciones:** Mencionar Insurtechs de nicho y pipelines bidireccionales.
   - **Partners:** Cómo conectar data de oráculos y validadores KYC/Fraude.
   - **Canales:** Omnicanalidad nativa.
3. El script de Python ejecutará la acción de reescribir esta página de forma atómica.

## Restricciones y Casos Borde
- Lenguaje agnóstico y corporativo.
