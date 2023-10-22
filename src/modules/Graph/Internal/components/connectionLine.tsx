//path: src\modules\Graph\Internal\components\connectionLine.tsx

import { ConnectionLineComponentProps } from "reactflow";
import { useAnimation } from "framer-motion";
import React from "react";

import { ColouredLine } from "./colouredLine";
import { useNodeHandle } from "../hooks/useNodeHandle";

const ConnectionLine = React.memo((props: ConnectionLineComponentProps) => {
    const fromHandle = useNodeHandle(props.fromHandle?.id || "");
    const controls = useAnimation();

    if (!props.fromHandle?.id) return null;
    if (!fromHandle?.handleData) return null;

    const fromAngle = fromHandle.handleData.angle;
    const fromXy = fromHandle?.handleXy;

    return (
        <>
            <ColouredLine
                controls={controls}
                fromX={fromXy.x}
                fromY={fromXy.y}
                toX={props.toX}
                toY={props.toY}
                showTargetRing={true}
                sourceHandleRotation={fromAngle}
                className={"stroke-night-dark stroke-4 stroke-dash-1-3"}
            />
            <ColouredLine
                controls={controls}
                fromX={fromXy.x}
                fromY={fromXy.y}
                toX={props.toX}
                toY={props.toY}
                sourceHandleRotation={fromAngle}
                className={"stroke-night-light stroke-2.25 stroke-dash-1-3"}
            />
        </>
    );
});

ConnectionLine.displayName = "ConnectionLine";
export { ConnectionLine };
