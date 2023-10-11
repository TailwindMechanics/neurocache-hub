//path: src\modules\Composer\textBlockFormatter.tsx

import { IsNullOrEmpty } from "@shared/utils";
import React from "react";

type TextBlockFormatterProps = {
    separator: string | RegExp;
    text: string;
    itemClassName?: string;
    className?: string;
};

const TextBlockFormatter: React.FC<TextBlockFormatterProps> = (props) => {
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
};

export default React.memo(TextBlockFormatter);
