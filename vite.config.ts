import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // 👇 base debe coincidir con el nombre exacto del repo
  base: "/web_page/",
  plugins: [react(), tailwindcss()],
});
