//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.test.tsx

import ReactFlowBuilder from "./ReactFlowBuilder";
import { render } from "@testing-library/react";
import { ReactFlowProvider } from "reactflow";
import React from "react";

const TestComponent: React.FC<{ className?: string }> = ({ className }) => {
	return <div className={className}>Test</div>;
};

describe("ReactFlowBuilder", () => {
	it("adds top handle when withTopHandle is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withTopHandle().build();

		const BuiltComponent: React.FC = () => <>{BuiltNode}</>;
		const { container } = render(<BuiltComponent />);

		expect(
			container.querySelector(".react-flow__handle--top"),
		).not.toBeNull();
	});

	it("adds bottom handle when withBottomHandle is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withBottomHandle().build();

		const BuiltComponent: React.FC = () => <>{BuiltNode}</>;
		const { container } = render(<BuiltComponent />);

		expect(
			container.querySelector(".react-flow__handle--bottom"),
		).not.toBeNull();
	});

	it("adds NodeResizer when withResizer is used", () => {
		const builder = new ReactFlowBuilder(<TestComponent />);
		const BuiltNode = builder.withResizer().build();

		const BuiltComponent: React.FC = () => (
			<ReactFlowProvider>
				<>{BuiltNode}</>
			</ReactFlowProvider>
		);

		const { container } = render(<BuiltComponent />);

		expect(
			container.querySelector(".react-flow__nodeResizer"),
		).not.toBeNull();
	});
});
