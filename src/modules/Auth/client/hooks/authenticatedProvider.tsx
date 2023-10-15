//path: src\modules\Auth\client\hooks\authenticatedProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { OpenAiContext } from "@modules/OpenAi";
import { FlowCanvas } from "@modules/Graph";

const AuthenticatedProvider: React.FC = () => {
    return (
        <>
            <OpenAiContext>
                <ReactFlowProvider>
                    <FlowCanvas />
                </ReactFlowProvider>
            </OpenAiContext>
        </>
    );
};

export default AuthenticatedProvider;
