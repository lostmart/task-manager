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
				80: "82dvh",
			},
			maxWidth: {
				104: "780px",
			},
			lineHeight: {
				subTitle: "50px", // Add custom line-height
			},
		},
	},
	plugins: [],
}
