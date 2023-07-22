//path: src\components\builders\TypographyBuilder.test.tsx

import { render } from "@testing-library/react";
import TypographyBuilder from "./TypographyBuilder";
import React from "react";

const TestComponent: React.FC<{ className?: string }> = ({ className }) => {
	return <div className={className}>Test</div>;
};

describe("TypographyBuilder", () => {
	it("adds typography styles correctly", () => {
		const builder = new TypographyBuilder(TestComponent);
		const Built = builder
			.withTextColor("overt")
			.withTextSize("calm")
			.withFontFamily("alert")
			.withTextAlignment("subtle")
			.withLineHeight("overt")
			.withFontWeight("calm")
			.withLetterSpacing("alert")
			.build();

		const { container } = render(<Built />);
		const div = container.firstChild;

		expect(div).toHaveClass("text-cherry-h");
		expect(div).toHaveClass("text-lg");
		expect(div).toHaveClass("font-mono");
		expect(div).toHaveClass("text-center");
		expect(div).toHaveClass("leading-loose");
		expect(div).toHaveClass("font-extrabold");
		expect(div).toHaveClass("tracking-widest");
	});
});
