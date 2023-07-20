//path: src\components\builders\StyleBuilder.tsx

import { AtomProps, AtomNode } from "@/types/declarations";
import React from "react";

type Style = keyof typeof tailwind;
const tailwind = {
	bgPrimary: "bg-blue-500",
	bgSecondary: "bg-red-500",
	bgGhost: "bg-gray-500",
	bgWarning: "bg-yellow-500",
	hoverPrimary: "hover:bg-blue-700",
	borderGhost: "border-gray-200",
	textWhite: "text-white",
	fontBold: "font-bold",
};

export default class StyleBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	private style(style: Style): StyleBuilder {
		this.styles.push(tailwind[style]);
		return this;
	}

	withStyle(style: Style): StyleBuilder {
		this.style(style);
		return this;
	}

	build(): AtomNode {
		const styles = this.styles;
		const Node = this.node;
		return (props: AtomProps) => {
			let newProps = {
				...props,
				className: `${
					props.className
				} ${styles.join(" ")}`,
			};
			return <Node {...newProps} />;
		};
	}
}
