import { normalize } from 'normalizr';
import { depute } from './Schema/DeputesSchema';

interface INormalize {
  (o : object): object
}

export function normalizeDeputes(normalizeFunction: INormalize, deputesFromAPI : object) {
  return normalizeFunction(deputesFromAPI);
}

export function normalizeDeputesFactory(normalizeFunction : INormalize) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

export const providedNormalizeDeputes = normalizeDeputesFactory(data => normalize(data, [depute]));

export default providedNormalizeDeputes;
