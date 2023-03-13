const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words).length); // no need to capture the return value since we are not checking it
console.log(words);
assertEqual(words.length, 3); // original array should still have 3 elements!