//path: src\modules\Auth\client\index.tsx

import authenticatedProvider from "./hooks/authenticatedProvider";
import guestProvider from "./hooks/guestProvider";
import UseLoggedOut from "./hooks/useLoggedOut";
import UseLoggedIn from "./hooks/useLoggedIn";
import loginNode from "./loginNode";

namespace IAuthClient {
    export const AuthenticatedProvider = authenticatedProvider;
    export const GuestProvider = guestProvider;
    export const useLoggedIn = UseLoggedIn;
    export const useLoggedOut = UseLoggedOut;
    export const LoginNode = loginNode;
}

export default IAuthClient;
