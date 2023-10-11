//path: src\modules\Colors\Internal\colors.ts

// eslint-disable-next-line
import Colors from "./colors.json";

export const flatColors: { [key: string]: string } = {};

Object.entries(Colors).forEach(([colorName, colorValues]) => {
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
