import { assign } from "lodash";
import { getFromUrl } from "../Utils/APICall";
import {
  providedNormalizeDeputes,
  providedNormalizeDeputesInOffice,
  providedNormalizeDeputy
} from "../Utils/Normalize";

interface IResponse {
  data: any;
}

interface IDeputyHolder {
  depute: {};
}

interface IDeputies {
  deputes: [{}];
}

export function getDeputies() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/json")
    .then((r: IResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) => assign({}, i.depute))
    )
    .then((d: {}) => providedNormalizeDeputes(d));
}

export function getDeputiesInOffice() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/enmandat/json")
    .then((r: IResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) => assign({}, i.depute))
    )
    .then((d: {}) => providedNormalizeDeputesInOffice(d));
}

export function getDeputy(nom: string) {
  return getFromUrl(`https://www.nosdeputes.fr/${nom}/json`)
    .then((r: IResponse) => r.data)
    .then((d: {}) => providedNormalizeDeputy(d));
}

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy
};
