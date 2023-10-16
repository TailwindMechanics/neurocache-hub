//path: src\modules\Auth\client\hooks\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import { GuestCanvas } from "@modules/Graph";

const GuestProvider: React.FC = () => {
    return (
        <>
            <ReactFlowProvider>
                <GuestCanvas />
            </ReactFlowProvider>
        </>
    );
};

export default GuestProvider;
