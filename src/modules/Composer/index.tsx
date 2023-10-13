//path: src\modules\Composer\index.tsx

import { FC } from "react";

import ComponentBuilder from "./Internal/components/ComponentBuilder";
import ColouredLine from "../Graph/Internal/components/colouredLine";
import CodeBlock from "../Graph/Internal/components/codeBlock";
import ComboInput from "./Internal/presets/comboInput";
import Content from "./Internal/presets/content";
import Button from "./Internal/presets/button";
import Prose from "./Internal/presets/prose";
import Shell from "./Internal/presets/shell";
import input from "./Internal/presets/input";
import Card from "./Internal/presets/card";
import Form from "./Internal/presets/form";
import { AtomProps } from "./types";

interface InputProps {
    Default: FC<AtomProps>;
    Combo: FC<AtomProps>;
}

const Input: InputProps = {
    Default: input,
    Combo: ComboInput,
};

export function IComposerInit() {
    for (const key in IComposer) {
        console.log(key);
    }
}

namespace IComposer {
    export const Builder = ComponentBuilder;
    export const Components = {
        Line: ColouredLine,
        Input,
        Card,
        Content,
        Button,
        Form,
        Prose,
        Shell,
        CodeBlock,
    };
}

export default IComposer;
