//path: src\modules\Auth\server\index.tsx

import { Unauthenticated } from "./unauthenticated";
import { Authenticated } from "./authenticated";

interface Auth {
    Authenticated: React.FC<ChildProps>;
    Unauthenticated: React.FC<ChildProps>;
}

const IAuth: Auth = {
    Authenticated,
    Unauthenticated,
};

export default IAuth;
