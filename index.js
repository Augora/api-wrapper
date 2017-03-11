const utils = require('./Utils/APICall')
const { providedNormalizeDeputes } = require('./Utils/Normalize')

const deputes = utils.get('http://www.nosdeputes.fr/deputes/json')

deputes
  .map(r => r.data)
  .map(d => Object.assign({}, {
    deputes: d.deputes.map(i => Object.assign({}, i.depute))
  }))
  .map(d => providedNormalizeDeputes(d.deputes))
  .subscribe(r => console.log(r.entities.depute['1']))
