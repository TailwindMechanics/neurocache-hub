//path: src\app\page.tsx

"use client";

import FlowWithProvider from "@src/components/client/reactflow/core/flowWithProvider";
import DevShortcutsWrapper from "@src/dev/shortcuts/devShortcuts";
import ApiContextWrapper from "@src/hooks/apiContextWrapper";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<DevShortcutsWrapper />
			<ApiContextWrapper>
				<FlowWithProvider />
			</ApiContextWrapper>
		</>
	);
};

export default page;
