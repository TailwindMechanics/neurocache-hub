//path: src\app\page.tsx

"use client";

import ReactFlowCanvas from "@src/components/react_flow/reactFlowCanvas";

import ReactFlowBuilder from "@src/components/builders/reactFlowBuilder/ReactFlowBuilder";
import { Node, NodeProps, NodeTypes, Position } from "reactflow";
import Card from "@src/components/atoms/card";
import { ComponentType, FC } from "react";
import React from "react";

const page: FC = () => {
	let nodes: Node[] = [];

	const label = new ReactFlowBuilder(() => (
		<>
			<Card
				style="node"
				title="OpenAi Node"
				buttonLabel="Send"
				body="Use this node to send a request to OpenAi"
				onClick={() => {
					console.log("clicked");
				}}
			/>
		</>
	))
		.withType("custom_label")
		.withHandle({
			id: "input_1",
			type: "target",
			position: Position.Left,
		})
		.withHandle({
			id: "output_1",
			type: "source",
			position: Position.Right,
		})
		.withNoLabel();

	nodes.push(label.node());

	const types: NodeTypes = {
		custom_label: label.build() as ComponentType<NodeProps>,
	};

	return (
		<>
			<ReactFlowCanvas nodes={nodes} edges={[]} types={types} />
		</>
	);
};

export default page;
