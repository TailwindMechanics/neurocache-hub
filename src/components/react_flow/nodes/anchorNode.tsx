import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import CreateHandles, { CreateHandle } from "../utils/createHandles";
import NodeSelectionState from "../utils/nodeSelectionState";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import { MapOutputIds } from "../utils/mapOutputIds";
import React, { useEffect, useState } from "react";
import DrawHandles from "../utils/drawHandles";
import {
	useUpdateNodeInternals,
	useReactFlow,
	NodeProps,
	useEdges,
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
	const [outputHandle, setOutputHandle] = useState<PositionId | undefined>(
		undefined,
	);
	const [inputHandle, setInputHandle] = useState<PositionId | undefined>(
		undefined,
	);
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const updateNodeInternals = useUpdateNodeInternals();
	const reactFlowInstance = useReactFlow();
	const config = props.data as NodeData;
	const edges = useEdges();
	const [displayedHandles, setDisplayedHandles] = useState(
		CreateHandles("target", config),
	);

	useEffect(() => {
		if (inputHandle && outputHandle) {
			var newHandles = CreateHandles(
				"source",
				config,
				[inputHandle, outputHandle],
				true,
			);
			setDisplayedHandles(newHandles);
		}
	}, [inputHandle, outputHandle]);

	useEffect(() => {
		const edgeHandles = edges
			.flatMap((edge) => [edge.sourceHandle, edge.targetHandle])
			.filter(Boolean);

		let handlesToKeep: PositionId[] = displayedHandles
			.filter((handle) => edgeHandles.includes(handle.id))
			.map((foundHandle) =>
				CreateHandle(config, foundHandle.type, foundHandle.position),
			);

		const type = handlesToKeep.length > 0 ? "source" : "target";
		const skipOthers = handlesToKeep.length > 1;

		if (
			(!inputHandle && type === "target") ||
			(!outputHandle && type === "source")
		) {
			setDisplayedHandles(
				CreateHandles(type, config, handlesToKeep, skipOthers),
			);
		}

		if (type === "source" && outputHandle === null) {
			var newHandles = CreateHandles(
				"source",
				config,
				handlesToKeep,
				skipOthers,
			);
			setOutputHandle(
				newHandles.find((handle) => handle.type === "source"),
			);
		} else if (type === "target" && inputHandle === null) {
			var newHandles = CreateHandles(
				"target",
				config,
				handlesToKeep,
				skipOthers,
			);
			setInputHandle(
				newHandles.find((handle) => handle.type === "target"),
			);
		}

		//

		let nodesToUpdate: string[] = [config.nodeId];
		const allNodesInEdges = edges
			.flatMap((edge) => [edge.target, edge.source])
			.filter(Boolean);
		const uniqueNodesToUpdate = new Set(
			nodesToUpdate.concat(allNodesInEdges),
		);

		nodesToUpdate = Array.from(uniqueNodesToUpdate);
		updateNodeInternals(nodesToUpdate);
	}, [edges]);

	useEffect(() => {
		if (!outputHandle) {
			const outputIds = MapOutputIds(nodeFlowValue.ids, displayedHandles);
			if (outputIds !== null && outputIds.length > 0) {
				setNodeFlowValue({
					ids: outputIds.map((id) => id.id),
					payload: nodeFlowValue.payload,
				});

				setOutputHandle(outputIds[0]);
			}
		}
	}, [nodeFlowValue]);

	return (
		<>
			{displayedHandles.map((handle, index) =>
				DrawHandles(handle, index),
			)}
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
