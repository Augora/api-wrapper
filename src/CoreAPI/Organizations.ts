import { getFromUrl } from "../Utils/APICall";
import { AxiosResponse } from "axios";
import './Organizations.Types';

export function getPoliticalGroups() {
  return getFromUrl(`https://www.nosdeputes.fr/organismes/groupe/json`)
    .then((r: AxiosResponse<IPoliticalGroups>) => r.data)
    .then(d => d.organismes.map(i => i.organisme));
}

export function getParliamentaryBodies() {
  return getFromUrl(`https://www.nosdeputes.fr/organismes/parlementaire/json`)
    .then((r: AxiosResponse<IParliamentaryBodies>) => r.data)
    .then(d => d.organismes.map(i => i.organisme));
}

export function getExtraParliamentaryBodies() {
  return getFromUrl(`https://www.nosdeputes.fr/organismes/extra/json`)
    .then((r: AxiosResponse<IParliamentaryBodies>) => r.data)
    .then(d => d.organismes.map(i => i.organisme));
}

export default {
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies
};
