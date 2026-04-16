# SOP: Generación de Contenido - Product Studio

## Objetivo
Desarrollar el contenido funcional B2B de la página `/plataforma/product-studio.html`, explicando las capacidades analíticas y constructivas del sistema modular bajo el claim central: "El Product Studio cambia la forma de crear seguros".

## Entradas
- Lineamientos proveídos (modelado, reutilización, combinables, reglas, fórmulas, oráculos).
- Restricción obligatoria de NO modificar ningún otro archivo ajeno a la página misma.

## Salidas
- Documento `sitio_estructura/plataforma/product-studio.html` conteniendo el copy final con sintaxis semántica y consumo de la hoja de estilos global (`../styles.css`).

## Lógica y Pasos
1. Abrir con Python el documento en modo de escritura (`w`).
2. Insertar el esqueleto HTML base referenciando a `../styles.css`.
3. Desarrollar las secciones de texto abordando meticulosamente:
   - **Hero:** Claim central proporcionado.
   - **Modelado & Reutilización:** Explicar cómo el enfoque en piezas lego permite ensamblar.
   - **Fórmulas y Reglas Paramétricas:** Mostrar el poder de alterar valores sin programar.
   - **Oráculos & APIs de Datos:** Validar pólizas conectando fuentes de datos externas.
4. Guardar archivo garantizando que es autocontenido y no perturba el resto del site.

## Restricciones y Casos Borde
- No modificar menús globales ni otras páginas.
- Mantener la sobriedad visual en concordancia con el Hero oscuro pre-establecido en el CSS Global.
- Ignorar archivos de framework, es HTML puro según la arquitectura preasignada a este scope estático.
