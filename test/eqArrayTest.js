const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


eqArrays([1, 2, 3], [1, 2, 3])
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)