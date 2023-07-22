//path: src\components\builders\typographyBuilder\TypographyBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

type CategoryStyles = {
	color: string;
	hover: string;
	textSize: string;
	fontFamily: string;
	textAlign: string;
	lineHeight: string;
	fontWeight: string;
	letterSpacing: string;
};

const tailwind: Record<Style["Category"], CategoryStyles> = {
	overt: {
		color: "text-cherry-h",
		hover: "hover:cherry-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	calm: {
		color: "text-aqua-h",
		hover: "hover:aqua-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	alert: {
		color: "text-peach-h",
		hover: "hover:peach-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	subtle: {
		color: "text-grape-h",
		hover: "hover:grape-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
};

export default class TypographyBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	private push = (style: string) => {
		this.styles.push(style);
	};

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	// prettier-ignore
	withTextColor(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["color"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withHoverColor(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["hover"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withTextSize(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["textSize"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withFontFamily(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["fontFamily"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withTextAlignment(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["textAlign"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withLineHeight(category: Style["Category"] = "calm"): TypographyBuilder {
		const newStyle = tailwind[category]["lineHeight"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withFontWeight(category: Style["Category"] = 'calm'): TypographyBuilder {
		const newStyle = tailwind[category]["fontWeight"];
		this.push(newStyle);
		return this;
	}

	// prettier-ignore
	withLetterSpacing(category: Style["Category"] = 'calm'): TypographyBuilder {
		const newStyle = tailwind[category]["letterSpacing"];
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
