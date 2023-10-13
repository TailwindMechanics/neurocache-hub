//path: src\app\page.tsx

import { FC } from "react";
import React from "react";

import InitModules from "./initModules";
import IAuthClient from "@modules/Auth/client";
import IAuthServer from "@modules/Auth/server";

const page: FC = () => {
    return (
        <>
            <InitModules />
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
