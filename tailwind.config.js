// tailwind.config.js
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"5xl": "42px",
			},
			minHeight: {
				32: "7.75rem",
			},
			lineHeight: {
				subTitle: "50px", // Add custom line-height
			},
		},
	},
	plugins: [],
}
