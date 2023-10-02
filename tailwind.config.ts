import type { Config } from "tailwindcss";
const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      backgroundImage: {
        "bg-pattern": "url('../assets/bg-texture-2.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #3b4d6b 5px, #1e293b 100px)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "3%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "90%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-card": "slide 3s 1s ease-in-out",
      },
      colors: { ...colors, "dark-blue": "#2a4878", "light-blue": "#4db5ff" },
    },
  },
  plugins: [],
};
export default config;
