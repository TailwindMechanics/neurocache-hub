//path: src\modules\Utils\Internal\collectionUtils.ts

export const RandomElement = (arr: any[]) =>
    arr[Math.floor(Math.random() * arr.length)];
