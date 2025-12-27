import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/landingpage/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        planos: "./planos.html",
      },
    },
  },
});
