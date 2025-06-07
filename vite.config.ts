import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true", 
    },
  },
  plugins: [react(), tailwindcss(), basicSsl()],
});
