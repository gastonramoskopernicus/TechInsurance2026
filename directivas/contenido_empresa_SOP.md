# SOP: Generación de Contenido - Empresa

## Objetivo
Desarrollar el apartado corporativo `/empresa/index.html`. Manteniendo la regla imperativa de **"Producto primero, empresa después"**, asegurando que el protagonismo argumentativo recaiga sobre la capacidad de la plataforma operativa (Tech Insurance) antes de derivar en el holding desarrollador o los atributos administrativos de la empresa.

## Entradas
- Hitos obligatorios: Qué es Tech Insurance, Visión, Rol de Kopernicus Tech.
- Restricción: No alterar bajo ninguna circunstancia el material en el root directory o en las carpetas aledañas.

## Salidas
- Documento estático generado asincrónicamente en `sitio_estructura/empresa/index.html`.

## Lógica y Pasos
1. Instanciar desde Python la estructura del archivo referenciando los estilos de CSS nativos (Dark Mode).
2. Segmentar la redacción según la regla dictada:
   - **Hero & Sección 1 (El Producto):** Exponer netamente la fuerza del núcleo tecnológico de Tech Insurance como el sistema nervioso del sector asegurador.
   - **Sección 2 (La Visión):** Trascender la táctica; cuál es el futuro esperado por la adopción de este producto.
   - **Sección 3 (Kopernicus Tech):** Ahora sí derivar hacia el respaldo institucional. Kopernicus Tech como la casa matriz / builder que respalda a Tech Insurance, aportando resiliencia Enterprise, recursos humanos e inteligencia financiera.
3. Consolidar el path y registrar.

## Restricciones y Casos Borde
- Lenguaje pragmático.
- Prohibición de abrir la sección mencionando la "historia de los fundadores" para no transgredir la regla de Producto primero.
