import { getDeputies, getDeputiesInOffice } from './index.js';

getDeputies().subscribe((d : any) => console.log(d));
getDeputiesInOffice().subscribe((d : any) => console.log(d));
