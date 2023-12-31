//path: src\modules\Composer\Internal\atoms\tabList.tsx

import { Tab as HeadlessTab } from "@headlessui/react";
import React, { FC } from "react";

import { AtomProps } from "../../types";

export const TabList: FC<AtomProps> = (props) => {
    return (
        <>
            <HeadlessTab.List className={props.className}>
                {props.children}
            </HeadlessTab.List>
        </>
    );
};
