//path: src\components\atoms\buttonAtom.tsx

import ReactFlowBuilder from "../builders/reactFlowBuilder/ReactFlowBuilder";
import ButtonBuilder from "../builders/buttonBuilder/ButtonBuilder";
import { ButtonProps } from "@src/types/declarations";
import atomicDiv from "./atomicDiv";

export default class ButtonAtom {
	React = {
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
		},
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
		},
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
		},
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
		},
		ghost(label: string, onClick: () => void) {
			return this.build({
				ariaLabel: "Ghost",
				tooltip: "Ghost",
				category: "ghost",
				disabled: false,
				label: label,
				onClick: onClick,
			});
		},
		build(props: ButtonProps) {
			return new ButtonBuilder(atomicDiv)
				.withAriaLabel(props.ariaLabel)
				.withDisabled(props.disabled)
				.withCategory(props.category)
				.withTooltip(props.tooltip)
				.withOnClick(props.onClick)
				.withLabel(props.label)
				.build();
		},
	};

	Flow = {
		calm: new ReactFlowBuilder(this.React.calm())
			.withType("custom_calm")
			.withPosition(0, 0),

		overt: new ReactFlowBuilder(this.React.overt())
			.withType("custom_overt")
			.withPosition(-50, 0),

		alert: new ReactFlowBuilder(this.React.alert())
			.withType("custom_alert")
			.withPosition(50, 0),

		subtle: new ReactFlowBuilder(this.React.subtle())
			.withType("custom_subtle")
			.withPosition(0, 50),
	};
}
