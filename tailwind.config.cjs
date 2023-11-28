/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react')
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				darker: '#090e1a',
				card: 'rgb(26,28,35)',
				primary: '#04B4E6'
			},
			backgroundImage: {
				gradientdown:
					'background-image: radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,#364ef580 69.27%,#6698ff 100%);'
			},
			scale: {
				101: '1.01'
			},
			animation: {
				meteor: 'meteor 5s linear infinite',
				'text-gradient': 'text-gradient 1.5s linear infinite',
				fade: 'fade 1s both'
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0
					}
				},
				fade: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			fontFamily: {
				GilroyRegular: 'GilroyRegular, sans-serif',
				GilroySemibold: 'GilroySemibold, sans-serif',
				GilroyBold: 'GilroyBold, sans-serif'
			}
		}
	},
	plugins: [nextui()]
}
