//path: src\modules\Composer\Internal\atoms\form.tsx

import { FC } from "react";

import { AtomProps } from "../../types";

export const Form: FC<AtomProps> = (props) => {
    return (
        <form
            id={props.id}
            className={props.className}
            onSubmit={(e) => {
                e.preventDefault();
                if (props.onSubmit) {
                    props.onSubmit();
                }
            }}>
            {props.children}
        </form>
    );
};
