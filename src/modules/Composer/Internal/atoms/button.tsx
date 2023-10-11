//path: src\modules\Composer\Internal\atoms\button.tsx

import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import { AtomProps } from "../../types";

const Button: FC<AtomProps> = (props) => {
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
            whileTap={{
                scale: 0.97,
                transition: { duration: 0.15, ease: "linear" },
            }}>
            {props.children}
        </motion.button>
    );
};

export default Button;
