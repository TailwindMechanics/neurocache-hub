//path: src\modules\Graph\Internal\components\codeBlock.tsx

import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import React from "react";

import { CodeBlockProps } from "../../../Composer/types";

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
    const [isCopied, setIsCopied] = useState(false);

    const onClick = () => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };
    return (
        <div className="rounded border border-night-light bg-night-dark">
            <div className="-my-0.25 flex justify-between  bg-night-light px-2 text-aqua">
                <div>{language}</div>
                <button onClick={onClick}>
                    {isCopied ? "copied..." : "copy"}
                </button>
            </div>
            <SyntaxHighlighter
                customStyle={{
                    backgroundColor: "#00000000",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                }}
                language={language ?? "text"}
                style={monokaiSublime}>
                {value}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
