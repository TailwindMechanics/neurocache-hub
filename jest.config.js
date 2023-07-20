module.exports = {
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	setupFilesAfterEnv: ["./jest.setup.js"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
		},
	},
};
