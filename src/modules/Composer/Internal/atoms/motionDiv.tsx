//path: src\modules\Composer\Internal\atoms\motionDiv.tsx

import React, { FC } from "react";

import { AtomProps } from "../../types";
import { motion } from "framer-motion";

export const MotionDiv: FC<AtomProps> = (props) => {
    return (
        <>
            <motion.div
                className={props.className}
                data-testid="div-atom"
                {...props.motion}
                {...props}>
                {props.children}
            </motion.div>
        </>
    );
};
