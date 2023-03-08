const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(line) {
  const output = {};
  const arr = line.toLowerCase().split(" ").join("").split("");
  for (const letter of arr) {
    if (letter in output) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

const answer = countLetters("Lighthouse in the house");
assertEqual(answer["l"], 1);