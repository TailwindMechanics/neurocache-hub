//path: src\app\page.tsx

import { FC } from "react";
import React from "react";

import AuthServer from "@modules/Auth/server";
const IAuthServer = AuthServer.resolve("IAuthServer");
import AuthClient from "@modules/Auth/client";
const IAuthClient = AuthClient.resolve("IAuthClient");

const page: FC = () => {
    return (
        <>
            <IAuthServer.Authenticated>
                <IAuthClient.AuthenticatedProvider />
            </IAuthServer.Authenticated>
            <IAuthServer.Unauthenticated>
                <IAuthClient.GuestProvider />
            </IAuthServer.Unauthenticated>
        </>
    );
};

export default page;
