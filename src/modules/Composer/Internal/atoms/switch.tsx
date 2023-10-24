//path: src\modules\Composer\Internal\atoms\switch.tsx

import { Switch } from "@headlessui/react";
import { FC } from "react";

import { AtomProps } from "@modules/Composer/types";

export const SwitchAtom: FC<AtomProps> = (props) => {
    const enabledColor = props.enabledColor ?? "bg-aqua-dark";
    const disabledColor = props.disabledColor ?? "bg-night-title";
    const className = props.className ?? "w-[40%]";
    return (
        <Switch
            className={`${className} relative h-auto rounded-full`}
            checked={props.enabled}
            onChange={props.setEnabled}>
            <p className="absolute inset-y-0 left-0 w-full text-center font-bold text-night-dark">
                {props.children}
            </p>
            <div
                className={`flex w-full items-center justify-between rounded-full px-0.5 py-1 ${
                    props.enabled ? enabledColor : disabledColor
                }`}>
                {!props.enabled && <Circle />}
                <span></span>
                {props.enabled && <Circle />}
            </div>
        </Switch>
    );
};

const Circle: FC = () => {
    return (
        <>
            <span
                className={`mx-1 inline-block h-4 w-4 transform rounded-full bg-white`}
            />
        </>
    );
};
