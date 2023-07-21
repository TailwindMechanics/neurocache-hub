//path: src\components\library\buttonComponent\buttonComponent.test.tsx

import { render } from "@testing-library/react";
import ButtonComponent from "./buttonComponent";
import React from "react";

// This is a simple test suite for your component
describe("PrimaryButton", () => {
	// Test that the component renders without error
	it("renders without error", () => {
		const { getByText } = render(
			<ButtonComponent label="click me" />,
		);
		expect(getByText("click me")).toBeInTheDocument();
	});

	// Test that the component has the correct styles
	it("has correct styles", () => {
		const { getByText } = render(
			<ButtonComponent label="ButtonComponent" />,
		);
		const button = getByText("ButtonComponent");

		let tw = "bg-aqua";
		expect(button).toHaveClass(tw);
		tw = "hover:bg-aqua-l";
		expect(button).toHaveClass(tw);
		tw = "border-aqua-d";
		expect(button).toHaveClass(tw);
	});
});
