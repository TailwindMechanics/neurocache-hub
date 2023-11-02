//path: src\modules\Composer\Internal\atoms\listboxOptions.tsx

import { Listbox } from "@headlessui/react";
import { FC } from "react";

import { AtomProps } from "@modules/Composer/types";

export const ListboxOptions: FC<AtomProps> = (props) => {
    return (
        <>
            <Listbox.Options
                className={`${props.className} absolute z-10 mt-2 w-full`}>
                {props.children}
            </Listbox.Options>
        </>
    );
};
