import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: [
      "my-portfolio-i7ch.onrender.com"
    ],
  },
});
