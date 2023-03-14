const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [1] for []", () => {
    assert.deepEqual(middle([1]), []);
  });
});