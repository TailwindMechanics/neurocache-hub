//path: src\components\components\ComponentBuilder.tsx

import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { AtomProps } from "@src/types/declarations";
import { Atom } from "@src/data/icons";
import React, { FC } from "react";
import Image from "next/image";

export default class ComponentBuilder {
	private dataProps: { [key: string]: string | boolean | number } = {};
	private imageComponent?: React.ReactNode;
	private withTween: boolean = false;
	private newProps: AtomProps = {};
	private styles: string[] = [];
	private animationProps = {};
	private label: string = "";
	private node: FC<AtomProps>;

	constructor(atom: FC<AtomProps>) {
		this.node = atom;
	}

	private push = (style: string) => {
		if (IsNullOrEmpty(style)) return;

		if (!this.styles.includes(style)) {
			this.styles.push(style);
		}
	};

	withData(key: string, value: string | boolean | number): ComponentBuilder {
		this.dataProps[`data-${key}`] = value;
		return this;
	}

	withBg(): ComponentBuilder {
		this.push("from-night-dark to-night-light bg-gradient-to-t via-night");
		return this;
	}

	withRoundedFrame(): ComponentBuilder {
		this.push("rounded-t-md rounded-b-xl");
		return this;
	}

	withRoundedContent(): ComponentBuilder {
		this.push("rounded-t rounded-b-lg");
		return this;
	}

	withRoundedElement(): ComponentBuilder {
		this.push("rounded");
		return this;
	}

	withRoundedButton(): ComponentBuilder {
		this.push("rounded-t-ms rounded-b-lg");
		return this;
	}

	withScrollbar(): ComponentBuilder {
		this.push(
			"scrollbar-thin scrollbar-thumb-night-dark scrollbar-track-night-light",
		);
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

	withShadow(): ComponentBuilder {
		this.push(`drop-shadow-[-2px_5px_0.5px_rgba(0,0,20,.72)]`);
		return this;
	}

	withHoverShadow(): ComponentBuilder {
		this.push(`hover:drop-shadow-[-2px_5px_0.25px_rgba(0,0,20,.72)]`);
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

	build(): FC<AtomProps> {
		const styles = this.styles.join(" ");
		return (props: AtomProps) => {
			let newClassName = `${props.className ?? ""} ${styles}`.trim();
			let newProps = {
				...props,
				className: newClassName,
				...this.newProps,
				...this.dataProps,
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
