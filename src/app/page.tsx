"use client";

import ReactFlowBuilder from "@src/components/builders/reactFlowBuilder/ReactFlowBuilder";
import ButtonComponent from "@src/components/library/buttonComponent/buttonComponent";
import Flow from "@src/components/react_flow/reactFlowCanvas";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	const atom = <ButtonComponent label="Yo yo bitches" onClick={onClick} />;
	const FlowButton = new ReactFlowBuilder(atom)
		.withTopHandle()
		.withBottomHandle()
		.buildComponent();

	return (
		<>
			<Flow>
				<FlowButton />
			</Flow>
		</>
	);
};

function onClick() {
	console.log("clicked");
}

export default page;
