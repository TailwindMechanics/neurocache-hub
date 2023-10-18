//path: src\modules\Graph\Internal\core\edgeLine.tsx

import { useAnimation } from "framer-motion";
import { EdgeProps } from "reactflow";
import React from "react";

import { ColouredLine } from "../components/colouredLine";
import { useNodeHandle } from "../hooks/useNodeHandle";

const EdgeLine = React.memo((props: EdgeProps) => {
    const fromHandleId = props.sourceHandleId;
    const toHandleId = props.targetHandleId;

    const fromHandle = useNodeHandle(fromHandleId || "");
    const toHandle = useNodeHandle(toHandleId || "");
    const controls = useAnimation();

    if (!fromHandle?.handleData || !toHandle?.handleData) return null;

    const fromAngle = fromHandle.handleData.angle;
    const fromXy = fromHandle.handleXy;

    const toAngle = toHandle.handleData.angle;
    const toXy = toHandle.handleXy;

    return (
        <>
            <ColouredLine
                controls={controls}
                fromX={fromXy.x}
                fromY={fromXy.y}
                toX={toXy.x}
                toY={toXy.y}
                sourceHandleRotation={fromAngle}
                targetHandleRotation={toAngle}
                className={"stroke-night-dark stroke-4 stroke-dash-1-3"}
            />
            <ColouredLine
                controls={controls}
                fromX={fromXy.x}
                fromY={fromXy.y}
                toX={toXy.x}
                toY={toXy.y}
                sourceHandleRotation={fromAngle}
                targetHandleRotation={toAngle}
                className={
                    props.selected
                        ? "stroke-aqua-dark stroke-2.5 stroke-dash-1-3"
                        : "stroke-night-light stroke-2.25 stroke-dash-1-3"
                }
            />
        </>
    );
});

EdgeLine.displayName = "EdgeLine";
export { EdgeLine };
