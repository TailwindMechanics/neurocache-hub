//path: src\modules\Graph\Internal\components\textBlockFormatter.tsx

import React from "react";

import { IsNullOrEmpty } from "@modules/Utils";

type TextBlockFormatterProps = {
    separator: string | RegExp;
    text: string;
    itemClassName?: string;
    className?: string;
};

const TextBlockFormatter = React.memo((props: TextBlockFormatterProps) => {
    const separator =
        props.separator instanceof RegExp
            ? props.separator
            : new RegExp(props.separator, "g");

    const textWithSeparator = props.text.replace(
        separator,
        (match) => match + "|||",
    );

    const lines = textWithSeparator
        .split("|||")
        .filter((line) => !IsNullOrEmpty(line.trim()));

    return (
        <div className={props.className}>
            {lines.map((line, index) => (
                <div className={props.itemClassName} key={index}>
                    {line}
                </div>
            ))}
        </div>
    );
});

TextBlockFormatter.displayName = "TextBlockFormatter";
export { TextBlockFormatter };
