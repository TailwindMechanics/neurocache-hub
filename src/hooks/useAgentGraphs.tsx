//path: src\hooks\useAgentGraphs.tsx

import { supabase } from "@src/services/supabaseClient";
import React, { createContext, useContext, ReactNode } from "react";

type AgentGraphsContextType = {
	save: (agentGraphs: any) => Promise<string>;
} | null;

type AgentGraphsContextProviderProps = {
	children: ReactNode;
};

const AgentGraphsContext = createContext<AgentGraphsContextType>(null);

export const useAgentGraphs = () => {
	const context = useContext(AgentGraphsContext);
	if (!context) {
		throw new Error(
			"useAgentGraphs must be used within a AgentGraphsContextProvider",
		);
	}
	return context;
};

export const AgentGraphsContextProvider: React.FC<
	AgentGraphsContextProviderProps
> = ({ children }) => {
	async function save(graphObject: object): Promise<string> {
		try {
			const session = await supabase.auth.getSession();
			const token = session?.data?.session?.access_token;

			if (!token) {
				console.error("No access token found");
				throw new Error("No access token found");
			}

			const req = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ graphObject }),
			};

			const res = await fetch("/api/agent-graphs/save", req);

			if (!res) return "No response";

			if (res.ok) {
				console.log("Agent graph saved successfully");
				return res.json();
			}

			return res.json();
		} catch (error) {
			// console.error("Error in save function:", error);
			throw error;
		}
	}

	return (
		<AgentGraphsContext.Provider value={{ save }}>
			{children}
		</AgentGraphsContext.Provider>
	);
};
