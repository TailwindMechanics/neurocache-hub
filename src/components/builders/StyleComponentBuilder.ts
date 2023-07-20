//path: src\components\builders\StyleComponentBuilder.ts

class StyleBuilder {
	private element: React.ReactElement;

	constructor(element: React.ReactElement) {
		this.element = element;
	}

	private withStyle(
		group: keyof typeof styleTokens,
		token: string,
	): StyleBuilder {
		const style = styleTokens[group][token];
		const newElement = React.cloneElement(this.element, {
			className: style,
		});

		this.element = newElement;
		return this;
	}

	withBgPrimary(): StyleBuilder {
		return this.withStyle("bg", "primary");
	}

	withBgDanger(): StyleBuilder {
		return this.withStyle("bg", "danger");
	}

	withHoverPrimary(): StyleBuilder {
		return this.withStyle("hover", "primary");
	}

	withBorderGhost(): StyleBuilder {
		return this.withStyle("border", "ghost");
	}

	withTextWhite(): StyleBuilder {
		return this.withStyle("text", "white");
	}

	withFontBold(): StyleBuilder {
		return this.withStyle("font", "bold");
	}

	build(): React.ReactElement {
		return this.element;
	}
}

type StyleGroup = "bg" | "hover" | "border" | "text" | "font";
type BgTokens = "primary" | "danger";
type HoverTokens = "primary" | "danger";
type BorderTokens = "ghost";
type TextTokens = "white";
type FontTokens = "bold";

type StyleTokens = {
	[group in StyleGroup]: Record<string, string>;
};

const styleTokens: StyleTokens = {
	bg: {
		primary: "bg-blue-500",
		danger: "bg-red-500",
	},
	hover: {
		primary: "hover:bg-blue-700",
		danger: "hover:bg-red-700",
	},
	border: {
		ghost: "border-gray-200",
	},
	text: {
		white: "text-white",
	},
	font: {
		bold: "font-bold",
	},
};

// Usage:
//  const styleBuilder = new StyleBuilder(<button>Click me</button>)
// 	.withBgPrimary()
// 	.withHoverPrimary()
// 	.withTextWhite()
// 	.withFontBold();
//  const MyStyledButton = styleBuilder.build();
