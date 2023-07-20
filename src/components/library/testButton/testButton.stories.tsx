//path: src\components\library\testButton\testButton.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "./testButton";

export default {
	title: "Components/Button",
	component: TestButton,
} as Meta;

const Template: StoryObj<typeof TestButton> = {
	args: {},
	render: (args) => <TestButton {...args} />,
};

export const Primary: StoryObj<typeof TestButton> = {
	...Template,
	args: {
		label: "Test Button",
		onClick: () => console.log("Clicked!"),
	},
};
