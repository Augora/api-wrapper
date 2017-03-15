import { get } from '../Utils/APICall';
import normalizeDeputies from '../Utils/Normalize';

export function getDeputes() {
  return get('http://www.nosdeputes.fr/deputes/json')
    .map(r => r.data)
    .map(d => d.deputes.map(i => Object.assign({}, i.depute)))
    .map(d => normalizeDeputies(d));
}

export default getDeputes;
