# SOP: Integración de Demo InspeXiona

## Objetivo
Implementar una arquitectura de protección y embebido para la aplicación `inspexiona.techinsurance.com.ar` dentro del portal principal de Tech Insurance. La aplicación externa dejará de ser pública y requerirá autenticación centralizada a través de un esquema de sesión compartida (Cross-Domain Cookie / Token). Se debe añadir una navegación por solapas (tabs) en la sección Demo para alternar entre el contenido actual ("Tech Insurance") y el nuevo ("Inspecciones").

## Entradas
- Archivos actuales de la sección Demo (`app/demo/page.tsx`, `app/demo/home/page.tsx`).
- URL a embeber: `https://inspexiona.techinsurance.com.ar/`.

## Salidas
1. **API de Autenticación**: `app/api/auth/login/route.ts` y `app/api/auth/logout/route.ts` para manejar la creación de una cookie JWT válida para `Domain=.techinsurance.com.ar`.
2. **Middleware**: `middleware.ts` configurado para proteger las rutas bajo `/demo/home` y `/demo/inspecciones`.
3. **Layout de Demo**: `app/demo/layout.tsx` (o un componente cliente) que provea la navegación en solapas ("Tech Insurance" y "Inspecciones").
4. **Página de Inspecciones**: `app/demo/inspecciones/page.tsx` que renderice el iframe autenticado de InspeXiona.
5. Actualización de `app/demo/page.tsx` para consumir la API de login en lugar del chequeo hardcodeado puramente en cliente.

## Lógica y Pasos
1. **Autenticación (SSO / Sesión Compartida)**:
   - Crear un endpoint que valide las credenciales (`admin` / `KPS2020`).
   - Al validar, firmar un JWT o token simple y establecer una cookie `kps-demo-session` con configuración `Domain=.techinsurance.com.ar`, `Path=/`, `HttpOnly`, `SameSite=Lax`.
   - Modificar el formulario de `app/demo/page.tsx` para hacer POST a este endpoint.
2. **Protección con Middleware**:
   - Interceptar requests a `/demo/home` y `/demo/inspecciones`.
   - Si la cookie `kps-demo-session` no existe o es inválida, redirigir a `/demo`.
3. **Estructura de Solapas**:
   - Crear un componente de pestañas (Tabs) superior que aparezca en `/demo/home` y `/demo/inspecciones`.
   - "Tech Insurance" apuntará a `/demo/home`.
   - "Inspecciones" apuntará a `/demo/inspecciones`.
4. **Embebido (Iframe)**:
   - En `/demo/inspecciones/page.tsx`, renderizar un iframe `<iframe src="https://inspexiona.techinsurance.com.ar/" />`.
   - Aplicar estilos para que ocupe todo el espacio disponible y se vea integrado.
   - Mostrar estado de carga (loading) mientras el iframe inicializa.

## Restricciones y Casos Borde
- **Cross-Domain Cookies**: Para que la cookie se envíe al iframe, ambos subdominios deben compartir el dominio raíz y la cookie debe tener `Domain=.techinsurance.com.ar`.
- **CORS / X-Frame-Options**: El equipo externo (devops) deberá configurar `inspexiona.techinsurance.com.ar` para permitir ser embebido (`Content-Security-Policy: frame-ancestors`) y leer la cookie `kps-demo-session` para validar el acceso.
- No romper la experiencia espacial/magenta de la Demo actual.
- **Idempotencia**: Los scripts que ejecuten esta directiva deben poder sobreescribir o crear los archivos sin duplicar código.
