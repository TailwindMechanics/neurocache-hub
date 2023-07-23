const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	testMatch: ["**/src/**/*.test.[jt]s?(x)"],
	modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
	moduleNameMapper: {
		"^@src/(.*)$": "<rootDir>/src/$1",
		"^@root/(.*)$": "<rootDir>/$1",
	},
	reporters: [
		"default",
		[
			"jest-junit",
			{
				outputDirectory: "test-results/junit",
				outputName: "results.xml",
			},
		],
	],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
