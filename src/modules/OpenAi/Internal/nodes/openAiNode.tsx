//path: src\modules\OpenAi\Internal\nodes\openAiNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { ContentPreset, Composer, CardPreset } from "@modules/Composer";
import { CustomNode } from "@modules/Graph/types";
import { useOpenAI } from "../hooks/useOpenAI";
import {
    CustomNodesRepo,
    NodeSelection,
    UseNodeFlow,
    DrawHandle,
} from "@modules/Graph";

const Content = new Composer("OpenAiNodeContent", ContentPreset)
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = UseNodeFlow();
    const nodeData = props.data as CustomNode;
    const openAI = useOpenAI();

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
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <CardPreset className={NodeSelection(props.id)}>
                <Content>{nodeData.nodeName}</Content>
            </CardPreset>
        </>
    );
};

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

export default React.memo(OpenAiNode);
