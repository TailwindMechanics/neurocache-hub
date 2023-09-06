//path: src\utils\createNode.ts

import { NodeData, PositionId } from "@src/types/nodeData";
import { Uid } from "./stringUtils";

interface CreateNodeProps {
	type: string;
	name: string;
	body: string;
	ins?: PositionId[];
	outs?: PositionId[];
	pos: { x: number; y: number };
}

const createNode = (props: CreateNodeProps) => {
	const uid = Uid();
	return {
		nodeType: props.type,
		nodeName: props.name,
		nodeId: `node_${props.type}_${uid}`,
		body: props.body,
		inputs: props.ins || [],
		outputs: props.outs || [],
		nodePosition: props.pos,
	} as NodeData;
};

export default createNode;
