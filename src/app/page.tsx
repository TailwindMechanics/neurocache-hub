//path: src\app\page.tsx

import { FC } from "react";
import React from "react";

import { AuthenticatedProvider, GuestProvider } from "@modules/Auth/client";
import IAuthServer from "@modules/Auth/server";

const page: FC = () => {
    return (
        <>
            <IAuthServer.Authenticated>
                <AuthenticatedProvider />
            </IAuthServer.Authenticated>
            <IAuthServer.Unauthenticated>
                <GuestProvider />
            </IAuthServer.Unauthenticated>
        </>
    );
};

export default page;
