//path: src\hooks\apiContextWrapper.tsx

"use client";

import { SupabaseProvider, initSupabase } from "./useSupabase";
import { OpenAIContextProvider } from "@src/hooks/useOpenAI";
import { SessionProvider } from "./useSession";
import React, { FC, ReactNode } from "react";

const supabase = initSupabase();

type ApiContextWrapperProps = {
	children: ReactNode;
};

const ApiContextWrapper: FC<ApiContextWrapperProps> = ({ children }) => {
	return (
		<>
			<SupabaseProvider supabase={supabase}>
				<SessionProvider>
					<OpenAIContextProvider>{children}</OpenAIContextProvider>
				</SessionProvider>
			</SupabaseProvider>
		</>
	);
};

export default ApiContextWrapper;
