import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
} satisfies Config;
