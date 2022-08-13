/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			"sm": "480px",
			"md": "768px",
			"lg": "976px",
			"xl": "1440px",
		},
		extend: {
			colors: {
				pink: "#FED9DA",
				purple: "#5928e5",
			},
		},
		fontFamily: {
			"exo": ["Exo", "sans-serif"],
		},
	},
	plugins: [],
};
