//path: src\modules\Colors\colors.tsx

import jsonColors from "./colors.json";
const flatColors: { [key: string]: string } = {};

Object.entries(jsonColors).forEach(([colorName, colorValues]) => {
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
export { flatColors as Colors };
