import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        charcoal: "#1a1a1a",
        "charcoal-light": "#222222",
        gold: "#c9a96e",
        "gold-light": "#d4b97f",
        "gold-dark": "#a8884f",
        cream: "#f5f0eb",
        "cream-dark": "#e8e0d8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
