import { assign } from 'lodash';

import Deputy from './CoreAPI/Deputy';
import PoliticalGroup from './CoreAPI/PoliticalGroup';

export const getDeputies = Deputy.getDeputies;
export const getDeputiesInOffice = Deputy.getDeputiesInOffice;
export const getDeputy = Deputy.getDeputy;
export const getPoliticalGroups = PoliticalGroup.getPoliticalGroups;

export default assign({}, Deputy, PoliticalGroup);
