//path: src\modules\OpenAi\Internal\nodes\openAiNode.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect } from "react";

import { ContentPreset, CardPreset, Composer } from "@modules/Composer";
import { NodeSelection, UseNodeFlow, DrawHandle } from "@modules/Graph";
import { CustomNode } from "@modules/Graph/types";
import { useOpenAI } from "../hooks/useOpenAI";

const Content = new Composer("OpenAiNodeContent", ContentPreset)
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const OpenAiNode = React.memo((props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = UseNodeFlow();
    const nodeData = props.data as CustomNode;
    const openAI = useOpenAI();
    const allNodes = useReactFlow().getNodes();

    useEffect(() => {
        const fetchData = async () => {
            const anyInputIncluded = nodeData.handles.some((input) => {
                return (
                    input.type === "target" &&
                    nodeFlowValue.ids.includes(input.id)
                );
            });

            if (anyInputIncluded) {
                const messages = [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: nodeFlowValue.payload },
                ];

                const reply = await openAI.chat(messages);
                const sourceIds = nodeData.handles
                    .filter((handle) => handle.type === "source")
                    .map((handle) => handle.id);
                setNodeFlowValue({
                    ids: sourceIds,
                    payload: reply,
                });
            }
        };

        fetchData();
    }, [nodeData.handles, nodeFlowValue, openAI, setNodeFlowValue]);

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
            <CardPreset className={NodeSelection(props.id, allNodes)}>
                <Content>{nodeData.nodeName}</Content>
            </CardPreset>
        </>
    );
});

const reflect_nodeData = {
    nodeType: "open_ai",
    nodeName: "Gpt-4",
    category: "OpenAi",
    nodeId: "node_open_ai_60e9b8e9a7f1d8c7c7f8",
    body: "This node makes an API request to OpenAI.",
    handles: [
        {
            id: "in_open_ai_60e9b8e9a7f1d8c7c7f8",
            type: "target",
            offset: { x: -0.33, y: 40 },
            angle: -90,
        },
        {
            id: "out_open_ai_60e9b8e9a7f1d8c7c7f8",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 100, y: 0 },
} as CustomNode;

OpenAiNode.displayName = "OpenAiNode";
export { OpenAiNode };
