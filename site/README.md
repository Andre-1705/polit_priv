# Static Legal Site

Sitio estático para publicar tus políticas (privacidad, cookies, términos) en Vercel.

## Estructura
- `index.html`: Portada con enlaces
- `privacy.html`, `cookies.html`, `terms.html`: páginas que renderizan Markdown
- `content/`: copias de los `.md` de la raíz
- `main.js`: Render Markdown (via CDN `marked`) + banner de cookies
- `style.css`: estilos simples

## Ejecutar localmente (sin servidor)
Abre `site/index.html` en tu navegador (doble click). Algunas funciones como `fetch()` de archivos locales pueden requerir un servidor local.

Servidor local rápido:
```pwsh
cd site
python -m http.server 8080
# luego abre http://localhost:8080/index.html
```

## Despliegue a Vercel
Usa el directorio `site/` como raíz del proyecto:
```pwsh
npm i -g vercel
vercel login
vercel --cwd site
vercel --cwd site --prod
```

En el dashboard, selecciona el scope `marias-projects-...`. No se requieren variables de entorno.
