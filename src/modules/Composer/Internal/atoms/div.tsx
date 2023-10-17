//path: src\modules\Composer\Internal\atoms\div.tsx

import React, { FC } from "react";

import { AtomProps } from "../../types";

export const Div: FC<AtomProps> = (props) => {
    return (
        <>
            <div className={props.className} data-testid="div-atom" {...props}>
                {props.children}
            </div>
        </>
    );
};
