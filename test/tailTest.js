const assert = require('chai').assert
const tail = require('../tail');


describe("#tail", () => {
  it("returns [\"lighthouse\", \"lab\"] for [1, 2, 3]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
  it("returns '5' for []", () => {
    assert.deepEqual(tail(['5']), []); 
  });

});