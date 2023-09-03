//path: src\hooks\openAiContext.tsx

import React, { createContext, useContext, ReactNode } from "react";

type OpenAIContextType = {
	chat: (messages: any[]) => Promise<string>;
} | null;

type OpenAIContextProviderProps = {
	children: ReactNode;
};

const OpenAIContext = createContext<OpenAIContextType>(null);

export const useOpenAI = () => {
	const context = useContext(OpenAIContext);
	if (!context) {
		throw new Error(
			"useOpenAI must be used within an OpenAIContextProvider",
		);
	}
	return context;
};

export const OpenAIContextProvider: React.FC<OpenAIContextProviderProps> = ({
	children,
}) => {
	const chat = async (messages: any[]) => {
		try {
			const res = await fetch("/api/open-ai/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ parsed: messages }),
			});

			if (res.ok) {
				const reply = await res.text();
				return reply;
			} else {
				return "An error occurred";
			}
		} catch (error) {
			console.error("Error in chat function:", error);
			return "An error occurred";
		}
	};

	return (
		<OpenAIContext.Provider value={{ chat }}>
			{children}
		</OpenAIContext.Provider>
	);
};
