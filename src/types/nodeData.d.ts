//path: src\types\nodeData.d.ts

import { Position, XYPosition } from "reactflow";

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
	offset: {x: string, y: string}
	angle: number;
};