import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mikecousins/react-pdf", "pdfjs-dist"],
  },
  build: {
    target: ["esnext"], // esnext supports top-level await
  },
});
