//path: src\hooks\useNodeFlow.tsx

import { NodeFlowValue } from "@src/types/declarations";
import { BehaviorSubject } from "rxjs";
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useMemo,
} from "react";

export const NodeFlowProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const nodeFlowValue = useMemo(
		() =>
			new BehaviorSubject({
				ids: [],
				payload: "",
			} as NodeFlowValue),
		[],
	);

	return (
		<NodeFlowContext.Provider value={nodeFlowValue}>
			{children}
		</NodeFlowContext.Provider>
	);
};

const NodeFlowContext = createContext<BehaviorSubject<NodeFlowValue>>(
	new BehaviorSubject({ ids: [], payload: "" } as NodeFlowValue),
);

const useNodeFlow = (): BehaviorSubject<NodeFlowValue> => {
	return useContext(NodeFlowContext);
};

export default useNodeFlow;
