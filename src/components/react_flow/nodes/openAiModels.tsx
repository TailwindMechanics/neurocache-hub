//path: src\components\react_flow\nodes\openAiModels.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ContentPreset from "@src/components/components/contentPreset";
import ButtonPreset from "@src/components/components/buttonPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { useOpenAI } from "@src/hooks/useOpenAI";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { NodeProps } from "reactflow";
import { useState } from "react";
import React from "react";

const Card = new ComponentBuilder(CardPreset).withRoundedFrame().build();
const Header = new ComponentBuilder(ContentPreset)
	.withStyle("text-aqua")
	.withStyle("text-center")
	.withStyle("w-20")
	.withRoundedElement()
	.build();
const Button = new ComponentBuilder(ButtonPreset)
	.withStyle("text-sm")
	.withRoundedButton()
	.build();

const OpenAiModels: React.FC<NodeProps> = (props: NodeProps) => {
	const { setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;
	const openAI = useOpenAI();

	const [isLoading, setIsLoading] = useState({
		loading: false,
		message: "idle",
		detail: "",
	});

	const onClick = async () => {
		setIsLoading({
			loading: true,
			message: "Fetching...",
			detail: "",
		});
		const response = await openAI.models();
		if (!response) {
			setIsLoading({
				loading: false,
				message: "Failed",
				detail: "Response is null",
			});
			return;
		}

		setIsLoading({
			loading: false,
			message: "Fetched!",
			detail: response,
		});

		const sourceIds = nodeData.handles
			.filter((handle) => handle.type === "source")
			.map((handle) => handle.id);

		setNodeFlowValue({
			ids: sourceIds,
			payload: response,
		});
	};

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Card className={NodeSelectionState(props.id)}>
				<Header>{isLoading.message}</Header>
				<Button onClick={onClick}>Fetch Models</Button>
			</Card>
		</>
	);
};

export default React.memo(OpenAiModels);
