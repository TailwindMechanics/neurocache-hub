//path: src\modules\NeuroGraph\nodes\openAiNode.tsx

import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState, DrawHandle } from "../../../NeuroGraph/External";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Content = new Components.Builder(Components.Content)
    .withStyle("text-sm")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = Use.NodeFlow();
    const nodeData = props.data as NodeData;
    const openAI = Use.OpenAi();

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
            <Components.Card className={NodeSelectionState(props.id)}>
                <Content>{nodeData.nodeName}</Content>
            </Components.Card>
        </>
    );
};

export default React.memo(OpenAiNode);
