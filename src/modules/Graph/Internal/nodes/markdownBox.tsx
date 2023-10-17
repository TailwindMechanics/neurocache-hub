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

const reflect_nodeData = {
    nodeType: "markdown_box",
    nodeName: "Markdown",
    category: "UI",
    nodeId: "node_markdown_box_50e9b8e9a7f1d8c7c7f7",
    body: "This node displays input markdown.",
    nodePosition: { x: 50, y: 0 },
    handles: [
        {
            id: "in_markdown_box_50e9b8e9a7f1d8c7c7f7",
            type: "target",
            offset: { x: -0.33, y: 40 },
            angle: -90,
        },
        {
            id: "out_markdown_box_50e9b8e9a7f1d8c7c7f7",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodeComponent: MarkdownBox,
} as CustomNode;

MarkdownBox.displayName = "MarkdownBox";
export { MarkdownBox };
