# SOP: Generación de Contenido - Soluciones

## Objetivo
Desarrollar la vertical comercial `/soluciones/index.html` dirigida a las diferentes líneas de mercado: Aseguradoras, Brokers, Bancos y Partners. El principal driver comunicacional debe ser la captación de Valor de Negocio (ROI, retención, eficiencias).

## Entradas
- Lineamientos obligatorios: Foco exclusivo en negocio para 4 arquetipos de cliente (Aseguradoras, Brokers, Bancos, Partners).
- Restricción: Absoluto respeto por la integridad de los demás archivos de la carpeta `sitio_estructura`.

## Salidas
- Archivo autogenerado en `sitio_estructura/soluciones/index.html` con toda la jerarquía de soluciones embebida semánticamente para consumir `../styles.css`.

## Lógica y Pasos
1. Modelar la grilla visual.
2. Escribir copy para cada bloque enfocado en "beneficio" más que en "tecnología".
   - **Aseguradoras:** Lanzamiento de productos (Time-to-market) y eficiencia combinada.
   - **Bancos:** Bancaseguros digital, monetización de cartera cautiva sin latencia.
   - **Brokers:** Emisión instantánea descentralizada, flujos dinámicos.
   - **Partners / Retail:** Venta embebida dentro de su flujo de caja o checkout.
3. El script de Python inyectará el string en el índice sin tocar las carpetas `/empresa`, `/plataforma`, ni la `/` principal.

## Restricciones y Casos Borde
- Lenguaje centrado netamente en el impacto financiero o captación de ingresos.
- Mantener diseño oscuro (Dark SaaS).
