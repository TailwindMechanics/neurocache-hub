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
});
