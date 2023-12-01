//path: src\modules\Composer\Internal\components\apiIdBox.tsx

import { FC } from "react";

interface ApiIdBoxProps {
    id: string;
    className?: string;
}

export const ApiIdBox: FC<ApiIdBoxProps> = (props) => {
    return (
        <div
            className={`${props.className} rounded border-2 border-night-light bg-night-black pb-2 pt-1 text-center font-bold leading-snug text-aqua-dark`}>
            <p>Api Id</p>
            <p className="font-semi-bold select-all italic text-night-body">
                {props.id}
            </p>
        </div>
    );
};
