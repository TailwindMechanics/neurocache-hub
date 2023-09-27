//path: src\components\react_flow\utils\nodeUtils.ts

import { NodeData, PositionId } from "@src/types/nodeData";
import { Uid } from "../../../utils/stringUtils";

interface CreateNodeProps {
	type: string;
	name: string;
	body: string;
	handles?: PositionId[];
	pos: { x: number; y: number };
}

export const createNode = (props: CreateNodeProps) => {
	const uid = Uid();
	const handles = props.handles
		? props.handles.map((handle, index) => {
				return {
					...handle,
					id: `handle_${index}_${handle.type}_${props.type}_${uid}`,
				};
		  })
		: ([] as PositionId[]);

	return {
		nodeType: props.type,
		nodeName: props.name,
		nodeId: `node_${props.type}_${uid}`,
		body: props.body,
		handles: handles,
		nodePosition: props.pos,
	} as NodeData;
};
