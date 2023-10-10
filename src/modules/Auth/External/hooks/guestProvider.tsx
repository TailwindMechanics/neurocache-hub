//path: src\modules\hooks\guestProvider.tsx

"use client";

import { ReactFlowProvider } from "reactflow";
import React from "react";

import Graph from "@client/reactflow";
import Dev from "@shared/dev";

export const GuestProvider: React.FC = () => {
	return (
		<>
			<Dev.Hotkeys />
			<ReactFlowProvider>
				<Graph.GuestCanvas />
			</ReactFlowProvider>
		</>
	);
};
