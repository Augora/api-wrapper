import { normalize } from 'normalizr';
import { deputy } from './Schema/DeputiesSchema';
import { deputyInOffice } from './Schema/DeputiesInOfficeSchema';

interface INormalize {
  (o : object): object;
}

export function normalizeDeputes(normalizeFunction: INormalize, deputesFromAPI : object) {
  return normalizeFunction(deputesFromAPI);
}

export function normalizeDeputesFactory(normalizeFunction : INormalize) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

export const providedNormalizeDeputes = normalizeDeputesFactory(data => normalize(data, [deputy]));

const deputiesInOfficeNormalizer = (data : object) => normalize(data, [deputyInOffice]);
export const providedNormalizeDeputesInOffice = normalizeDeputesFactory(deputiesInOfficeNormalizer);
