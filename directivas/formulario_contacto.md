# Directiva: Implementación de Formulario de Contacto (FormSubmit)

## Objetivo
Implementar la funcionalidad de envío del formulario de contacto hacia direcciones de email corporativas sin requerir una arquitectura de backend dedicada ni dependencias innecesarias, manteniendo la experiencia de usuario dentro de la interfaz.

## Estrategia de Implementación
- **Servicio utilizado:** FormSubmit.co via AJAX (`fetch`)
- **Justificación:** Es un servicio serverless gratuito que no requiere dependencias de npm (NodeMail o Resend) ni configurar variables de entorno para una API propia.
- **Flujo de Usuario:**
  1. El usuario completa los datos (Nombre, Empresa, Email, Teléfono, Mensaje).
  2. El Tipo de Contacto se incluye ocultamente o como metadata de la consulta.
  3. Al enviar, el botón entra en estado de `Cargando...`.
  4. Se envía una petición `POST` en formato `application/json` al endpoint `https://formsubmit.co/ajax/ramos.gaston@Kopernicus.tech`.
  5. Se muestra el mensaje de éxito existente y a los 8 segundos se resetea la vista.
  6. Si hay un error, se renderiza una advertencia amigable sin romper la página.

## Restricciones y Casos Borde
- **Activación de FormSubmit:** La PRIMERA vez que se envíe un formulario desde la URL o local, FormSubmit detendrá el envío y mandará un correo de Verificación al buzón destino (`ramos.gaston@Kopernicus.tech`). El dueño debe hacer clic en *Activate* u *Habilitar*.
- **CORS/Bloqueos de AdBlocker:** Algunos navegadores muy restrictivos o redes corporativas podrían bloquear `formsubmit.co`. Se maneja a nivel frontend con un catch de error general para informarlo.
- **Atributos Name:** Todos los campos `<input>` y `<textarea>` deben obligatoriamente poseer el atributo `name=` pertinente para que el `FormData` los pueda capturar y adjuntar al JSON.

## Mantenimiento y Extensión
Si en el futuro se desea enrutar a emails distintos según el *Tipo de contacto*, se podría cambiar la string del destinatario programáticamente en el endpoint de `fetch`, pero eso requeriría activar individualmente cada correo destino en FormSubmit.
