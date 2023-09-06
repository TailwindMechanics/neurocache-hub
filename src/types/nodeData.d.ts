//path: src\types\nodeData.d.ts

export interface NodeData {
	nodeType: string;
	nodeName: string;
	category: string;
	nodeId: string;
	body: string;
	inputs: PositionId[];
	outputs: PositionId[];
	nodePosition: {x: number, y: number};
}

export type PositionId = {
	id: string;
	position: Position;
};