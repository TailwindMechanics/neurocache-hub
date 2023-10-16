//path: src\modules\Auth\server\index.ts

// path: src\modules\Auth\server\index.ts

"use server";

export const authenticated = async () =>
    (await import("./authenticated")).default;
export const unauthenticated = async () =>
    (await import("./unauthenticated")).default;
