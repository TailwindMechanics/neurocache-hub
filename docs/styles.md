```tsx

type TypographyStyles = {
	color: string;
	hover: string;
	textSize: string;
	fontFamily: string;
	textAlign: string;
	lineHeight: string;
	fontWeight: string;
	letterSpacing: string;
};

type CategoryStyles = {
	bg: string;
	hover: string;
	border: string;
	radius: string;
	shadow: string;
	padding: string;
};

const typography: Record<Style["Category"], TypographyStyles> = {
	overt: {
		color: "text-cherry-h",
		hover: "hover:cherry-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	calm: {
		color: "text-aqua-h",
		hover: "hover:aqua-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	alert: {
		color: "text-peach-h",
		hover: "hover:peach-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	subtle: {
		color: "text-grape-h",
		hover: "hover:grape-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	ghost: {
		color: "text-grape-h",
		hover: "",
		textSize: "text-3xl",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
	node: {
		color: "text-aqua-h",
		hover: "hover:aqua-p",
		textSize: "text-lg",
		fontFamily: "font-mono",
		textAlign: "text-center",
		lineHeight: "leading-loose",
		fontWeight: "font-extrabold",
		letterSpacing: "tracking-widest",
	},
};

const styles: Record<Style["Category"], CategoryStyles> = {
	overt: {
		bg: "bg-cherry-d",
		hover: "hover:bg-cherry",
		border: "border-cherry-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4 py-2",
	},
	calm: {
		bg: "bg-aqua-d",
		hover: "hover:bg-aqua",
		border: "border-aqua-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4",
	},
	alert: {
		bg: "bg-peach-d",
		hover: "hover:bg-peach",
		border: "border-peach-l",
		radius: "rounded-full",
		shadow: "shadow-lg drop-shadow-lg",
		padding: "px-4",
	},
	subtle: {
		bg: "bg-util",
		hover: "hover:bg-grape-a",
		border: "border-grape",
		radius: "rounded-full",
		shadow: "shadow-inner shadow-grape-d",
		padding: "px-4",
	},
	node: {
		bg: "bg-aqua-d",
		hover: "hover:bg-aqua",
		border: "border-aqua-l",
		radius: "rounded-full",
		shadow: "shadow-inner shadow-aqua-d",
		padding: "p-6",
	},
	ghost: {
		bg: "bg-util",
		hover: "",
		border: "",
		radius: "",
		shadow: "",
		padding: "",
	},
};


```