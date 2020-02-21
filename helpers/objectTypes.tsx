export function getObjectType(obj: Object) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export function isComponentWillChange(oldValue: Object, newValue: Object) {
  const oldType = getObjectType(oldValue);
  const newType = getObjectType(newValue);
  return newType !== oldType;
}
