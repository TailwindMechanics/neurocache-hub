//path: src\components\react_flow\utils\renderCodeblocks.tsx

import CodeBlock from "@src/components/components/codeBlock";
import React from "react";

interface CodeProps {
	inline?: boolean;
	children?: React.ReactNode;
	[key: string]: any;
}

const RenderCodeblocks: React.FC<CodeProps> = (props) => {
	const match = /language-(\w+)/.exec(props.className ?? "");
	return !props.inline && match ? (
		<CodeBlock
			language={match[1].toLowerCase()}
			value={String(props.children ?? "").replace(/\n$/, "")}
			{...props}
		/>
	) : (
		<code {...props}>{props.children}</code>
	);
};

export default RenderCodeblocks;
