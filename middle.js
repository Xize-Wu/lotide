// The actual middle function
const middle = function(input) {
  //if array length <= 2
  const l = input.length;
  if (l <= 2) {
    return [];
  }

  if (l % 2 === 1) {
    let middleIndex = Math.floor(l / 2);
    const output = input.slice(middleIndex, middleIndex + 1)
    return output;
  } else if (l % 2 === 0) {
    let middleIndex = l / 2;
    const output = input.slice(middleIndex-1, middleIndex + 1);
    return output;
  }
  //return []
  //if array length > 2 and array length is odd
  //middle value index is floor (length / 2)
  //return middle value
  //if array length < 2 and array length is even
  //middle value indexes are length / 2 and length / 2 - 1
  //return the 2 values in the middle
};

const eqArrays = function(arr1, arr2) {

  if (middle(arr1).length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (middle(arr1)[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: The middle value of ${actual} is ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴🔴 Assertion Failed: The middle value of ${actual} is not ${expected}`);
  }
};



assertEqual([1, 2, 3, 4, 5, 6], [3, 4]);
assertEqual([1],[]);
assertEqual([1, 2], []);
assertEqual([2, 3, 4], [3]);
assertEqual([], []);