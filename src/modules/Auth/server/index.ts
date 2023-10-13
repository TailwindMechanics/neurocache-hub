//path: src\modules\Auth\server\index.ts

import { Scope, createInjector } from "typed-inject";

import Unauthenticated from "./unauthenticated";
import Authenticated from "./authenticated";

class AuthServer {
    public readonly Unauthenticated = Unauthenticated;
    public readonly Authenticated = Authenticated;
}

const Injector = createInjector().provideClass(
    "IAuthServer",
    AuthServer,
    Scope.Singleton,
);

export default Injector;
