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
		animation: {
			typing: 'typing 3.5s steps(40, end)',
			blinkCaret: 'blinkCaret .75s step-end infinite',
		  },keyframes: {
			typing: {
			  'from': { width: '0' },
			  'to': { width: '100%' },
			},
			blinkCaret: {
			  'from, to': { borderColor: 'transparent' },
			  '50%': { borderColor: 'orange' },
			},
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			light_shade_gray:'#EAE7DC',
			light_shade_beige:'#D8C3A5',
			dark_shade_gray:'#8E8D8A',
			light_shade_tomato:'#E98074',
			dark_shade_tomato:'#E85A4F',
			main_blue:'#04123E',
			cherry_pink:'#F54550',
			bright_purple:'#5560FF'

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			anton: ['Anton SC', 'sans-serif'],
			edu: ['Edu AU VIC WA NT Arrows', 'sans-serif']
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
