/** @type {import('tailwindcss').Config} */
const colors = require("./src/data/colors.json");

import flatColors from "./src/data/colors.ts";

let colorUtilities = {};
for (let colorName in flatColors) {
	if (flatColors.hasOwnProperty(colorName)) {
		colorUtilities["." + colorName] = {
			color: flatColors[colorName],
		};
	}
}

module.exports = {
	darkMode: "class",
	mode: "jit",
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			strokeWidth: {
				3: "3px",
				4: "4px",
				5: "5px",
				6: "6px",
			},
			width: {
				"main-column": "0%",
			},
			colors: colors,
			fontSize: {
				xs: ".5rem",
				sm: ".675rem",
				md: ".75rem",
				lg: ".875rem",
				xl: "1rem",
				"2xl": "1.15rem",
				"3xl": "1.5rem",
				"4xl": "1.75rem",
				"5xl": "2.875rem",
				"6xl": "3rem",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities(colorUtilities);
			addUtilities(
				{
					".stroke-dash-1-1": {
						strokeDasharray: "1 1",
					},
					".stroke-dash-1-2": {
						strokeDasharray: "1 2",
					},
					".stroke-dash-1-3": {
						strokeDasharray: "1 3",
					},
					".stroke-dash-1-4": {
						strokeDasharray: "1 4",
					},
				},
				["responsive", "hover", "focus"],
			);
		},
		function ({ addBase, theme }) {
			addBase({
				"::selection": {
					backgroundColor: theme("colors.text-select"),
					color: theme("colors.text"),
				},
				"::-moz-selection": {
					backgroundColor: theme("colors.text-select"),
					color: theme("colors.text"),
				},
			});
		},
	],
};
