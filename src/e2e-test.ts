import lbpWrapper from './index';

lbpWrapper.getDeputies().subscribe((d : any) => console.log(d));
lbpWrapper.getDeputiesInOffice().subscribe((d : any) => console.log(d));
