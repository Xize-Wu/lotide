const assertEqual = function(actual, expected) {

  
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


const tail = function (arr) {
  for (i = 1; i < arr.length; i++){
    let newArr = [];
    newArr.push(arr[i]);
    return newArr;
  }};





const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words).length); // no need to capture the return value since we are not checking it
console.log(words)
assertEqual(words.length, 3); // original array should still have 3 elements!

