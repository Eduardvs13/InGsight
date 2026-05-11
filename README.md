# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Sanity Studio — despliegue y pruebas (rápido)

Este repositorio es solo el Frontend. El Studio (panel de control) debe vivir en un repositorio/carpeta separado y desplegarse en Sanity.

- Variables de entorno necesarias en el Frontend:
  - `PUBLIC_SANITY_PROJECT_ID`
  - `PUBLIC_SANITY_DATASET`

1. Crear un Studio separado (ejemplo mínimo):

```bash
mkdir ../aletheia-studio
cd ../aletheia-studio
npx create-sanity@latest
# Selecciona el mismo projectId y dataset que uses en el frontend
```

2. Copiar esquemas desde el frontend:

Copiar `src/sanity/schemaTypes/*.js` de este repo a `studio/schemas/` en la carpeta del Studio y exportarlos desde `schema.js`.

3. Iniciar Studio localmente (desde este monorepo):

```bash
# Desde la raíz del repo
npm install
npm run studio
# Abre http://localhost:3333 (o la ruta que indique la CLI) para acceder al panel
```

4. Desplegar Studio en producción (host de Sanity):

```bash
sanity deploy
# Sanity devolverá una URL como https://<tu-proyecto>.sanity.studio
```

5. Añadir un artículo desde el Studio:

- En el Studio crea un nuevo documento `Artículo` con `titulo`, `slug`, `autores`, `fechaPublicacion`, `palabrasClave`, `portada` y `contenido`.
- Publica/guarda el documento. El frontend (con `PUBLIC_SANITY_PROJECT_ID` y dataset correctos) podrá leer el artículo inmediatamente.

6. CORS (permitir al frontend leer la API):

```bash
sanity cors add http://localhost:3000
sanity cors add https://tu-dominio-de-produccion
```

7. Probar desde el frontend:

```bash
# En el repo frontend
npm install
npm run dev
# Abre http://localhost:3000 y navega la home o /articles/<slug>
```

Si quieres, puedo generar la carpeta `../aletheia-studio` automáticamente y copiar los esquemas por ti; dime si quieres que lo haga ahora.
