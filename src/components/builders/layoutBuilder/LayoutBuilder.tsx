//path: src\components\builders\layoutBuilder\LayoutBuilder.tsx

import { AtomNode, AtomProps, Style } from "@src/types/declarations";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React from "react";

export default class LayoutBuilder {
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

	withSpace(value: string): LayoutBuilder {
		this.push(`space-${value}`);
		return this;
	}

	withFlex(): LayoutBuilder {
		this.push("flex");
		return this;
	}

	withFlexDirection(
		direction: "row" | "row-reverse" | "col" | "col-reverse",
	): LayoutBuilder {
		this.push(`flex-${direction}`);
		return this;
	}

	withJustifyContent(
		value: "center" | "start" | "end" | "between" | "around" | "evenly",
	): LayoutBuilder {
		this.push(`justify-${value}`);
		return this;
	}

	withAlignItems(
		value: "center" | "start" | "end" | "baseline" | "stretch",
	): LayoutBuilder {
		this.push(`items-${value}`);
		return this;
	}

	withAlignContent(
		value: "center" | "start" | "end" | "between" | "around" | "stretch",
	): LayoutBuilder {
		this.push(`content-${value}`);
		return this;
	}

	withFlexWrap(value: "wrap" | "wrap-reverse" | "nowrap"): LayoutBuilder {
		this.push(`flex-${value}`);
		return this;
	}

	withFlexGrow(): LayoutBuilder {
		this.push("flex-grow");
		return this;
	}

	withFlexShrink(): LayoutBuilder {
		this.push("flex-shrink");
		return this;
	}

	withOrder(value: number): LayoutBuilder {
		this.push(`order-${value}`);
		return this;
	}

	build(): AtomNode {
		const styles = this.styles;
		return (props: AtomProps) => {
			let newClassName = props.className ?? "";
			newClassName += ` ${styles.join(" ")}`;
			let newProps = { ...props, className: newClassName.trim() };
			return <this.node {...newProps} />;
		};
	}
}
