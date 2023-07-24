//path: src\components\react_flow\reactFlowCanvas.tsx

import RegisterReactFlowCallbacks from "./registerReactFlowCallbacks";
import ReactFlow, { Background, BackgroundVariant } from "reactflow";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import React, { PropsWithChildren } from "react";
import colors from "@data/colors.json";
import "reactflow/dist/style.css";
import data from "./nodesData";

const ReactFlowCanvas: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	StyleReactFlowLogo();
	const callbackData = RegisterReactFlowCallbacks();

	return (
		<div className="h-screen w-screen bg-night">
			<ReactFlow
				nodes={callbackData.nodes}
				onNodesChange={callbackData.onNodesChange}
				edges={callbackData.edges}
				onEdgesChange={callbackData.onEdgesChange}
				onConnect={callbackData.onConnect}
				nodeTypes={data.Types}
			>
				<Background
					variant={BackgroundVariant.Dots}
					color={colors.aqua.a}
				/>
				{children}
			</ReactFlow>
		</div>
	);
};

export default ReactFlowCanvas;
