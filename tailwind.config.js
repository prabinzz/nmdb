/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					// default: "500px",
					lg: "1200px",
				},
			},
			"container-movies": {
				screen: {
					lg: "1400px",
				},
			},
			colors: {
				"c-dark": "#202125",
				"c-semi-dark": "#2b2c30",
				"c-light": "#fff",
				"c-semi-light": "#ccc",
				"c-primary": "#3568d3",
				"c-facebook": "#4267B2",
				"c-twitter": "#1DA1F2",
				"c-reddit": "#ff4500",
			},
			fontFamily: {
				roboto: ["Roboto"],
			},
			aspectRatio: {
				movieCardImg: "5/5",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
