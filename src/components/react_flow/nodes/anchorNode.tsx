//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeProps, useEdges, useUpdateNodeInternals } from "reactflow";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import React, { useEffect, useState } from "react";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const AnchorNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const updateNodeInternals = useUpdateNodeInternals();
	const config = props.data as NodeData;
	const edges = useEdges();

	const flowHelper = new ReactFlowHelper();
	const [drawHandles, setDrawHandles] = useState(
		flowHelper.makeHandles("target", config),
	);

	useEffect(() => {
		const anyInputIncluded = drawHandles.some((handle) => {
			return (
				handle.type === "target" &&
				nodeFlowValue.ids.includes(handle.id)
			);
		});

		if (anyInputIncluded) {
			const sourceIds = drawHandles
				.filter((handle) => handle.type === "source")
				.map((handle) => handle.id);
			setNodeFlowValue({
				ids: sourceIds,
				payload: nodeFlowValue.payload,
			});
		}
	}, [nodeFlowValue]);

	useEffect(() => {
		const connectedTarget = edges
			.map((edge) => edge.targetHandle)
			.find((targetHandle) =>
				drawHandles.some((input) => input.id === targetHandle),
			);

		if (connectedTarget) {
			const target = drawHandles.find(
				(input) => input.id === connectedTarget,
			);
			if (target) {
				onInputHandleConnected(target);
			}
		}
	}, [edges]);

	const Component: React.FC<NodeProps> = (props) => (
		<CardAtom title={config.nodeName} body={config.body}>
			<Build className={flowHelper.updateSelectedState(props.id)}>
				{config.nodeName}
			</Build>
		</CardAtom>
	);

	const onOutputHandleConnected = (handle: PositionId) => {
		const inputId = drawHandles.find((input) => input.type === "target");
		if (!inputId) return;

		const input = flowHelper.makeHandle(
			config,
			inputId.type,
			inputId.position,
		);
		const output = flowHelper.makeHandle(
			config,
			handle.type,
			handle.position,
		);

		const newHandles = [input, output] as PositionId[];

		setDrawHandles(newHandles);
		updateNodeInternals(config.nodeId);
	};

	const onInputHandleConnected = (input: PositionId) => {
		if (drawHandles.some((handle) => handle.type === "source")) {
			return;
		}

		const newHandles = flowHelper
			.makeHandles("source", config)
			.filter((prev) => prev.position !== input.position);

		newHandles.push(input);
		setDrawHandles(newHandles);
		updateNodeInternals(config.nodeId);
	};

	return (
		<>
			{drawHandles.map((handle, index) =>
				flowHelper.drawHandle(handle, index, onOutputHandleConnected),
			)}
			<Component {...props}></Component>
		</>
	);
};

export default AnchorNode;
