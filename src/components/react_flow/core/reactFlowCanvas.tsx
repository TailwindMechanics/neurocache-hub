//path: src\components\react_flow\core\reactFlowCanvas.tsx

import { BaseNodeProps, NodeConfigItem } from "@src/types/declarations";
import withBaseNode from "@src/components/react_flow/core/baseNode";
import { IsNullOrEmpty, Uid } from "@src/utils/stringUtils";
import CardAtom from "@src/components/atoms/cardAtom";
import nodeConfig from "@src/data/nodeConfig";
import { BehaviorSubject } from "rxjs";
import colors from "@src/data/colors";
import ReactFlow, {
	BackgroundVariant,
	useEdgesState,
	useNodesState,
	Connection,
	Background,
	NodeTypes,
	NodeProps,
	addEdge,
	Node,
	Edge,
	EdgeChange,
	NodeChange,
	applyEdgeChanges,
	applyNodeChanges,
} from "reactflow";
import React, {
	ComponentType,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import StyleReactFlowLogo from "./styleReactFlowLogo";

const initialNodes = [] as Node[];
const initialEdges = [] as Edge[];

const ReactFlowCanvas: React.FC = () => {
	// const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	// const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);
	const [types, setTypes] = useState<NodeTypes>({});
	useEffect(() => {
		init();
	}, []);

	function init() {
		// nodeConfig.forEach((config) => {
		// 	addNode(config);
		// });
	}

	// const onNodesChange = useCallback(
	// 	(changes: NodeChange[]) =>
	// 		setNodes((nodes) => applyNodeChanges(changes, nodes)),
	// 	[],
	// );
	// const onEdgesChange = useCallback(
	// 	(changes: EdgeChange[]) =>
	// 		setEdges((edges) => applyEdgeChanges(changes, edges)),
	// 	[],
	// );
	// const onConnect = useCallback(
	// 	(params: Edge | Connection) =>
	// 		setEdges((edges) => addEdge(params, edges)),
	// 	[],
	// );

	// todo

	const flowSubject = new BehaviorSubject<NodeFlowValue>({
		ids: [],
		payload: "",
	});

	const onNodeOutput = (outputHandleId: string, payload: string) => {
		if (IsNullOrEmpty(outputHandleId)) return;

		console.log(
			`>>> onNodeOutput outputHandleId: ${outputHandleId}, payload: ${payload}`,
		);
		const ids = outputHandleIdToInputHandleIds(outputHandleId);
		if (ids.length === 0) return;

		flowSubject.next({ ids, payload });
	};

	const outputHandleIdToInputHandleIds = (outputHandleId: string) => {
		const connectedEdges = edges.filter(
			(edge) => edge.sourceHandle === outputHandleId,
		);

		const targetIds = connectedEdges
			.map((edge) => edge.targetHandle)
			.filter((id): id is string => id !== null && id !== undefined);

		return targetIds;
	};

	const addNode = (config: NodeConfigItem) => {
		const outputId = `${config.type}_out_${Uid()}`;
		const inputId = `${config.type}_in_${Uid()}`;
		const props: BaseNodeProps = {
			send: (payload: string) => {
				onNodeOutput(outputId, payload);
			},
			title: config.title,
			outputId: outputId,
			body: config.body,
			type: config.type,
			inputId: inputId,
			id: Uid(),
		};

		const nodeComponent = React.createElement(config.component, props);
		const Card = () => (
			<CardAtom
				title={props.title}
				body={props.body}
				renderComponent={nodeComponent}
			/>
		);

		const Built = withBaseNode(Card);
		const node: Node = {
			id: props.id,
			data: {},
			position: { x: 0, y: 0 },
			type: config.type,
		};

		setNodes((currentNodes) => [...currentNodes, node]);
		setTypes((currentTypes) => {
			const newTypes = { ...currentTypes };
			newTypes[config.type] =
				Built as unknown as ComponentType<NodeProps>;
			return newTypes;
		});
	};

	return (
		<div className="h-screen w-screen bg-night">
			<NodeFlowContext.Provider value={flowSubject}>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					// onNodesChange={onNodesChange}
					// onEdgesChange={onEdgesChange}
					// onConnect={onConnect}
					nodeTypes={types}
					elementsSelectable={false}
				>
					<Background
						variant={BackgroundVariant.Dots}
						color={colors.aqua}
					/>
				</ReactFlow>
			</NodeFlowContext.Provider>
		</div>
	);
};

type NodeFlowValue = {
	ids: string[];
	payload: string;
};

const NodeFlowContext = createContext<BehaviorSubject<NodeFlowValue>>(
	new BehaviorSubject({ ids: [], payload: "" } as NodeFlowValue),
);

export const useNodeFlow = (): BehaviorSubject<NodeFlowValue> => {
	return useContext(NodeFlowContext);
};

export default ReactFlowCanvas;
