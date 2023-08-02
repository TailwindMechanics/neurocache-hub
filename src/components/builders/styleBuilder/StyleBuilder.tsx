//path: src\components\builders\styleBuilder\StyleBuilder.tsx

import { AtomNode, AtomProps, Style } from "@src/types/declarations";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React, { FC } from "react";

type CategoryStyles = {
	bg: string;
	hover: string;
	border: string;
	radius: string;
	shadow: string;
	padding: string;
};

const tailwind: Record<Style["Category"], CategoryStyles> = {
	overt: {
		bg: "bg-cherry-d",
		hover: "hover:bg-cherry",
		border: "border-cherry-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4 py-2",
	},
	calm: {
		bg: "bg-aqua-d",
		hover: "hover:bg-aqua",
		border: "border-aqua-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4",
	},
	alert: {
		bg: "bg-peach-d",
		hover: "hover:bg-peach",
		border: "border-peach-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4",
	},
	subtle: {
		bg: "bg-util",
		hover: "hover:bg-grape-a",
		border: "border-grape",
		radius: "rounded-full",
		shadow: "shadow-inner shadow-grape-d",
		padding: "px-4",
	},
	node: {
		bg: "bg-aqua-d",
		hover: "hover:bg-aqua",
		border: "border-aqua-l",
		radius: "rounded-full",
		shadow: "shadow-inner shadow-aqua-d",
		padding: "p-6",
	},
	ghost: {
		bg: "bg-util",
		hover: "",
		border: "",
		radius: "",
		shadow: "",
		padding: "",
	},
};

export default class StyleBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	private push = (style: string) => {
		if (IsNullOrEmpty(style)) return;

		if (!this.styles.includes(style)) {
			this.styles.push(style);
		}
	};

	withBackground(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].bg;
		this.push(newStyle);
		return this;
	}

	withHover(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].hover;
		this.push(newStyle);
		return this;
	}

	withPadding(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].padding;
		this.push(newStyle);
		return this;
	}

	withBorder(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category]["border"];
		if (IsNullOrEmpty(newStyle)) return this;
		this.push("border");
		this.push(newStyle);
		return this;
	}

	withBorderRadius(category: Style["Category"] = "calm"): StyleBuilder {
		this.withBorder(category);
		const newStyle = tailwind[category]["radius"];
		this.push(newStyle);
		return this;
	}

	withShadow(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].shadow;
		this.push(newStyle);
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
