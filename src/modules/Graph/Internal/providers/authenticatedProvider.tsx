//path: src\modules\Graph\Internal\providers\authenticatedProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { ReactFlowCanvas } from "../core/reactFlowCanvas";
import { OpenAiContext } from "@modules/OpenAi";

const AuthenticatedProvider = React.memo(() => {
    return (
        <>
            <OpenAiContext>
                <ReactFlowProvider>
                    <ReactFlowCanvas />
                </ReactFlowProvider>
            </OpenAiContext>
        </>
    );
});

AuthenticatedProvider.displayName = "AuthenticatedProvider";
export { AuthenticatedProvider };
