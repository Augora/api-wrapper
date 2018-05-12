import { normalizeDeputes, providedNormalizeDeputes } from "./Normalize";
import Seeds from "./DeputesSeeds";

test("calls the function", () => {
  const func = jest.fn();
  const data = {};
  normalizeDeputes(func, data);
  expect(func).toBeCalled();
});

test("return passed value", () => {
  const func = f => f;
  const data = {};
  expect(normalizeDeputes(func, data)).toBe(data);
});

test("Test deputy normalization with seed", () => {
  expect(providedNormalizeDeputes(Seeds[0])).toMatchSnapshot();
});

test("Test deputies normalization with seeds", () => {
  expect(providedNormalizeDeputes(Seeds)).toMatchSnapshot();
});
