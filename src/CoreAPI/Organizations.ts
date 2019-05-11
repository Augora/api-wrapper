import { getFromUrl } from "../Utils/APICall";
import { AxiosResponse } from "axios";

interface IPoliticalGroups {
  organismes: [IPoliticalGroup];
}

interface IPoliticalGroup {
  organisme: {
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
  };
}

interface IParliamentaryBodies {
  organismes: [IParliamentaryBody];
}

interface IParliamentaryBody {
  organisme: {
    id: number;
    slug: string;
    nom: string;
    type: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
  };
}

type IExtraParliamentaryBody = IParliamentaryBody;

export function getPoliticalGroups() {
  return getFromUrl(`https://www.nosdeputes.fr/organismes/groupe/json`).then(
    (r: AxiosResponse<IPoliticalGroups>) => r.data
  );
}

export function getParliamentaryBodies() {
  return getFromUrl(
    `https://www.nosdeputes.fr/organismes/parlementaire/json`
  ).then((r: AxiosResponse<IParliamentaryBodies>) => r.data);
}

export function getExtraParliamentaryBodies() {
  return getFromUrl(
    `https://www.nosdeputes.fr/organismes/extra/json`
  ).then((r: AxiosResponse<IExtraParliamentaryBody>) => r.data);
}

export default {
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies
};
