/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			screens: {
				// default: "500px",
				lg: "1200px",
			},
		},
		extend: {
			colors: {
				"c-dark": "#202125",
				"c-semi-dark": "#2b2c30",
				"c-light": "#fff",
				"c-semi-light": "#ccc",
				"c-primary": "#cae962",
				"c-facebook": "#4267B2",
				"c-twitter": "#1DA1F2",
				"c-reddit": "#ff4500",
			},
		},
	},
	plugins: [],
};
