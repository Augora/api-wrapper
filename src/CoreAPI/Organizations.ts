import { getFromUrl } from "../Utils/APICall";
import { AxiosResponse } from "axios";

interface IPoliticalGroups {
  organismes: [IPoliticalGroupHolder];
}

interface IPoliticalGroupHolder {
  organisme: IPoliticalGroup;
}

interface IPoliticalGroup {
  id: number;
  slug: string;
  nom: string;
  acronyme: string;
  groupe_actuel: boolean;
  couleur: string;
  order: number;
  type: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
}

interface IParliamentaryBodies {
  organismes: [IParliamentaryBodyHolder];
}

interface IParliamentaryBodyHolder {
  organisme: IParliamentaryBody;
}

interface IParliamentaryBody {
  id: number;
  slug: string;
  nom: string;
  type: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
}

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
