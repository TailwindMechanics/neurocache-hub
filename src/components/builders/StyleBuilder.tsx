//path: src\components\builders\StyleBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

const tailwind: Record<Style["Category"], Record<Style["Element"], string>> = {
	overt: {
		bg: "bg-cherry",
		hover: "hover:bg-cherry-l",
		border: "border-cherry-d",
	},
	calm: {
		bg: "bg-aqua",
		hover: "hover:bg-aqua-l",
		border: "border-aqua-d",
	},
	alert: {
		bg: "bg-peach",
		hover: "hover:bg-peach-l",
		border: "border-peach-d",
	},
	subtle: {
		bg: "bg-purple",
		hover: "hover:bg-purple-l",
		border: "border-purple-d",
	},
};

export default class StyleBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	private push = (style: string) => {
		this.styles.push(style);
	};

	// prettier-ignore
	withStyle(style: Style["Element"], category: Style["Category"]): StyleBuilder {
		if (!category && !style) {
			throw new Error(`StyleBuilder: invalid args: ${category}, ${style}`);
		} 
		
		const newStyle = tailwind[category][style];
		this.push(newStyle);
		return this;
	}

	withShadow(): StyleBuilder {
		const tw = "shadow-2xl drop-shadow-2xl";
		this.push(tw);
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
