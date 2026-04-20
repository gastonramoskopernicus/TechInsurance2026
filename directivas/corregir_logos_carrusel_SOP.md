# Directiva: Corrección de Logos en Carrusel

## Objetivo
Corregir los filtros CSS aplicados a los logos de Motorola, Volkswagen y Galicia en el carrusel de la página principal (`app/page.tsx`), ya que el efecto actual (`brightness-0 invert` y/o `mix-blend-screen`) elimina los detalles del isologo, convirtiéndolos en formas sólidas.

## Contexto
El usuario reportó que "en el carrousel de la landing principal, hay varios de los logos de las empresas que no se aprecian, el efecto que se aplico eliminar el isologo". 

## Pasos a Ejecutar por el Script
1. Abrir el archivo `app/page.tsx`.
2. Buscar la declaración del array de logos en la sección del componente marque de empresas.
3. Para `Motorola_new_logo.svg`, cambiar el `filterClass` actual a `grayscale opacity-90`.
4. Para `Volkswagen-Logo-PNG-High-Quality-Image.png`, cambiar el `filterClass` actual a `grayscale opacity-90`.
5. Para `Logo_Banco_Galicia.svg.png`, cambiar el `filterClass` actual a `grayscale opacity-90 invert` (u omitir mix-blend-screen y brightness excesivo). Como Galicia suele ser texto oscuro/negro con naranja, puede que un `grayscale invert opacity-90` funcione mejor sin destruir el logo.
6. Guardar los cambios.

## Restricciones y Casos Borde
- Ninguna por ahora. Si el logo es invisible por el color de fondo, ajustaremos después, pero la prioridad principal es que no se elimine el isologo al aplanar todo a blanco puro con `brightness-0`.
