//path: src\components\library\buttonComponent\buttonComponent.test.tsx

import { render } from "@testing-library/react";
import ButtonComponent from "./buttonComponent";
import React from "react";

describe("ButtonComponent", () => {
	it("renders without error", () => {
		const mockOnClick = jest.fn();

		const { getByText } = render(
			<ButtonComponent
				label="click me"
				onClick={mockOnClick}
			/>,
		);
		expect(getByText("click me")).toBeInTheDocument();
	});

	it("has correct styles", () => {
		const mockOnClick = jest.fn();

		const { getByText } = render(
			<ButtonComponent
				label="ButtonComponent"
				category="calm"
				onClick={mockOnClick}
			/>,
		);
		const button = getByText("ButtonComponent");

		expect(button).toHaveClass("bg-aqua-d");
		expect(button).toHaveClass("hover:bg-aqua");
		expect(button).toHaveClass("rounded-full");
		expect(button).toHaveClass("border");
		expect(button).toHaveClass("border-aqua-l");
		expect(button).toHaveClass("shadow-lg");
		expect(button).toHaveClass("drop-shadow-lg");
		expect(button).toHaveClass("text-lg");
		expect(button).toHaveClass("text-center");
		expect(button).toHaveClass("font-mono");
		expect(button).toHaveClass("text-aqua-h");
		expect(button).toHaveClass("hover:aqua-p");
		expect(button).toHaveClass("font-extrabold");
		expect(button).toHaveClass("leading-loose");
	});
});
