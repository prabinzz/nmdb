/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"c-dark": "#202125",
				"c-semi-dark": "#2b2c30",
				"c-light": "#fff",
				"c-semi-light": "#ccc",
				"c-primary": "#cae962",
			},
		},
	},
	plugins: [],
};
