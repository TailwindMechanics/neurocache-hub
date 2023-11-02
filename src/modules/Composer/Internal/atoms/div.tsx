//path: src\modules\Composer\Internal\atoms\div.tsx

import React, { FC } from "react";

import { AtomProps } from "../../types";

export const Div: FC<AtomProps> = (props) => {
    const { children, className, ...otherProps } = props;
    return (
        <div className={className} data-testid="div-atom" {...otherProps}>
            {children}
        </div>
    );
};
