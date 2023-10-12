//path: src\modules\Graph\Internal\components\markdownBox.tsx

import React, { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import { RenderCodeblocks } from "../utils/renderCodeblocks";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { CustomNode } from "@modules/Graph/types";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import IUtils from "@modules/Utils";

const Card = new IComposer.Builder(IComposer.Components.Card)
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("max-h-44")
    .withStyle("max-w-60")
    .build();

const Prose = new IComposer.Builder(IComposer.Components.Prose)
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
            let displayText = !IUtils.IsNullOrEmpty(nodeFlowValue.payload)
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

const nodeData = {
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

CustomNodesRepo.instance.addNode(nodeData);

export default React.memo(MarkdownBox);
