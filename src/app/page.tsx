//path: src\app\page.tsx

"use client";

import FlowWithProvider from "@src/components/react_flow/core/flowWithProvider";
import DevShortcutsWrapper from "@src/dev/shortcuts/devShortcuts";
import ApiContextWrapper from "@src/hooks/apiContextWrapper";
import { AuthProvider } from "@src/hooks/useAuth";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<AuthProvider>
				<DevShortcutsWrapper />
				<ApiContextWrapper>
					<FlowWithProvider />
				</ApiContextWrapper>
			</AuthProvider>
		</>
	);
};

export default page;
