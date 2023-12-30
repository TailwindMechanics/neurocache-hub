//path: src\modules\Graph\Internal\providers\authenticatedProvider.tsx

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { ReactFlowCanvas } from "../core/reactFlowCanvas";
import { DrawerProvider } from "@modules/Drawer";

const AuthenticatedProvider = React.memo(() => {
    return (
        <>
            <ReactFlowProvider>
                <DrawerProvider>
                    <ReactFlowCanvas />
                </DrawerProvider>
            </ReactFlowProvider>
        </>
    );
});

AuthenticatedProvider.displayName = "AuthenticatedProvider";
export { AuthenticatedProvider };
