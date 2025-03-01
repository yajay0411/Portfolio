import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      // Image Optimization
      viteImagemin({
        gifsicle: { optimizationLevel: 3 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 75 },
        svgo: { plugins: [{ removeViewBox: false }] },
      }),

      // Bundle Visualizer (Only for analysis)
      mode === "production" ? visualizer({ filename: "dist/stats.html" }) : null,
    ].filter(Boolean), // Removes falsy values

    define: {
      "process.env": env,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "esnext", // Use latest JS features
      minify: "terser", // Use Terser for better minification
      sourcemap: false, // Disables source maps for smaller build
      cssCodeSplit: true, // Split CSS for better performance
      chunkSizeWarningLimit: 600, // Set chunk size warning limit
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0];
            }
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs
          drop_debugger: true, // Remove debugger statements
          dead_code: true, // Remove unreachable code
        },
      },
    },

    server: {
      port: 3000,
      strictPort: true, // Ensures fixed port, avoids random assignment
      open: true, // Opens browser on startup
    },

    esbuild: {
      drop: ["console", "debugger"], // Remove logs during build
    },
  };
});
