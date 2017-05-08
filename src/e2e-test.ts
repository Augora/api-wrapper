import { getDeputies, getDeputiesInOffice, getDeputy } from './index';

getDeputies().subscribe((d : any) => console.log(d));
getDeputiesInOffice().subscribe((d : any) => console.log(d));
getDeputy('guy-teissier').subscribe((d : any) => console.log(d));
