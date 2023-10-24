//path: src\modules\Composer\Internal\atoms\motionDiv.tsx

import React, { FC, MouseEventHandler } from "react";

import { AtomProps } from "../../types";
import { motion } from "framer-motion";

export const MotionDiv: FC<AtomProps> = (props) => {
    return (
        <>
            <motion.div
                onMouseDown={props.onMouseDown}
                className={props.className}
                data-testid="div-atom"
                {...props.motion}
                {...props}>
                {props.children}
            </motion.div>
        </>
    );
};
