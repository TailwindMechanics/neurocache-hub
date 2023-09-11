//path: src\components\react_flow\nodes\anchorNode.tsx

import { Handle, NodeProps, useEdges, useUpdateNodeInternals } from "reactflow";
import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import React, { useEffect, useState } from "react";
import colors from "@src/data/colors";

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
	const flowHelper = new ReactFlowHelper();
	const config = props.data as NodeData;
	const updateNodeInternals = useUpdateNodeInternals();
	const targetHandles = config.handles.filter(
		(handle) => handle.type === "target",
	);
	const [drawHandles, setDrawHandles] = useState(targetHandles);
	const edges = useEdges();

	useEffect(() => {
		const inputIds = edges.map((edge) => edge.targetHandle);

		const connectedTargetHandle = inputIds.find((targetHandle) =>
			config.handles.some((input) => input.id === targetHandle),
		);

		if (connectedTargetHandle) {
			const connectedTarget = config.handles.find(
				(input) => input.id === connectedTargetHandle,
			);

			if (connectedTarget) {
				onInputHandleConnected(connectedTarget);
			}
		}
	}, [edges, config.handles]);

	const Component: React.FC<NodeProps> = (props) => (
		<CardAtom title={config.nodeName} body={config.body}>
			<Build className={flowHelper.updateSelectedState(props.id)}>
				{config.nodeName}
			</Build>
		</CardAtom>
	);

	const onOutputHandleConnected = (handle: PositionId) => {
		// setOutputHandle(handle);
		updateNodeInternals(config.nodeId);
	};

	const onInputHandleConnected = (handle: PositionId) => {
		// setInputHandle(handle);
		updateNodeInternals(config.nodeId);
	};

	return (
		<>
			{drawHandles.map((handle, index) =>
				drawHandle(handle, index, onOutputHandleConnected),
			)}
			<Component {...props}></Component>
		</>
	);
};

function drawHandle(
	handle: PositionId,
	keyIndex: number,
	onOutputConnected: (handle: PositionId) => void,
) {
	return (
		<Handle
			onConnect={() => {
				if (handle.type === "source" && onOutputConnected) {
					onOutputConnected(handle);
				}
			}}
			id={handle.id}
			position={handle.position}
			key={keyIndex}
			type={handle.type}
			style={{
				borderColor:
					handle.type == "target"
						? colors["night-dark"]
						: "#00000000",
				background:
					handle.type == "target"
						? "#00000000"
						: colors["night-dark"],
			}}
		/>
	);
}

export default AnchorNode;
