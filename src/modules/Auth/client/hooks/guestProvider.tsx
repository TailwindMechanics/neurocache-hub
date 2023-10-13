//path: src\modules\Auth\client\hooks\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import IGraph from "src/modules/Graph";
import IDev from "@modules/Dev";

const GuestProvider: React.FC = () => {
    return (
        <>
            <IDev.Hotkeys />
            <ReactFlowProvider>
                <IGraph.GuestCanvas />
            </ReactFlowProvider>
        </>
    );
};

export default GuestProvider;
