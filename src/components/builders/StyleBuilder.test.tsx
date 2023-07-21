//path: src\components\builders\StyleBuilder.test.tsx

import { render } from "@testing-library/react";
import StyleBuilder from "./StyleBuilder";
import React from "react";

const TestComponent: React.FC<{ className?: string }> = ({ className }) => {
	return <div className={className}>Test</div>;
};

describe("StyleBuilder", () => {
	it("adds styles correctly", () => {
		const builder = new StyleBuilder(TestComponent);
		const Built = builder
			.withStyle("bg", "primary")
			.withStyle("text", "primary")
			.build();

		const { container } = render(<Built />);
		const div = container.firstChild;

		expect(div).toHaveClass("bg-blue-500");
		expect(div).toHaveClass("text-white");
	});
});
