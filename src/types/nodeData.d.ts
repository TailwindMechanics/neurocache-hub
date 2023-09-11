//path: src\types\nodeData.d.ts

export interface NodeData {
	nodeType: string;
	nodeName: string;
	category: string;
	nodeId: string;
	body: string;
	handles: PositionId[];
	nodePosition: {x: number, y: number};
}

export type PositionId = {
	id: string;
	type: "target" | "source",
	position: Position;
};