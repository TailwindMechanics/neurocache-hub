//path: src\modules\Graph\Internal\nodes\textBox.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useMemo, useState } from "react";
import Markdown from "react-markdown";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { CardPreset, Composer, ProsePreset } from "@modules/Composer";
import { RenderCodeblocks } from "../components/renderCodeblocks";
import { onDoubleClick } from "../utils/nodeInspector";
import { DrawHandle } from "../components/drawHandle";
import { useDrawer } from "@modules/Drawer";
import { CustomNode } from "../../types";

const Card = new Composer("TextBoxCard", CardPreset)
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("max-h-44")
    .withStyle("max-w-60")
    .build();
const Prose = new Composer("TextBoxProse", ProsePreset)
    .withStyle("px-1")
    .build();

const TextBox = React.memo((props: NodeProps) => {
    const [markdownText, setMarkdownText] = useState("## *Text*");
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();
    const { openDrawer } = useDrawer();

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
            <Card
                onDoubleClick={() => onDoubleClick(nodeData, openDrawer)}
                className={NodeSelectionState(props.id, allNodes)}>
                <Prose>{memoizedMarkdown}</Prose>
            </Card>
        </>
    );
});

TextBox.displayName = "TextBox";
export { TextBox };
