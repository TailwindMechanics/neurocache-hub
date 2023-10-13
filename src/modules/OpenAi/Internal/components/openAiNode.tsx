//path: src\modules\OpenAi\Internal\components\openAiNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { CustomNode } from "@modules/Graph/types";
import IComposer from "@modules/Composer";
import IOpenAi from "@modules/OpenAi";

import Graph from "@modules/Graph";
const IGraph = Graph.resolve("IGraph");

const Content = new IComposer.Builder(
    "OpenAiNodeContent",
    IComposer.Components.Content,
)
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = IGraph.useNodeFlow();
    const nodeData = props.data as CustomNode;
    const openAI = IOpenAi.useOpenAi();

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
                IGraph.DrawHandle({ handle, nodeData, index }),
            )}
            <IComposer.Components.Card
                className={IGraph.NodeSelectionState(props.id)}>
                <Content>{nodeData.nodeName}</Content>
            </IComposer.Components.Card>
        </>
    );
};

const nodeData = {
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

IGraph.CustomNodesRepo.instance.register(nodeData);

export default React.memo(OpenAiNode);
