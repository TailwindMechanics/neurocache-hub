//path: src\app\page.tsx

"use server";

import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@modules/Graph";

const { Authenticated } = await import(
    "@modules/Auth/External/Server/authenticated"
);
const { Unauthenticated } = await import(
    "@modules/Auth/External/Server/unauthenticated"
);

export interface ServerComponents {
    UpsertAgentGraph: React.ReactNode;
}

export default async function Page() {
    return (
        <>
            <Authenticated>
                <AuthenticatedProvider />
            </Authenticated>
            <Unauthenticated>
                <GuestProvider />
            </Unauthenticated>
        </>
    );
}
