module.exports = {
	plugins: ["prettier-plugin-tailwindcss"],
	tabWidth: 4,
	useTabs: true,
	overrides: [
		{
			files: ["*.yaml", "*.yml"],
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
	],
};
