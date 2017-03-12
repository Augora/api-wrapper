const utils = require('../Utils/APICall');
const { providedNormalizeDeputes } = require('../Utils/Normalize');

function getDeputes() {
  return utils
    .get('http://www.nosdeputes.fr/deputes/json')
    .map(r => r.data)
    .map(d => d.deputes.map(i => Object.assign({}, i.depute)))
    .map(d => providedNormalizeDeputes(d));
}

module.exports = {
  getDeputes,
};
