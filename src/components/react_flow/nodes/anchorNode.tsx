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

	const edges = useEdges();

	useEffect(() => {
		const inputIds = edges.map((edge) => edge.targetHandle);

		const connectedTargetHandle = inputIds.find((targetHandle) =>
			config.inputs.some((input) => input.id === targetHandle),
		);

		if (connectedTargetHandle) {
			const connectedTarget = config.inputs.find(
				(input) => input.id === connectedTargetHandle,
			);

			if (connectedTarget) {
				onTargetConnected(connectedTarget);
			}
		}
	}, [edges, config.inputs]);

	useEffect(() => {
		if (targetHandle && nodeFlowValue.ids.includes(targetHandle.id)) {
			if (sourceHandle) {
				setNodeFlowValue({
					ids: [sourceHandle.id],
					payload: nodeFlowValue.payload,
				});
			}
		}
	}, [nodeFlowValue, config]);

	const Component: React.FC<NodeProps> = (props) => (
		<CardAtom title={config.nodeName} body={config.body}>
			<Build className={flowHelper.updateSelectedState(props.id)}>
				{config.nodeName}
			</Build>
		</CardAtom>
	);

	const [sourceHandle, setSourceHandle] = useState<PositionId | null>(null);
	const [targetHandle, setTargetHandle] = useState<PositionId | null>(null);
	const updateNodeInternals = useUpdateNodeInternals();

	const onSourceConnected = (handle: PositionId) => {
		setSourceHandle(handle);
		updateNodeInternals(config.nodeId);

		console.log(sourceHandle);
		console.log(targetHandle);
	};

	const onTargetConnected = (handle: PositionId) => {
		setTargetHandle(handle);
		updateNodeInternals(config.nodeId);

		console.log(sourceHandle);
		console.log(targetHandle);
	};

	return (
		<>
			{
				// Outputs
				!sourceHandle ? (
					config.outputs.map((handle, index) => (
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
				) : (
					<Handle
						id={sourceHandle.id}
						position={sourceHandle.position}
						type={"source"}
						style={{
							borderColor: "#00000000",
							background: colors["night-dark"],
						}}
					/>
				)
			}
			{
				// Inputs
				sourceHandle != null ? (
					targetHandle == null ? (
						config.inputs.map((handle, index) => (
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
					) : (
						<Handle
							id={targetHandle.id}
							position={targetHandle.position}
							type={"target"}
							style={{
								borderColor: colors["night-dark"],
								background: "#00000000",
							}}
						/>
					)
				) : null
			}
			<Component {...props}></Component>
		</>
	);
};

export default AnchorNode;
