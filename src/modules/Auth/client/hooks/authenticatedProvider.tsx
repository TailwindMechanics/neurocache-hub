//path: src\modules\Auth\client\hooks\authenticatedProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import IOpenAi from "@modules/OpenAi";
import IDev from "@modules/Dev";

import Graph from "@modules/Graph";
const IGraph = Graph.resolve("IGraph");

const AuthenticatedProvider: React.FC = () => {
    return (
        <>
            <IDev.Hotkeys />
            <IOpenAi.Context>
                <ReactFlowProvider>
                    <IGraph.Canvas />
                </ReactFlowProvider>
            </IOpenAi.Context>
        </>
    );
};

export default AuthenticatedProvider;
