# SOP: Generación de Contenido - Plataforma

## Objetivo
Desarrollar exclusivamente el contenido de la página `/plataforma/index.html` sin alterar ninguna de las demás rutas de la aplicación, integrando conceptos estructurales claves como: Acelerador comercial, urbanización del core, plataforma desacoplada, capacidades, y modularidad tecnológica.

## Entradas
- HTML esqueleto previo ubicado en `sitio_estructura/plataforma/index.html`.
- Lineamientos conceptuales provistos por el usuario (Urbanización del core, API-first).
- CSS global disponible en el nivel superior de directorios.

## Salidas
- Documento `sitio_estructura/plataforma/index.html` completamente re-escrito conteniendo el copywriting definitivo con los tags semánticos correspondientes y clases CSS estándar (`.container`, `.card`).

## Lógica y Pasos
1. Abrir con Python el documento en modo de escritura (`w`).
2. Insertar el esqueleto HTML base referenciando `../styles.css`.
3. Estructurar el contenido en bloques:
   - **Hero** (Tech Insurance como plataforma macro).
   - **Introducción** (Acelerador comercial + Urbanización de ecosistemas Core).
   - **Grilla de Características** (Plataforma desacoplada, Integración natural).
   - **Specs** (Capacidades, Modularidad, Escalabilidad).
4. Guardar los cambios garantizando no tocar otros archivos.

## Restricciones y Casos Borde
- Garantizar tono técnico y empresarial (B2B SaaS).
- NO modificar el layout de `global` CSS, SOLO consumir el archivo.
