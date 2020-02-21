import objectPath from "object-path";

export function hasChilds(path: string, data: any): boolean {
  const has = objectPath.has(data, path);

  return has;
}
