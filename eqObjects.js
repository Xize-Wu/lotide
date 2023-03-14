const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    if (object1[key1] !== object2[key1]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects
/*
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
  
  let output = false;
  if (typeof actual === "object" && typeof expected === "object") {
    output = eqObjects(actual, expected);
  } else if (actual.isArray() === true && expected.isArray() === true) {
    output = eqArrays(actual, expected);
  }

  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(shirtObject , longSleeveShirtObject); // => false*/