//path: src\components\library\testButton\testButton.test.tsx

import { render, fireEvent } from "@testing-library/react";
import { TestButton, TestButtonProps } from "./testButton";
import React from "react";

// This is a simple test suite for your component
describe("TestButton", () => {
	const defaultProps: TestButtonProps = {
		label: "Test Button",
		onClick: jest.fn(),
	};

	// Test that the component renders without error
	it("renders without error", () => {
		const { getByText } = render(
			<TestButton {...defaultProps} />,
		);
		expect(getByText(defaultProps.label)).toBeInTheDocument();
	});

	// Test that the onClick function is called when the button is clicked
	it("calls onClick prop when clicked", () => {
		const { getByText } = render(
			<TestButton {...defaultProps} />,
		);
		fireEvent.click(getByText(defaultProps.label));
		expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
	});
});
