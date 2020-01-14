const assertEqual = require('../assertEqual');
const tail = require('../tail.js')
const assert = require('chai').assert;

describe("#tail", () => {
    it("returns 2 for [5,6,7]", () => {
      assert.strictEqual(tail([5,6,7]).length, 2);
    });
    it("returns 3 for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
      assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); 
    });
  });

// assertEqual(tail([5,6,7]).length, 2);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 3);