//path: src\types\declarations.d.ts

import { ReactNode, FC, HTMLAttributes } from "react";
import flatColors from '@src/data/colors.ts';


type ColorKeys = keyof typeof flatColors;
type ColorType = `${ColorKeys}`;

interface Style {
	Category: "overt" | "calm" | "alert" | "subtle";
	Element: "bg" | "hover" | "border";
	TextSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
	FontFamily: "sans" | "serif" | "mono";
	TextColor: ColorType;
	TextAlignment: "left" | "center" | "right" | "justify";
	LineHeight: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
	FontWeight: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
	LetterSpacing: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
}

interface AtomProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}

type AtomNode = FC<AtomProps>;


interface IconProps {
	className?: string;
}

interface UserProfile {
	user_id: string;
	first_name: string;
	last_name: string;
	avatar_url: string;
}

interface Route {
	isActive: (path: string) => boolean;
	icon: React.FC<IconProps>;
	name: string;
	path: string;
	authenticated: boolean;
}

declare module "react-tailwindcss-datepicker";
declare module "react-notifications" {
	const content: any;
	export = content;
}
