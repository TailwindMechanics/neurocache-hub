// .storybook/preview.js
import "../src/app/globals.css";
import { create } from "@storybook/theming";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		theme: create({
			base: "dark",
			colorPrimary: "#F4783F", // primary color
			colorSecondary: "#1EA7FD", // secondary color
			appBg: "#2f2f2f",
		}),
	},
};
