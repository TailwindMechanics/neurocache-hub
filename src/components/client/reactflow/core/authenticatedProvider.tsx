//path: src\components\client\reactflow\core\authenticatedProvider.tsx

"use client";

import { OpenAIContextProvider } from "@src/hooks/useOpenAI";
import DevShortcuts from "@src/dev/shortcuts/devShortcuts";
import ReactFlowCanvas from "./reactFlowCanvas";
import { ReactFlowProvider } from "reactflow";
import React from "react";

const AuthenticatedProvider: React.FC = () => {
	return (
		<>
			<DevShortcuts />
			<OpenAIContextProvider>
				<ReactFlowProvider>
					<ReactFlowCanvas />
				</ReactFlowProvider>
			</OpenAIContextProvider>
		</>
	);
};

export default AuthenticatedProvider;
