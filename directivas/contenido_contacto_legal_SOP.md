# SOP: Generación de Contenido - Contacto y Legal

## Objetivo
Desarrollar y estructurar estáticamente las páginas misceláneas y mandatorias `/contacto/index.html` y `/legal/index.html` unificando recursos en una sola tirada técnica, respetando los estándares estéticos Enterprise actuales.

## Entradas
- Submódulos exigidos: Formulario de contacto, textos introductivos breves, documento de Términos de Servicio y documento de Políticas de Privacidad.
- Restricción: No corromper dependencias CSS y aislar el desarrollo a dichos directorios.

## Salidas
- Documentos estáticos autogenerados bajo `sitio_estructura/contacto/` y `sitio_estructura/legal/`.

## Lógica y Pasos
1. Codificar a través de un script en Python las dos arquitecturas DOM asincrónicas.
2. Formato **Contacto**:
   - Hero simple con motivación de contacto.
   - Layout formulario visual simulado usando `.card` (inputs, descripciones y submit CTA).
3. Formato **Legal**:
   - Contenedor plano de texto largo bien aireado (para máxima legibilidad B2B).
   - Divisiones mediante encabezados simples delimitando los fragmentos de "Términos y Condiciones" versus "Privacidad y Tratamiento de Datos".
4. Instanciar ambas carpetas y generar los outputs simultáneos.

## Restricciones y Casos Borde
- Textos legales orientativos de base (Placeholder text en tono SaaS/Tech).
- El formulario no debe poseer acción de lado del servidor (PHP/Node) en este punto del mockup estructural, debe ser un DOM representativo.
