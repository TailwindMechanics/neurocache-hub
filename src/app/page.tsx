//path: src\app\page.tsx

"use client";

import ReactFlowBuilder from "@src/components/builders/reactFlowBuilder/ReactFlowBuilder";
import ReactFlowCanvas from "@src/components/react_flow/reactFlowCanvas";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	const buttonAtom = new ButtonAtom();

	let CalmButton = buttonAtom.calm();
	const CalmFlowButton = new ReactFlowBuilder(CalmButton)
		.withTopHandle()
		.withBottomHandle()
		.build();

	let OvertButton = buttonAtom.overt();
	const OvertFlowButton = new ReactFlowBuilder(OvertButton)
		.withTopHandle()
		.withBottomHandle()
		.build();

	return (
		<>
			<ReactFlowCanvas>
				<CalmFlowButton>Calm</CalmFlowButton>
				<OvertFlowButton>Overt</OvertFlowButton>
			</ReactFlowCanvas>
		</>
	);
};

export default page;
