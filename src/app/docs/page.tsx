//path: src\app\docs\page.tsx

import DocsBlock from "@/components/docs/docsBlock";
import HubLayout from "@/components/hub/hubLayout";
import docsData from "@/data/docs.json";

const Docs = () => {
	return (
		<HubLayout headerText={"Documentation"}>
			<div className="flex w-full flex-col items-center gap-10 p-10">
				{Object.entries(docsData).map(
					([
						blockTitle,
						sectionsData,
					]) => (
						<DocsBlock
							key={
								blockTitle
							}
							title={
								blockTitle
							}
							sectionsData={
								sectionsData
							}
						/>
					),
				)}
				<span className="h-10 border border-transparent"></span>
			</div>
		</HubLayout>
	);
};

export default Docs;
