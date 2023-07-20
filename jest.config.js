module.exports = {
	roots: ["<rootDir>/src"],
	testMatch: ["**/*.test.[tj]s?(x)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom", // point to the new package
};
