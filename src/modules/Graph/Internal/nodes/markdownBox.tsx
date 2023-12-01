//path: src\modules\Graph\Internal\nodes\markdownBox.tsx

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { NodeProps, useReactFlow } from "reactflow";
import Markdown from "react-markdown";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { CardPreset, Composer, ProsePreset } from "@modules/Composer";
import { RenderCodeblocks } from "../components/renderCodeblocks";
import { DrawHandle } from "../components/drawHandle";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { IsNullOrEmpty } from "@modules/Utils";
import { CustomNode } from "../../types";

const Card = new Composer("MarkdownCard", CardPreset)
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("max-h-44")
    .withStyle("max-w-60")
    .build();
const Prose = new Composer("MarkdownProse", ProsePreset)
    .withStyle("px-1")
    .build();

const MarkdownBox = React.memo((props: NodeProps) => {
    const [markdownText, setMarkdownText] = useState("## *Markdown*");
    const { nodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();

    useEffect(() => {
        const anyInputIncluded = nodeData.handles.some((input) => {
            return (
                input.type === "target" && nodeFlowValue.ids.includes(input.id)
            );
        });

        if (anyInputIncluded && nodeFlowValue.payload) {
            let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
                ? (nodeFlowValue.payload as string)
                : "Input box";

            setMarkdownText(displayText);
        }
    }, [nodeData.handles, nodeFlowValue]);

    const memoizedMarkdown = useMemo(() => {
        return (
            <Markdown
                components={{
                    code: RenderCodeblocks as any,
                }}>
                {markdownText}
            </Markdown>
        );
    }, [markdownText]);

    return (
        <>
            {nodeData.handles?.map((handle, index) => (
                <DrawHandle
                    key={index}
                    handle={handle}
                    nodeData={nodeData}
                    index={index}
                />
            ))}
            <Card className={NodeSelectionState(props.id, allNodes)}>
                <Prose>{memoizedMarkdown}</Prose>
            </Card>
        </>
    );
});

MarkdownBox.displayName = "MarkdownBox";
export { MarkdownBox };
