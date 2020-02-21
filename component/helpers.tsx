export function getPatch(keyPath: Array<string>, name: string, add?: string) {
  const path =
    keyPath.length === 0
      ? name
      : `${keyPath.toString().replace(/,/g, ".")}`;
  return add === undefined ? path : path + add;
}
