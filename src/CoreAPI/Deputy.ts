import assign from "lodash/assign";
import { getFromUrl } from "../Utils/APICall";
import { flattenArrayAttribute, getSafeArrayLength } from "./Mappings";
import "./Deputy.Types";

const nestedArrayAssociativeArray = {
  sites_web: "site",
  emails: "email",
  adresses: "adresse",
  collaborateurs: "collaborateur",
  responsabilites: "responsabilite",
  historique_responsabilites: "responsabilite",
  groupes_parlementaires: "responsabilite",
  responsabilites_extra_parlementaires: "responsabilite",
  autres_mandats: "mandat",
  anciens_mandats: "mandat",
};
const nestedAttributes = Object.keys(nestedArrayAssociativeArray);

export async function getDeputies() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/json"
  );
  return r.data.deputes.map((i: IDeputyHolder) =>
    assign({}, deputyAttributesMapping(i.depute))
  );
}

export async function getDeputiesInOffice() {
  const r = await getFromUrl<IDeputies>(
    "https://www.nosdeputes.fr/deputes/enmandat/json"
  );
  return r.data.deputes.map((i: IDeputyHolder) =>
    assign({}, deputyAttributesMapping(i.depute))
  );
}

export async function getDeputy(slug: string) {
  const r = await getFromUrl<IDetailedDeputyHolder>(
    `https://www.nosdeputes.fr/${slug}/json`
  );
  return detailedDeputyAttributesMapping(r.data.depute);
}

function deputyAttributesMapping(deputy: IMinimalDeputy): IDeputy {
  const slug = deputy.slug;
  const flattenedDeputy = nestedAttributes.reduce((prev, curr) => {
    if (deputy[curr] instanceof Array) {
      return assign({}, prev, {
        [curr]: flattenArrayAttribute(
          curr,
          deputy[curr],
          nestedArrayAssociativeArray
        ),
      });
    } else {
      return prev;
    }
  }, deputy);
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
  return assign({}, flattenedDeputy, {
    image15: url15,
    image30: url30,
    image60: url60,
    image120: url120,
    imageDynamic: urlDynamic,
    nbMandatsTotaux,
  });
}

function detailedDeputyAttributesMapping(
  deputy: IMinimalDetailedDeputy
): IDetailedDeputy {
  const slug = deputy.slug;
  const flattenedDeputy = nestedAttributes.reduce((prev, curr) => {
    if (deputy[curr] instanceof Array) {
      return assign({}, prev, {
        [curr]: flattenArrayAttribute(
          curr,
          deputy[curr],
          nestedArrayAssociativeArray
        ),
      });
    } else {
      return prev;
    }
  }, deputy);
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
  return assign({}, flattenedDeputy, {
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
