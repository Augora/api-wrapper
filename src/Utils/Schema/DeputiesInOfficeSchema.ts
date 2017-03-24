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

export const deputyInOffice = new schema.Entity('depute', {
  sites_web: [site],
  adresses: [adresse],
  anciens_autres_mandats: [mandat],
  autres_mandats: [mandat],
  anciens_mandats: [mandat],
  emails: [email],
});

export default deputyInOffice;
