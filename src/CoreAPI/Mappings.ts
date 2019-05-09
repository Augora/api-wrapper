export function flattenArrayAttribute(attributeName: string, array: any[], nestedArrayAssociativeArray: object): any[] {
  return array.map(i => i[nestedArrayAssociativeArray[attributeName]]);
}

export function getSafeArrayLength(array: any[]): number {
  return array ? array.length : 0;
}
