//path: src\modules\Auth\index.tsx

import { Unauthenticated } from "./Internal/unauthenticated";
import { Authenticated } from "./Internal/authenticated";
import useLoggedIn from "./Internal/hooks/useLoggedIn";
import useLoggedOut from "./Internal/hooks/useLoggedOut";
import loginNode from "./Internal/loginNode";

interface Auth {
    Authenticated: React.FC<ChildProps>;
    Unauthenticated: React.FC<ChildProps>;
    useLoggedIn: typeof useLoggedIn;
    useLoggedOut: typeof useLoggedOut;
    LoginNode: typeof loginNode;
}

const IAuth: Auth = {
    Authenticated,
    Unauthenticated,
    useLoggedIn: useLoggedIn,
    useLoggedOut: useLoggedOut,
    LoginNode: loginNode,
};

export default IAuth;
