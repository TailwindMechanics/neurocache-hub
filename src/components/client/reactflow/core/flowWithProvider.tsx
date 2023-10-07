//path: src\components\client\reactflow\core\flowWithProvider.tsx

import ReactFlowCanvas from "./reactFlowCanvas";
import { ReactFlowProvider } from "reactflow";
import React from "react";

const FlowWithProvider: React.FC = () => {
	return (
		<ReactFlowProvider>
			<ReactFlowCanvas />
		</ReactFlowProvider>
	);
};

export default FlowWithProvider;
