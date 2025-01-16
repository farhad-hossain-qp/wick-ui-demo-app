import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    fs: {
      allow: [process.cwd(), "../wick-ui/wick-ui-lib/dist/fonts/wick-icon.ttf"],
    },
  },
});
