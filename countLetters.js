const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(line) {
  const output = {};
  const newLine = line.toLowerCase().split(" ").join("");
  for (const letter of newLine) {

    if (letter in output) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  console.log(output)
  return output;
};

const answer = countLetters("Lighthouse in the house");
assertEqual(answer["l"], 1);