//path: src\modules\NeuroGraph\nodes\markdownBox.tsx

import React, { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";
import { NodeProps } from "reactflow";

import { RenderCodeblocks, NodeSelectionState, DrawHandle } from "..";
import { IsNullOrEmpty } from "@shared/utils";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Card = new Components.Builder(Components.Card)
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("max-h-44")
    .withStyle("max-w-60")
    .build();

const Prose = new Components.Builder(Components.Prose)
    .withStyle("px-1")
    .build();

const MarkdownBox: React.FC<NodeProps> = (props: NodeProps) => {
    const [markdownText, setMarkdownText] = useState("## *Markdown*");
    const { nodeFlowValue } = Use.NodeFlow();
    const nodeData = props.data as NodeData;

    useEffect(() => {
        const anyInputIncluded = nodeData.handles.some((input) => {
            return (
                input.type === "target" && nodeFlowValue.ids.includes(input.id)
            );
        });

        if (anyInputIncluded) {
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

export default React.memo(MarkdownBox);
