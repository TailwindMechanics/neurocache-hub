//path: src\modules\Composer\types.tsx

import { AnimationControls, MotionProps } from "framer-motion";

import {
    HTMLInputTypeAttribute,
    KeyboardEventHandler,
    FocusEventHandler,
    CSSProperties,
    ChangeEvent,
    ReactNode,
} from "react";

export interface CodeBlockProps {
    language: string | null;
    value: string;
}

export interface ColouredLineProps {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    sourceHandleRotation?: number;
    targetHandleRotation?: number | null;
    showSourceRing?: boolean;
    showTargetRing?: boolean;
    className?: string;
    controls: AnimationControls;
}

export interface AtomProps {
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onSubmit?: () => void;
    onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    "aria-label"?: string | undefined;
    style?: CSSProperties | undefined;
    displayValue?(item: any): string;
    placeholder?: string | undefined;
    autoFocus?: boolean | undefined;
    tabIndex?: number | undefined;
    type?: HTMLInputTypeAttribute;
    onDoubleClick?: () => void;
    title?: string | undefined;
    id?: string | undefined;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    value?: string;
    motion?: MotionProps;
    enabled?: boolean;
    setEnabled?: (state: boolean) => void;
    enabledColor?: string;
    disabledColor?: string;
    options?: string[];
    onSelected?: (selected: string) => void;
    active?: boolean;
    selected?: boolean;
}
