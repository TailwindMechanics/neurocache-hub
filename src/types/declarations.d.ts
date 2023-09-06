//path: src\types\declarations.d.ts

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

export type NodeFlowValue = {
	ids: string[];
	payload: string | null;
};