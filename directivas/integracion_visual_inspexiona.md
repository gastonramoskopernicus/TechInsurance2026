# SOP: Integración Visual Premium de InspeXiona

## Objetivo
Incorporar las capturas de pantalla reales de InspeXiona (`screenshootinspexiona`) a la landing page (`/inspexiona`), aplicando un tratamiento visual "Enterprise SaaS" (estilo Stripe/Linear/Vercel) con efectos de resplandor, flotación, superposición dinámica y bordes cristalinos (glassmorphism).

## Entradas
- Carpeta de origen de imágenes: `/Users/gastonramos/Documents/Antigravity/InspeXiona/screenshootinspexiona`
- Archivo destino: `app/inspexiona/InspexionaClient.tsx`

## Salidas
- Imágenes copiadas a `public/pantallas_inspexiona/`.
- `InspexionaClient.tsx` actualizado con una composición visual en el Hero o debajo de él.
- Script de ejecución en `/scripts/aplicar_visuales_inspexiona.py`.

## Lógica y Pasos
1. **Preparación de Assets**:
   - Mover/Copiar las imágenes desde el proyecto original hacia la carpeta `public/pantallas_inspexiona/` de Next.js.
   - Renombrar los archivos para facilitar su uso (ej: `screen-1.png`, `screen-2.png`).
2. **Composición Visual (Layout)**:
   - Crear un mosaico dinámico o composición de tarjetas superpuestas que no sean gigantes, sino que den contexto tecnológico.
   - Ubicar la composición justo después del texto del Hero y antes de "Alcance Funcional", o integrada al mismo.
3. **Tratamiento Premium (CSS/Tailwind)**:
   - Aplicar sombras pronunciadas y coloridas: `shadow-[0_0_50px_rgba(217,70,239,0.15)]`.
   - Aplicar bordes suaves: `border border-white/10` y `rounded-2xl` o `rounded-3xl`.
   - Aplicar sutiles gradientes de fondo y efectos `backdrop-blur`.
   - Aplicar animaciones flotantes suaves (`animate-bounce` muy lento o transformaciones CSS con `hover`).
   - Evitar "galerías" planas tradicionales.
4. **Responsive**:
   - En mobile (pantallas pequeñas), apilar las capturas verticalmente u ocultar algunas para no saturar.
   - En desktop, permitir la superposición (ej: `translate-x-10 -translate-y-5`).

## Restricciones
- Las imágenes no deben ocupar toda la pantalla de forma invasiva.
- No modificar el contenido funcional de las imágenes.
- Mantener la estética `dark mode` profunda.
