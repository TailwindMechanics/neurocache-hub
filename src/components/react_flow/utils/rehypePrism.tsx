import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import refractor from "refractor/core";
import { Node } from "unist";

// Existing imports
import javascript from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import cssExtras from "refractor/lang/css-extras";
import jsExtras from "refractor/lang/js-extras";
import markdown from "refractor/lang/markdown";
import csharp from "refractor/lang/csharp";
import json from "refractor/lang/json";
import css from "refractor/lang/css";
import jsx from "refractor/lang/jsx";
import sql from "refractor/lang/sql";

// New imports for additional languages
import python from "refractor/lang/python";
import ruby from "refractor/lang/ruby";
import java from "refractor/lang/java";
import php from "refractor/lang/php";

// Register existing languages
refractor.register(typescript);
refractor.register(javascript);
refractor.register(cssExtras);
refractor.register(jsExtras);
refractor.register(markdown);
refractor.register(csharp);
refractor.register(json);
refractor.register(css);
refractor.register(jsx);
refractor.register(sql);

// Register new languages
refractor.register(python);
refractor.register(ruby);
refractor.register(java);
refractor.register(php);

refractor.alias({ jsx: ["js"] });

const getLanguage = (node: any): string | null => {
	const className = node.properties.className || [];

	for (const classListItem of className) {
		if (classListItem.slice(0, 9) === "language-") {
			return classListItem.slice(9).toLowerCase();
		}
	}

	return null;
};

const rehypePrism = (options?: { ignoreMissing?: boolean }) => {
	return (tree: Node) => {
		visit(tree, "element", visitor);
	};

	function visitor(node: any, index: number, parent: any) {
		if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
			return;
		}

		const lang = getLanguage(node);

		if (lang === null) {
			return;
		}

		let result: any;
		try {
			parent.properties.className = (
				parent.properties.className || []
			).concat(`language-${lang}`);
			result = refractor.highlight(toString(node), lang);
		} catch (err: unknown) {
			if (
				options?.ignoreMissing &&
				err instanceof Error &&
				/Unknown language/.test(err.message)
			) {
				return;
			}
			throw err;
		}

		node.children = result;
	}
};

export default rehypePrism;
