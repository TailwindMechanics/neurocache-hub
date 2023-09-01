//path: src\types\declarations.d.ts

import { ButtonOutput } from '@src/components/react_flow/nodes/buttonOutput';
import { InputLabel } from '@src/components/react_flow/nodes/inputLabel';
import { Node, Edge, NodeTypes, NodeProps, Position } from 'reactflow';
import { ReactNode, FC, HTMLAttributes } from "react";
import flatColors from '@src/data/colors.ts';
import { BehaviorSubject } from 'rxjs';

type AtomNode = FC<AtomProps>;

interface AtomProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>{
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	onClick?: () => void;
}

export type CustomNode = {
	type: "button_output",
	label: "Output Button",
	component: typeof ButtonOutput,
} | {
	type: "input_label",
	label: "Input Label",
	component: typeof InputLabel,
};

export interface NodeConfigItem {
	node: CustomNode;
	outputId: string;
	inputId: string;
	nodeId: string;
	title: string;
	body: string;
	position: {x: number, y: number};
}

export type NodeFlowValue = {
	ids: string[];
	payload: string;
};