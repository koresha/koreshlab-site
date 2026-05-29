import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://koreshlab.netlify.app",
  output: "static",
  build: { format: "directory" },
});
