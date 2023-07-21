//path: src\components\library\buttonComponent\buttonComponent.test.tsx

import { render } from "@testing-library/react";
import ButtonComponent from "./buttonComponent";
import React from "react";

// This is a simple test suite for your component
describe("PrimaryButton", () => {
	// Test that the component renders without error
	it("renders without error", () => {
		const { getByText } = render(<ButtonComponent />);
		expect(getByText("ButtonComponent")).toBeInTheDocument();
	});

	// Test that the component has the correct styles
	it("has correct styles", () => {
		const { getByText } = render(<ButtonComponent />);
		const button = getByText("ButtonComponent");
		expect(button).toHaveClass("bg-blue-500");
		expect(button).toHaveClass("hover:bg-blue-700");
		expect(button).toHaveClass("text-white");
		expect(button).toHaveClass("font-bold");
		expect(button).toHaveClass("border-blue-700");
	});
});
