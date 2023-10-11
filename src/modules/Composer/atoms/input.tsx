//path: src\modules\Composer\atoms\input.tsx

import React, { FC } from "react";

import { AtomProps } from "@shared/types";

const Input: FC<AtomProps> = (props) => {
    return (
        <input
            id={props.id}
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
            className={props.className || ""}
        />
    );
};

export default Input;
