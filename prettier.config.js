module.exports = {
	plugins: ["prettier-plugin-tailwindcss"],
	tabWidth: 4,
	useTabs: true,
	endOfLine: "crlf",
	overrides: [
		{
			files: ["*.yaml", "*.yml"],
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
		{
			files: ["*.d.ts"],
			options: {
				tabWidth: 4,
				useTabs: true,
			},
		},
	],
};
