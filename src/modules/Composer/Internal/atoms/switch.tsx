//path: src\modules\Composer\Internal\atoms\switch.tsx

import { Switch } from "@headlessui/react";
import { FC } from "react";

import { AtomProps } from "@modules/Composer/types";

export const SwitchAtom: FC<AtomProps> = (props) => {
    const enabledColor = props.enabledColor ?? "bg-aqua-dark";
    const disabledColor = props.disabledColor ?? "bg-night-title";

    return (
        <Switch
            className={`flex h-auto w-[40%] rounded-full ${
                props.enabled ? enabledColor : disabledColor
            }`}
            checked={props.enabled}
            onChange={props.setEnabled}>
            {!props.enabled ? (
                <div className="flex w-full items-center justify-start">
                    <Circle />
                    <p className="flex-1 rounded-full px-2 text-center font-bold text-night-dark">
                        inactive
                    </p>
                </div>
            ) : (
                <div className="flex w-full items-center justify-end">
                    <p className="flex-1 rounded-full px-2 text-center font-bold text-night-dark">
                        active
                    </p>
                    <Circle />
                </div>
            )}
        </Switch>
    );
};

const Circle: FC = () => {
    return (
        <>
            <span
                className={`absolute mx-1 inline-block h-4 w-4 transform rounded-full bg-white`}
            />
        </>
    );
};
