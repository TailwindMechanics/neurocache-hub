//path: src\components\client\reactflow\utils\renderCodeblocks.tsx

import CodeBlock from "../../ui/codeBlock";
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
