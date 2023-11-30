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

OpenAiNode.displayName = "OpenAiNode";
export { OpenAiNode };
