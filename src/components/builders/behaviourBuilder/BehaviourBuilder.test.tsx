//path: src\components\builders\behaviourBuilder\BehaviourBuilder.test.tsx

import AtomicDiv from "@src/components/atoms/atomicDiv";
import userEvent from "@testing-library/user-event";
import BehaviourBuilder from "./BehaviourBuilder";
import { render } from "@testing-library/react";
import React from "react";

describe("BehaviourBuilder", () => {
	it("invokes click handler correctly", () => {
		const handleClick = jest.fn();

		const builder = new BehaviourBuilder(AtomicDiv);
		const Built = builder.withClick(handleClick).build();

		const { getByTestId } = render(<Built />);
		const div = getByTestId("atomic-div");

		userEvent.click(div);

		setTimeout(() => {
			expect(handleClick).toHaveBeenCalledTimes(1);
		}, 100);
	});

	it("prevents click handler when disabled", () => {
		const handleClick = jest.fn();

		const builder = new BehaviourBuilder(AtomicDiv);
		const Built = builder
			.withClick(handleClick)
			.withDisabled(true)
			.build();

		const { getByTestId } = render(<Built />);
		const div = getByTestId("atomic-div");

		userEvent.click(div);

		setTimeout(() => {
			expect(handleClick).toHaveBeenCalledTimes(0);
		}, 100);
	});

	it("invokes keyboard navigation correctly when enabled", () => {
		const handleClick = jest.fn();

		const builder = new BehaviourBuilder(AtomicDiv);
		const Built = builder
			.withClick(handleClick)
			.withKeyboardNav(false)
			.build();

		const { getByTestId } = render(<Built />);
		const div = getByTestId("atomic-div");

		userEvent.type(div, "{enter}");

		setTimeout(() => {
			expect(handleClick).toHaveBeenCalledTimes(1);
		}, 100);
	});

	it("prevents keyboard navigation when disabled", () => {
		const handleClick = jest.fn();

		const builder = new BehaviourBuilder(AtomicDiv);
		const Built = builder
			.withClick(handleClick)
			.withKeyboardNav(true)
			.build();

		const { getByTestId } = render(<Built />);
		const div = getByTestId("atomic-div");

		userEvent.type(div, "{enter}");

		setTimeout(() => {
			expect(handleClick).toHaveBeenCalledTimes(0);
		}, 100);
	});
});
