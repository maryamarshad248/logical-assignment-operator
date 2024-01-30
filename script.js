'use strict';

const rest1 = {
  name: 'Capri',
  //numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

// OR assignment operator
//rest1.numGuest ||= 10;
//rest2.numGuest ||= 10;

// nulisih assignment operator
rest1.numGuest = rest1.numGuest ??= 10;
rest2.numGuest = rest2.numGuest ??= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// And assignment operator:

rest1.owner = rest1.owner && '<anonymous>';
rest2.owner = rest2.owner && '<anonymous>';

rest1.owner &&= '<anonymous>';
rest1.owner &&= '<anonymous>';

console.log(rest1);
console.log(rest2);
