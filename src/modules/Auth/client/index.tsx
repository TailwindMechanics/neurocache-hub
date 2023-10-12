//path: src\modules\Auth\client\index.tsx

"use client";

export { AuthenticatedProvider } from "./hooks/authenticatedProvider";
export { GuestProvider } from "./hooks/guestProvider";
import useLoggedOut from "./hooks/useLoggedOut";
import useLoggedIn from "./hooks/useLoggedIn";
import loginNode from "./loginNode";

interface Auth {
    useLoggedIn: typeof useLoggedIn;
    useLoggedOut: typeof useLoggedOut;
    LoginNode: typeof loginNode;
}

const IAuth: Auth = {
    useLoggedIn: useLoggedIn,
    useLoggedOut: useLoggedOut,
    LoginNode: loginNode,
};

export default IAuth;
