//path: src\components\library\buttons\primaryButton.stories.tsx

import PrimaryButton from "./primaryButton";
import { Meta } from "@storybook/react";
import React from "react";

export default {
	title: "Buttons/Primary Button",
	component: PrimaryButton,
} as Meta;

export const Accessible = () => <PrimaryButton />;
