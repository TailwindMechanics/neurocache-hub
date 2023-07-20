//path: src\components\builders\StyleComponentBuilder.tsx

import { AtomNode, AtomProps } from "@/types/declarations";
import React from "react";

export default class StyleBuilder {
	private node: AtomNode;

	constructor(newNode: AtomNode) {
		this.node = newNode;
	}

	private withStyle(
		group: keyof typeof styleTokens,
		token: string,
	): StyleBuilder {
		const style = styleTokens[group][token];

		const NewNode = this.node;
		const newNode = (props: AtomProps) => {
			return (
				<NewNode
					{...props}
					className={`${style} ${props.className}`}
				/>
			);
		};
		this.node = newNode;
		return this;
	}

	withBgPrimary(): StyleBuilder {
		return this.withStyle("bg", "primary");
	}

	withBgDanger(): StyleBuilder {
		return this.withStyle("bg", "danger");
	}

	withHoverPrimary(): StyleBuilder {
		return this.withStyle("hover", "primary");
	}

	withBorderGhost(): StyleBuilder {
		return this.withStyle("border", "ghost");
	}

	withTextWhite(): StyleBuilder {
		return this.withStyle("text", "white");
	}

	withFontBold(): StyleBuilder {
		return this.withStyle("font", "bold");
	}

	build(): AtomNode {
		return this.node;
	}
}

type StyleGroup = "bg" | "hover" | "border" | "text" | "font";
type BgTokens = "primary" | "danger";
type HoverTokens = "primary" | "danger";
type BorderTokens = "ghost";
type TextTokens = "white";
type FontTokens = "bold";

type StyleTokens = {
	[group in StyleGroup]: Record<string, string>;
};

const styleTokens: StyleTokens = {
	bg: {
		primary: "bg-blue-500",
		danger: "bg-red-500",
	},
	hover: {
		primary: "hover:bg-blue-700",
		danger: "hover:bg-red-700",
	},
	border: {
		ghost: "border-gray-200",
	},
	text: {
		white: "text-white",
	},
	font: {
		bold: "font-bold",
	},
};

// Usage:
// const StyledBox = new StyleBuilder(AtomComponent)
// .withBgDanger()
// .withHoverPrimary()
// .withTextWhite()
// .withFontBold()
// .withBorderGhost()
// .build();
