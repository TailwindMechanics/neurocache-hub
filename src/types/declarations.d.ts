//path: src\types\declarations.d.ts

import { ReactFlowNodeProps } from "reactflow";
import { ReactNode, FC, HTMLAttributes } from "react";
import { Node, Edge, NodeTypes } from "reactflow";
import flatColors from '@src/data/colors.ts';

export type NodeType = "debug_output" | "debug_input";

type ColorKeys = keyof typeof flatColors;
type ColorType = `${ColorKeys}`;

interface ReactFlowCanvasProps {
	nodes: Node[];
	edges: Edge[];
	types: NodeTypes;
}

export interface NodeConfigItem {
	component: React.ComponentType<BaseNodeProps>;
	label: string;
	title: string;
	body: string;
	type: NodeType;
}

type NodeState =
	| "constructed"
	| "activate"
	| "active"
	| "deactivate"
	| "inactive"
	| "completed"
	| "failed"
	| "paused"
	| "resumed"
	| "stopped"
	| "destroyed"
	| "error"
	| "restarted";

export interface BaseNodeProps extends ReactFlowNodeProps {
	send: (payload: string) => void;
	imageUrl?: string;
	title: string;
	body: string;
	type: string;
	children?: ReactNode;
	id: string;
	inputId: string;
	outputId: string;
}

interface Style {
	Category: "overt" | "calm" | "alert" | "subtle" | "node" | "ghost";
	Element: "bg" | "hover" | "border";
	TextSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
	FontFamily: "sans" | "serif" | "mono";
	TextColor: ColorType;
	TextAlignment: "left" | "center" | "right" | "justify";
	LineHeight: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
	FontWeight: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
	LetterSpacing: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
}

type ButtonProps = {
	category?: Style["Category"];
	onClick: () => void;
	ariaLabel: string;
	disabled: boolean;
	tooltip: string;
	label: string;
};

interface AtomProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>{
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	onClick?: () => void;
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
