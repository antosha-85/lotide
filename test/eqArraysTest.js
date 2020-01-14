const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
    it("returns [1, 2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });
    it("returns [\"1\", \"2\", \"3\"] for [\"1\", \"2\", \"3\"]", () => {
      assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
    });
    
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);