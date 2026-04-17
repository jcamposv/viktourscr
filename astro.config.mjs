import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://viktours.tours",
  integrations: [tailwind(), react(), sitemap()],
  adapter: vercel(),
  output: "static",
});
