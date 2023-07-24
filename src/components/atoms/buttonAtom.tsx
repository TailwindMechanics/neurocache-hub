//path: src\components\atoms\buttonAtom.tsx

import ButtonBuilder from "../builders/buttonBuilder/buttonBuilder";
import { ButtonProps } from "@src/types/declarations";
import atomicDiv from "./atomicDiv";

export default class ButtonAtom {
	overt() {
		return this.build({
			ariaLabel: "Overt",
			tooltip: "Overt",
			category: "overt",
			disabled: false,
			label: "Overt",
			onClick: () => {
				console.log("clicked Overt");
			},
		});
	}

	calm() {
		return this.build({
			ariaLabel: "Calm",
			tooltip: "Calm",
			category: "calm",
			disabled: false,
			label: "Calm",
			onClick: () => {
				console.log("clicked Calm");
			},
		});
	}

	alert() {
		return this.build({
			ariaLabel: "Alert",
			tooltip: "Alert",
			category: "alert",
			disabled: false,
			label: "Alert",
			onClick: () => {
				console.log("clicked Alert");
			},
		});
	}

	subtle() {
		return this.build({
			ariaLabel: "Subtle",
			tooltip: "Subtle",
			category: "subtle",
			disabled: false,
			label: "Subtle",
			onClick: () => {
				console.log("clicked Subtle");
			},
		});
	}

	build(props: ButtonProps) {
		return new ButtonBuilder(atomicDiv)
			.withAriaLabel(props.ariaLabel)
			.withDisabled(props.disabled)
			.withCategory(props.category)
			.withTooltip(props.tooltip)
			.withOnClick(props.onClick)
			.build();
	}
}
