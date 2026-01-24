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
    // Otimizações para produção
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ["console.log"],
      },
    },
    // Melhora code splitting
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },
  // Otimizações de performance
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
