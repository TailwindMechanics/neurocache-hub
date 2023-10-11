//path: src\modules\hooks\useNodeHandle.tsx

import { Node, XYPosition, useReactFlow } from "reactflow";
import { NodeData } from "@shared/types";

const useNodeHandle = (handleId: string) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    // select all node datas
    const allNodeDatas = allNodes.map((node: Node) => {
        return node.data as NodeData;
    });

    // select the node data whose handles contains this handle id
    const nodeData = allNodeDatas.find((nodeData: NodeData) => {
        return nodeData.handles.some((handle) => {
            return handle.id === handleId;
        });
    });

    // select the parent node with this handleid
    if (!nodeData) return null;
    const parentNode = allNodes.find((node: Node) => {
        return node.id === nodeData.nodeId;
    });
    if (!parentNode) return null;
    if (!parentNode.width || !parentNode.height) return null;

    // Get the parent node data
    const parentData = parentNode.data as NodeData;
    const parentPosition = parentNode.position as XYPosition;

    // Get the dimensions of the parent node
    const parentWidth = parentNode.width;
    const parentHeight = parentNode.height;

    // select this handle from the parent node
    const handleData = parentData.handles.find((handle) => {
        return handle.id === handleId;
    });
    if (!handleData) return null;

    // calculate the xy position of this handle
    const handleXy = {
        x: parentPosition.x + (parentWidth * handleData.offset.x) / 100,
        y: parentPosition.y + (parentHeight * handleData.offset.y) / 100,
    };

    return { handleData, handleXy };
};

export default useNodeHandle;
