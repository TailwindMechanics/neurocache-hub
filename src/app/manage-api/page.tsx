//path: src\app\manage-api\page.tsx

"use client";

import DataTable from "@/components/generic/dataTable";
import Hublayout from "@/components/hub/hubLayout";
import { FC } from "react";

const ManageApiRoot: FC = () => {
	return (
		<>
			<Hublayout headerText="Manage Api">
				<div className="-mt-1 w-full grayscale">
					<DataTable />
				</div>
			</Hublayout>
		</>
	);
};

export default ManageApiRoot;
