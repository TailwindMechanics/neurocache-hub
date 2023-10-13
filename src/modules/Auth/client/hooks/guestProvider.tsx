//path: src\modules\Auth\client\hooks\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import IDev from "@modules/Dev";

import Graph from "@modules/Graph";
const IGraph = Graph.resolve("IGraph");

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
