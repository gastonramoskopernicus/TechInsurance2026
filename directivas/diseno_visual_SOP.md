# SOP: Aplicación de Diseño Visual (CSS)

## Objetivo
Aplicar el diseño visual de tipo SaaS Enterprise inspirado en "Socotra" a la estructura base del sitio sin alterar el modelo de datos (contenido) ni la arquitectura (rutas). Específicamente generando tokens y estilos globales.

## Entradas
- Requerimientos: Dark mode, fondo azul oscuro, texto blanco, tipografía moderna, amplio uso de espacio en blanco y jerarquía.
- Color accent: Violeta/Axul Moderno.

## Salidas
- Documento de diseño `sitio_estructura/styles.css` con variables de entorno, reset y definiciones globales de clases.
- Actualizar los archivos HTML (o renderizar la home) referenciando este nuevo estilo.

## Lógica y Pasos
1. Definir en un string de Python todas las reglas CSS `root` y para los componentes/etiquetas semánticas (h1, h2, section, container) cumpliendo las instrucciones de estilo.
2. Guardar estas definiciones en un archivo `styles.css` dentro de `sitio_estructura/`.
3. Inyectar o enlazar el `<link rel="stylesheet">` junto con la carga de Google Fonts (Inter/Roboto) en la cabecera de los archivos HTML correspondientes, o generar un `index.html` consumiendo el `home_contenido.json`.
4. El script no debe alterar el contenido ni eliminar ninguna página generada anteriormente.

## Restricciones y Casos Borde
- Sólo escribir código de diseño (CSS / clases utilitarias).
- El fondo base debe ser inequívocamente oscuro (ej: `#0b1120`, `#0f172a`).
- El accent debe ser un violeta saturado vibrante (ej: `#8b5cf6` o `#6366f1`).
- Preservar la limpieza e idempotencia.
