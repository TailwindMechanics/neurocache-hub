//path: src\modules\Auth\client\index.ts

import { Scope, createInjector } from "typed-inject";

import authenticatedProvider from "./hooks/authenticatedProvider";
import guestProvider from "./hooks/guestProvider";
import loginNode from "./loginNode";

class AuthClient {
    public readonly AuthenticatedProvider = authenticatedProvider;
    public readonly GuestProvider = guestProvider;
    public readonly LoginNode = loginNode;
}

const Injector = createInjector().provideClass(
    "IAuthClient",
    AuthClient,
    Scope.Singleton,
);

export default Injector;
