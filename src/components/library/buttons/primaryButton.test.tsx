//path: src\components\library\buttons\primaryButton.test.tsx

import { render } from "@testing-library/react";
import PrimaryButton from "./primaryButton";
import React from "react";

// This is a simple test suite for your component
describe("PrimaryButton", () => {
	// Test that the component renders without error
	it("renders without error", () => {
		const { getByText } = render(<PrimaryButton />);
		expect(getByText("Test")).toBeInTheDocument();
	});

	// Test that the component has the correct styles
	it("has correct styles", () => {
		const { getByText } = render(<PrimaryButton />);
		const button = getByText("Test");

		expect(button).toHaveClass("bg-blue-500");
		expect(button).toHaveClass("hover:bg-blue-700");
		expect(button).toHaveClass("text-white");
		expect(button).toHaveClass("font-bold");
		expect(button).toHaveClass("border-gray-200");
	});
});
