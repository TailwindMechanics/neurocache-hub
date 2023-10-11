// .storybook/preview.js

import { create } from "@storybook/theming";
import "../src/app/globals.css";

export const parameters = {
    layout: "padded",
    actions: { argTypesRegex: "^on.*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme: create({
            base: "dark",
            colorPrimary: "#f96f69",
            colorSecondary: "#77cabf",
            appBg: "#222425",
        }),
    },
    backgrounds: {
        grid: { disable: false },
        default: "dark",
        values: [
            { name: "dark", value: "#222425" },
            { name: "white", value: "#c6ede5" },
        ],
    },
};
