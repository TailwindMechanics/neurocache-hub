//path: src\modules\Auth\client\hooks\authenticatedProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import IOpenAi from "@modules/OpenAi";
import IGraph from "@modules/Graph";
import IDev from "@modules/Dev";

export const AuthenticatedProvider: React.FC = () => {
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
