//path: src\modules\Composer\Internal\atoms\input.tsx

import React, { FC } from "react";

import { AtomProps } from "../../types";

export const Input: FC<AtomProps> = (props) => {
    return (
        <input
            id={props.id}
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
            className={props.className || ""}
            placeholder={props.placeholder}
        />
    );
};
