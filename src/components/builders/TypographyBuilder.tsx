//path: src\components\builders\TypographyBuilder.tsx

import { AtomNode, AtomProps, Style } from "@/types/declarations";
import React from "react";

export default class TypographyBuilder {
	private node: AtomNode;
	private styles: string[] = [];

	private push = (style: string) => {
		this.styles.push(style);
	};

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	withTextSize(size: Style["TextSize"]): TypographyBuilder {
		const tw = `text-${size}`;
		this.push(tw);
		return this;
	}

	withFontFamily(family: Style["FontFamily"]): TypographyBuilder {
		const tw = `font-${family}`;
		this.push(tw);
		return this;
	}

	withTextColor(color: Style["TextColor"]): TypographyBuilder {
		const tw = `text-${color}`;
		this.push(tw);
		return this;
	}

	withTextAlignment(align: Style["TextAlignment"]): TypographyBuilder {
		const tw = `text-${align}`;
		this.push(tw);
		return this;
	}

	withLineHeight(height: Style["LineHeight"]): TypographyBuilder {
		const tw = `leading-${height}`;
		this.push(tw);
		return this;
	}

	withFontWeight(weight: Style["FontWeight"]): TypographyBuilder {
		const tw = `font-${weight}`;
		this.push(tw);
		return this;
	}

	withLetterSpacing(
		spacing: Style["LetterSpacing"],
	): TypographyBuilder {
		const tw = `tracking-${spacing}`;
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
