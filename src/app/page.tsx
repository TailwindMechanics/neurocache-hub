//path: src\app\page.tsx

"use server";

import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@modules/Auth/client";

const Authenticated = await import("@modules/Auth/server/authenticated").then(
    (c) => c.default,
);
const Unauthenticated = await import(
    "@modules/Auth/server/unauthenticated"
).then((c) => c.default);

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
