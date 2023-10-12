//path: src\modules\Graph\Internal\utils\nodeUtils.ts

import { Node } from "reactflow";

import { CustomNode, PositionId } from "../../types";
import IUtils from "@modules/Utils";

interface CreateNodeProps {
    type: string;
    name: string;
    body: string;
    handles?: PositionId[];
    pos: { x: number; y: number };
}

export const deselectAllNodes = (nodes: Node[]) => {
    return nodes.map((node) => ({
        ...node,
        selected: false,
    }));
};

export const createNode = (props: CreateNodeProps) => {
    const uid = IUtils.Uid();
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
    } as CustomNode;
};
