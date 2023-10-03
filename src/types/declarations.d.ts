//path: src\types\declarations.d.ts

import { Node, Edge, NodeTypes, NodeProps, Position } from 'reactflow';
import { ReactNode, FC, HTMLAttributes } from "react";
import flatColors from '@src/data/colors.ts';
import { BehaviorSubject } from 'rxjs';

interface AtomProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: KeyboardEventHandler<T> | undefined;
	onFocus?: FocusEventHandler<T> | undefined;
	onBlur?: FocusEventHandler<T> | undefined;
	displayValue?(item: TType): string;
	'aria-label'?: string | undefined;
	style?: CSSProperties | undefined;
	placeholder?: string | undefined;
	autoFocus?: boolean | undefined;
	tabIndex?: number | undefined;
	type?: HTMLInputTypeAttribute;
	title?: string | undefined;
	onClick?: () => void;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	value?: string;
}

export type NodeFlowValue = {
	ids: string[];
	payload: string | null;
};