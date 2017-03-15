import lbpWrapper from '../dist/index';

lbpWrapper.getDeputes().subscribe(d => console.log(d));
