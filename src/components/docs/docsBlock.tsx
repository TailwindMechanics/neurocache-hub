//path: src\components\docs\docsBlock.tsx

// path: src\app\docs\docsBlock.tsx

import React from 'react';
import DocSection from './docSection';
import { LivePanel } from '../generic/livePanel';
import { Divider } from '../generic/divider';

interface SectionData {
    body: string;
    moreLink?: string;
}

interface DocsBlockProps {
    title: string;
    sectionsData: Record<string, SectionData>;
}

const DocsBlock: React.FC<DocsBlockProps> = ({ title, sectionsData }) => (
        <div className='p-4 border border-main-light shadow-2xl drop-shadow-2xl rounded-xl'>
            <h1 className='text-4xl font-bold text-text-light text-center'>{title}</h1>
            <Divider tailwind='bg-main-light bg-opacity-50 w-1/2 mb-4 mx-auto' />
            {Object.entries(sectionsData).map(([topic, sectionData]) => (
                <DocSection key={topic} title={topic} body={sectionData.body} moreLink={sectionData.moreLink} />
            ))}
        </div>
);

export default DocsBlock;
