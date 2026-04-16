# SOP: Generación de Contenido Home

## Objetivo
Desarrollar el copy final (en español) para la página principal de Tech Insurance respetando estrictamente la estructura arquitectónica de las 10 secciones definidas, con foco en el concepto de "acelerador comercial" orientado a negocio y tecnología (Enterprise).

## Entradas
- Estructura pre-existente en `sitio_estructura/home_estructura.json`.
- Parámetros de tono: Enterprise, tecnológico, claro, orientado a negocio.
- Elementos clave obligatorios: Hero brindado, Product Studio como núcleo, arquitectura desacoplada, ecosistema y ROI.

## Salidas
- Documento `sitio_estructura/home_contenido.json`, combinando el propósito inicial con el contenido redactado para cada bloque.

## Lógica y Pasos
1. Construir un diccionario en Python emparejando cada `orden` e identificador de sección con su contenido (copywriting final).
2. Leer la estructura previa desde `home_estructura.json` (o replicar sus keys).
3. Escribir el nuevo JSON resultante.

## Restricciones y Casos Borde
- No crear secciones nuevas (limitarse de 1 a 10).
- No modificar el orden establecido ni el nombre original de la sección.
- Evitar jerga de diseño visual o sugerir interfaces.
- Tono puramente de negocios B2B (Enterprise).
