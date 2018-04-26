import { getFromUrl } from "../Utils/APICall";
import { assign } from "lodash";
import {
  providedNormalizeDeputes,
  providedNormalizeDeputesInOffice,
  providedNormalizeDeputy
} from "../Utils/Normalize";

interface Response {
  data: any;
}

interface Deputy {}

interface DeputyHolder {
  depute: Deputy;
}

interface Deputies {
  deputes: [Deputy];
}

export function getDeputies() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/json")
    .then((r: Response) => r.data)
    .then((d: Deputies) =>
      d.deputes.map((i: DeputyHolder) => assign({}, i.depute))
    )
    .then((d: Deputy) => providedNormalizeDeputes(d));
}

export function getDeputiesInOffice() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/enmandat/json")
    .then((r: Response) => r.data)
    .then((d: Deputies) =>
      d.deputes.map((i: DeputyHolder) => assign({}, i.depute))
    )
    .then((d: Deputy) => providedNormalizeDeputesInOffice(d));
}

export function getDeputy(nom: string) {
  return getFromUrl(`https://www.nosdeputes.fr/${nom}/json`)
    .then((r: Response) => r.data)
    .then((d: Deputy) => providedNormalizeDeputy(d));
}

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy
};
