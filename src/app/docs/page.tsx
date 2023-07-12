

import DocsBlock from '@/components/docs/docsBlock';
import HubLayout from '@/components/hub/hubLayout';
import docsData from '@/data/docs.json';


const Docs = () => {
    return (
        <HubLayout headerText={'Documentation'}>
            <div className='p-10 gap-10 flex flex-col w-full items-center'>
                {Object.entries(docsData).map(([blockTitle, sectionsData]) => (
                    <DocsBlock key={blockTitle} title={blockTitle} sectionsData={sectionsData} />
                ))}
                <span className='border border-transparent h-10'></span>
            </div>
        </HubLayout>
    );
}

export default Docs;