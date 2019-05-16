export function flattenArrayAttribute(
  attributeName: string,
  array: any[],
  nestedArrayAssociativeArray: object
) {
  return array.map(i => i[nestedArrayAssociativeArray[attributeName]]);
}

export function getSafeArrayLength(array: any[]) {
  return array ? array.length : 0;
}
