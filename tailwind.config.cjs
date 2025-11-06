/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily: {
		sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
		mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
	  },
    extend: {
		colors: {
			'brutalist': {
				'bg': '#F8F8F8',
				'surface': '#FFFFFF',
				'text': '#0A0A0A',
				'border': '#999999',
				'orange': '#FF6B00',
			}
		},
		fontSize: {
			'brutalist-xs': ['0.75rem', { lineHeight: '1.2' }],
			'brutalist-sm': ['0.875rem', { lineHeight: '1.4' }],
			'brutalist-base': ['1rem', { lineHeight: '1.6' }],
			'brutalist-lg': ['1.125rem', { lineHeight: '1.6' }],
			'brutalist-xl': ['1.5rem', { lineHeight: '1.3' }],
			'brutalist-2xl': ['2rem', { lineHeight: '1.2' }],
			'brutalist-3xl': ['2.5rem', { lineHeight: '1.1' }],
			'brutalist-4xl': ['3rem', { lineHeight: '1.1' }],
			'brutalist-5xl': ['4rem', { lineHeight: '1' }],
			'brutalist-6xl': ['6rem', { lineHeight: '1' }],
		},
		fontWeight: {
			'brutalist-normal': '400',
			'brutalist-medium': '500',
			'brutalist-bold': '800',
			'brutalist-black': '900',
		},
		borderWidth: {
			'brutalist': '2px',
			'brutalist-thick': '4px',
		},
		spacing: {
			'brutalist-xs': '0.5rem',
			'brutalist-sm': '1rem',
			'brutalist-md': '1.5rem',
			'brutalist-lg': '2rem',
			'brutalist-xl': '3rem',
			'brutalist-2xl': '4rem',
			'brutalist-3xl': '6rem',
		},
		typography:{
			DEFAULT:{
				css:{
					'--tw-prose-body': '#0A0A0A',
					'--tw-prose-headings': '#0A0A0A',
					'--tw-prose-links': '#FF6B00',
					'--tw-prose-bold': '#0A0A0A',
					'--tw-prose-code': '#0A0A0A',
					'--tw-prose-pre-bg': '#F8F8F8',
					'--tw-prose-quotes': '#0A0A0A',
					img:{
						"margin": "2rem auto",
						"border": "2px solid #999999",
					},
					"color": "#0A0A0A",
					"font-family": "'Inter', sans-serif",
					"font-size": "1rem",
					"line-height": "1.6",
					"max-width": "none",
					a:{
						color: "#FF6B00",
						"text-decoration": "underline",
						"font-weight": "500",
						"&:hover": {
							"background-color": "#FF6B00",
							"color": "#F8F8F8",
							"text-decoration": "none",
						}
					},
					h1:{
						color: "#0A0A0A",
						"font-weight": "900",
						"line-height": "1.1",
						"margin-top": "2rem",
						"margin-bottom": "1rem",
					},
					h2:{
						color: "#0A0A0A",
						"font-weight": "800",
						"line-height": "1.2",
						"margin-top": "2rem",
						"margin-bottom": "1rem",
					},
					h3:{
						color: "#0A0A0A",
						"font-weight": "800",
						"line-height": "1.2",
					},
					code: {
						"font-family": "'JetBrains Mono', monospace",
						"background-color": "#F8F8F8",
						"padding": "0.125rem 0.25rem",
						"border": "1px solid #999999",
						"border-radius": "0",
						"font-weight": "400",
					},
					"code::before": {
						content: '""',
					},
					"code::after": {
						content: '""',
					},
					pre: {
						"background-color": "#F8F8F8",
						"border": "2px solid #999999",
						"padding": "1rem",
						"font-family": "'JetBrains Mono', monospace",
						"border-radius": "0",
					},
					blockquote: {
						"border-left": "4px solid #0A0A0A",
						"font-style": "normal",
						"font-weight": "400",
						"padding-left": "1rem",
					},
					ul: {
						"list-style-type": "square",
					},
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
