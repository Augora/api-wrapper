import { getFromUrl } from "../Utils/APICall";
import { cleanUpNestedObject } from "../Utils/NestedObjectManagement";
import "./Organizations.Types";

export async function getPoliticalGroups() {
  const r = await getFromUrl<IPoliticalGroups>(
    `https://www.nosdeputes.fr/organismes/groupe/json`
  );
  const cleanedUpPoliticalGroups: IPoliticalGroup[] = cleanUpNestedObject(
    r.data
  );
  return cleanedUpPoliticalGroups;
}

export async function getParliamentaryBodies() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/parlementaire/json`
  );
  const cleanedUpParliamentaryBodies: IParliamentaryBody[] = cleanUpNestedObject(
    r.data
  );
  return cleanedUpParliamentaryBodies;
}

export async function getExtraParliamentaryBodies() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/extra/json`
  );
  const cleanedUpParliamentaryBodies: IParliamentaryBody[] = cleanUpNestedObject(
    r.data
  );
  return cleanedUpParliamentaryBodies;
}

export async function getStudyGroupsAndFriendship() {
  const r = await getFromUrl<IParliamentaryBodies>(
    `https://www.nosdeputes.fr/organismes/groupes/json`
  );
  const cleanedUpParliamentaryBodies: IParliamentaryBody[] = cleanUpNestedObject(
    r.data
  );
  return cleanedUpParliamentaryBodies;
}

export async function getMembersOfGroup(slug: string) {
  const r = await getFromUrl<IDeputies>(
    `https://www.nosdeputes.fr/groupe/${slug}/json`
  );
  const cleanedUpDeputies: IMinimalDeputy[] = cleanUpNestedObject(r.data);
  return cleanedUpDeputies;
}

export async function getMembersOfOrganisation(slug: string) {
  const r = await getFromUrl<IDeputies>(
    `https://www.nosdeputes.fr/organisme/${slug}/json`
  );
  const cleanedUpDeputies: IMinimalDeputy[] = cleanUpNestedObject(r.data);
  return cleanedUpDeputies;
}

export default {
  getPoliticalGroups,
  getParliamentaryBodies,
  getExtraParliamentaryBodies,
  getStudyGroupsAndFriendship,
  getMembersOfGroup,
  getMembersOfOrganisation,
};
