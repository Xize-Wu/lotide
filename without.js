const without = function(arr1, arr2) {
  let output = [];
  for(const item of arr1){
    if(!arr2.includes(item)){
      output.push(item)
    }
  }
   
  
  return output;
};
module.exports = without;


/*
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(result, ["hello", "world"]);

I*/