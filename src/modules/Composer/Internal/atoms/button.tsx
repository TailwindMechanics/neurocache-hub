//path: src\modules\Composer\Internal\atoms\button.tsx

import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { AtomProps } from "../../types";

export const Button: FC<AtomProps> = (props) => {
    const motionSettings = props.motion ?? {
        whileTap: {
            scale: 0.97,
            transition: { duration: 0.15, ease: "linear" },
        },
    };
    const controls = useAnimation();
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <motion.button
            onClick={props.onClick}
            className={props.className}
            animate={controls}
            whileTap={motionSettings.whileTap}>
            {props.children}
        </motion.button>
    );
};
