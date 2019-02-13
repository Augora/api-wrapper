import { schema } from "normalizr";
import { assign } from "lodash";

export const site = new schema.Entity(
  "site",
  {},
  {
    idAttribute: "site",
  },
);

export const adresse = new schema.Entity(
  "adresse",
  {},
  {
    idAttribute: "adresse",
  },
);

export const mandat = new schema.Entity(
  "mandat",
  {},
  {
    idAttribute: "mandat",
  },
);

export const email = new schema.Entity(
  "email",
  {},
  {
    idAttribute: "email",
  },
);

export const responsabilite = new schema.Entity(
  "responsabilite",
  {},
  {
    idAttribute: value => {
      return `${value.responsabilite.organisme}/${value.responsabilite.fonction}`;
    },
    processStrategy: value => {
      return assign({}, value.responsabilite);
    },
  }
);

function getSafeArrayLength(array: any[]): number {
    return array ? array.length : 0;
}

export const deputy = new schema.Entity("depute", {
  sites_web: [site],
  adresses: [adresse],
  anciens_autres_mandats: [mandat],
  autres_mandats: [mandat],
  anciens_mandats: [mandat],
  emails: [email],
  groupes_parlementaires: [responsabilite],
  responsabilites: [responsabilite],
  responsabilites_extra_parlementaires: [responsabilite],
},
{
  processStrategy: value => {
    if(value) {
        const url15 = `https://www.nosdeputes.fr/depute/photo/${value.slug}/15`;
        const url30 = `https://www.nosdeputes.fr/depute/photo/${value.slug}/30`;
        const url60 = `https://www.nosdeputes.fr/depute/photo/${value.slug}/60`;
        const url120 = `https://www.nosdeputes.fr/depute/photo/${value.slug}/120`;
        const urlDynamic = (height: number) => `https://www.nosdeputes.fr/depute/photo/${value.slug}/${height}`;
        const nbMandatsTotaux = getSafeArrayLength(value.anciens_mandats) + getSafeArrayLength(value.autres_mandats) + getSafeArrayLength(value.anciens_autres_mandats);
        return assign({}, value, {
          image15 : url15,
          image30 : url30,
          image60 : url60,
          image120 : url120,
          imageDynamic: urlDynamic,
          nbMandatsTotaux,
        });
    } else {
      return value;
    }
  },
});
