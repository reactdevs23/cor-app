import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    allowedHosts: ["civas-macbook-pro.siberian-alioth.ts.net"],
  },
});
