//path: src\modules\Graph\Internal\providers\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { GuestCanvas } from "../core/guestCanvas";
import { DrawerProvider } from "@modules/Drawer";

const GuestProvider = React.memo(() => {
    return (
        <>
            <ReactFlowProvider>
                <DrawerProvider>
                    <GuestCanvas />
                </DrawerProvider>
            </ReactFlowProvider>
        </>
    );
});

GuestProvider.displayName = "GuestProvider";
export { GuestProvider };
