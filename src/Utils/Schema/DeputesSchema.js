import { schema } from 'normalizr';

export const site = new schema.Entity('site', {}, {
  idAttribute: 'site',
});

export const depute = new schema.Entity('depute', {
  sites_web: [site],
});

export default depute;
