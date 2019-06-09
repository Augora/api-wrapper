import assign from "lodash/assign";

export function cleanUpNestedObject(nestedStructure: any) {
  if (nestedStructure instanceof Array) {
    return nestedStructure.map(e => cleanUpNestedObject(e));
  }
  if (nestedStructure instanceof Object) {
    const keys = Object.keys(nestedStructure);
    if (keys.length === 1 && nestedStructure[keys[0]] instanceof Object) {
      return cleanUpNestedObject(nestedStructure[keys[0]]);
    } else {
      return keys.reduce((prev, curr) => {
        return assign({}, prev, {
          [curr]: cleanUpNestedObject(nestedStructure[curr]),
        });
      }, {});
    }
  }
  return nestedStructure;
}
