import index from './index';

index.getDeputies().subscribe((d : any) => console.log(d));
index.getDeputiesInOffice().subscribe((d : any) => console.log(d));
