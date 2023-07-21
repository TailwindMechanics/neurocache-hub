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
			.withStyle("bg", "calm")
			.withStyle("hover", "calm")
			.withStyle("border", "calm")
			.build();

		const { container } = render(<Built />);
		const div = container.firstChild;

		let tw = "bg-aqua";
		expect(div).toHaveClass(tw);
		tw = "hover:bg-aqua-l";
		expect(div).toHaveClass(tw);
		tw = "border-aqua-d";
		expect(div).toHaveClass(tw);
	});
});
