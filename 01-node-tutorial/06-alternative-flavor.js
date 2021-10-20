// exports direcly
module.exports.items = ['item1', 'item2'];
// { items: [ 'item1', 'item2' ] }

const itemsArray = ['item0', 'item1', 'item2'];
const colors = ['blue', 'red', 'white'];

const person = {
  name: 'bob',
};

const cat = {
  name: 'michi',
};

//module.exports = {person, itemsArray, cat, colors}
/**
 * If exports module.exports = {person, itemsArray, cat, colors}
 * {
    person: { name: 'bob' },
    itemsArray: [ 'item0', 'item1', 'item2' ],
    cat: { name: 'michi' },
    colors: [ 'blue', 'red', 'white' ]        
   }
 */

module.exports.singlePerson = person;
module.exports.itemsArray = itemsArray;
module.exports.cat = cat;
module.exports.colors = colors;

/**
  {
    items: [ 'item1', 'item2' ],
    singlePerson: { name: 'bob' },
    itemsArray: [ 'item0', 'item1', 'item2' ],
    cat: { name: 'michi' },
    colors: [ 'blue', 'red', 'white' ]
  }
 */


//module.exports = {person, itemsArray, cat, colors}
/**
 * {
    person: { name: 'bob' },
    itemsArray: [ 'item0', 'item1', 'item2' ],
    cat: { name: 'michi' },
    colors: [ 'blue', 'red', 'white' ]        
   }
 */



