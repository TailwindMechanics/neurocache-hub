//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.test.tsx

import AtomicDiv from "@src/components/atoms/atomicDiv";
import ReactFlowBuilder from "./ReactFlowBuilder";
import { render } from "@testing-library/react";
import { ReactFlowProvider } from "reactflow";
import React from "react";

describe("ReactFlowBuilder", () => {
	it("adds top handle when withTopHandle is used", () => {
		const builder = new ReactFlowBuilder(AtomicDiv);
		const Built = builder.withTopHandle().build();

		const { container } = render(
			<ReactFlowProvider>
				<Built />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__handle-top");
		expect(handle).toBeInTheDocument();
	});

	it("adds bottom handle when withBottomHandle is used", () => {
		const builder = new ReactFlowBuilder(AtomicDiv);
		const Built = builder.withBottomHandle().build();

		const { container } = render(
			<ReactFlowProvider>
				<Built />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__handle-bottom");
		expect(handle).toBeInTheDocument();
	});

	it("adds NodeResizer when withResizer is used", () => {
		const builder = new ReactFlowBuilder(AtomicDiv);
		const Built = builder.withResizer().build();
		const { container } = render(
			<ReactFlowProvider>
				<Built />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__resize-control");
		expect(handle).toBeInTheDocument();
	});

	it("buildComponent returns a valid React component", () => {
		const builder = new ReactFlowBuilder(AtomicDiv);
		const Built = builder.build();

		const { getByTestId } = render(<Built />);
		expect(getByTestId("atomic-div")).toBeInTheDocument();
	});
});
