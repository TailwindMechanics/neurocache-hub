//path: src\modules\Graph\Internal\hooks\useNodeHandle.tsx

import { Node, XYPosition, useReactFlow } from "reactflow";

import { CustomNode } from "../../types";

export const useNodeHandle = (handleId: string) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    const allNodeDatas = allNodes.map((node: Node) => {
        return node.data as CustomNode;
    });

    const nodeData = allNodeDatas.find((nodeData: CustomNode) => {
        return nodeData.handles.some((handle) => {
            return handle.id === handleId;
        });
    });

    if (!nodeData) return null;
    const parentNode = allNodes.find((node: Node) => {
        return node.id === nodeData.nodeId;
    });
    if (!parentNode) return null;
    if (!parentNode.width || !parentNode.height) return null;

    const parentData = parentNode.data as CustomNode;
    const parentPosition = parentNode.position as XYPosition;

    const parentWidth = parentNode.width;
    const parentHeight = parentNode.height;

    const handleData = parentData.handles.find((handle) => {
        return handle.id === handleId;
    });
    if (!handleData) return null;

    const handleXy = {
        x: parentPosition.x + (parentWidth * handleData.offset.x) / 100,
        y: parentPosition.y + (parentHeight * handleData.offset.y) / 100,
    };

    return { handleData, handleXy };
};
