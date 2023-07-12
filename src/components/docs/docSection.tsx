//path: src\components\docs\docSection.tsx

import { LivePanel } from '../generic/livePanel';
import { Divider } from '../generic/divider';
import React from 'react';


interface DocSectionProps {
    title: string;
    body: string;
    moreLink?: string;
}

const DocSection: React.FC<DocSectionProps> = ({ title, body, moreLink }) => (
    <div className={`px-4 pb-4 w-full`}>
            <h2 className="text-2xl mb-1 font-extrabold text-text-light">{title}</h2>
            <p className="mx-1 px-4 py-2 text-lg border rounded-md border-main-light border-opacity-30 font-normal text-text-light">{body}</p>
            {moreLink && moreLink.trim() !== "" &&
                <a href={moreLink} target="_blank" rel="noopener noreferrer" className="ml-2 pt-1 inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            }
        </div>
);

export default DocSection;