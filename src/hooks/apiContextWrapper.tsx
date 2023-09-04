//path: src\hooks\apiContextWrapper.tsx

"use client";

import { OpenAIContextProvider } from "@src/hooks/openAiContext";
import React, { FC, ReactNode } from "react";

type ApiContextWrapperProps = {
	children: ReactNode;
};

const ApiContextWrapper: FC<ApiContextWrapperProps> = ({ children }) => {
	return <OpenAIContextProvider>{children}</OpenAIContextProvider>;
};

export default ApiContextWrapper;
