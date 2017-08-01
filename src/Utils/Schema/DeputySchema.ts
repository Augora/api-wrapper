import { schema } from 'normalizr';

export const site = new schema.Entity('site', {}, {
  idAttribute: 'site',
});

export const adresse = new schema.Entity('adresse', {}, {
  idAttribute: 'adresse',
});

export const mandat = new schema.Entity('mandat', {}, {
  idAttribute: 'mandat',
});

export const email = new schema.Entity('email', {}, {
  idAttribute: 'email',
});

export const responsabilite = new schema.Entity('responsabilite', {}, {
  idAttribute: value => `${value.responsabilite.organisme}/${value.responsabilite.fonction}`,
  processStrategy: (value) => {
    return Object.assign({}, value.responsabilite);
  },
});

export const deputy = new schema.Entity('depute', {
  sites_web: [site],
  adresses: [adresse],
  anciens_autres_mandats: [mandat],
  autres_mandats: [mandat],
  anciens_mandats: [mandat],
  emails: [email],
  groupes_parlementaires: [responsabilite],
  responsabilites: [responsabilite],
  responsabilites_extra_parlementaires: [responsabilite],
});
