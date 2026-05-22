// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// loadEnv lee el .env en tiempo de configuración (Node.js),
// donde import.meta.env no está disponible.
const env = loadEnv("", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://ingsight-web.vercel.app",
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
