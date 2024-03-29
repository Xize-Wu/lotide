const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (!itemsToCount[item]) {
      continue;
    }

    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }


  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


module.exports = countOnly;