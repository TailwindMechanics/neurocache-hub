//path: src\modules\Graph\Internal\core\edgeLine.tsx

import { AnimationDefinition, useAnimation } from "framer-motion";
import { EdgeProps } from "reactflow";
import React, { FC } from "react";

import ColouredLine from "../components/colouredLine";
import useNodeHandle from "../hooks/useNodeHandle";

// const animation = {
//     strokeDashoffset: [0, 100],
//     transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "linear",
//         duration: 10,
//     },
// } as AnimationDefinition;

const EdgeLine: FC<EdgeProps> = (props) => {
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

    // const playAnimation = () => {
    //     controls.start(animation);
    // };

    // const stopAnimation = () => {
    //     controls.stop();
    // };

    // useEffect(() => {
    // 	playAnimation();
    // }, [controls]);

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
};

export { EdgeLine };
