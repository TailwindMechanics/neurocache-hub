//path: src\hooks\apiContextWrapper.tsx

"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { AgentGraphsContextProvider } from "./useAgentGraphs";
import { OpenAIContextProvider } from "@src/hooks/useOpenAI";
import { supabase } from "@src/services/supabaseClient";
import React, { FC, ReactNode } from "react";

type ApiContextWrapperProps = {
	children: ReactNode;
};

const ApiContextWrapper: FC<ApiContextWrapperProps> = ({ children }) => {
	return (
		<>
			<SessionContextProvider supabaseClient={supabase}>
				<AgentGraphsContextProvider>
					<OpenAIContextProvider>{children}</OpenAIContextProvider>
				</AgentGraphsContextProvider>
			</SessionContextProvider>
		</>
	);
};

export default ApiContextWrapper;
