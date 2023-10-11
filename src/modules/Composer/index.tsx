//path: src\modules\Composer\index.tsx

import { FC } from "react";

import ComponentBuilder from "./Internal/components/ComponentBuilder";
import ColouredLine from "./Internal/components/colouredLine";
import CodeBlock from "./Internal/components/codeBlock";
import ComboInput from "./Internal/presets/comboInput";
import { AtomProps, CodeBlockProps } from "./types";
import Content from "./Internal/presets/content";
import Button from "./Internal/presets/button";
import Prose from "./Internal/presets/prose";
import Shell from "./Internal/presets/shell";
import input from "./Internal/presets/input";
import Card from "./Internal/presets/card";
import Form from "./Internal/presets/form";

interface InputProps {
    Default: FC<AtomProps>;
    Combo: FC<AtomProps>;
}

const Input: InputProps = {
    Default: input,
    Combo: ComboInput,
};

interface IComponents {
    Line: typeof ColouredLine;
    Input: InputProps;
    Card: FC<AtomProps>;
    Content: FC<AtomProps>;
    Button: FC<AtomProps>;
    Form: FC<AtomProps>;
    Prose: FC<AtomProps>;
    Shell: FC<AtomProps>;
    CodeBlock: FC<CodeBlockProps>;
}

interface Composer {
    Builder: typeof ComponentBuilder;
    Components: IComponents;
}

const IComposer: Composer = {
    Builder: ComponentBuilder,
    Components: {
        Line: ColouredLine,
        Input: Input,
        Card: Card,
        Content: Content,
        Button: Button,
        Form: Form,
        Prose: Prose,
        Shell: Shell,
        CodeBlock: CodeBlock,
    } as IComponents,
};

export default IComposer;
