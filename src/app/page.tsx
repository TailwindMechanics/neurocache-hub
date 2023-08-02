//path: src\app\page.tsx

"use client";

import ReactFlowCanvas from "@src/components/react_flow/reactFlowCanvas";

import ReactFlowBuilder from "@src/components/builders/reactFlowBuilder/ReactFlowBuilder";
import { Node, NodeProps, NodeTypes, Position } from "reactflow";
import CardAtom from "@src/components/atoms/cardAtom";
import { ComponentType, FC } from "react";
import React from "react";
import BaseNode from "@src/components/react_flow/baseNode";

const page: FC = () => {
	let nodes: Node[] = [];

	const FlowNode = new BaseNode({
		title: "Open AI Node",
		body: "Use this node to make rest calls to the open ai api.",
		type: "openai_node",
		handles: [
			{
				id: "a",
				type: "target",
				position: Position.Top,
			},
			{
				id: "b",
				type: "source",
				position: Position.Bottom,
			},
		],
	});

	nodes.push(FlowNode.node());

	const types: NodeTypes = {
		openai_node: FlowNode.build() as ComponentType<NodeProps>,
	};

	return (
		<>
			<ReactFlowCanvas nodes={nodes} edges={[]} types={types} />
		</>
	);
};

export default page;
