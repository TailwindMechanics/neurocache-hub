//path: src\components\builders\behaviourBuilder\BehaviourBuilder.tsx

import { AtomNode, AtomProps } from "@src/types/declarations";
import { motion } from "framer-motion";
import React from "react";

export default class BehaviourBuilder {
	private onClick: (() => void) | undefined;
	private node: AtomNode;
	useHover = false;
	useTween = false;

	private animations = {
		whileHover: { scale: 1.01 },
		whileTap: { scale: 0.99 },
	};

	constructor(atom: AtomNode) {
		this.node = atom;
	}

	withHover(): BehaviourBuilder {
		this.useHover = true;
		return this;
	}

	// prettier-ignore
	withClick(onClick: () => void, tween = true): BehaviourBuilder {
		this.onClick = onClick;
		this.useTween = tween;
		return this;
	}

	build(): AtomNode {
		let animation = {};

		if (this.useHover) {
			animation = {
				...animation,
				whileHover: this.animations.whileHover,
			};
		}

		if (this.useTween) {
			animation = {
				...animation,
				whileTap: this.animations.whileTap,
			};
		}

		return (props: AtomProps) => {
			const handleClick = () => {
				if (this.onClick) {
					this.onClick();
				}
			};

			// Instead of assigning onClick here
			// let newProps = { ...props, onClick: handleClick };

			// Assign onClick to TestComponent directly
			return (
				<motion.div {...animation}>
					<this.node
						{...props}
						onClick={
							handleClick
						}
					/>
				</motion.div>
			);
		};
	}
}
