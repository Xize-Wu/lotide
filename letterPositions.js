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

const letterPositions = function(sentence) {
  const results = {};
  const arr = sentence.toLowerCase().split("");
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      if (arr[i] in results) {
        results[arr[i]].push(i);
      } else {
        results[arr[i]] = [i];
      }
    }
  }


  return results;
};

const answer = letterPositions("Lighthouse in the house");

assertEqual(answer["l"], [0]);
assertEqual(answer["i"], [1, 11]);