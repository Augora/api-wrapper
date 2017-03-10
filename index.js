const utils = require('./Utils/APICall')

const deputes = utils.get('http://www.nosdeputes.fr/deputes/json')

deputes
  .map(r => r.data)
  .map(r => r.deputes)
  .subscribe(r => console.log(r))
