//path: src\modules\Graph\Internal\components\drawHandle.tsx

"use client";

import { Handle, Position, XYPosition, useReactFlow } from "reactflow";

import { PositionId, CustomNode } from "../../types";
import React from "react";

interface DrawHandleProps {
    handle: PositionId;
    nodeData: CustomNode;
    index: number;
}

const DrawHandle = (props: DrawHandleProps) => {
    const reactFlowInstance = useReactFlow();
    const parentNode = reactFlowInstance?.getNode(props.nodeData.nodeId);
    const parentSize: XYPosition = {
        x: parentNode?.width as number,
        y: parentNode?.height as number,
    };
    const handleOffsetY = (props.handle.offset.y / 100) * parentSize.y;
    const handleOffsetX = ((props.handle.offset.x - 50) / 100) * parentSize.x;

    return (
        <Handle
            id={props.handle.id}
            position={Position.Top}
            key={props.index}
            type={props.handle.type}
            style={{
                border: "#00000000",
                background: "#00000000",
                marginTop: `${handleOffsetY}px`,
                marginLeft: `${handleOffsetX}px`,
            }}
            isConnectable={true}
            isConnectableStart={true}
            isConnectableEnd={true}>
            <svg
                style={{
                    marginTop: props.handle.viewMargin?.top || 1,
                    marginRight: props.handle.viewMargin?.right || 0,
                    marginBottom: props.handle.viewMargin?.bottom || 0,
                    marginLeft: props.handle.viewMargin?.left || 0,
                }}
                className={`text-night-dark`}
                viewBox="0 0 100 100"
                stroke="currentColor"
                fill="currentColor"
                pointerEvents={"none"}>
                <circle cx="50" cy="50" r="50" />
            </svg>
        </Handle>
    );
};

DrawHandle.displayName = "DrawHandle";
export { DrawHandle };
