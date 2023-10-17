//path: src\modules\Composer\Internal\atoms\comboInput.tsx

import { Combobox } from "@headlessui/react";
import React, { FC } from "react";

import { AtomProps } from "../../types";

export const ComboInput: FC<AtomProps> = (props) => {
    return (
        <Combobox.Input
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
            className={props.className || ""}
        />
    );
};
