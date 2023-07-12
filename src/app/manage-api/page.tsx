//path: src\app\manage-api\page.tsx

"use client"

import DataTable from "@/components/generic/dataTable";
import Hublayout from "@/components/hub/hubLayout";
import { FC } from 'react'


const ManageApiRoot: FC = () => {
    return <>
        <Hublayout headerText='Manage Api'>
            <div className="w-full grayscale -mt-1">
                <DataTable />
            </div>
        </Hublayout>
    </>
}

export default ManageApiRoot