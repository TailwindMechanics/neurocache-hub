//path: src\modules\Graph\Internal\hooks\useNodeFlow.tsx

"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { Edge } from "reactflow";

import { NodeFlowValue } from "../../types";
import IUtils from "@modules/Utils";

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
        if (newValue.payload && IUtils.IsNullOrEmpty(newValue.payload)) {
            console.log(
                `%c!!!!! Output id: ${newValue.ids}, payload is null or empty`,
                "color: #e09163",
            );
            return;
        }
        console.log(`%cvvv ${newValue.ids}`, "color: #63dce0");

        const inputIds = newValue.ids.flatMap((id) => OutputIdToInputIds(id));
        if (inputIds.length === 0) {
            console.log(`%c!!!!! No input ids found`, "color: #e09163");
            return;
        }

        console.log(`%c^^^ ${inputIds}`, "color: #d8e063");

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
