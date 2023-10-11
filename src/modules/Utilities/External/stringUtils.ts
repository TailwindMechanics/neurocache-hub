//path: src\modules\Utilities\stringUtils.ts

export function IsNullOrEmpty(input: string | null | undefined) {
    return (
        input === undefined ||
        input === null ||
        (typeof input === "string" && input.trim() === "")
    );
}

export function Uid() {
    const id =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
    return id;
}
