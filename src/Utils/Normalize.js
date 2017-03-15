import { normalize } from 'normalizr';
import { depute } from './Schema/DeputesSchema';

export function normalizeDeputes(normalizeFunction, deputesFromAPI) {
  return normalizeFunction(deputesFromAPI);
}

export function normalizeDeputesFactory(normalizeFunction) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

export const providedNormalizeDeputes = normalizeDeputesFactory(data => normalize(data, [depute]));

export default providedNormalizeDeputes;
