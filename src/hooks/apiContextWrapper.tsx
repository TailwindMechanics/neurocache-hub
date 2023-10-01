//path: src\hooks\apiContextWrapper.tsx

"use client";

import { OpenAIContextProvider } from "@src/hooks/useOpenAI";
import React, { FC, ReactNode } from "react";
import { SessionProvider } from "./useSession";

type ApiContextWrapperProps = {
	children: ReactNode;
};

const ApiContextWrapper: FC<ApiContextWrapperProps> = ({ children }) => {
	return (
		<>
			<SessionProvider>
				<OpenAIContextProvider>{children}</OpenAIContextProvider>
			</SessionProvider>
		</>
	);
};

export default ApiContextWrapper;
