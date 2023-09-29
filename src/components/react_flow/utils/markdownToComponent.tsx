import * as prod from "react/jsx-runtime";
import remarkRehype from "remark-rehype";
import rehypePrism from "./rehypePrism";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import parse from "remark-parse";
import React from "react";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

const processor = unified()
	.use(parse)
	.use(remarkRehype)
	.use(rehypePrism)
	.use(rehypeReact, production);

export default function markdownToComponent(markdown: string) {
	const component = processor.processSync(markdown).result as JSX.Element;
	const result = <>{component}</>;
	return result;
}
