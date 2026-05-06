# SOP: Refinamiento Premium Landing InspeXiona (Ajustes Finales)

## Objetivo
Elevar la landing page `/inspexiona` a un nivel visual "SaaS Internacional" (estilo Stripe, Vercel), corrigiendo el despliegue del logo oficial, reconstruyendo la composición del Hero con un mosaico flotante complejo (donde la pantalla principal sea la selección de bienes), unificando la iconografía de Casos de Uso, expandiendo los Componentes del Módulo con micro-gráficos, y rediseñando el CTA final.

## Entradas
- Logo oficial provisto por el usuario (se debe asegurar su ruta en `public/inspexiona-logo.png`).
- Pantallas disponibles en `public/pantallas_inspexiona/` (donde la principal debe identificarse).
- Archivo `app/inspexiona/InspexionaClient.tsx`.

## Salidas
- `InspexionaClient.tsx` fuertemente refactorizado en diseño, no en lógica de enrutamiento.
- Script de Python de inyección: `scripts/refinar_visual_inspexiona.py`.

## Lógica y Pasos
1. **Logo**: Reemplazar y asegurar que el tag `<Image>` utilice la ruta exacta provista sin fondos que lo rompan, y con filtros de brillo integrados (`drop-shadow`).
2. **Hero Composition**:
   - Reemplazar el layout actual de 3 pantallas grandes por un mosaico de 5+ elementos más pequeños.
   - La pantalla principal ("Seleccione el tipo de bien", identificar cuál de `screen-1` a `screen-7` es, o usar la representativa) va en el centro, superpuesta sobre las demás, con un fuerte efecto `glassmorphism` y sombra magenta.
   - Integrar mini-tarjetas flotantes a los lados que simulen "M2M", "Auditoría", etc.
3. **Unificar Iconografía**:
   - Reemplazar los SVGs estáticos de los casos de uso por íconos de la librería `lucide-react` (ej. `Car`, `Home`, `FileWarning`, `Wrench`, `Ship`, `Leaf`).
   - Todos los íconos compartirán la misma clase base (mismo grosor `strokeWidth={1.5}`, mismo color y glow).
4. **Expandir Componentes**:
   - Ampliar el array de componentes con las integraciones (ERP, CRM, RENAPER, OCR, etc.).
   - Representar esta sección no como simples "tags", sino visualmente: con líneas de conexión SVG, puntos brillantes y layout en forma de ecosistema conectado.
5. **CTA Final**:
   - Cambiar el texto a "Solicitar Demo".
   - Aplicar un diseño premium (botón con gradiente de borde animado o resplandor interno profundo).

## Restricciones
- Mantener la cohesión del código (no romper React hooks ni dependencias).
- Si se usa `lucide-react`, verificar que esté instalado en el proyecto o usar SVGs en crudo si no lo está (preferible usar crudo si no se conoce el `package.json`, pero si el sitio base usa Lucide, reusarlo).
