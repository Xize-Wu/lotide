const countLetters = function(line) {
  const output = {};
  line = line.toLowerCase();

  for (const letter of line) {

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

module.exports = countLetters