//path: src\components\builders\styleBuilder\StyleBuilder.test.tsx

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
			.withBg("calm")
			.withHover("calm")
			.withBorder("calm")
			.build();

		const { container } = render(<Built />);
		const div = container.firstChild;

		let tw = "bg-aqua-d";
		expect(div).toHaveClass(tw);
		tw = "hover:bg-aqua";
		expect(div).toHaveClass(tw);
		tw = "border border-aqua-l";
		expect(div).toHaveClass(tw);
	});
});
