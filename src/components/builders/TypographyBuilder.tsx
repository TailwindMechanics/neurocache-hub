//path: src\components\builders\TypographyBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

type TailwindCategoryStyles = {
	color: string;
	textSize: string;
	fontFamily: string;
	textAlign: string;
	lineHeight: string;
	fontWeight: string;
	letterSpacing: string;
};

const tailwind: Record<Style["Category"], TailwindCategoryStyles> = {
	overt: {
		color: "text-text",
		textSize: "text-lg",
		fontFamily: "font-serif",
		textAlign: "text-center",
		lineHeight: "leading-relaxed",
		fontWeight: "font-bold",
		letterSpacing: "tracking-wide",
	},
	calm: {
		color: "text-text-d",
		textSize: "text-base",
		fontFamily: "font-sans",
		textAlign: "text-center",
		lineHeight: "leading-normal",
		fontWeight: "font-light",
		letterSpacing: "tracking-normal",
	},
	alert: {
		color: "text-text-l",
		textSize: "text-sm",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-snug",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-tighter",
	},
	subtle: {
		color: "text-text-d",
		textSize: "text-xl",
		fontFamily: "font-serif",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-normal",
		letterSpacing: "tracking-wider",
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

	withTextColor(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["color"];
		this.push(newStyle);
		return this;
	}

	withTextSize(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["textSize"];
		this.push(newStyle);
		return this;
	}

	withFontFamily(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["fontFamily"];
		this.push(newStyle);
		return this;
	}

	withTextAlignment(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["textAlign"];
		this.push(newStyle);
		return this;
	}

	withLineHeight(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["lineHeight"];
		this.push(newStyle);
		return this;
	}

	withFontWeight(category: Style["Category"]): TypographyBuilder {
		const newStyle = tailwind[category]["fontWeight"];
		this.push(newStyle);
		return this;
	}

	withLetterSpacing(category: Style["Category"]): TypographyBuilder {
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
