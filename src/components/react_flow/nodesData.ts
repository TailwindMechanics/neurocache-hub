//path: src\components\react_flow\nodesData.ts

import { Edge, Node } from "reactflow";
import ReactFlowNode from "./reactFlowNode";
// Node<NodeData>
const Edges = [] as Edge[];
const Types = { custom: ReactFlowNode };
const Nodes = [
	{
		id: "1",
		type: "custom",
		position: { x: 0, y: 0 },
		data: { label: "(  Node 1  )" },
	} as Node,
	{
		id: "2",
		type: "custom",
		position: { x: -100, y: 0 },
		data: { label: "(  Node 2  )" },
	} as Node,
	{
		id: "3",
		type: "custom",
		position: { x: 100, y: 0 },
		data: { label: "(  Node 3  )" },
	} as Node,
	{
		id: "4",
		type: "custom",
		position: { x: 0, y: 100 },
		data: { label: "(  Node 4  )" },
	} as Node,
	{
		id: "5",
		type: "custom",
		position: { x: 0, y: -100 },
		data: { label: "(  Node 5  )" },
	} as Node,
];

export default { Edges, Types, Nodes } as const;
