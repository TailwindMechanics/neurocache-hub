//path: src\modules\Graph\Internal\core\connectionLine.tsx

import { AnimationDefinition, useAnimation } from "framer-motion";
import { ConnectionLineComponentProps } from "reactflow";
import React, { FC } from "react";

import useNodeHandle from "../hooks/useNodeHandle";
import IComposer from "@modules/Composer";

const animation = {
    strokeDashoffset: [0, 100],
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 10,
    },
} as AnimationDefinition;

export const ConnectionLine: FC<ConnectionLineComponentProps> = (props) => {
    const fromHandle = useNodeHandle(props.fromHandle?.id || "");
    const controls = useAnimation();

    if (!props.fromHandle?.id) return null;
    if (!fromHandle?.handleData) return null;

    const fromAngle = fromHandle.handleData.angle;
    const fromXy = fromHandle?.handleXy;

    const playAnimation = () => {
        controls.start(animation);
    };

    const stopAnimation = () => {
        controls.stop();
    };

    return (
        <>
            <IComposer.Components.Line
                controls={controls}
                fromX={fromXy.x}
                fromY={fromXy.y}
                toX={props.toX}
                toY={props.toY}
                showTargetRing={true}
                sourceHandleRotation={fromAngle}
                className={"stroke-night-dark stroke-4 stroke-dash-1-3"}
            />
            <IComposer.Components.Line
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
};
