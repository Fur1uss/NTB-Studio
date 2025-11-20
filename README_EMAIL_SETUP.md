# Configuración de Envío de Emails

## 📧 Sistema de Formularios con React Email + Resend

Este proyecto utiliza **React Email** para crear plantillas de email personalizadas y **Resend** para enviar los correos electrónicos.

## 🚀 Configuración Inicial

### 1. Obtener API Key de Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta (es gratis)
3. Ve a **API Keys** en el dashboard
4. Crea una nueva API key
5. Copia la API key (comienza con `re_`)

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=re_tu_api_key_aqui
```

**⚠️ IMPORTANTE:** Nunca subas el archivo `.env.local` a Git. Ya está en `.gitignore`.

## 📋 Formularios Configurados

Los siguientes formularios están configurados para enviar emails a `contacto@ntbstudio.cl`:

1. **FormularioContacto** → `/api/contacto`
2. **FormularioEssential** → `/api/essential`
3. **FormularioInnovated** → `/api/innovated`
4. **FormularioAdvanced** → `/api/advanced`

## 🎨 Plantilla de Email

La plantilla de email está ubicada en `emails/FormSubmissionEmail.jsx` y utiliza la estética de la página:
- **Color principal:** Verde `#20E337`
- **Fondo:** Blanco con detalles en negro
- **Diseño:** Responsive y profesional

## 📧 Destinatario

Todos los emails se envían a: **contacto@ntbstudio.cl**

El remitente por defecto es: **onboarding@resend.dev** (puedes configurar un dominio personalizado más adelante).

## 🔧 Estructura de Archivos

```
emails/
  └── FormSubmissionEmail.jsx    # Plantilla de email

app/api/
  ├── contacto/route.js          # API para formulario de contacto
  ├── essential/route.js          # API para plan Essential
  ├── innovated/route.js          # API para plan Innovated
  └── advanced/route.js          # API para plan Advanced
```

## 🧪 Pruebas

Para probar el sistema:

1. Asegúrate de tener `RESEND_API_KEY` en `.env.local`
2. Inicia el servidor de desarrollo: `pnpm dev`
3. Completa cualquier formulario en la página
4. Verifica que recibas el email en `contacto@ntbstudio.cl`

## 📝 Notas

- Los emails incluyen todos los datos del formulario categorizados y formateados
- El sistema valida los datos antes de enviar
- Si hay un error, se muestra un mensaje al usuario
- Los emails incluyen la fecha y hora de envío

## 🆘 Solución de Problemas

### Error: "Error al enviar el email"
- Verifica que `RESEND_API_KEY` esté configurada correctamente
- Revisa la consola del servidor para más detalles
- Asegúrate de que Resend tenga créditos disponibles (plan gratuito: 3,000 emails/mes)

### No se reciben los emails
- Verifica la carpeta de spam
- Revisa que el email `contacto@ntbstudio.cl` esté correcto
- Verifica los logs de Resend en su dashboard

