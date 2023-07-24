//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.test.tsx

import ReactFlowBuilder from "./ReactFlowBuilder";
import { logDOM, render } from "@testing-library/react";
import { ReactFlowProvider } from "reactflow";
import React from "react";

const TestComponent: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<div className={className}>Test</div>
		</>
	);
};

describe("ReactFlowBuilder", () => {
	it("adds top handle when withTopHandle is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withTopHandle().build();

		const BuiltComponent: React.FC = () => <>{BuiltNode}</>;
		const { container } = render(
			<ReactFlowProvider>
				<BuiltComponent />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__handle-top");
		expect(handle).toBeInTheDocument();
	});

	it("adds bottom handle when withBottomHandle is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withBottomHandle().build();

		const BuiltComponent: React.FC = () => <>{BuiltNode}</>;
		const { container } = render(
			<ReactFlowProvider>
				<BuiltComponent />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__handle-bottom");
		expect(handle).toBeInTheDocument();
	});

	it("adds NodeResizer when withResizer is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withResizer().build();

		const BuiltComponent: React.FC = () => <>{BuiltNode}</>;
		const { container } = render(
			<ReactFlowProvider>
				<BuiltComponent />
			</ReactFlowProvider>,
		);

		const handle = container.querySelector(".react-flow__resize-control");
		expect(handle).toBeInTheDocument();
	});
});
