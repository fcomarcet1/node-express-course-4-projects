// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Import external files
const names = require('./04-names');
const sayHi = require('./05-utils'); // export function 
const data = require('./06-alternative-flavor');
//console.log(data);

require('./07-mind-grenade'); // call function from external file 

/* sayHi('susan');
sayHi(names.john);
sayHi(names.peter); */
