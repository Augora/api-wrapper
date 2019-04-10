import { assign } from "lodash";

const nestedArrayAssociativeArray = {
  sites_web: "site",
  emails: "email",
  adresses: "adresse",
  collaborateurs: "collaborateur",
  responsabilites: "responsabilite",
  autres_mandats: "mandat",
  anciens_mandats: "mandat",
  historique_responsabilites: "responsabilite"
};
const nestedAttributes = Object.keys(nestedArrayAssociativeArray);

function flattenArrayAttribute(atrtibuteName: string, array: any[]) {
  return array.map(i => i[nestedArrayAssociativeArray[atrtibuteName]]);
}

function getSafeArrayLength(array: any[]): number {
  return array ? array.length : 0;
}

export function deputyAttributesMapping(deputy: IDeputy): IDeputy {
  const flattenedDeputy = nestedAttributes.reduce((prev, curr) => {
    if (deputy[curr] instanceof Array) {
      return assign({}, prev, {
        [curr]: flattenArrayAttribute(curr, deputy[curr])
      });
    } else {
      return prev;
    }
  }, deputy);
  const url15 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/15`;
  const url30 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/30`;
  const url60 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/60`;
  const url120 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/120`;
  const urlDynamic = (height: number) =>
    `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/${height}`;
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
    nbMandatsTotaux
  });
}
