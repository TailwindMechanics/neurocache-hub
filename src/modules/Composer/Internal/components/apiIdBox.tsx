//path: src\modules\Composer\Internal\components\apiIdBox.tsx

import { FC } from "react";

interface ApiIdBoxProps {
    id: string;
}

export const ApiIdBox: FC<ApiIdBoxProps> = (props) => {
    return (
        <div className="rounded border-2 border-night-light bg-night-dark pb-2 pt-1 text-center font-bold text-aqua-dark">
            <p>Api Id</p>
            <p className="font-semi-bold select-all italic text-night-body">
                {props.id}
            </p>
        </div>
    );
};
