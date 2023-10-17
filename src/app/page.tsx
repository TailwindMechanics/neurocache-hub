//path: src\app\page.tsx

"use server";

import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@modules/Graph";
const { Authenticated } = await import(
    "@modules/Auth/External/server/authenticated"
);
const { Unauthenticated } = await import(
    "@modules/Auth/External/server/unauthenticated"
);

export default async function Page() {
    return (
        <>
            <AuthenticatedProvider />
            {/* <Authenticated>
            </Authenticated>
            <Unauthenticated>
                <GuestProvider />
            </Unauthenticated> */}
        </>
    );
}
