//path: src\modules\Auth\client\hooks\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import IGraph from "@modules/Graph";
import IDev from "@modules/Dev";

export const GuestProvider: React.FC = () => {
    return (
        <>
            <IDev.Hotkeys />
            <ReactFlowProvider>
                <IGraph.GuestCanvas />
            </ReactFlowProvider>
        </>
    );
};
