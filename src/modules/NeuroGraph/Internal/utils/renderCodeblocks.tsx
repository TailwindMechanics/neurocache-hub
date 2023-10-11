//path: src\modules\NeuroGraph\utils\renderCodeblocks.tsx

import React from "react";

import Components from "@client/components";

interface CodeProps {
    inline?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}

export const RenderCodeblocks: React.FC<CodeProps> = (props) => {
    const match = /language-(\w+)/.exec(props.className ?? "");
    return !props.inline && match ? (
        <Components.CodeBlock
            language={match[1].toLowerCase()}
            value={String(props.children ?? "").replace(/\n$/, "")}
            {...props}
        />
    ) : (
        <code {...props}>{props.children}</code>
    );
};
