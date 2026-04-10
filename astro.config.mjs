// @ts-check
import "dotenv/config";

import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: projectId,
      dataset: dataset,
      apiVersion: "2024-01-01",
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_SANITY_PROJECT_ID": JSON.stringify(projectId),
      "import.meta.env.PUBLIC_SANITY_DATASET": JSON.stringify(dataset),
    },
  },
});
