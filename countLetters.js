const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(line) {
  const output = {};
  line = line.toLowerCase();
  //const newLine = line.toLowerCase().split(" ").join("");
  for (const letter of line) {
    /*
    if (letter in output) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }*/
    if (letter === " ") {
      continue;
    }
    if (!output[letter]) {
      output[letter] = 1;
    }
    else if (output[letter]) {
      output[letter] += 1;
    }

  }
  
  return output;
};

//const answer = countLetters("Lighthouse in the house");
//assertEqual(answer["l"], 1);

module.exports = countLetters