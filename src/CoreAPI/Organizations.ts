import { getFromUrl } from "../Utils/APICall";
import "./Organizations.Types";

export async function getPoliticalGroups() {
  const r = await getFromUrl<IPoliticalGroups>(
    `https://www.nosdeputes.fr/organismes/groupe/json`
  );
  return r.data.organismes.map(i => i.organisme);
}

export async function getParliamentaryBodies() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/parlementaire/json`
  );
  return r.data.organismes.map(i => i.organisme);
}

export async function getExtraParliamentaryBodies() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/extra/json`
  );
  return r.data.organismes.map(i => i.organisme);
}

export async function getStudyGroupsAndFriendship() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/groupes/json`
  );
  return r.data.organismes.map(i => i.organisme);
}

export async function getMembersOfGroup(slug: string) {
  const r = await getFromUrl<IDeputies>(
    `https://www.nosdeputes.fr/groupe/${slug}/json`
  );
  return r.data.deputes.map(i => i.depute);
}

export async function getMembersOfOrganisation(slug: string) {
  const r = await getFromUrl<IDeputies>(
    `https://www.nosdeputes.fr/organisme/${slug}/json`
  );
  return r.data.deputes.map(i => i.depute);
}

export default {
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies,
  getStudyGroupsAndFriendship,
  getMembersOfGroup,
  getMembersOfOrganisation,
};
