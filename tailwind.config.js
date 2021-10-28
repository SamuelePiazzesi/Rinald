module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: "#000000",
				white: "#FFFFFF",

				indigo: "#831010",
				red: "#DB0000",
			},
			/* 	fontFamily: {
				sans: ["Consola", "sans-serif"],
				serif: ["Bebas", "serif"],
			}, */
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
