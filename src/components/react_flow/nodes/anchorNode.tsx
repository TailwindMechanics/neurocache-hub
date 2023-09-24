//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import React, { useEffect, useState } from "react";
import { UpdateNodes } from "../utils/nodeUtils";
import MapOutputIds from "../utils/mapOutputIds";
import DrawHandles from "../utils/drawHandles";
import {
	GetConnectedHandles,
	GetConnectedHandle,
	CreateHandles,
	UpdateHandles,
} from "../utils/handleUtils";
import {
	useUpdateNodeInternals,
	useReactFlow,
	NodeProps,
	useEdges,
	Edge,
} from "reactflow";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const AnchorNode: React.FC<NodeProps> = (props: NodeProps) => {
	const config = props.data as NodeData;
	const allInputHandles = CreateHandles("target", config);
	const allOutputHandles = CreateHandles("source", config);
	const [displayHandles, setDisplayHandles] = useState(allInputHandles);
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const updateNodeInternals = useUpdateNodeInternals();
	const reactFlowInstance = useReactFlow();
	const edges = useEdges();

	useEffect(() => {
		updateConnectedHandles(edges);
	}, [edges]);

	useEffect(() => {
		updateNodeFlowOutputs();
	}, [nodeFlowValue, displayHandles]);

	const updateConnectedHandles = (edges: Edge[]) => {
		const connected = GetConnectedHandles(edges);
		if (connected) {
			let handles = setInput(allInputHandles, connected as string[]);
			handles = setOutput(handles, connected as string[]);
			setDisplayHandles(handles);
			UpdateNodes(config, edges, updateNodeInternals);
		}
	};

	const updateNodeFlowOutputs = () => {
		const outputs = MapOutputIds(nodeFlowValue.ids, displayHandles);
		if (outputs && outputs.length > 0) {
			setNodeFlowValue({
				ids: outputs,
				payload: nodeFlowValue.payload,
			});
		}
	};

	const setInput = (handles: PositionId[], connected: string[]) => {
		{
			const inputHandle = GetConnectedHandle(
				allInputHandles,
				connected,
				"target",
			);

			return inputHandle
				? UpdateHandles(config, allOutputHandles, [inputHandle])
				: handles;
		}
	};

	const setOutput = (handles: PositionId[], connected: string[]) => {
		{
			const inputHandle = handles.find(
				(handle) => handle.type === "target",
			);

			const outputHandle = GetConnectedHandle(
				displayHandles,
				connected,
				"source",
			);

			return inputHandle && outputHandle
				? [inputHandle, outputHandle]
				: handles;
		}
	};

	return (
		<>
			{displayHandles.map(DrawHandles)}
			<CardAtom title={config.nodeName} body={config.body}>
				<Build
					className={NodeSelectionState(reactFlowInstance, props.id)}
				>
					{config.nodeName}
				</Build>
			</CardAtom>
		</>
	);
};

export default AnchorNode;
