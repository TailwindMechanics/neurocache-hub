//path: src\app\page.tsx

import ReactFlowCanvas from "@src/components/react_flow/core/reactFlowCanvas";
import ApiContextWrapper from "@src/hooks/apiContextWrapper";
import { FC } from "react";
import React from "react";

const page: FC = () => {
	return (
		<>
			<ApiContextWrapper>
				<ReactFlowCanvas />
			</ApiContextWrapper>
		</>
	);
};

export default page;
