//path: src\modules\hooks\authenticatedProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import Graph from "@client/reactflow";
import Dev from "@shared/dev";
import { Contexts } from "../../../hooks";

export const AuthenticatedProvider: React.FC = () => {
    return (
        <>
            <Dev.Hotkeys />
            <Contexts.OpenAIContextProvider>
                <ReactFlowProvider>
                    <Graph.Canvas />
                </ReactFlowProvider>
            </Contexts.OpenAIContextProvider>
        </>
    );
};
