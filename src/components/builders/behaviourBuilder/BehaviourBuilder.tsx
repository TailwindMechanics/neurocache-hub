//path: src\components\builders\behaviourBuilder\BehaviourBuilder.tsx

import { AtomNode, AtomProps } from "@src/types/declarations";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React from "react";

export default class BehaviourBuilder {
	private newProps: AtomProps = {};
	private animationProps = {};
	private node: AtomNode;

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	withPointerCursor(): BehaviourBuilder {
		this.newProps = {
			...this.newProps,
			style: {
				...this.newProps.style,
				cursor: "pointer",
			},
		};
		return this;
	}

	withAriaLabel(label: string): BehaviourBuilder {
		if (IsNullOrEmpty(label)) return this;

		this.newProps["aria-label"] = label;
		return this;
	}

	withUnselectableText(): BehaviourBuilder {
		this.newProps = {
			...this.newProps,
			style: {
				...this.newProps.style,
				userSelect: "none",
			},
		};
		return this;
	}

	withFocus(onFocus: () => void, onBlur: () => void): BehaviourBuilder {
		this.newProps = {
			...this.newProps,
			onFocus: onFocus,
			onBlur: onBlur,
		};
		return this;
	}

	withTooltip(title: string): BehaviourBuilder {
		if (IsNullOrEmpty(title)) return this;

		this.newProps.title = title;
		return this;
	}

	withDisabled(disabled: boolean): BehaviourBuilder {
		this.newProps.disabled = disabled;
		return this;
	}

	withHover(): BehaviourBuilder {
		this.animationProps = {
			...this.animationProps,
			whileHover: { scale: 1.01 },
		};
		return this;
	}

	withClick(clickEvent: () => void, tween = true): BehaviourBuilder {
		this.newProps = {
			...this.newProps,
			onClick: clickEvent,
		};

		if (tween) {
			this.animationProps = {
				...this.animationProps,
				whileTap: { scale: 0.99 },
			};
		}

		return this;
	}

	withKeyboardNav(): BehaviourBuilder {
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
		const RenderNode = (props: any) => (
			<this.node {...this.newProps} {...this.animationProps} {...props} />
		);
		return RenderNode;
	}
}
