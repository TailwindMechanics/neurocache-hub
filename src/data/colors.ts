import Colors from "./colors.json";

// Here we define the type of flatColors explicitly
const flatColors: { [key: string]: string } = {};

Object.entries(Colors).forEach(([colorName, colorValues]) => {
	Object.entries(colorValues).forEach(([variant, value]) => {
		// If the variant is 'DEFAULT', we just use the color name.
		// Otherwise, we append the variant to the color name.
		const key =
			variant === "DEFAULT"
				? colorName
				: `${colorName}-${variant}`;

		flatColors[key] = value;
	});
});

// Delete the 'colorName-DEFAULT' entries
for (let colorName in flatColors) {
	if (colorName.endsWith("-DEFAULT")) {
		delete flatColors[colorName];
	}
}

export default flatColors;
