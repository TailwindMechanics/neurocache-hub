//path: src\modules\Composer\atoms\form.tsx

import { FC } from "react";

import { AtomProps } from "@shared/types";

const Form: FC<AtomProps> = (props) => {
    return (
        <form
            id={props.id}
            className={props.className}
            onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
};

export default Form;
