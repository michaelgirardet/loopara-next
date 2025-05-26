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
			keppel: "#44BBA4",
			keppelhover: "#78CEBD",
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
