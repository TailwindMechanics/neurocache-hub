//path: src\hooks\apiContextWrapper.tsx

"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
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
				<OpenAIContextProvider>{children}</OpenAIContextProvider>
			</SessionContextProvider>
		</>
	);
};

export default ApiContextWrapper;
