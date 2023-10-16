//path: src\modules\Composer\types.tsx

import { AnimationControls } from "framer-motion";

import {
    HTMLInputTypeAttribute,
    KeyboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    CSSProperties,
    ChangeEvent,
    ReactNode,
    FormEvent,
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
    "aria-label"?: string | undefined;
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
