//path: src\modules\Graph\Internal\components\renderCodeblocks.tsx

import React from "react";

import { CodeBlock } from "./codeBlock";

interface CodeProps {
    inline?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}

const RenderCodeblocks = React.memo((props: CodeProps) => {
    const match = /language-(\w+)/.exec(props.className ?? "");
    return !props.inline && match ? (
        <CodeBlock
            language={match[1].toLowerCase()}
            value={String(props.children ?? "").replace(/\n$/, "")}
            {...props}
        />
    ) : (
        <code {...props}>{props.children}</code>
    );
});

RenderCodeblocks.displayName = "RenderCodeblocks";
export { RenderCodeblocks };
