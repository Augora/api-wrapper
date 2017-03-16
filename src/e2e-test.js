import lbpWrapper from './index';

lbpWrapper.getDeputies().subscribe(d => console.log(d));
lbpWrapper.getDeputiesInOffice().subscribe(d => console.log(d));
