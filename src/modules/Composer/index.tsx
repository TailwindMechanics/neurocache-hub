//path: src\modules\Composer\index.tsx

import { FC } from "react";

import ComboInput from "./presets/comboInput";
import Content from "./presets/content";
import Button from "./presets/button";
import Prose from "./presets/prose";
import Shell from "./presets/shell";
import input from "./presets/input";
import Card from "./presets/card";
import Form from "./presets/form";

import comboAtom from "./atoms/comboInput";
import inputAtom from "./atoms/input";
import formAtom from "./atoms/form";
import cardAtom from "./atoms/card";
import button from "./atoms/button";
import divAtom from "./atoms/div";

import ColouredLine, { ColouredLineProps } from "./colouredLine";
import CodeBlock, { CodeBlockProps } from "./codeBlock";
import ComponentBuilder from "./ComponentBuilder";
import { AtomProps } from "@shared/types";
import Builder from "./ComponentBuilder";

interface InputProps {
	Default: FC<AtomProps>;
	Combo: FC<AtomProps>;
}

const Input: InputProps = {
	Default: input,
	Combo: ComboInput,
};

const InputAtoms: InputProps = {
	Default: inputAtom,
	Combo: comboAtom,
};

interface AtomsProps {
	Button: FC<AtomProps>;
	Input: InputProps;
	Form: FC<AtomProps>;
	Card: FC<AtomProps>;
	Div: FC<AtomProps>;
}

const Atoms: AtomsProps = {
	Button: button,
	Input: InputAtoms,
	Form: formAtom,
	Card: cardAtom,
	Div: divAtom,
};

interface ComponentsProps {
	Builder: typeof ComponentBuilder;
	Atoms: AtomsProps;
	Button: FC<AtomProps>;
	Card: FC<AtomProps>;
	Content: FC<AtomProps>;
	Shell: FC<AtomProps>;
	Form: FC<AtomProps>;
	Input: InputProps;
	Prose: FC<AtomProps>;
	Line: FC<ColouredLineProps>;
	CodeBlock: FC<CodeBlockProps>;
}

const Components: ComponentsProps = {
	Builder,
	Atoms,
	Button,
	Card,
	Content,
	Shell,
	Form,
	Input,
	Prose,
	Line: ColouredLine,
	CodeBlock,
};

export default Components;
