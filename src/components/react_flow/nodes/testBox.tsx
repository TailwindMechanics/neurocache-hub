//path: src\components\react_flow\nodes\testBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ContentPreset from "@src/components/components/contentPreset";
import ButtonPreset from "@src/components/components/buttonPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { supabase } from "@src/services/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeProps, useReactFlow } from "reactflow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";
import { AgentGraph } from "@src/types/api";
import React from "react";

const Header = new ComponentBuilder(ContentPreset)
	.withStyle("text-aqua")
	.withStyle("text-center")
	.withStyle("w-20")
	.withRoundedElement()
	.build();

const Card = new ComponentBuilder(CardPreset).withRoundedFrame().build();

const Content = new ComponentBuilder(ContentPreset)
	.withStyle("text-night-body")
	.withStyle("break-words")
	.withStyle("text-xs")
	.withStyle("py-0.5")
	.withStyle("px-1")
	.withRoundedContent()
	.build();

const Button = new ComponentBuilder(ButtonPreset)
	.withStyle("text-sm")
	.withRoundedElement()
	.build();

const TestBox: React.FC<NodeProps> = (props: NodeProps) => {
	const { setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;
	const reactFlowInstance = useReactFlow();
	const user = useUser();

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
			const response = await supabase
				.from("agent_graphs")
				.upsert(agentGraph)
				.select();

			if (response.data) {
				setIsLoading({
					loading: false,
					message: "Saved!",
					detail: `${response.status} ${response.statusText}`,
				});
				return {
					payload: JSON.stringify(response.data),
					erorr: JSON.stringify(response.error),
				};
			}
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

	const onClick = async () => {
		if (!user) return;

		const graphData = reactFlowInstance.toObject();
		const response = await saveAgentGraph({
			user_id: user.id,
			graph_data: graphData,
		});
		if (!response?.payload) {
			console.log("payload is empty");
			return;
		}

		const sourceIds = nodeData.handles
			.filter((handle) => handle.type === "source")
			.map((handle) => handle.id);

		setNodeFlowValue({
			ids: sourceIds,
			payload: `Could you return this as nicely formatted json in a codeblock please? ${response.payload}`,
		});
	};

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Card className={NodeSelectionState(props.id)}>
				<Header>{isLoading.message}</Header>
				<Button onClick={onClick}>Test</Button>
				<Content>{isLoading.detail}</Content>
			</Card>
		</>
	);
};

export default React.memo(TestBox);
