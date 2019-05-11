import { assign } from "lodash";
import { getFromUrl } from "../Utils/APICall";
import { flattenArrayAttribute, getSafeArrayLength } from "./Mappings";
import { AxiosResponse } from "axios";

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

interface IDeputy {
  // Fields from NosDeputes.fr
  id: number;
  nom: string;
  nom_de_famille: string;
  prenom: string;
  sexe: string;
  date_naissance: string;
  lieu_naissance: string;
  num_deptmt: string;
  nom_circo: string;
  num_circo: number;
  mandat_debut: string;
  groupe_sigle: string;
  parti_ratt_financier: string;
  sites_web: [string];
  emails: [string];
  adresses: [string];
  collaborateurs: [string];
  anciens_mandats: [string];
  autres_mandats: [string];
  anciens_autres_mandats: [string];
  profession: string;
  place_en_hemicycle: string;
  url_an: string;
  id_an: string;
  slug: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
  nb_mandats: number;
  twitter: string;

  // Custom fields
  image15: string;
  image30: string;
  image60: string;
  image120: string;
  nbMandatsTotaux: number;
  imageDynamic(height: number): string;
}

interface IDeputyHolder {
  depute: IDeputy;
}

interface IDeputies {
  deputes: [IDeputyHolder];
}

export function getDeputies() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/json")
    .then((r: AxiosResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) =>
        assign({}, deputyAttributesMapping(i.depute))
      )
    );
}

export function getDeputiesInOffice() {
  return getFromUrl("https://www.nosdeputes.fr/deputes/enmandat/json")
    .then((r: AxiosResponse) => r.data)
    .then((d: IDeputies) =>
      d.deputes.map((i: IDeputyHolder) =>
        assign({}, deputyAttributesMapping(i.depute))
      )
    );
}

export function getDeputy(slug: string) {
  return getFromUrl(`https://www.nosdeputes.fr/${slug}/json`)
    .then((r: AxiosResponse) => r.data)
    .then((d: IDeputyHolder) => deputyAttributesMapping(d.depute));
}

function deputyAttributesMapping(deputy: IDeputy): IDeputy {
  const flattenedDeputy = nestedAttributes.reduce((prev, curr) => {
    if (deputy[curr] instanceof Array) {
      return assign({}, prev, {
        [curr]: flattenArrayAttribute(
          curr,
          deputy[curr],
          nestedArrayAssociativeArray
        )
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

export default {
  getDeputies,
  getDeputiesInOffice,
  getDeputy
};
