//path: src\components\client\reactflow\core\guestProvider.tsx

"use client";

import DevShortcuts from "@src/dev/shortcuts/devShortcuts";
import { ReactFlowProvider } from "reactflow";
import GuestCanvas from "./guestCanvas";
import React from "react";

const GuestProvider: React.FC = () => {
	return (
		<>
			<DevShortcuts />
			<ReactFlowProvider>
				<GuestCanvas />
			</ReactFlowProvider>
		</>
	);
};

export default GuestProvider;
