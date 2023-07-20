//path: src\components\z_deprecated\docs\docSection.tsx

import { LivePanel } from "../generic/livePanel";
import { Divider } from "../generic/divider";
import React from "react";

interface DocSectionProps {
	title: string;
	body: string;
	moreLink?: string;
}

const DocSection: React.FC<DocSectionProps> = ({ title, body, moreLink }) => (
	<div className={`w-full px-4 pb-4`}>
		<h2 className="mb-1 text-2xl font-extrabold text-text-light">
			{title}
		</h2>
		<p className="mx-1 rounded-md border border-main-light border-opacity-30 px-4 py-2 text-lg font-normal text-text-light">
			{body}
		</p>
		{moreLink && moreLink.trim() !== "" && (
			<a
				href={moreLink}
				target="_blank"
				rel="noopener noreferrer"
				className="ml-2 inline-flex items-center pt-1 text-lg text-blue-600 hover:underline dark:text-blue-500"
			>
				Read more
				<svg
					className="ml-2 h-3.5 w-3.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
		)}
	</div>
);

export default DocSection;
