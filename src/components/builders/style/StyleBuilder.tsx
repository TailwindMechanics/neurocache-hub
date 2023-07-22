//path: src\components\builders\StyleBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

type CategoryStyles = {
	bg: string;
	hover: string;
	border: string;
	shadow: string;
};

const tailwind: Record<Style["Category"], CategoryStyles> = {
	overt: {
		bg: "bg-cherry-d",
		hover: "hover:bg-cherry",
		border: "border-cherry-l",
		shadow: "shadow-lg drop-shadow-lg",
	},
	calm: {
		bg: "bg-aqua-d",
		hover: "hover:bg-aqua",
		border: "border-aqua-l",
		shadow: "shadow-lg drop-shadow-lg",
	},
	alert: {
		bg: "bg-peach-d",
		hover: "hover:bg-peach",
		border: "border-peach-l",
		shadow: "shadow-lg drop-shadow-lg",
	},
	subtle: {
		bg: "bg-util",
		hover: "hover:bg-grape-a",
		border: "border-grape",
		shadow: "shadow-inner shadow-grape-d",
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

	withBg(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].bg;
		this.push(newStyle);
		return this;
	}

	withHover(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category].hover;
		this.push(newStyle);
		return this;
	}

	withBorder(category: Style["Category"] = "calm"): StyleBuilder {
		const newStyle = tailwind[category]["border"];
		const tw = `border ${newStyle}`;
		this.push(tw);
		return this;
	}

	withBorderRadius(category: Style["Category"] = "calm"): StyleBuilder {
		const tw = "rounded-full";
		this.push(tw);
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
