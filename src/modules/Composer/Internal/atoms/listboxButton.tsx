//path: src\modules\Composer\Internal\atoms\listboxButton.tsx

import { Listbox } from "@headlessui/react";
import { FC } from "react";

import { AtomProps } from "@modules/Composer/types";

export const ListboxButton: FC<AtomProps> = (props) => {
    return (
        <>
            <Listbox.Button className={props.className}>
                {props.children}
            </Listbox.Button>
        </>
    );
};
