//path: src\app\page.tsx

import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@modules/Auth/client";
import { Authenticated, Unauthenticated } from "@modules/Auth/server";

const page: React.FC = () => {
    return (
        <>
            {/* <Authenticated>
                <AuthenticatedProvider />
            </Authenticated> */}
            <Unauthenticated>
                <GuestProvider />
            </Unauthenticated>
        </>
    );
};

export default page;
