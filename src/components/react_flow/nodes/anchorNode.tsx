//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import { NodeData, PositionId } from "@src/types/nodeData";
import {
	Connection,
	Edge,
	Handle,
	NodeProps,
	OnConnect,
	Position,
	addEdge,
	useUpdateNodeInternals,
} from "reactflow";
import React, { useCallback, useEffect, useRef, useState } from "react";
import colors from "@src/data/colors";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const flowHelper = new ReactFlowHelper();
	const config = props.data as NodeData;

	useEffect(() => {
		const anyInputIncluded = config.inputs.some((input) =>
			nodeFlowValue.ids.includes(input.id),
		);

		if (anyInputIncluded) {
			setNodeFlowValue({
				ids: config.outputs.map((output) => output.id),
				payload: nodeFlowValue.payload,
			});
		}
	}, [nodeFlowValue, config]);

	const Component: React.FC<NodeProps> = (props) => (
		<CardAtom title={config.nodeName} body={config.body}>
			<Build className={flowHelper.updateSelectedState(props.id)}>
				{config.nodeName}
			</Build>
		</CardAtom>
	);

	const [sourceHandle, setSourceHandle] = useState(null);
	const [targetHandle, setTargetHandle] = useState(null);
	const updateNodeInternals = useUpdateNodeInternals();

	const onSourceConnected = (handle: PositionId) => {
		setSourceHandle(handle.position);
		updateNodeInternals(config.nodeId);
		console.log(handle);
	};

	const onTargetConnected = (handle: PositionId) => {
		setTargetHandle(handle.position);
		updateNodeInternals(config.nodeId);
		console.log(handle);
	};

	return (
		<>
			{!sourceHandle
				? config.outputs.map((handle, index) => (
						<Handle
							onConnect={(connection) => {
								onSourceConnected(handle);
							}}
							id={handle.id}
							position={handle.position}
							key={index}
							type={"source"}
							style={{
								borderColor: "#00000000",
								background: colors["night-dark"],
							}}
						/>
				  ))
				: null}
			{sourceHandle
				? config.inputs.map((handle, index) => (
						<Handle
							id={handle.id}
							position={handle.position}
							key={index}
							type={"target"}
							style={{
								borderColor: colors["night-dark"],
								background: "#00000000",
							}}
						/>
				  ))
				: null}
			<Component {...props}></Component>
		</>
	);
};

export default OpenAiNode;
