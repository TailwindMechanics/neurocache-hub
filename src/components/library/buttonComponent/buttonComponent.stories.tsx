//path: src\components\library\buttonComponent\buttonComponent.stories.tsx

import ButtonComponent from "./buttonComponent";
import { Story, Meta } from "@storybook/react";
import { Style } from "@/types/declarations";
import React from "react";

interface ButtonComponentStoryProps {
	category: Style["Category"];
}

export default {
	title: "Buttons/ButtonComponent",
	component: ButtonComponent,
	argTypes: {
		category: {
			control: {
				type: "select",
				options: [
					"primary",
					"secondary",
					"ghost",
					"warning",
				],
			},
		},
	},
} as Meta;

const Template: Story<ButtonComponentStoryProps> = (args) => (
	<ButtonComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	category: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	category: "secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
	category: "ghost",
};

export const Warning = Template.bind({});
Warning.args = {
	category: "warning",
};
