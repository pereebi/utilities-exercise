const util1 = require('./utilities/util1.js');

console.log(util1);

const { cut3, concat } = require('./utilities/util2.js');

console.log(cut3([2,3,2,5,7]));
console.log(concat([2,3,2,5,7], [2,3,2,5,7]));
