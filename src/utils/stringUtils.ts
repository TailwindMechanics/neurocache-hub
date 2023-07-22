//path: src\utils\stringUtils.ts

export function IsNullOrEmpty(input: string | null | undefined) {
	return (
		input === undefined ||
		input === null ||
		(typeof input === "string" && input.trim() === "")
	);
}
