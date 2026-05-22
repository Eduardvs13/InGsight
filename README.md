# InGsight

> **Donde la ingeniería cobra sentido**

Publicación académica digital de ingeniería en español, impulsada por Astro + Sanity CMS y desplegada en Vercel.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | [Astro 6](https://astro.build) + Tailwind CSS v4 |
| CMS | [Sanity](https://sanity.io) (proyecto `8knpnv8f`, dataset `production`) |
| Hosting | [Vercel](https://vercel.com) |
| Tipografía | Playfair Display + Inter (Google Fonts) |

---

## Estructura del proyecto

```
/
├── public/
│   └── favicon.svg          # Monograma InGsight
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro # Header + Footer globales
│   ├── pages/
│   │   ├── index.astro      # Home: hero + listado de artículos
│   │   └── articles/
│   │       └── index.astro  # Detalle de artículo (routing via ?slug=)
│   ├── sanity/
│   │   ├── sanityClient.js  # Cliente @sanity/client
│   │   ├── queries.js       # GROQ reutilizables
│   │   └── portableTextToHtml.js
│   └── styles/
│       └── global.css       # Design system completo (tokens, animaciones)
├── studio/                  # Sanity Studio local
│   ├── schemas/
│   │   ├── article.js
│   │   ├── author.js
│   │   └── settings.js
│   ├── sanity.config.js
│   └── sanity.cli.js
├── vercel.json              # Rewrites para SPA-style routing
└── astro.config.mjs
```

---

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local (frontend)
npm run dev
# → http://localhost:4321

# Studio local (Sanity)
npm run studio
# → http://localhost:3333

# Build de producción
npm run build

# Desplegar Studio en Sanity
npm run studio:deploy
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (o configura en Vercel):

```env
PUBLIC_SANITY_PROJECT_ID=8knpnv8f
PUBLIC_SANITY_DATASET=production
```

---

## Flujo de contenido

1. Crear/editar artículo en Sanity Studio (`npm run studio` o la URL de Studio desplegado)
2. Publicar el documento en Sanity
3. El frontend lo lee en tiempo real mediante la API pública de Sanity CDN
4. Sin rebuild necesario — los artículos se cargan client-side al visitar la página

---

## CORS

Para permitir que el frontend acceda a la API de Sanity:

```bash
# Desarrollo local
sanity cors add http://localhost:4321

# Producción (reemplaza con tu dominio Vercel)
sanity cors add https://tu-proyecto.vercel.app
```

---

## Licencia

MIT © InGsight
