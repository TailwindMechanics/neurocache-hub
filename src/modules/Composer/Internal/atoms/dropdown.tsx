//path: src\modules\Composer\Internal\atoms\dropdown.tsx

import { FC, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

import { AtomProps } from "@modules/Composer/types";
import { ListboxOptions } from "./listboxOptions";
import { ListboxButton } from "./listboxButton";
import { ListboxOption } from "./listboxOption";
import { Composer } from "@modules/Composer";

const ListButton = new Composer("ListboxButton", ListboxButton)
    .withStyle("hover:bg-aqua-dark")
    .withStyle("border-night-dark")
    .withStyle("text-night-dark")
    .withStyle("bg-night-title")
    .withStyle("font-bold")
    .withStyle("text-xl")
    .withStyle("border")
    .withStyle("w-full")
    .withStyle("block")
    .withStyle("py-1")
    .withRoundedElement()
    .build();

const options = ["No options"];
export const DropdownAtom: FC<AtomProps> = (props) => {
    const [selected, setSelected] = useState(props.value ?? options[0]);

    useEffect(() => {
        setSelected(props.value ?? options[0]);
    }, [props.value]);

    const handleSelect = (value: string) => {
        setSelected(value);
        props.onSelected?.(value);
    };

    return (
        <Listbox value={selected} onChange={handleSelect}>
            {({ open }) => (
                <>
                    <div className={`relative ${props.className}`}>
                        <ListButton className="lowercase">
                            {selected}
                        </ListButton>
                        {open && (
                            <ListboxOptions className="rounded-lg border border-night-light bg-night-black">
                                {options.map((option) => (
                                    <ListboxOption
                                        className="rounded-md bg-none p-1.5 font-bold text-night-title hover:bg-aqua-dark hover:text-night-black"
                                        key={option}
                                        value={option}></ListboxOption>
                                ))}
                            </ListboxOptions>
                        )}
                    </div>
                </>
            )}
        </Listbox>
    );
};
