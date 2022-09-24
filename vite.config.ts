import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from "node:url";


const fullReloadAlways: Plugin = {
  name: 'full-reload',
  handleHotUpdate({ server }) {
      server.ws.send({ type: "full-reload" });
      return [];
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fullReloadAlways],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
});
