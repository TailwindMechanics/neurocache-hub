//path: src\app\page.tsx

"use client";

import ReactFlowCanvas from "@src/components/react_flow/reactFlowCanvas";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { Node, NodeProps, NodeTypes } from "reactflow";
import { ComponentType, FC } from "react";
import React from "react";

const page: FC = () => {
	const buttonAtom = new ButtonAtom();
	const calm = buttonAtom.Flow.calm;
	const overt = buttonAtom.Flow.overt;
	const alert = buttonAtom.Flow.alert;
	const subtle = buttonAtom.Flow.subtle;

	let nodes: Node[] = [
		calm.node(),
		overt.node(),
		alert.node(),
		subtle.node(),
	];
	const types: NodeTypes = {
		custom_calm: calm.build() as ComponentType<NodeProps>,
		custom_overt: overt.build() as ComponentType<NodeProps>,
		custom_alert: alert.build() as ComponentType<NodeProps>,
		custom_subtle: subtle.build() as ComponentType<NodeProps>,
	};

	return (
		<>
			<ReactFlowCanvas nodes={nodes} edges={[]} types={types} />
		</>
	);
};

export default page;
