import { normalize } from "normalizr";
import { deputy } from "./Schema/DeputySchema";

export interface INormalize {
  (o: object): object;
}

const deputiesInOfficeNormalizer = (data: object) => normalize(data, [deputy]);

export function normalizeDeputes(
  normalizeFunction: INormalize,
  deputesFromAPI: object
) {
  return normalizeFunction(deputesFromAPI);
}

export function normalizeDeputesFactory(normalizeFunction: INormalize) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

export const providedNormalizeDeputes = normalizeDeputesFactory(
  (data: object) => normalize(data, [deputy])
);

export function providedNormalizeDeputy(data: object) {
  return normalize(data, [deputy]);
}
export const providedNormalizeDeputesInOffice = normalizeDeputesFactory(
  deputiesInOfficeNormalizer
);
