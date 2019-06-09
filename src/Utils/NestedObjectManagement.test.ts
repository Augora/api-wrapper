import { cleanUpNestedObject } from "./NestedObjectManagement";

it("should return the same structure", () => {
  const simpleStructure = {
    lel: "lel",
  };
  expect(cleanUpNestedObject(simpleStructure)).toMatchObject({
    lel: "lel",
  });
});

it("should cleanUp this simple object", () => {
  const simpleStructure = {
    lel: {
      a: "a",
      b: "b",
    },
  };
  expect(cleanUpNestedObject(simpleStructure)).toMatchObject({
    a: "a",
    b: "b",
  });
});

it("should cleanup nested object with depth of 3", () => {
  const depthStructure = {
    lel: {
      a: "a",
      b: {
        c: {
          kek: "xD",
          mdr: "dsqdsqdsqdsq",
        },
      },
    },
  };
  expect(cleanUpNestedObject(depthStructure)).toMatchObject({
    a: "a",
    b: {
      kek: "xD",
      mdr: "dsqdsqdsqdsq",
    },
  });
});

it("should cleanUp this array object", () => {
  const simpleStructure = {
    lels: [
      {
        lel: {
          a: "a",
          b: "b",
        },
      },
      {
        lel: {
          a: "a",
          b: "b",
        },
      },
      {
        lel: {
          a: "a",
          b: "b",
        },
      },
    ],
  };
  expect(cleanUpNestedObject(simpleStructure)).toMatchObject([
    { a: "a", b: "b" },
    { a: "a", b: "b" },
    { a: "a", b: "b" },
  ]);
});
