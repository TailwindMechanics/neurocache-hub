/** @type {import('tailwindcss').Config} */
const colors = require("./src/modules/Colors/colors.json");

const flatColors = {};
Object.entries(colors).forEach(([colorName, colorValues]) => {
    Object.entries(colorValues).forEach(([variant, value]) => {
        const key =
            variant === "DEFAULT" ? colorName : `${colorName}-${variant}`;

        flatColors[key] = value;
    });
});

for (let colorName in flatColors) {
    if (colorName.endsWith("-DEFAULT")) {
        delete flatColors[colorName];
    }
}

let colorUtilities = {};
for (let colorName in flatColors) {
    if (flatColors.hasOwnProperty(colorName)) {
        colorUtilities["." + colorName] = {
            color: flatColors[colorName],
        };
    }
}

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    mode: "jit",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            outlineWidth: {
                "0.04rem": "0.04rem",
                "0.05rem": "0.05rem",
                "0.1rem": "0.1rem",
            },
            outlineOffset: {
                "0.04rem": "0.04rem",
                "0.05rem": "0.05rem",
                "0.1rem": "0.1rem",
            },
            borderRadius: {
                ms: "0.2rem",
            },
            strokeWidth: {
                0.5: "0.5px",
                1: "1px",
                1.5: "1.5px",
                2: "2px",
                2.25: "2.25px",
                2.5: "2.5px",
                3: "3px",
                3.5: "3.5px",
                4: "4px",
                5: "5px",
                6: "6px",
            },
            width: {
                "main-column": "0%",
            },
            colors: colors,
            fontSize: {
                ss: ".35rem",
                xs: ".5rem",
                sm: ".675rem",
                md: ".75rem",
                lg: ".875rem",
                xl: "1rem",
                "2xl": "1.15rem",
                "3xl": "1.5rem",
                "4xl": "1.75rem",
                "5xl": "2.875rem",
                "6xl": "3rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
        function ({ addUtilities }) {
            addUtilities(colorUtilities);
            addUtilities(
                {
                    ".stroke-dash-1-1": {
                        strokeDasharray: "1 1",
                    },
                    ".stroke-dash-1-2": {
                        strokeDasharray: "1 2",
                    },
                    ".stroke-dash-1-3": {
                        strokeDasharray: "1 3",
                    },
                    ".stroke-dash-1-4": {
                        strokeDasharray: "1 4",
                    },
                    ".scrollbar-hide": {
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                    },
                },
                ["responsive", "hover", "focus"],
            );
        },
        function ({ addBase, theme }) {
            addBase({
                "::selection": {
                    backgroundColor: theme("colors.text-select"),
                    color: theme("colors.text"),
                },
                "::-moz-selection": {
                    backgroundColor: theme("colors.text-select"),
                    color: theme("colors.text"),
                },
            });
        },
    ],
};
