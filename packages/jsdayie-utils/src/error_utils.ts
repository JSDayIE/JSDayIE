export function throwIfNever(x: never) {
    if (x !== undefined) {
        throw new Error("This should never happen!");
    }
}
