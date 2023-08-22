//path: src\app\page.tsx

"use client";

import ReactFlowCanvas from "@src/components/react_flow/core/reactFlowCanvas";
import { NodeFlowProvider } from "@src/hooks/useNodeFlow";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<NodeFlowProvider>
				<ReactFlowCanvas />
			</NodeFlowProvider>
		</>
	);
};

export default page;
