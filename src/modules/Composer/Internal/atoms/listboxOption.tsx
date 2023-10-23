//path: src\modules\Composer\Internal\atoms\listboxOption.tsx

import { Listbox } from "@headlessui/react";
import { FC } from "react";

import { AtomProps } from "@modules/Composer/types";

export const ListboxOption: FC<AtomProps> = (props) => {
    return (
        <>
            <Listbox.Option key={props.value} value={props.value}>
                <div className={props.className}>{props.value}</div>
                {props.children}
            </Listbox.Option>
        </>
    );
};
