export default {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-jest",
		"@storybook/addon-storysource",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
