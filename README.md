# InGsight

> **Donde la ingeniería cobra sentido**

Publicación académica digital de ingeniería en español, impulsada por Astro + Sanity CMS y desplegada en Vercel.

**Sitio:** [ingsight-web.vercel.app](https://ingsight-web.vercel.app)

![Página de inicio de InGsight](.github/assets/home.jpg)

## Contexto y equipo

Sitio de divulgación científica de ingeniería, hecho en equipo por [cereandel](https://github.com/cereandel) y [Eduard Velasco](https://github.com/Eduardvs13). Las decisiones de diseño, contenido y arquitectura las tomamos entre los dos.

En el historial de commits, cereandel aparece con la base del proyecto (Astro, integración con Sanity, páginas de artículos y despliegue en Vercel), y yo con:

- El cambio de marca a InGsight y el rediseño de la interfaz, con modo claro en todo el sitio.
- Corrección de los nombres de autores que vienen de Sanity y soporte para artículos con varios autores.
- Renderizado en el servidor (SSR) con rutas dinámicas por artículo y un sitemap dinámico, para mejorar el SEO.
- Redirección de las URL antiguas (`/articles?slug=`) a las nuevas, `robots.txt` y verificación en Google Search Console.

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
│   │   ├── sitemap.xml.js   # Sitemap dinámico con los artículos publicados
│   │   └── articles/
│   │       ├── [slug].astro # Detalle de artículo, renderizado en el servidor (SSR)
│   │       └── index.astro  # Redirige las URL antiguas /articles?slug=
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
├── vercel.json              # Rewrites heredados del routing anterior
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
4. Sin rebuild necesario: cada artículo se renderiza en el servidor (SSR) al visitarlo, y el sitemap se actualiza solo

---

## CORS

Para permitir que el frontend acceda a la API de Sanity:

```bash
# Desarrollo local
sanity cors add http://localhost:4321

# Producción
sanity cors add https://ingsight-web.vercel.app
```

---

## Licencia

[Apache 2.0](LICENSE)
