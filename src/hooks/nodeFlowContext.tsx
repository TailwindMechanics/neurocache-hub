//path: src\hooks\nodeFlowContext.tsx

import { NodeFlowValue } from "@src/types/declarations";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Edge } from "reactflow";

const NodeFlowContext = createContext<{
	nodeFlowValue: NodeFlowValue;
	setNodeFlowValue: (newValue: NodeFlowValue) => void;
}>({
	nodeFlowValue: { ids: [], payload: "" },
	setNodeFlowValue: () => {},
});

interface NodeFlowProviderProps {
	children: ReactNode;
	edges: Edge[];
}

export const NodeFlowProvider: React.FC<NodeFlowProviderProps> = ({
	children,
	edges,
}) => {
	const [nodeFlowValue, setNodeFlowValueState] = useState<NodeFlowValue>({
		ids: [],
		payload: "",
	});

	const OutputIdToInputIds = (outputHandleId: string) => {
		const connectedEdges = edges.filter(
			(edge) => edge.sourceHandle === outputHandleId,
		);

		return connectedEdges
			.map((edge) => edge.targetHandle)
			.filter((id): id is string => id !== null && id !== undefined);
	};

	const setNodeFlowValue = (newValue: NodeFlowValue) => {
		console.log(
			`%c>>>>> Output id:${newValue.ids}, payload:${newValue.payload}`,
			"color: #63dce0",
		);

		const inputIds = OutputIdToInputIds(newValue.ids[0]);
		if (inputIds.length === 0) {
			console.log(
				`%c!!!!! No input ids found, payload:${newValue.payload}`,
				"color: #e09163",
			);
			return;
		}

		console.log(
			`%c<<<<< Input ids:${inputIds}, payload:${newValue.payload}`,
			"color: #d8e063",
		);

		setNodeFlowValueState({ ids: inputIds, payload: newValue.payload });
	};

	return (
		<NodeFlowContext.Provider value={{ nodeFlowValue, setNodeFlowValue }}>
			{children}
		</NodeFlowContext.Provider>
	);
};

export const useNodeFlow = () => {
	const context = useContext(NodeFlowContext);
	return context;
};
