//path: src\modules\Auth\server\index.tsx

// src\modules\Auth\server\index.tsx

import unauthenticated from "./unauthenticated";
import authenticated from "./authenticated";

namespace IAuthServer {
    export const Unauthenticated = unauthenticated;
    export const Authenticated = authenticated;
}

export default IAuthServer;
