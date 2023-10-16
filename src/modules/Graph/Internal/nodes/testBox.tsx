//path: src\modules\Graph\Internal\nodes\testBox.tsx

import { NodeProps, useReactFlow } from "reactflow";
import { useState } from "react";
import React from "react";

import NodeSelectionState from "../components/nodeSelectionState";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { CustomNode, AgentGraph } from "../../types";
import { useNodeFlow } from "../hooks/useNodeFlow";
import DrawHandle from "../components/drawHandle";
import {
    ContentPreset,
    ButtonPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";

const Card = new Composer("TestBoxCard", CardPreset).withRoundedFrame().build();
const Header = new Composer("TestBoxHeader", ContentPreset)
    .withStyle("text-aqua")
    .withStyle("text-center")
    .withStyle("w-20")
    .withRoundedElement()
    .build();
const Content = new Composer("TestBoxContent", ContentPreset)
    .withStyle("text-night-body")
    .withStyle("break-words")
    .withStyle("text-xs")
    .withStyle("py-0.5")
    .withStyle("px-1")
    .withRoundedContent()
    .build();
const Button = new Composer("TestBoxButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedElement()
    .build();

const TestBox: React.FC<NodeProps> = (props: NodeProps) => {
    const { setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const reactFlowInstance = useReactFlow();
    // const user = useUser();

    const [isLoading, setIsLoading] = useState({
        loading: false,
        message: "idle",
        detail: "",
    });

    const saveAgentGraph = async (agentGraph: AgentGraph) => {
        try {
            setIsLoading({
                loading: true,
                message: "Saving...",
                detail: "",
            });
            // const response = await supabase
            // 	.from("agent_graphs")
            // 	.upsert(agentGraph)
            // 	.select();

            // if (response.data) {
            // 	setIsLoading({
            // 		loading: false,
            // 		message: "Saved!",
            // 		detail: `${response.status} ${response.statusText}`,
            // 	});
            // 	return {
            // 		payload: JSON.stringify(response.data),
            // 		erorr: JSON.stringify(response.error),
            // 	};
            // }
        } catch (error: any) {
            setIsLoading({
                loading: false,
                message: error,
                detail: error.detail,
            });
            console.log(error);
        } finally {
            setIsLoading({ loading: false, message: "idle", detail: "" });
        }
    };

    // const onClick = async () => {
    // 	if (!user) return;

    // 	const graphData = reactFlowInstance.toObject();
    // 	const response = await saveAgentGraph({
    // 		user_id: user.id,
    // 		graph_data: graphData,
    // 	});
    // 	if (!response?.payload) {
    // 		console.log("payload is empty");
    // 		return;
    // 	}

    // 	const sourceIds = nodeData.handles
    // 		.filter((handle) => handle.type === "source")
    // 		.map((handle) => handle.id);

    // 	setNodeFlowValue({
    // 		ids: sourceIds,
    // 		payload: `Could you return this as nicely formatted json in a codeblock please? ${response.payload}`,
    // 	});
    // };

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={NodeSelectionState(props.id)}>
                <Header>{isLoading.message}</Header>
                <Button
                // onClick={onClick}
                >
                    Test
                </Button>
                <Content>{isLoading.detail}</Content>
            </Card>
        </>
    );
};

const reflect_nodeData = {
    nodeType: "test_box",
    nodeName: "Test",
    category: "Unhidden",
    nodeId: "test_box_1",
    body: "This is for testing.",
    handles: [
        {
            id: "out_test_box_60e9b8e9a7f1d8c774h2",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 100, y: 0 },
} as CustomNode;

export default React.memo(TestBox);
