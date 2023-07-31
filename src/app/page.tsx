//path: src\app\page.tsx

"use client";

import ReactFlowBuilder from "@src/components/builders/reactFlowBuilder/ReactFlowBuilder";
import ReactFlowCanvas from "@src/components/react_flow/reactFlowCanvas";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { Node, NodeTypes } from "reactflow";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	const buttonAtom = new ButtonAtom();

	let CalmButton = buttonAtom.calm();
	const CalmFlowButton = new ReactFlowBuilder(CalmButton)
		.withType("custom_calm")
		.withPosition(-50, 0)
		.withBottomHandle()
		.withLabel("Calm")
		.withTopHandle()
		.withResizer()
		.build();
	console.log(CalmFlowButton.data);

	let OvertButton = buttonAtom.overt();
	const OvertFlowButton = new ReactFlowBuilder(OvertButton)
		.withType("custom_overt")
		.withPosition(50, 0)
		.withBottomHandle()
		.withLabel("Overt")
		.withTopHandle()
		.withResizer()
		.build();

	console.log(OvertFlowButton.data);

	let nodes: Node[] = [CalmFlowButton.data, OvertFlowButton.data];
	const types: NodeTypes = {
		custom_calm: CalmButton as React.ComponentType<any>,
		custom_overt: OvertButton as React.ComponentType<any>,
	};

	return (
		<>
			<ReactFlowCanvas nodes={nodes} edges={[]} types={types} />
		</>
	);
};

export default page;
