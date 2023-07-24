//path: src\components\builders\typographyBuilder\TypographyBuilder.test.tsx

import AtomicDiv from "@src/components/atoms/atomicDiv";
import TypographyBuilder from "./TypographyBuilder";
import { render } from "@testing-library/react";
import React from "react";

describe("TypographyBuilder", () => {
	it("adds typography styles correctly", () => {
		const builder = new TypographyBuilder(AtomicDiv);
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

	it("buildComponent returns a valid React component", () => {
		const builder = new TypographyBuilder(AtomicDiv);
		const BuiltComponent = builder.buildComponent();

		const { getByTestId } = render(<BuiltComponent />);
		expect(getByTestId("atomic-div")).toBeInTheDocument();
	});
});
