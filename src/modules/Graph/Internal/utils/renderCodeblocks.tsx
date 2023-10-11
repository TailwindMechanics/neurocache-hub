//path: src\modules\Graph\Internal\utils\renderCodeblocks.tsx

import React from "react";

import IComposer from "@modules/Composer";

interface CodeProps {
    inline?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}

export const RenderCodeblocks: React.FC<CodeProps> = (props) => {
    const match = /language-(\w+)/.exec(props.className ?? "");
    return !props.inline && match ? (
        <IComposer.Components.CodeBlock
            language={match[1].toLowerCase()}
            value={String(props.children ?? "").replace(/\n$/, "")}
            {...props}
        />
    ) : (
        <code {...props}>{props.children}</code>
    );
};
