import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/hero.jpg')",
			},
			fontFamily: {
				Dancing: ['Dancing Script', 'cursive'],
				Roboto: ['Roboto Slab', 'serif'],
			},
		},
	},
	plugins: [],
};
export default config;
