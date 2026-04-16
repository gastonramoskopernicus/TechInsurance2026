# SOP: Creación de Estructura de Sitio Web

## Objetivo
Generar una estructura base determinista e idempotente para el sitio web "Tech Insurance". La estructura debe incluir sitemap, componentes de navegación principal y la jerarquía de páginas y subpáginas, sin incluir contenido ni diseño.

## Entradas
Lista de secciones obligatorias (Plataforma, Soluciones, Casos de Uso, Ecosistema, Recursos, Empresa, Login, Contacto, Legal).

## Salidas
- Directorio `src/pages/` conteniendo las subcarpetas para cada sección.
- Archivos `.md` o `.html` (en blanco o con título) para cada página y subpágina.
- Archivo `sitemap.xml` base.
- Archivo `navigation.json` representando la navegación principal.

## Lógica y Pasos
1. Definir un diccionario en Python con la arquitectura de información (AI) completa.
2. Iterar sobre este diccionario para crear directorios.
3. Dentro de cada directorio (o para cada ruta), crear el archivo correspondiente.
4. Generar `navigation.json` con las rutas correspondientes a la navegación principal.
5. Generar `sitemap.xml` estándar con todas las URLs extraídas del diccionario.

## Restricciones y Casos Borde
- No modificar archivos existentes.
- Garantizar que el script sea idempotente (usar `os.makedirs(exist_ok=True)`).
- No generar lógica, utilidades, contenido complejo, diseño ni estilos (CSS/Tailwind).
