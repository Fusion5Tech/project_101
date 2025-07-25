import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/project101/', 
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 3000,
    open: true,
  },
});