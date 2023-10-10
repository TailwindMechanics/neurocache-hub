//path: src\modules\Composer\External\index.d.ts

import { ChangeEvent, KeyboardEventHandler, FormEventHandler, FocusEventHandler, CSSProperties, HTMLInputTypeAttribute, ReactNode } from "react";

interface AtomProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onSubmit?: FormEventHandler<HTMLInputElement> | undefined;
    onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
	'aria-label'?: string | undefined;
	style?: CSSProperties | undefined;
	displayValue?(item: any): string;
	placeholder?: string | undefined;
	autoFocus?: boolean | undefined;
	tabIndex?: number | undefined;
	type?: HTMLInputTypeAttribute;
	title?: string | undefined;
	id?: string | undefined;
	onClick?: () => void;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	value?: string;
}