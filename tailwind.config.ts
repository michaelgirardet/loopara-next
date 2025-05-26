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
			misty: "#FFD9DA",      
			emerald: "#33CA7F",
			emeraldhover: "#4BD28F",
			payne: "#606980",
			eerie: "#1B2021",
			noir: "#090B0B",        
		  },
		fontFamily: {
		hind: ['"Hind Vadadora"', "sans-serif"],
		manrope: ['"Manrope"', "sans-serif"],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
