import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#47E0CA",
        turquoisehover: "#73E7D6",
        grey: "#d1d5db",
        gunmetal: "#1F2937",
        rich: "#101827",
      },
      fontFamily: {
        hind: ['"Hind Vadadora"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
