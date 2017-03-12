const { normalize } = require('normalizr');
const { depute } = require('./Schema/DeputesSchema');

function normalizeDeputes(normalizeFunction, deputesFromAPI) {
  return normalizeFunction(deputesFromAPI);
}

function normalizeDeputesFactory(normalizeFunction) {
  return normalizeDeputes.bind(undefined, normalizeFunction);
}

const providedNormalizeDeputes = normalizeDeputesFactory(data => normalize(data, [depute]));

module.exports = {
  normalizeDeputes,
  normalizeDeputesFactory,
  providedNormalizeDeputes,
};
