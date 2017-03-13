const { getDeputes } = require('./CoreAPI/Deputy');

getDeputes().subscribe(d => console.log(d));
