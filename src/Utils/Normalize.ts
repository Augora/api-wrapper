import { normalize } from 'normalizr';
import { depute } from './Schema/DeputesSchema';
import { deputyInOffice } from './Schema/DeputiesInOfficeSchema'

interface INormalize {
  (o : object): object;
}

export function normalizeDeputes(normalizeFunction: INormalize, deputesFromAPI : object) {
  return normalizeFunction(deputesFromAPI);
}

export function normalizeDeputesFactory(normalizeFunction : INormalize) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

export const providedNormalizeDeputes = normalizeDeputesFactory(data => normalize(data, [depute]));

const deputiesInOfficeNormalizer = (data : object) => normalize(data, [deputyInOffice]);
export const providedNormalizeDeputesInOffice = normalizeDeputesFactory(deputiesInOfficeNormalizer);
