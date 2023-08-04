//path: src\components\react_flow\core\reactFlowCanvas.tsx

import ReactFlow, { BackgroundVariant, Background } from "reactflow";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import flowService from "@services/FlowService";
import colors from "@data/colors.json";
import "reactflow/dist/style.css";
import React from "react";

const init = flowService.init();

const ReactFlowCanvas: React.FC = () => {
	const data = flowService.callbackData(init.nodes, init.edges, init.types);
	StyleReactFlowLogo();
	return (
		<div className="h-screen w-screen bg-night">
			<ReactFlow
				nodes={data.nodes}
				onNodesChange={data.onNodesChange}
				edges={data.edges}
				onEdgesChange={data.onEdgesChange}
				onConnect={data.onConnect}
				nodeTypes={data.types}
			>
				<Background
					variant={BackgroundVariant.Dots}
					color={colors.aqua.a}
				/>
			</ReactFlow>
		</div>
	);
};

export default ReactFlowCanvas;
