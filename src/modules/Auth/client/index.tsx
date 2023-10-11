//path: src\modules\Auth\client\index.tsx

"use client";

import { AuthenticatedProvider } from "./hooks/authenticatedProvider";
import { GuestProvider } from "./hooks/guestProvider";
import useLoggedOut from "./hooks/useLoggedOut";
import useLoggedIn from "./hooks/useLoggedIn";
import loginNode from "./loginNode";

interface Auth {
    useLoggedIn: typeof useLoggedIn;
    useLoggedOut: typeof useLoggedOut;
    LoginNode: typeof loginNode;
    AuthenticatedProvider: typeof AuthenticatedProvider;
    GuestProvider: typeof GuestProvider;
}

const IAuth: Auth = {
    useLoggedIn: useLoggedIn,
    useLoggedOut: useLoggedOut,
    LoginNode: loginNode,
    AuthenticatedProvider: AuthenticatedProvider,
    GuestProvider: GuestProvider,
};

export default IAuth;
