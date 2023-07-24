//path: src\components\builders\buttonBuilder\buttonBuilder.tsx

import TypographyBuilder from "@src/components/builders/typographyBuilder/TypographyBuilder";
import BehaviourBuilder from "@src/components/builders/behaviourBuilder/BehaviourBuilder";
import StyleBuilder from "@src/components/builders/styleBuilder/StyleBuilder";
import { AtomNode, Style } from "@src/types/declarations";

type buttonProps = {
	category: Style["Category"];
	onClick: () => void;
	ariaLabel: string;
	disabled: boolean;
	tooltip: string;
};

export default class ButtonBuilder {
	private props: buttonProps;
	private node: AtomNode;

	constructor(node: AtomNode) {
		this.node = node;
		this.props = {
			category: "calm",
			onClick: () => {},
			ariaLabel: "",
			disabled: false,
			tooltip: "",
		};
	}

	withCategory(category: Style["Category"]): ButtonBuilder {
		this.props.category = category;
		return this;
	}

	withOnClick(onClick: () => void): ButtonBuilder {
		this.props.onClick = onClick;
		return this;
	}

	withAriaLabel(ariaLabel: string): ButtonBuilder {
		this.props.ariaLabel = ariaLabel;
		return this;
	}

	withDisabled(disabled: boolean): ButtonBuilder {
		this.props.disabled = disabled;
		return this;
	}

	withTooltip(tooltip: string): ButtonBuilder {
		this.props.tooltip = tooltip;
		return this;
	}

	build() {
		let build = new StyleBuilder(this.node)
			.withBorderRadius(this.props.category)
			.withBorder(this.props.category)
			.withShadow(this.props.category)
			.withHover(this.props.category)
			.withBg(this.props.category)
			.build();

		build = new TypographyBuilder(build)
			.withTextAlignment(this.props.category)
			.withFontFamily(this.props.category)
			.withHoverColor(this.props.category)
			.withFontWeight(this.props.category)
			.withLineHeight(this.props.category)
			.withTextColor(this.props.category)
			.withTextSize(this.props.category)
			.build();

		build = new BehaviourBuilder(build)
			.withClick(this.props.onClick)
			.withPointerCursor()
			.withKeyboardNav()
			.withUnselectableText()
			.withAriaLabel(this.props.ariaLabel)
			.withDisabled(this.props.disabled)
			.withTooltip(this.props.tooltip)
			.withHover()
			.build();

		return build;
	}
}
