//path: src\components\builders\styleBuilder\StyleBuilder.test.tsx

import AtomicDiv from "@src/components/atoms/atomicDiv";
import { render } from "@testing-library/react";
import StyleBuilder from "./StyleBuilder";
import React from "react";

describe("StyleBuilder", () => {
	it("adds styles correctly", () => {
		const builder = new StyleBuilder(AtomicDiv);
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

	it("buildComponent returns a valid React component", () => {
		const builder = new StyleBuilder(AtomicDiv);
		const BuiltComponent = builder.buildComponent();

		const { getByTestId } = render(<BuiltComponent />);
		expect(getByTestId("atomic-div")).toBeInTheDocument();
	});
});
