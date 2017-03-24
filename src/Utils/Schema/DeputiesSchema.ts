import { schema } from 'normalizr';

export const site = new schema.Entity('site', {}, {
  idAttribute: 'site',
});

export const deputy = new schema.Entity('depute', {
  sites_web: [site],
});

export default deputy;
