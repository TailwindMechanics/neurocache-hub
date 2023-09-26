//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import React, { useEffect, useState } from "react";
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
	const inputHandles = CreateHandles("target", config);
	const outputHandles = CreateHandles("source", config);
	const [displayHandles, setDisplayHandles] = useState<PositionId[]>([]);
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
		const connected = GetConnectedHandles(edges) as string[] | undefined;
		if (!connected || connected.length === 0) {
			doPhase1();
			return;
		}

		const input = GetConnectedHandle(inputHandles, connected, "target");
		if (!input) {
			doPhase1();
			return;
		}

		if (connected.length === 1) {
			doPhase2(input);
			return;
		}

		const output = GetConnectedHandle(displayHandles, connected, "source");
		if (!output) {
			doPhase2(input);
			return;
		}

		doPhase3(input, output);
	};

	const doPhase1 = () => {
		setDisplayHandles(inputHandles);
		const nodes = reactFlowInstance.getNodes();
		updateNodeInternals(nodes.map((node) => node.id));
	};

	const doPhase2 = (input: PositionId) => {
		const handles = UpdateHandles(config, outputHandles, [input]);
		setDisplayHandles(handles);
		const nodes = reactFlowInstance.getNodes();
		updateNodeInternals(nodes.map((node) => node.id));
	};

	const doPhase3 = (input: PositionId, output: PositionId) => {
		const handles = [input, output];
		setDisplayHandles(handles);
		const nodes = reactFlowInstance.getNodes();
		updateNodeInternals(nodes.map((node) => node.id));
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
