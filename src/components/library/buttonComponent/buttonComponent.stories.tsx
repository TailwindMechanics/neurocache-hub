//path: src\components\library\buttonComponent\buttonComponent.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./buttonComponent";
import React from "react";

export default {
	title: "Buttons/ButtonComponent",
	component: ButtonComponent,
	argTypes: {
		category: {
			control: {
				type: "select",
				options: [
					"overt",
					"calm",
					"alert",
					"subtle",
				],
			},
		},
	},
} as Meta;

const Template: StoryObj<typeof ButtonComponent> = {
	args: {},
	render: (args) => <ButtonComponent {...args} />,
};

export const Overt: StoryObj<typeof ButtonComponent> = {
	...Template,
	args: {
		label: "overt",
		category: "overt",
	},
};

export const Calm: StoryObj<typeof ButtonComponent> = {
	...Template,
	args: {
		label: "calm",
		category: "calm",
	},
};

export const Alert: StoryObj<typeof ButtonComponent> = {
	...Template,
	args: {
		label: "alert",
		category: "alert",
	},
};

export const Subtle: StoryObj<typeof ButtonComponent> = {
	...Template,
	args: {
		label: "subtle",
		category: "subtle",
	},
};
