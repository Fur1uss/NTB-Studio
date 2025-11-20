# 🚀 Guía de Despliegue en Vercel - NTB Studio

## 📋 Checklist Pre-Deploy

Antes de desplegar, asegúrate de:

- [ ] ✅ Código optimizado para producción
- [ ] ✅ Variables de entorno identificadas
- [ ] ✅ Build local exitoso (`pnpm build`)
- [ ] ✅ Sin errores de linting
- [ ] ✅ Imágenes optimizadas
- [ ] ✅ SEO configurado correctamente

## 🔧 Configuración en Vercel

### 1. Conectar el Repositorio

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"**
3. Conecta tu repositorio de GitHub/GitLab/Bitbucket
4. Selecciona el repositorio `landingntb`

### 2. Configurar Variables de Entorno

En la configuración del proyecto en Vercel, agrega las siguientes variables de entorno:

#### Variables Requeridas:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
RESEND_API_KEY=re_tu_api_key_aqui
```

**⚠️ IMPORTANTE:**
- `NEXT_PUBLIC_SITE_URL` debe ser la URL final de producción (con https://)
- `RESEND_API_KEY` debe ser tu API key de Resend (obtener en [resend.com](https://resend.com))

#### Cómo agregar variables en Vercel:

1. En el dashboard del proyecto, ve a **Settings** → **Environment Variables**
2. Agrega cada variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://tu-dominio.com` (o `https://tu-proyecto.vercel.app` si usas dominio de Vercel)
   - **Environments**: Selecciona Production, Preview, y Development
3. Repite para `RESEND_API_KEY`
4. Click en **Save**

### 3. Configuración del Build

Vercel detectará automáticamente Next.js, pero verifica:

- **Framework Preset**: Next.js
- **Build Command**: `pnpm build` (o `npm run build` si usas npm)
- **Output Directory**: `.next` (automático)
- **Install Command**: `pnpm install` (o `npm install`)

### 4. Dominio Personalizado (Opcional)

Si tienes un dominio personalizado:

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio (ej: `ntb.cl`)
3. Sigue las instrucciones de Vercel para configurar DNS
4. **IMPORTANTE**: Actualiza `NEXT_PUBLIC_SITE_URL` con tu dominio personalizado

## 🔍 Verificaciones Post-Deploy

### 1. Verificar que el sitio funciona

- [ ] El sitio carga correctamente
- [ ] Todas las rutas funcionan (`/`, `/services/essential`, etc.)
- [ ] Las imágenes se cargan correctamente
- [ ] Los formularios funcionan (probar envío de email)

### 2. Verificar SEO

- [ ] `robots.txt` accesible: `https://tu-dominio.com/robots.txt`
- [ ] `sitemap.xml` accesible: `https://tu-dominio.com/sitemap.xml`
- [ ] Metadata correcta (verificar con herramientas de SEO)
- [ ] Open Graph funciona (probar compartir en Facebook/Twitter)

### 3. Verificar Structured Data

- [ ] Usar [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verificar que Organization, WebSite, Service y Breadcrumbs aparecen

### 4. Verificar Variables de Entorno

- [ ] `NEXT_PUBLIC_SITE_URL` está configurada correctamente
- [ ] `RESEND_API_KEY` funciona (probar envío de formulario)
- [ ] Los emails se envían correctamente

## 🐛 Troubleshooting

### Error: "RESEND_API_KEY no está configurada"

**Solución:**
1. Verifica que la variable está agregada en Vercel
2. Asegúrate de que está disponible en el ambiente correcto (Production/Preview)
3. Reinicia el deployment después de agregar la variable

### Error: "NEXT_PUBLIC_SITE_URL is undefined"

**Solución:**
1. Agrega la variable `NEXT_PUBLIC_SITE_URL` en Vercel
2. Usa la URL completa con `https://`
3. Reinicia el deployment

### Build falla

**Solución:**
1. Verifica que el build funciona localmente: `pnpm build`
2. Revisa los logs de build en Vercel
3. Verifica que todas las dependencias están en `package.json`

### Imágenes no cargan

**Solución:**
1. Verifica que las imágenes están en `/public`
2. Usa rutas relativas desde `/` (ej: `/imagen.webp`)
3. Verifica que los formatos son compatibles (webp, avif)

## 📊 Monitoreo Post-Deploy

### 1. Google Search Console

1. Verifica tu sitio en [Google Search Console](https://search.google.com/search-console)
2. Agrega el código de verificación en `app/layout.jsx` si lo tienes
3. Envía el sitemap: `https://tu-dominio.com/sitemap.xml`

### 2. Analytics (Opcional)

Considera agregar:
- Google Analytics
- Vercel Analytics (incluido en Vercel Pro)

### 3. Performance

Monitorea con:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Vercel Analytics

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

1. Haz push a tu repositorio
2. Vercel detectará automáticamente los cambios
3. Creará un nuevo deployment
4. Si todo está bien, se desplegará automáticamente

## 📝 Notas Importantes

- **Variables de entorno**: Nunca subas `.env.local` al repositorio
- **API Keys**: Mantén las API keys seguras, nunca en el código
- **Dominio**: Si cambias el dominio, actualiza `NEXT_PUBLIC_SITE_URL`
- **Resend**: Verifica que el dominio `ntbstudio.cl` está verificado en Resend para usar `no-reply@ntbstudio.cl`

## ✅ Listo para Deploy

Tu proyecto está optimizado y listo para desplegar en Vercel. Solo necesitas:

1. ✅ Conectar el repositorio
2. ✅ Agregar variables de entorno
3. ✅ Deploy automático

¡Buena suerte con el despliegue! 🚀

