import assign from "lodash/assign";
import { getFromUrl } from "../Utils/APICall";
import { getSafeArrayLength } from "./Mappings";
import "./Deputy.Types";
import { cleanUpNestedObject } from "../Utils/NestedObjectManagement";

export async function getDeputies() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/json"
  );
  const cleanedUpDeputies: IDeputy[] = deputyCustomAttributes(
    cleanUpNestedObject(r.data)
  );
  return cleanedUpDeputies;
}

export async function getDeputiesInOffice() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/enmandat/json"
  );
  const cleanedUpDeputies: IDeputy[] = deputyCustomAttributes(
    cleanUpNestedObject(r.data)
  );
  return cleanedUpDeputies;
}

export async function getDeputy(slug: string) {
  const r = await getFromUrl<IDetailedDeputyHolder>(
    `https://www.nosdeputes.fr/${slug}/json`
  );
  const cleanedUpDeputy: IDetailedDeputy = deputyCustomAttributes(
    cleanUpNestedObject(r.data)
  );
  return cleanedUpDeputy;
}

function deputyCustomAttributes(deputy: IMinimalDeputy): any {
  const slug = deputy.slug;
  const url15 = `https://www.nosdeputes.fr/depute/photo/${slug}/15`;
  const url30 = `https://www.nosdeputes.fr/depute/photo/${slug}/30`;
  const url60 = `https://www.nosdeputes.fr/depute/photo/${slug}/60`;
  const url120 = `https://www.nosdeputes.fr/depute/photo/${slug}/120`;
  const urlDynamic = (height: number) =>
    `https://www.nosdeputes.fr/depute/photo/${slug}/${height}`;
  const nbMandatsTotaux =
    getSafeArrayLength(deputy.anciens_mandats) +
    getSafeArrayLength(deputy.autres_mandats) +
    getSafeArrayLength(deputy.anciens_autres_mandats);
  return assign({}, deputy, {
    image15: url15,
    image30: url30,
    image60: url60,
    image120: url120,
    imageDynamic: urlDynamic,
    nbMandatsTotaux,
  });
}

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy,
};
