# SOP: Generación de Contenido - Arquitectura

## Objetivo
Desarrollar el contenido de la página `/plataforma/arquitectura.html` dirigiéndose estrictamente a perfiles técnicos C-Level (CIOs, CTOs, Arquitectos). Se debe presentar Tech Insurance como una solución altamente escalable y agnóstica.

## Entradas
- Lineamientos obligatorios: Arquitectura desacoplada, integración vía APIs, convivencia fluida con sistemas core legacy, flexibilidad de hosting (cloud / on-prem / híbrido).
- Restricción: No modificar variables globales, layout root u otras rutas ya existentes.

## Salidas
- Archivo autocontenido `sitio_estructura/plataforma/arquitectura.html` conteniendo el copywriting puramente técnico bajo el mismo wrapper estético CSS.

## Lógica y Pasos
1. Modeler el documento HTML instanciando de nuevo `../styles.css`.
2. Segmentar el pitch en módulos de Infraestructura:
   - **Hero:** Foco en la liberación técnica (microservicios y agnosticismo).
   - **Desacople & API-First:** Protocolos, latencia y escalabilidad elástica.
   - **Convivencia Legacy:** Explicar el enfoque over-the-top para aislar la deuda técnica y funcionar como orquestador sin migraciones forzosas de datos.
   - **Agnosticismo de Despliegue:** Mencionar esquemas de Containerización Kubernetes listos para AWS/Azure/GCP o bare-metal on-premise si el resguardo regulatorio lo exige.
3. Ejecutar la función de salvado asegurándose de la limpieza del path y la independencia del output.

## Restricciones y Casos Borde
- Lenguaje extremadamente sobrio, técnico y factual.
- Impedida estrictamente cualquier edición de terceros.
