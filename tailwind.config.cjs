/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily: {
		// Font families read from CSS variables in src/styles/global.css
		sans: ['var(--font-sans)'],
		display: ['var(--font-display)'],
		mono: ['var(--font-mono)'],
	  },
    extend: {
		colors: {
			// Colors read from CSS variables in src/styles/global.css
			'brutalist': {
				'bg': 'var(--color-bg)',
				'surface': 'var(--color-surface)',
				'text': 'var(--color-ink)',
				'border': 'var(--color-border)',
				'orange': 'var(--color-accent)',
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
					'--tw-prose-body': 'var(--color-ink)',
					'--tw-prose-headings': 'var(--color-ink)',
					'--tw-prose-links': 'var(--color-accent)',
					'--tw-prose-bold': 'var(--color-ink)',
					'--tw-prose-code': 'var(--color-ink)',
					'--tw-prose-pre-bg': 'var(--color-bg)',
					'--tw-prose-quotes': 'var(--color-ink)',
					img:{
						"margin": "2rem auto",
						"border": "2px solid var(--color-border)",
					},
					"color": "var(--color-ink)",
					"font-family": "var(--font-sans)",
					"font-size": "1rem",
					"line-height": "1.6",
					"max-width": "none",
					a:{
						color: "var(--color-accent)",
						"text-decoration": "underline",
						"font-weight": "500",
						"transition": "background-color 0.15s ease, color 0.15s ease, text-decoration 0.15s ease",
						"&:hover": {
							"background-color": "var(--color-accent)",
							"color": "var(--color-bg)",
							"text-decoration": "none",
						}
					},
					h1:{
						color: "var(--color-ink)",
						"font-family": "var(--font-display)",
						"font-weight": "400",
						"line-height": "1.2",
						"margin-top": "2rem",
						"margin-bottom": "1rem",
					},
					h2:{
						color: "var(--color-ink)",
						"font-family": "var(--font-display)",
						"font-weight": "400",
						"line-height": "1.3",
						"margin-top": "2rem",
						"margin-bottom": "1rem",
					},
					h3:{
						color: "var(--color-ink)",
						"font-family": "var(--font-display)",
						"font-weight": "400",
						"line-height": "1.3",
					},
					code: {
						"font-family": "var(--font-mono)",
						"background-color": "var(--color-bg)",
						"padding": "0.125rem 0.25rem",
						"border": "1px solid var(--color-border)",
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
						"background-color": "var(--color-bg)",
						"border": "2px solid var(--color-border)",
						"padding": "1rem",
						"font-family": "var(--font-mono)",
						"border-radius": "0",
					},
					blockquote: {
						"border-left": "4px solid var(--color-ink)",
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
