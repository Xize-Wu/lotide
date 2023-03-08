const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)){
    throw new Error("This is an error.")
  }
  
  if (arr1.length !== arr2.length){
    return false
  } 
  
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      return false
      }
    } 
    return true
};

const without = function (arr1, arr2){
  let output = []
  arr1.forEach(element => {
    if(!arr2.includes(element)){
      output.push(element);
    }
   
  });
  
  return output
}

const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

