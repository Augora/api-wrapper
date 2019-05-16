import { getFromUrl } from "../Utils/APICall";
import { AxiosResponse } from "axios";
import "./Organizations.Types";

export async function getPoliticalGroups() {
  const r: AxiosResponse<IPoliticalGroups> = await getFromUrl(
    `https://www.nosdeputes.fr/organismes/groupe/json`
  );
  const d = r.data;
  return d.organismes.map(i => i.organisme);
}

export async function getParliamentaryBodies() {
  const r: AxiosResponse<IParliamentaryBodies> = await getFromUrl(
    `https://www.nosdeputes.fr/organismes/parlementaire/json`
  );
  const d = r.data;
  return d.organismes.map(i => i.organisme);
}

export async function getExtraParliamentaryBodies() {
  const r: AxiosResponse<IParliamentaryBodies> = await getFromUrl(
    `https://www.nosdeputes.fr/organismes/extra/json`
  );
  const d = r.data;
  return d.organismes.map(i => i.organisme);
}

export async function getStudyGroupsAndFriendship() {
  const r: AxiosResponse<IParliamentaryBodies> = await getFromUrl(
    `https://www.nosdeputes.fr/organismes/groupes/json`
  );
  const d = r.data;
  return d.organismes.map(i => i.organisme);
}

export async function getMembersOfGroup(slug: string) {
  const r: AxiosResponse<IDeputies> = await getFromUrl(
    `https://www.nosdeputes.fr/groupe/${slug}/json`
  );
  const d = r.data;
  return d.deputes.map(i => i.depute);
}

export async function getMembersOfOrganisation(slug: string) {
  const r: AxiosResponse<IDeputies> = await getFromUrl(
    `https://www.nosdeputes.fr/organisme/${slug}/json`
  );
  const d = r.data;
  return d.deputes.map(i => i.depute);
}

export default {
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies,
  getStudyGroupsAndFriendship,
  getMembersOfGroup,
  getMembersOfOrganisation,
};
