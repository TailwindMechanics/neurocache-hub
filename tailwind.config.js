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
    darkMode: "class",
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            minWidth: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
            },
            minHeight: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
            },
            Width: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
            },
            maxHeight: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
            },
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
            borderWidth: {
                0.25: "0.25px",
                0.5: "0.5px",
                0.75: "0.75px",
                1: "1px",
                1.25: "1.25px",
                1.5: "1.5px",
                1.75: "1.75px",
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
                8: "8px",
                10: "10px",
                12: "12px",
                14: "14px",
                15: "15px",
                16: "16px",
                18: "18px",
                20: "20px",
            },
            width: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
                "main-column": "0%",
                "1p": "1%",
                "2p": "2%",
                "3p": "3%",
                "4p": "4%",
                "5p": "5%",
                "5.5p": "5.5%",
                "6p": "6%",
                "6.5p": "6.5%",
                "7p": "7%",
                "8p": "8%",
                "9p": "9%",
                "9.5p": "9.5%",
                "10p": "10%",
                "10.5p": "10.5%",
                "11p": "11%",
                "12p": "12%",
                "13p": "13%",
                "14p": "14%",
                "15p": "15%",
                "16p": "16%",
                "17p": "17%",
                "18p": "18%",
                "19p": "19%",
                "20p": "20%",
                "25p": "25%",
                "30p": "30%",
                "33p": "33%",
                "35p": "35%",
                "40p": "40%",
                "50p": "50%",
                "60p": "60%",
                "70p": "70%",
                "75p": "75%",
                "80p": "80%",
                "90p": "90%",
                "100p": "100%",
            },
            height: {
                "1u": "20px",
                "1.5u": "30px",
                "2u": "40px",
                "2.5u": "50px",
                "3u": "60px",
                "3.5u": "70px",
                "4u": "80px",
                "4.5u": "90px",
                "5u": "100px",
                "5.5u": "110px",
                "6u": "120px",
                "6.5u": "130px",
                "7u": "140px",
                "7.5u": "150px",
                "8u": "160px",
                "8.5u": "170px",
                "9u": "180px",
                "9.5u": "190px",
                "10u": "200px",
                "10.5u": "210px",
                "11u": "220px",
                "11.5u": "230px",
                "12u": "240px",
                "12.5u": "250px",
                "13u": "260px",
                "13.5u": "270px",
                "14u": "280px",
                "14.5u": "290px",
                "15u": "300px",
                "15.5u": "310px",
                "16u": "320px",
                "16.5u": "330px",
                "17u": "340px",
                "17.5u": "350px",
                "18u": "360px",
                "18.5u": "370px",
                "19u": "380px",
                "19.5u": "390px",
                "20u": "400px",
                "1p": "1%",
                "2p": "2%",
                "3p": "3%",
                "4p": "4%",
                "5p": "5%",
                "5.5p": "5.5%",
                "6p": "6%",
                "6.5p": "6.5%",
                "7p": "7%",
                "8p": "8%",
                "9.5p": "9.5%",
                "10p": "10%",
                "10.5p": "10.5%",
                "10p": "10%",
                "10.5p": "10.5%",
                "11p": "11%",
                "12p": "12%",
                "13p": "13%",
                "14p": "14%",
                "15p": "15%",
                "16p": "16%",
                "17p": "17%",
                "18p": "18%",
                "19p": "19%",
                "20p": "20%",
                "25p": "25%",
                "30p": "30%",
                "33p": "33%",
                "35p": "35%",
                "40p": "40%",
                "50p": "50%",
                "60p": "60%",
                "70p": "70%",
                "75p": "75%",
                "80p": "80%",
                "90p": "90%",
                "100p": "100%",
            },
            colors: colors,
            fontSize: {
                tny: ".25rem",
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
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/typography"),
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
                    ".capitalize-first::first-letter": {
                        textTransform: "capitalize",
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
