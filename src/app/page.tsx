//path: src\app\page.tsx

"use client";

import ReactFlowCanvas from "@src/components/react_flow/core/reactFlowCanvas";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<ReactFlowCanvas />
		</>
	);
};

export default page;
