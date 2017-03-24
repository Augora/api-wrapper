import { get } from '../Utils/APICall';
import {
  providedNormalizeDeputes,
  providedNormalizeDeputesInOffice,
} from '../Utils/Normalize';

interface Response {
  data: any;
}

interface Deputy { }

interface DeputyHolder {
  depute: Deputy;
}

interface Deputies {
  deputes: [ Deputy ];
}

export function getDeputies() {
  return get('http://www.nosdeputes.fr/deputes/json')
    .map((r : Response) => r.data)
    .map((d : Deputies) => d.deputes.map((i : DeputyHolder) => Object.assign({}, i.depute)))
    .map((d : Deputy) => providedNormalizeDeputes(d));
}

export function getDeputiesInOffice() {
  return get('http://www.nosdeputes.fr/deputes/enmandat/json')
    .map((r : Response) => r.data)
    .map((d : Deputies) => d.deputes.map((i : DeputyHolder) => Object.assign({}, i.depute)))
    .map((d : Deputy) => providedNormalizeDeputesInOffice(d));
}
