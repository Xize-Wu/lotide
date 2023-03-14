const takeUntil = function(array, callback) {
  let outputs = [];
  for (const element of array) {
    if (!callback(element)) {
      outputs.push(element);
    }
    if (callback(element)) {
      return outputs;
    }
  }
};

module.exports = takeUntil;
/*
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertEqual(results1,
  [ 1, 2, 5, 7, 2 ]);

assertEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

*/