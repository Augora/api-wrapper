const { schema } = require('normalizr');

const site = new schema.Entity('site', {}, {
  idAttribute: 'site',
});
const depute = new schema.Entity('depute', {
  sites_web: [site],
});

module.exports = {
  depute,
};
