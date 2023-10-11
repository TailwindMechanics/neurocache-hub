//path: src\modules\OpenAi\Internal\components\openAiNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { NodeData } from "@modules/Graph/types";
import IComposer from "@modules/Composer";
import IOpenAi from "@modules/OpenAi";
import IGraph from "@modules/Graph";

const Content = new IComposer.Builder(IComposer.Components.Content)
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = IGraph.useNodeFlow();
    const nodeData = props.data as NodeData;
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

export default React.memo(OpenAiNode);
