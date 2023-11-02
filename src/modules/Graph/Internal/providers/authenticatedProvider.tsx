//path: src\modules\Graph\Internal\providers\authenticatedProvider.tsx

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { ReactFlowCanvas } from "../core/reactFlowCanvas";
import { DrawerProvider } from "@modules/Drawer";
import { AgentProvider } from "@modules/Agents";
import { OpenAiContext } from "@modules/OpenAi";

const AuthenticatedProvider = React.memo(() => {
    return (
        <>
            <OpenAiContext>
                <ReactFlowProvider>
                    <AgentProvider>
                        <DrawerProvider>
                            <ReactFlowCanvas />
                        </DrawerProvider>
                    </AgentProvider>
                </ReactFlowProvider>
            </OpenAiContext>
        </>
    );
});

AuthenticatedProvider.displayName = "AuthenticatedProvider";
export { AuthenticatedProvider };
