//path: src\modules\Composer\Internal\atoms\tab.tsx

import { Tab as HeadlessTab } from "@headlessui/react";
import React, { FC } from "react";

import { AtomProps } from "../../types";

export const Tab: FC<AtomProps> = (props) => {
    return (
        <>
            <HeadlessTab
                className={props.className}
                onClick={() => props.onClick}>
                {props.children}
            </HeadlessTab>
        </>
    );
};
