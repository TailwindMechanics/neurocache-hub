//path: src\modules\Graph\Internal\providers\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { GuestCanvas } from "../core/guestCanvas";

const GuestProvider = React.memo(() => {
    return (
        <>
            <ReactFlowProvider>
                <GuestCanvas />
            </ReactFlowProvider>
        </>
    );
});

GuestProvider.displayName = "GuestProvider";
export { GuestProvider };
