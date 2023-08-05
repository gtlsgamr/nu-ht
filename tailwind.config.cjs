/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['DM Serif Display', 'serif'],
	  },
    extend: {
		typography:{
			DEFAULT:{
				css:{
					img:{
						"filter": "sepia(0)"
					},
					"img:hover":{
						"filter": "sepia(1)"
					},
					"color": "#2f2f2f",
					"background-color": "#f9f7f1",
					"word-wrap": "break-word",
					"word-break": "normal",
					"font-family": "'Droid Serif', serif",
					"max-width": "none",
					a:{
						color: "#b45300"
					},
					h1:{
						color: "#2f2f2f"
					}
				}
			}
		}
    },
  },
  darkMode: 'class',
  plugins: [
	require('@tailwindcss/typography'),
  ],
};
