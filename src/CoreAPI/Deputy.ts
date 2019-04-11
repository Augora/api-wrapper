import { assign } from "lodash";
import { getFromUrl } from "../Utils/APICall";
import { deputyAttributesMapping } from "./Mappings";
import "./Types";

export function getDeputies() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/json")
    .then((r: IResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) =>
        assign({}, deputyAttributesMapping(i.depute))
      )
    );
}

export function getDeputiesInOffice() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/enmandat/json")
    .then((r: IResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) =>
        assign({}, deputyAttributesMapping(i.depute))
      )
    );
}

export function getDeputy(slug: string) {
  return getFromUrl(`https://www.nosdeputes.fr/${slug}/json`)
    .then((r: IResponse) => r.data)
    .then((d: IDeputyHolder) => deputyAttributesMapping(d.depute));
}

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy
};
