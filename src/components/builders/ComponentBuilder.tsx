//path: src\components\builders\ComponentBuilder.tsx

import { AtomNode, AtomProps } from "@src/types/declarations";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { Atom } from "@src/data/icons";
import Image from "next/image";
import React from "react";

export default class ComponentBuilder {
	private imageComponent?: React.ReactNode;
	private withTween: boolean = false;
	private newProps: AtomProps = {};
	private styles: string[] = [];
	private animationProps = {};
	private label: string = "";
	private node: AtomNode;

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	private push = (style: string) => {
		if (IsNullOrEmpty(style)) return;

		if (!this.styles.includes(style)) {
			this.styles.push(style);
		}
	};

	withBg(): ComponentBuilder {
		this.push("from-night-dark to-night-light bg-gradient-to-t via-night");
		return this;
	}

	withRounded(): ComponentBuilder {
		this.push("rounded-t-md rounded-b-xl");
		return this;
	}

	withLabel(label: string): ComponentBuilder {
		this.label = label;
		return this;
	}

	withStyle(style: string): ComponentBuilder {
		this.push(style);
		return this;
	}

	withImage(imageUrl: string | undefined): ComponentBuilder {
		this.imageComponent = imageUrl ? (
			<Image
				src={imageUrl}
				alt="Content"
				className="h-8 w-8 rounded-full"
				width={80}
				height={80}
			/>
		) : (
			<Atom />
		);
		return this;
	}

	withWidth(value: string): ComponentBuilder {
		this.push(`w-${value}`);
		return this;
	}

	withHeight(value: string): ComponentBuilder {
		this.push(`h-${value}`);
		return this;
	}

	withSpace(value: string): ComponentBuilder {
		this.push(`space-${value}`);
		return this;
	}

	withFlex(): ComponentBuilder {
		this.push("flex");
		return this;
	}

	withFlexDirection(
		direction: "row" | "row-reverse" | "col" | "col-reverse",
	): ComponentBuilder {
		this.push(`flex-${direction}`);
		return this;
	}

	withJustifyContent(
		value: "center" | "start" | "end" | "between" | "around" | "evenly",
	): ComponentBuilder {
		this.push(`justify-${value}`);
		return this;
	}

	withAlignItems(
		value: "center" | "start" | "end" | "baseline" | "stretch",
	): ComponentBuilder {
		this.push(`items-${value}`);
		return this;
	}

	withAlignContent(
		value: "center" | "start" | "end" | "between" | "around" | "stretch",
	): ComponentBuilder {
		this.push(`content-${value}`);
		return this;
	}

	withFlexWrap(value: "wrap" | "wrap-reverse" | "nowrap"): ComponentBuilder {
		this.push(`flex-${value}`);
		return this;
	}

	withFlexGrow(): ComponentBuilder {
		this.push("flex-grow");
		return this;
	}

	withFlexShrink(): ComponentBuilder {
		this.push("flex-shrink");
		return this;
	}

	withOrder(value: number): ComponentBuilder {
		this.push(`order-${value}`);
		return this;
	}

	withPointerCursor(): ComponentBuilder {
		this.newProps = {
			...this.newProps,
			style: {
				...this.newProps.style,
				cursor: "pointer",
			},
		};
		return this;
	}

	withAriaLabel(label: string): ComponentBuilder {
		if (IsNullOrEmpty(label)) return this;

		this.newProps["aria-label"] = label;
		return this;
	}

	withUnselectableText(): ComponentBuilder {
		this.newProps = {
			...this.newProps,
			style: {
				...this.newProps.style,
				userSelect: "none",
			},
		};
		return this;
	}

	withFocus(onFocus: () => void, onBlur: () => void): ComponentBuilder {
		this.newProps = {
			...this.newProps,
			onFocus: onFocus,
			onBlur: onBlur,
		};
		return this;
	}

	withTooltip(title: string): ComponentBuilder {
		if (IsNullOrEmpty(title)) return this;

		this.newProps.title = title;
		return this;
	}

	withDisabled(disabled: boolean): ComponentBuilder {
		this.newProps.disabled = disabled;
		return this;
	}

	withHover(): ComponentBuilder {
		if (!this.withTween) return this;

		this.animationProps = {
			...this.animationProps,
			whileHover: { scale: 1.02 },
		};
		return this;
	}

	withOnClick(clickEvent: () => void): ComponentBuilder {
		this.newProps = {
			...this.newProps,
			onClick: clickEvent,
		};

		if (this.withTween) {
			this.animationProps = {
				...this.animationProps,
				whileTap: { scale: 0.97 },
			};
		}

		return this;
	}

	withTweens(): ComponentBuilder {
		this.withTween = true;
		return this;
	}

	withKeyboardNav(): ComponentBuilder {
		this.newProps = {
			...this.newProps,
			tabIndex: 0,
			onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
				// Check if the key pressed was either Enter or Spacebar
				if (event.key === "Enter" || event.key === " ") {
					// Prevent the default action to stop scrolling when space clicked
					event.preventDefault();
					// Trigger the onClick event if one is set
					if (this.newProps.onClick) {
						this.newProps.onClick();
					}
				}
			},
		};

		return this;
	}

	build(): AtomNode {
		const styles = this.styles.join(" ");
		return (props: AtomProps) => {
			let newClassName = `${props.className ?? ""} ${styles}`.trim();
			let newProps = {
				...props,
				className: newClassName,
				...this.newProps,
			};
			return (
				<this.node {...newProps} {...this.animationProps}>
					{this.imageComponent}
					{props.children}
					{this.label}
				</this.node>
			);
		};
	}
}
