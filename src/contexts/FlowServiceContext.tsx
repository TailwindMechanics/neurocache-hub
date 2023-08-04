//path: src\contexts\FlowServiceContext.tsx

import React, { FC, createContext, useContext } from "react";
import FlowService from "@services/FlowService";

interface FlowServiceProps {
	flowService: FlowService;
	children: React.ReactNode;
}

const FlowServiceContext = createContext<FlowService | null>(null);

export const FlowServiceProvider: FC<FlowServiceProps> = (props) => {
	return (
		<FlowServiceContext.Provider value={props.flowService}>
			{props.children}
		</FlowServiceContext.Provider>
	);
};

export const useFlowService = () => {
	const context = useContext(FlowServiceContext);
	if (!context) {
		throw new Error(
			"useFlowService must be used within a FlowServiceProvider",
		);
	}
	return context;
};
