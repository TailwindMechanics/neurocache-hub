//path: src\app\page.tsx

"use client";

import FlowWithProvider from "@src/components/react_flow/core/flowWithProvider";
import ApiContextWrapper from "@src/hooks/apiContextWrapper";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<ApiContextWrapper>
				<FlowWithProvider />
			</ApiContextWrapper>
		</>
	);
};

export default page;
