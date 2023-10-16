//path: src\modules\Graph\Internal\nodes\markdownBox.tsx

import React, { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";
import { NodeProps } from "reactflow";

import { CardPreset, Composer, ProsePreset } from "@modules/Composer";
import { RenderCodeblocks } from "../components/renderCodeblocks";
import NodeSelectionState from "../components/nodeSelectionState";
import { useNodeFlow } from "../hooks/useNodeFlow";
import DrawHandle from "../components/drawHandle";
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

const MarkdownBox: React.FC<NodeProps> = (props: NodeProps) => {
    const [markdownText, setMarkdownText] = useState("## *Markdown*");
    const { nodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;

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
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={NodeSelectionState(props.id)}>
                <Prose>{memoizedMarkdown}</Prose>
            </Card>
        </>
    );
};

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

export default React.memo(MarkdownBox);
