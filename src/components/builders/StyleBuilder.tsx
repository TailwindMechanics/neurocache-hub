//path: src\components\builders\StyleBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

const tailwind: Record<Style["Category"], Record<Style["Element"], string>> = {
	primary: {
		bg: "bg-blue-500",
		hover: "hover:bg-blue-700",
		text: "text-white",
		font: "font-bold",
		border: "border-blue-700",
	},
	secondary: {
		bg: "bg-green-500",
		hover: "hover:bg-green-700",
		text: "text-white",
		font: "font-bold",
		border: "border-green-700",
	},
	ghost: {
		bg: "bg-gray-500",
		hover: "hover:bg-gray-700",
		text: "text-black",
		font: "font-bold",
		border: "border-gray-700",
	},
	warning: {
		bg: "bg-yellow-500",
		hover: "hover:bg-yellow-700",
		text: "text-black",
		font: "font-bold",
		border: "border-yellow-700",
	},
};

export default class StyleBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	// prettier-ignore
	withStyle(style: Style["Element"], category: Style["Category"]): StyleBuilder {
		if (!category && !style) {
			throw new Error(`StyleBuilder: invalid args: ${category}, ${style}`);
		} 
		
		const newStyle = tailwind[category][style];
		this.styles.push(newStyle);
		return this;
	}

	// prettier-ignore
	build(): AtomNode {
		const styles = this.styles;
		return (props: AtomProps) => {
			let newClassName = props.className ?? "";
			newClassName += ` ${styles.join(" ")}`;
			let newProps = {...props, className: newClassName.trim()};
			return <this.node {...newProps} />;
		};
	}
}
