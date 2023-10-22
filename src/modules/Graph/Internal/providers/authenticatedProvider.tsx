//path: src\modules\Graph\Internal\providers\authenticatedProvider.tsx

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
