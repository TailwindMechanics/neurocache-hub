//path: src\app\dashboard\page.tsx

"use client";

import Dashboard from "@/components/dashboard/dashboard";
import HubLayout from "@/components/hub/hubLayout";
import type { FC } from "react";


const DashboardRoot: FC = function () {
    return (
        <HubLayout headerText={"Dashboard"}>
            <Dashboard />
        </HubLayout>
    );
}; 

export default DashboardRoot;